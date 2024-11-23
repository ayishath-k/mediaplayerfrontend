import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddvideoApi } from '../../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  

function Add({setAddVideoStatus}) {

  const[videoDetails , setVideoDetails] =useState({
    caption:"",
    imageUrl:"",
    emdedLink:""
  })
 
  
  const [show, setShow] = useState(false);


  console.log(videoDetails);

  const handleClose = () =>{ setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);


  
 
  

const handleCancel =()=>{
  setVideoDetails({
    caption:"",
    imageUrl:"",
    emdedLink:""

  })
}
const handleAdd =async()=>{
  const { caption, imageUrl ,emdedLink} = videoDetails
  if(!caption || !imageUrl || !emdedLink){
    toast.info('please fill the form compleately')
  }

  
  else{
    if(videoDetails.emdedLink.startsWith('https://youtu.be/')){
      const embedL =`https://www.youtube.com/embed/${videoDetails.emdedLink.slice(17,28)}`
      // setVideoDetails({...videoDetails, emdedLink:embedL})

      const result = await AddvideoApi({...videoDetails, emdedLink:embedL})
      console.log(result);

      if(result.status>=200 && result.status<300){
        toast.success('video uploaded succesfully')
        handleClose()
        setAddVideoStatus(result.data)
       
      }
      else{

        toast.error('something went wrong')
        handleClose()
      }
      
    }
    else{
      const embedL =`https://www.youtube.com/embed/${videoDetails.emdedLink.slice(-11)}`
      // setVideoDetails({...videoDetails,emdedLink:embedL})

      
      const result = await AddvideoApi({...videoDetails, emdedLink:embedL})
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('video uploaded succesfully')
        handleClose()
        setAddVideoStatus(result.data)
       
      }
      else{

        toast.error('something went wrong')
        handleClose()
      }
      
    }
  
  

  

  }
  
   
}



  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 className='d-none d-md-inline' >upload a new Video</h5>
        <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-5' /></button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className='me-2' />upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>please fill the following details</p>
          <form className='p-3 border border-dark rounded mt-3'>
            <div className="mb-3">
              <input type="text" placeholder='video caption' value={videoDetails.caption} className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
            </div>
            <div className="mb-3">
            <input type="text" placeholder='video image' value={videoDetails.imageUrl} className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
            </div>
            <div className="mb-3">
            <input type="text" placeholder='video url' value={videoDetails.emdedLink} className='form-control' onChange={(e)=>setVideoDetails({...videoDetails,emdedLink:e.target.value})}/>
            </div>


          </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" type='button' onClick={handleAdd}>
           upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' autoClose={2000}  theme="colored"/>
    </>
  )
}

export default Add