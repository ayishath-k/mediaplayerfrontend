import React, { useEffect, useState } from 'react'
import Videocard from '../component/Videocard'
import { addvideoToCategoryApi, getVideosApi } from '../../services/allApi'
import { toast } from 'react-toastify'

function Allvideos({addVideoStatus}) {
  const [allVideos , setAllvideos] = useState([])
  const [deleteVideoStatus , setDeleteVideoStatus] = useState({})
  



// side effect
  const getAllvideo = async()=>{
    const result = await getVideosApi()
    // console.log(result);
    setAllvideos(result.data)
    
  }
  console.log(allVideos);
  
  const ondrop =(e)=>{
    e.preventDefault()
  }

  const VideoDrop =async(e)=>{

    const {category, video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(category, video);


    const newArray= category.Allvideos.filter((item)=>item.id!=video.id)

    const newCategory = {
      category:category.category,
      Allvideos:newArray,
      id:category.id
      
    }
    const result= await addvideoToCategoryApi(category.id,newCategory)
    console.log(result);
    if(result.status>=200 && result.status<=300){
      setVideoStatus(result.data)
    }
    else{
      toast.error('something went wrong')
    }
    
    

  }

  // to handle sideeffect

  useEffect(()=>{
    getAllvideo()

  },[addVideoStatus,deleteVideoStatus]) 
    // use effect is called when the component render to the browser 

  
  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
      <h4>All videos</h4>
      {/* adeded video */}
      { allVideos.length>0?
      <div className="container">
        <div className="row">
          {allVideos.map((item)=>(
             <div className="col-md-3 p-2">
             <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
           </div>

          ))
           }
          
        </div>

      </div>

     
      :

      <div className="conatainer">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://detodopromos.com/wp-content/uploads/2020/12/empty-cart.png" alt="no image" className='w-100' />
            <h5 className='text-danger text-center'>no video added yet</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
}
    </div>
  )
}

export default Allvideos