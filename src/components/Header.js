import Carousel from 'react-bootstrap/Carousel';
import ponggok from './ponggok.jpg';
import sigedhang from './sigedhang.jpg';
import brintik from './brintik.jpg';

function header() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ponggok}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Umbul Ponggok</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sigedhang}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Umbul Sigedhang</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={brintik}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Umbul Brintik</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}

export default header;