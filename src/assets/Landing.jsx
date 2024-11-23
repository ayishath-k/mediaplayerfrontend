import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landing() {
  return (
    <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row>
        <Col md={1}></Col>
        <Col md={5}>
        <h2>Welcome to <span className='text-warning'>Media player</span></h2>
        <p style={{textAlign:'justify'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente numquam vel, impedit eveniet, maiores nemo fugiat ipsum architecto ab et nostrum beatae inventore consectetur ipsam esse, facere iste? Eaque, velit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, facere dolorem sunt quasi iste deserunt iure similique quod nesciunt beatae repudiandae maiores repellat nam maxime aut. Deserunt quae quas impedit?
          </p>
         <Link to={'/home'}> <button className='btn btn-warning mt-5'>Get started</button></Link>
          </Col>
        <Col md={1}>
        </Col>
        <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
        <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" className='w-75' />
        </Col>

        
     </Row>
    </Container>

    <Container>
      <h2 className='text-center'>Features</h2>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='mt-5 d-flex justify-content-center align-items-center '>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/THn0.gif" className='w-100%' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.gifer.com/OIVt.gif"  className='w-100%' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card></Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media1.tenor.com/images/018d7b37b92de9de39a83b671b2e3564/tenor.gif?itemid=11755946"  className='w-100%' height={'300px'}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card></Col>

        </Row>


        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>

<div className='container'>
  <div className='row p-md-5 p-3'>
    <div className='col-border border-secondary border-2 rounded p-md-5 p-4'>
      <div className='row'>
        <div className='col-md-6'>
          <h2 className='text-warning'> Simple fast and powerful</h2>
          <p className='mt-2'><span className='fs-4'>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illum consequuntur sint atque quo quaerat optio facere, laborum hic praesentium quos, inventore consectetur quisquam ratione. Dolor porro odit delectus repellat!</p>

          <p className='mt-2'><span className='fs-4'>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illum consequuntur sint atque quo quaerat optio facere, laborum hic praesentium quos, inventore consectetur quisquam ratione. Dolor porro odit delectus repellat!</p>

          <p className='mt-2'><span className='fs-4'>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati illum consequuntur sint atque quo quaerat optio facere, laborum hic praesentium quos, inventore consectetur quisquam ratione. Dolor porro odit delectus repellat!</p>
        </div>
        <div className='col-md-6'>
        <iframe width="100%" height="411" src="https://www.youtube.com/embed/roz9sXFkTuE" title="Aaj Ki Raat | Stree 2 | Tamannaah Bhatia | Sachin-Jigar | Madhubanti | Divya | Amitabh | 15th August" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Landing