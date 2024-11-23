import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'






function Footer() {
  return (
    <div className='container-fluid p-3'>
      <div className='row'>
        <div className="col-md-4">
          <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-2' />Media player</h4>
          <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus aperiam, harum commodi corrupti doloribus soluta odio repellat consequatur incidunt eos quisquam tempore voluptatem id vitae, vero neque excepturi nam facilis.</p>
        </div>
        <div className="col-md-2">
          
       <div>
              <h4>Links</h4>
              <Link to={'/'}><p className='mt-4'>Landing page</p></Link>
             <Link to={'/home'}> <p>Home </p></Link>
              <Link to={'/watchhistory'}><p>Watch History </p></Link>
       </div>
         
        </div>
        <div className="col-md-2">
       
           
           <div>
                <h4>Guides</h4>
                <p className='mt-4'>React</p>
                <p>React Bootsrap</p>
                <p>Bootswatch</p>
           </div>
            
         
        </div>
        <div className="col-md-4 px-md-5">
        <h4>contact us</h4>
        <div className='d-flex mt-4'>
          <input type="text" placeholder='Email Id' className='form-control' />
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className="d-flex justify-content-between mt-3">
        <FontAwesomeIcon icon={faInstagram} className='fa-2x' />
        <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
        <FontAwesomeIcon icon={faWhatsapp} className='fa-2x' />
        <FontAwesomeIcon icon={faLinkedin} className='fa-2x' />
        <FontAwesomeIcon icon={faFacebook} className='fa-2x' />
        </div>
              
        </div>

      </div>

    </div>
  )
}

export default Footer