import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  
import img1 from '../resources/b1.png'  
import img2 from '../resources/b2.png'
import img3 from '../resources/b3.png'
import img4 from '../resources/Product_page/2.webp'
import './Homepage.css'

function Homepage() {  
  
  return (  
    <>  
    <div className='container hamas'>
        <div className='p-5 brdr'>  
            <Carousel>  
                <Carousel.Item>  
                    <img style={{maxHeight:"100vh"}}  
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
                    <img style={{maxHeight:"100vh"}}  
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
                    <img style={{maxHeight:"100vh"}}  
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
                    <img style={{maxHeight:"100vh"}}  
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
    </>  
  );  
}  
export default Homepage;  