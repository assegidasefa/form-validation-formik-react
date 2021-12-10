import './App.css';
import image from './Assets/image.jpg'
import { Signup } from './components/Signup';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className="col-md-5">
          <Signup />
        </div>
        <div className='col-md-7 ms-auto'>
          <img className='img-fluid w-100' src={image} alt='' />
        </div>
      </div>
    </div>
  );
}

export default App;
