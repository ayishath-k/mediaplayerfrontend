import React, { useState } from 'react'
import Add from '../component/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../component/Allvideos'
import Catogory from '../component/Catogory'


function Home() {
  const [addVideoStatus,setAddVideoStatus]= useState({})
  const[videoStatus , setVideoStatus]= useState({})




  return (
   <>
   <div className='d-flex p-md-5 p-3 align-items-center'>
    
    <Add setAddVideoStatus = {setAddVideoStatus} />   
   <Link to={'/Watchhistory'} className='ms-auto' style={{textDecoration:'none'}}> <h4><span className='d-none d-md-inline'>Watch history</span> <FontAwesomeIcon icon={faClockRotateLeft} className="ms-2" /></h4></Link>
   </div>


   <div className='container-fluid w-100 p-4'>
    <div className='row'>
      <div className="col-md-9">
        <Allvideos addVideoStatus = {addVideoStatus} setVideoStatus={setVideoStatus} />
      </div>
      <div className="col-md-3">
        <Catogory videoStatus={videoStatus}/>
      </div>
    </div>
   </div>
   </>
  )
}

export default Home