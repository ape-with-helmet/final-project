import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../resources/b1.png'
import img2 from '../resources/b2.png'
import img3 from '../resources/b3.png'
import img4 from '../resources/Product_page/2.webp'
import './Homepage.css'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'


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
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/6_233d4f18-8819-470c-ad18-358b61a4703d.webp?v=1697791784&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  LCB TRIUMPH SPEED 400 THANOS CRASH GUARD WITH SLIDER
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: CRA12950
                </CardSubtitle>
                <Button>
                  Know More
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/7_78f9a05e-9faf-4bf6-9f0b-973ddafa2dbc.webp?v=1697715985&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  LCB TRIUMPH SPEED 400 AVIATOR SADDLE STAY
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: SAD12872
                </CardSubtitle>
                <Button>
                  Know More
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  LCB TRIUMPH SPEED 400 VOYAGER BASHPLATE
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: ENG12868
                </CardSubtitle>
                <Button>
                  Know More
                </Button>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/JKT10865MOTOWOLFARMOURJACKETBLACK1031BM.webp?v=1697801445&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  MOTOWOLF ARMOUR JACKET 1031B
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: JKT10865
                </CardSubtitle>
                <Button>
                  Know More
                </Button>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/BAG10934MOTOWOLFBUMBERBAGBLACK0715.webp?v=1697797261&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  MOTOWOLF BUMBER BAG 0715
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: BAG10934
                </CardSubtitle>
                <Button>
                  Know More
                </Button>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/CLO10939MOTOWOLFHEADCOVERBLACK1919M.webp?v=1697801259&width=1125"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  MOTOWOLF HEAD COVER BLACK 1919
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: CLO10939
                </CardSubtitle>
                <Button>
                  Know More
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