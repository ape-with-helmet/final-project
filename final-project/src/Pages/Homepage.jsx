import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../resources/b1.png'
import img2 from '../resources/b2.png'
import img3 from '../resources/b3.png'
import img4 from '../resources/Product_page/2.webp'
import './Homepage.css'

import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import CardText from 'react-bootstrap/CardText'


function Homepage() {

  return (
    <>
      <div className='container hamas'>
        <div className='p-5 brdr'>
          <Carousel>
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }}
                className="d-block w-100 pp2"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption className='caption'>
                <h3>First Slider Image Title</h3>
                <p>First Slide decription.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }}
                className="d-block w-100 pp2"
                src={img2}
                alt="First slide"
              />
              <Carousel.Caption className='caption'>
                <h3>Second slide Image </h3>
                <p>Second slide description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }}
                className="d-block w-100 pp2"
                src={img3}
                alt="First slide"
              />
              <Carousel.Caption className='caption'>
                <h3>Third Slide Image</h3>
                <p>Third Slide Description.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img style={{ maxHeight: "100vh" }}
                className="d-block w-100 pp2"
                src={img4}
                alt="First slide"
              />
              <Carousel.Caption className='caption'>
                <h3>Third Slide Image</h3>
                <p>Third Slide Description.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/6_233d4f18-8819-470c-ad18-358b61a4703d.webp?v=1697791784&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, fugiat?
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/7_78f9a05e-9faf-4bf6-9f0b-973ddafa2dbc.webp?v=1697715985&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, recusandae.
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Card title
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, iste.
                </CardText>
                <Button>
                  Button
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
}
export default Homepage;  