import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
   const Year = new Date().getFullYear()
   return (
      <footer className=' bg-dark '>
         <Container>
            <Row >
               <Col className='text-center py-3 text-white'>
                  Copyright &copy; Proshop {Year} 
               </Col>
            </Row>  
         </Container>
      </footer>
   )
}

export default Footer
