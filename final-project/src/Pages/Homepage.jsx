import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Homepage.css'
//import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

function Homepage() {
  const [data, setData] = useState([]);
  const [submit, setSubmit] = useState('');
  const [value, setValue] = useState('');
  const navigate = useNavigate()

  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    //fetch search result
    console.log(searchTerm)
  }

  const forSearch = (searchId) => {
    navigate(`/${searchId}`);
  }

  const { pathname } = useLocation();

  useEffect(() => {
    fetch("http://localhost:8080/getall", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res.data)
      })
    console.log(data)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const handleClickScroll = () => {
    const element = document.getElementById('section-1');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      <div className='row polsrow' id='row'>

        <div className='col-xl-4 col-lg-4 col-md-12 col-12'>
          <div className='container hamas'>
            <div className='brdr'>
              <Carousel fade>
                <Carousel.Item>
                  <img style={{ maxHeight: "100vh" }}
                    className="d-block w-100 ll"
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

        <div className='col-lg-8 col-lg-8 col-md-12 col-12 search-over' >
          <div className="card-aauu leftist">
            <div className="card-body rounder">
              <div className='search-body'>
                <div className='search-inner'>
                  <input type='text' value={value} onChange={onChange} placeholder='Search our vast collection' className='searchbar-home' />
                  <button onClick={() => forSearch(submit)} className='clearbutton-home crosser'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>

                <div className='dropdown'>
                  {data.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const name = item.name.toLowerCase();
                    return searchTerm && name.includes(searchTerm) && name !== searchTerm
                  }).slice(0, 5)
                    .map((item) => <div className='dropdown-row' onClick={() => {
                      onSearch(item.name)
                      setSubmit(item.id)
                    }}
                      key={item.id}
                    >
                      <li className='lodulalit'>{item.name}</li>
                    </div>)}
                </div>
              </div>
            </div>
          </div>

          <div className='card-aauu rightist'>
            <div className="card-header">
              <h5>About us</h5>
            </div>
            <div className='card-body'>
              At Xerxes India, our mission is clear: To empower Motorcyclists by providing them with the right tools and accessories they need to ride with confidence, safety, and enjoyment. We believe that every Motorcyclist, from the casual rider to the competitive racer, deserves the best gear to support their passion.
            </div>
            <button onClick={handleClickScroll} className='product-button'>View Products</button>
          </div>

        </div>
      </div>

      <hr className='liner' id='section-1' />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='./P1' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/6_233d4f18-8819-470c-ad18-358b61a4703d.webp?v=1697791784&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    LCB TRIUMPH SPEED 400 THANOS CRASH GUARD WITH SLIDER
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: CRA12950
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='./P2' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/7_78f9a05e-9faf-4bf6-9f0b-973ddafa2dbc.webp?v=1697715985&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    LCB TRIUMPH SPEED 400 AVIATOR SADDLE STAY
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: SAD12872
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='/P3' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/5_32f23a5e-241a-4a8a-972f-b7bd0c82a4f0.jpg?v=1697716480&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    LCB TRIUMPH SPEED 400 VOYAGER BASHPLATE
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: ENG12868
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='/P4' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/JKT10865MOTOWOLFARMOURJACKETBLACK1031BM.webp?v=1697801445&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    MOTOWOLF ARMOUR JACKET 1031B
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: JKT10865
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='/P5' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/BAG10934MOTOWOLFBUMBERBAGBLACK0715.webp?v=1697797261&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    MOTOWOLF BUMPER BAG 0715
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: BAG10934
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <a href='/P6' className="card-txt">
              <Card className='card1'>
                <CardImg
                  alt="Card image cap"
                  src="https://bandidospitstop.com/cdn/shop/files/CLO10939MOTOWOLFHEADCOVERBLACK1919M.webp?v=1697801259&width=1125"
                  top
                  className='image'
                />
                <CardBody className='name789'>
                  <CardTitle tag="h5">
                    MOTOWOLF BALACLAVA BLACK 1919
                  </CardTitle>
                  <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                  >
                    SKU: CLO10939
                  </CardSubtitle>
                </CardBody>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Homepage;  