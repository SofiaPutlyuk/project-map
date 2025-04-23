import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Map from './components/Map/Map';
import './App.css';
import { Fragment } from 'react';


function App() {
  return (
  <Fragment>
    <div className='container'>
  <Form />
  <Map />
  </div>
  <Footer />
  </Fragment>
  );
}

export default App;
