import Carousel from 'react-bootstrap/Carousel';
import brintik from './brintik.jpg';
// import umbul brintik from './brintik.jpg';

function Brintik() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brintik}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Brintik;