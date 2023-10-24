import React from 'react';
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
//import img1 from '../resources/Product_page/1.webp'
import img2 from '../resources/Product_page/2.webp'
import img3 from '../resources/Product_page/3.webp'
import img4 from '../resources/Product_page/4.webp'
import img5 from '../resources/Product_page/5.webp'
import img6 from '../resources/Product_page/6.webp'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const ProductPage = () => {
    return (
        <>
            <body>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12" id='photo'>
                            <div className='p-5'>
                                <Carousel>
                                    {/* <Carousel.Item>
                                        <img style={{ maxHeight: "100vh" }}
                                            className="d-block w-100 pp"
                                            src={img1}
                                            alt="First slide"
                                        />
                                    </Carousel.Item> */}
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 pp"
                                            src={img2}
                                            alt="Second slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 pp"
                                            src={img3}
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 pp"
                                            src={img4}
                                            alt="Fourth slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 pp"
                                            src={img5}
                                            alt="Five slide"
                                        />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100 pp"
                                            src={img6}
                                            alt="Sixth slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>


                        <div className="col-md-6 col-sm-12" id='text'>
                            <h1>Absolute Black GraphenPads Disc Brake Pads Dura-Ace (No.34)</h1>
                            <p>DISCPAD34 Std</p>
                            <br />
                            <p>
                                ₹5,490.00 <br />
                                Tax included. Shipping calculated at checkout.
                            </p>
                            <br />
                            <div className="btnc">
                                <button type="button" class="btn btn-outline-secondary" id='b1'>Add to Cart</button>
                                <br />
                                <button type="button" class="btn btn-secondary" id='b2'>Buy it Now</button>
                            </div>

                            <hr />
                            <Tabs
                                defaultActiveKey="profile"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                                >
                                <Tab eventKey="home" title="Home">
                                    Tab content for Home
                                </Tab>
                                <Tab eventKey="profile" title="Profile">
                                    Tab content for Profile
                                </Tab>
                                <Tab eventKey="contact" title="Contact" disabled>
                                    Tab content for Contact
                                </Tab>
                                </Tabs>
                            <h5>Product Details</h5>
                            <p className='b'>Absolute Black GraphenPads Disc Brake Pads: A New Era of Braking Confidence</p>
                            <p>
                                Say hello to the future of braking with Absolute Black's GraphenPads@. These Ceramic
                                Graphenpads@ set a whole new standard in the world of brake pads, thanks to our
                                revolutionary design approach.
                            </p>

                            <p className='b'>Cooler Brakes, Better Performance</p>

                            <p> We understand that the single most important component of your bike, determining your
                                downhill confidence, is the brake pad. Our goal is simple: Keep your brake pad and rotor
                                temperatures low, ideally below 4000C, especially during extended descents. The hotter
                                the pads get, the faster they fade, leading to unpredictable and inconsistent braking.
                            </p>

                            <p className='b'>Graphene Technology</p>

                            <p> We've integrated cutting-edge graphene technology into our pads. This wonder material
                                is renowned for its remarkable strength and heat resistance. The result? A significant
                                reduction in brake pad and rotor temperatures. In fact, our tests show temperature
                                reductions of up to 35% compared to competitors.
                            </p>

                            <p className='b'>Eradicating Brake Fading</p>

                            <p> Brake fading is the enemy of reliable stopping power. Overheated pads lose their
                                consistency and can't be relied upon when you need them most. Absolute Black's
                                GraphenPads@ eliminate brake fading, providing you with predictable braking power,
                                consistent initial bite, and modulation throughout those long, thrilling descents.
                            </p>

                            <p className='b'>Protection for Rotors</p>

                            <p>Rotors endure extreme temperatures exceeding 5000C, which can lead to softening and
                                warping, causing a decrease in brake performance. To combat this, it's crucial to
                                dissipate heat quickly from the rotor-pad interface. Absolute Blackis GraphenPads@
                                excel in doing just that.
                            </p>



                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default ProductPage;
