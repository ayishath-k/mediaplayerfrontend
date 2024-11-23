import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Videocard from '../component/Videocard';
import Allvideos from './Allvideos';
import { addCategoryApi, addvideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../../services/allApi';
import { toast } from 'react-toastify';



function Catogory({videoStatus}) {
   const [show, setShow] = useState(false);
   const [categoryName , setCategoryName] = useState("")
   const [allCategory ,setAllCategory] = useState([])
   const [AddcategoryStatus , setAddCategoryStatus] = useState({})
   const [deleteCategoryStatus , setDeleteCategoryStatus] = useState({})
   const [videoCategoryStatus, setvideoCategoryStatus]= useState({})
   
   console.log(categoryName);

   const handleCancel =()=>{
    setCategoryName("")
   }

   const ondrag =(e)=>{
    e.preventDefault() // it prevent the data loss

   }
   
   const VideoDrop = async(e,categoryDetails)=>{
    console.log(categoryDetails);



    const videoDetails = JSON.parse(e.dataTransfer.getData("videoDetails"))
    console.log(videoDetails);


 if(categoryDetails.Allvideos.find((item)=>item.id==videoDetails.id)){
  toast.error('video already present in the category')
 }
 else{
  categoryDetails.Allvideos.push(videoDetails)
  console.log(categoryDetails);
 


  const  result = await addvideoToCategoryApi(categoryDetails.id, categoryDetails)
  if(result.status>=200 && result.status<300){
    toast.success('video added')
    setvideoCategoryStatus(result.data)
  }
  else{
    toast.error('something went wrong')
  }

 }

    

   }

   const handleClose = () =>{ setShow(false);
    handleCancel()
   }
   const handleShow  = () => setShow(true);

   


   const handleAdd = async()=>{
    if(categoryName){
      const reqBody = {
        category: categoryName,
        Allvideos:[]
      }

      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('catogory added succesfully')
        handleClose()
        setAddCategoryStatus(result.data)
      }
      else{
        toast.error('something went wrong')
        handleClose()
      }
      
    }
    else{
      toast.info('please add a catogory name')
    }
   }


   const getCategory =async()=>{
    const result = await getAllCategoryApi()
    setAllCategory(result.data);
    


   }
   console.log(allCategory);

   const handleDelete = async(id) =>{
   const result = await deleteCategoryApi(id)
   console.log(result);
   if(result.status >=200 && result.status<300){
    setDeleteCategoryStatus(result.data)
   }
   
    
   }
   
   const videoDrag = (e,video,category)=>{
    console.log(video);
    console.log(category);

    const dataShare = {
      category,
      video
    }
    e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
    
    
   }


   useEffect(()=>{
    getCategory()
   },[AddcategoryStatus , deleteCategoryStatus,videoCategoryStatus,videoStatus])




  return (
  <>
  <h4>category</h4>
  <button className='btn btn-warning w-100 mt-4'  onClick={handleShow}>Add category</button>

  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded'>
          <input type="text" placeholder='catogory name' className='form-control' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
          </div>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel} >
            cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            add
          </Button>
        </Modal.Footer>
      </Modal>

     { allCategory?.length>0 &&

     allCategory.map((item)=>(
      <div className='border border-secondary border-2 p-3 rounded mt-5' droppable onDragOver={(e)=>ondrag(e)}  onDrop={(e)=>VideoDrop(e,item)}>
      <div className='d-flex justify-content-between'>
        <h5>{item?.category}</h5>
        <button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}>
        <FontAwesomeIcon icon={faTrash} />

        </button>
      </div>
   {  item?.Allvideos.length>0 &&
   item?.Allvideos?.map((video)=>(
    <div draggable onDragStart={(e)=>videoDrag(e,video,item)}> 
    <Videocard  video={video} isPresent={true}/>
    </div>

   ))
   
}
    </div>

     ))
     
      }
  </>
  )
}

export default Catogory