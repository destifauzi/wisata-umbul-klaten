import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ponggok from './ponggok.jpg';
import sigedhang from './sigedhang.jpg';
import brintik from './brintik.jpg';

function content() {
  return (
    <Row className="flex-md-row">
        <Col>
          <Card>
            <Card.Img variant="top" src={ponggok} height={400}/>
            <Card.Body>
              <Card.Title>Umbul Ponggok</Card.Title>
              <Card.Text>
			  Umbul Ponggok adalah wahana air yang luar biasa terkenal, sebuah wahana kolam renang alam yang menawarkan aktifitas seru bagi para pengunjungnya. 
              Umbul Ponggok terkenal karena memiliki mata air yang sangat jernih. Selain itu kamu akan merasakan sensasi diving dan snorkeling yang berbeda.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={sigedhang}  height={400} />
            <Card.Body>
              <Card.Title>Umbul Sigedhang</Card.Title>
              <Card.Text>
			  Umbul Sigedang adalah destinasi wisata yang berupa mata air yang jernih dan sejuk, yang juga digunakan sebagai bahan baku air mineral kemasan. 
              Di umbul ini kamu dapat melihat sebuah pohon yang besar menghiasi sebuah kolam yang tampak asri. Serta fasilitas di umbul ini juga cukup memadai.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={brintik} height={400} />
            <Card.Body>
              <Card.Title>Umbul Brintik</Card.Title>
              <Card.Text>
			  Umbul dengan pemandangan yang eksotis dari persawahan, sehingga cocok untuk orang yang mencari ketenangan. 
              Kolam dari umbul brintik dibiarkan masih alami dengan pasir dan bebatuan. Tetapi kamu tidak perlu khawatir karena airnya tetap akan terlihat jenih dan tidak keruh.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default content;