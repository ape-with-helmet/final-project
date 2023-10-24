import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import './Homepage.css'

function Homepage() {
  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className='row'>
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
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga rerum ratione reprehenderit commodi vitae, et molestiae placeat quasi deleniti natus vel modi quod similique. Magni non, suscipit voluptates fugit vitae amet nesciunt ex corporis fugiat expedita eligendi inventore totam ab, optio saepe! Tempora praesentium nam fugit ducimus vel, quam amet blanditiis ullam quos, eius hic quibusdam voluptatibus sequi cumque itaque porro corrupti nisi sunt, in reiciendis. Dignissimos asperiores perferendis tenetur!</p>
              <button type="button" className="btn btn-dark" onClick={handleClickScroll}>View Products</button>
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