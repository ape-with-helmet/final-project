import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardImg from 'react-bootstrap/CardImg'
import CardBody from 'react-bootstrap/CardBody'
import CardTitle from 'react-bootstrap/CardTitle'
import CardSubtitle from 'react-bootstrap/CardSubtitle'
import React, { useEffect, useState } from 'react';
import './Homepage.css'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";

function Homepage() {

  // const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    //fetch search result
    console.log(searchTerm)
  }
  // const keys = ["name","sku"];

  // const search = (data) => {
  //   return data.filter(
  //     (item) =>
  //       keys.some((key)=>item[key].toLowerCase().includes(query))
  //   );
  // };
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
        <div className='col-xl-4 col-lg-6 col-12'>
          <div className="card-aauu">
            <h5 className="card-header rounder">Search our vast collection</h5>
            <div className="card-body rounder">
              <div className='search-body'>
                <div className='search-inner'>
                  <input type='text' value={value} onChange={onChange} className='searchbar-home' />
                  <button onClick={() => onSearch('')} className='clearbutton-home crosser'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="currentColor" class="insideCross" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg></button>
                  <button onClick={() => onSearch(value)} className='submit-home Button'>Search</button>
                </div>
                <div className='dropdown'>
                  {data.filter(item => {
                    const searchTerm = value.toLowerCase();
                    const name = item.name.toLowerCase();
                    return searchTerm && name.includes(searchTerm) && name !== searchTerm
                  }).slice(0, 3)
                    .map((item) => <div className='dropdown-row' onClick={() => onSearch(item.name)}
                      key={item.id}
                    >
                      {item.name}
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-4 col-lg-6 col-md-12 col-12'>
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
        <div className='col-xl-4 col-lg-6 col-12'>
          <div className='card-aauu'>
            <h5 className='card-header'>About us</h5>
            <div className='card-body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptate aliquam quasi, illum soluta, voluptatibus enim ad corrupti optio illo recusandae tempore, quisquam est cupiditate laboriosam? Ea placeat perferendis ab corrupti natus quae nihil temporibus sunt eum amet modi soluta quasi tenetur maiores inventore odit cupiditate nobis, atque unde eligendi.
            </div>
            <button onClick={handleClickScroll} className='product-button'>View Products</button>
          </div>
        </div>

      </div>
      <br id='section-1' />
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                </CardSubtitle><br />
                <a href='./P1'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                </CardSubtitle><br /><br />
                <a href='./P2'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                </CardSubtitle><br /><br />
                <a href='/P3'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                <br />
                <a href='/P4'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                <br /><br />
                <a href='/P5'><Button type="button" className="btn btn-secondary btn-lg" variant='secondary'>
                  Know More
                </Button></a>
              </CardBody>
            </Card>

          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 pp">
            <Card className='card1'>
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
                <br />
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