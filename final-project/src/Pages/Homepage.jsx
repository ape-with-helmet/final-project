import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import './Homepage.css'
import { Link } from 'react-router-dom';

function Homepage() {
  const handleClickScroll = (ele) => {
    const element = document.getElementById(ele);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
      <div className='row' id='row'>
        <div className='col-xl-4 col-lg-6 col-12'>
          <div className='container hamas'>
            <div className='brdr'>
              <Carousel fade>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/6_233d4f18-8819-470c-ad18-358b61a4703d.webp?v=1697791784&width=1125"
                    alt="1"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>THANOS CRASH GUARD</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/7_78f9a05e-9faf-4bf6-9f0b-973ddafa2dbc.webp?v=1697715985&width=1125"
                    alt="2"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>AVIATOR SADDLE STAY</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                    alt="3"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>VOYAGER BASHPLATE</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/JKT10865MOTOWOLFARMOURJACKETBLACK1031BM.webp?v=1697801445&width=1125"
                    alt="4"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>MOTOWOLF ARMOUR JACKET</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/BAG10934MOTOWOLFBUMBERBAGBLACK0715.webp?v=1697797261&width=1125"
                    alt="5"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>MOTOWOLF BUMPER BAG</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 pp2"
                    src="https://bandidospitstop.com/cdn/shop/files/CLO10939MOTOWOLFHEADCOVERBLACK1919M.webp?v=1697801259&width=1125"
                    alt="6"
                  />
                  <Carousel.Caption>
                    <h3 className='caption'>MOTOWOLF HEAD COVER BLACK</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div className='col-xl-8 col-lg-6 col-12'>
          <div className="card-aauu">
            <h5 className="card-header">About Us</h5>
            <div className="card-body">
              <div className="card-title h5">Xerxes Ltd.</div>
              <p className="card-text">At Xerxes India, our mission is clear: To empower Motorcyclists by providing them with the right tools and accessories they need to ride with confidence, safety, and enjoyment. We believe that every Motorcyclist, from the casual rider to the competitive racer, deserves the best gear to support their passion.</p>
              <button type="button" className="btn btn-secondary btn-lg" onClick={handleClickScroll}>View Products</button>
              <Link to={'/about'} className='idk'><Button variant="secondary">About us</Button></Link>
            </div>
          </div>
        </div>
      </div>
      <br id='section-1'/>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card className='card'>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/6_233d4f18-8819-470c-ad18-358b61a4703d.webp?v=1697791784&width=1125"
                top
                className='image'
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
                <a href='./P1'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/7_78f9a05e-9faf-4bf6-9f0b-973ddafa2dbc.webp?v=1697715985&width=1125"
                top
                className='image'
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
                </CardSubtitle><br/>
                <a href='./P2'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                top
                className='image'
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
                </CardSubtitle><br/>
                <a href='/P3'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/JKT10865MOTOWOLFARMOURJACKETBLACK1031BM.webp?v=1697801445&width=1125"
                top
                className='image'
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
                <br/>
                <a href='/P4'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/BAG10934MOTOWOLFBUMBERBAGBLACK0715.webp?v=1697797261&width=1125"
                top
                className='image'
              />
              <CardBody>
                <CardTitle tag="h5">
                  MOTOWOLF BUMPER BAG 0715
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  SKU: BAG10934
                </CardSubtitle>
                <br/><br/>
                <a href='/P5'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pp">
            <Card>
              <CardImg
                alt="Card image cap"
                src="https://bandidospitstop.com/cdn/shop/files/CLO10939MOTOWOLFHEADCOVERBLACK1919M.webp?v=1697801259&width=1125"
                top
                className='image'
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
                <br/>
                <a href='/P6'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>

          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;  