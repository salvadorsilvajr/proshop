import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/Homescreen'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
    <Header/>
      <Container>
        <main className='py-3'>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </main>
      </Container>
    
    <Footer/>
    </Router>
  );
}

export default App;
