import React from 'react';
import './ProductPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table'



const ProductPage = () => {
    return (
        <>
            <body>
                <div className="container">
                    <div className="row rwpp">
                        <div className="col-lg-6 col-sm-12" id='photo'>
                            <img src="https://bandidospitstop.com/cdn/shop/files/CLO10939MOTOWOLFHEADCOVERBLACK1919M.webp?v=1697801259&width=1125" class="img-fluid" alt="I" />
                        </div>


                        <div className="col-lg-6 col-sm-12 olele" id='text'>
                            <h1>MOTOWOLF HEAD COVER BLACK 1919</h1>
                            <p>SKU: CLO10939</p>
                            <br />
                            <p id='price'>
                                ₹599.00 <br />
                                <span id='tax'>Tax included. Shipping calculated at checkout.</span>
                            </p>
                            <br />
                            <div className="btnc">
                                <a href='/cart'><button type="button" class="btn btn-outline-secondary b1">Add to Cart</button></a>
                                <br />
                                <a href='/Pay'><button type="button" class="btn btn-secondary b1 b2">Buy it Now</button></a>
                            </div>
                        </div>
                        <div>
                            <hr />
                            <Tabs
                                defaultActiveKey="desc"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="desc" title="Description">
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
                                </Tab>
                                <Tab eventKey="key" title="Key Elements">
                                    <h5>Key Elements of&nbsp;Absolute Black GraphenPads Disc Brake Pads</h5>
                                    <ul>
                                        <li>First pads on the market containing specially modified graphene in their friction compound, which greatly improves braking performance, durability and heat transfer to the backplate.<br />
                                        </li>
                                        <li>Thanks to the backplates being entirely covered in graphene heat dissipating coating, it was possible to achieve much greater heat transfer from the friction material to the cooling fins and at the same time, increase radiation of heat (IR spectrum) by over 20% (which is very significant).<br />
                                        </li>
                                        <li>First pads in the market with patented, angled radiator fins for superior airflow and cooling. Angle cutting provides three major benefits. 1- increased overall surface of the radiator by 40% vs standard cutting methods. 2- significantly greater airflow compared to traditional radiators that increases convective heat dissipation 3 –most importantly, 45deg angle cutting makes all the surfaces radiate the heat away from the brake pad. Heat radiation (IR spectrum) is the highest in perpendicular direction to the surface so in a standard radiator, every fin is radiating its heat at a neighboring fin, keeping more heat in the element. Our pads radiate all the heat away from the back plate.<br />
                                        </li>
                                        <li>To date, Graphenpads® are the only brake pads in the market that completely eliminate toxic copper, ahead of new regulations (copper brake dust is proven to be toxic to aquatic life hence new California regulation will ban use of copper from 2025)<br />
                                        </li>
                                        <li>Extraordinary lifespan of the brake pads and rotors. According to our own tests single set of pads lasted on average 8000km ( 4900 mi) in hilly terrain. Graphene in disc pad friction material also prolongs the life of rotors by embedding graphene particles into micropores of the rotor braking surface.<br />
                                        </li>
                                        <li>They are produced in EU unlike majority of other pads on the market, which come from a single Taiwanese factory.<br />
                                        </li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="features" title="Features">
                                    <h3>Key Elements of&nbsp;Absolute Black GraphenPads Disc Brake Pads</h3>
                                    <ul>
                                        <li>First pads on the market containing specially modified graphene in their friction compound, which greatly improves braking performance, durability and heat transfer to the backplate.<br />
                                        </li>
                                        <li>Thanks to the backplates being entirely covered in graphene heat dissipating coating, it was possible to achieve much greater heat transfer from the friction material to the cooling fins and at the same time, increase radiation of heat (IR spectrum) by over 20% (which is very significant).<br />
                                        </li>
                                        <li>First pads in the market with patented, angled radiator fins for superior airflow and cooling. Angle cutting provides three major benefits. 1- increased overall surface of the radiator by 40% vs standard cutting methods. 2- significantly greater airflow compared to traditional radiators that increases convective heat dissipation 3 –most importantly, 45deg angle cutting makes all the surfaces radiate the heat away from the brake pad. Heat radiation (IR spectrum) is the highest in perpendicular direction to the surface so in a standard radiator, every fin is radiating its heat at a neighboring fin, keeping more heat in the element. Our pads radiate all the heat away from the back plate.<br />
                                        </li>
                                        <li>To date, Graphenpads® are the only brake pads in the market that completely eliminate toxic copper, ahead of new regulations (copper brake dust is proven to be toxic to aquatic life hence new California regulation will ban use of copper from 2025)<br />
                                        </li>
                                        <li>Extraordinary lifespan of the brake pads and rotors. According to our own tests single set of pads lasted on average 8000km ( 4900 mi) in hilly terrain. Graphene in disc pad friction material also prolongs the life of rotors by embedding graphene particles into micropores of the rotor braking surface.<br />
                                        </li>
                                        <li>They are produced in EU unlike majority of other pads on the market, which come from a single Taiwanese factory.<br />
                                        </li>
                                    </ul>
                                </Tab>
                                <Tab eventKey="specs" title="Specifications">
                                    <h3>Specifications of&nbsp;Absolute Black GraphenPads Disc Brake Pads</h3>
                                    <div class="table-wrapper">
                                        <Table width="100%" striped bordered hover>
                                            <tbody>
                                                <tr>
                                                    <td>Material / Compound&nbsp;</td>
                                                    <td>Ceramic</td>
                                                </tr>
                                                <tr>
                                                    <td>Compatibility</td>
                                                    <td><span>Shimano Dura Ace BR-R9270,BR-R9170, Ultegra BR-R8170,BR-R8070, 105 BR-R7070, Tiagra BR-4770, GRX BR-RX810,BR-RX400, XTR BR- M9100,BR-M9110, XT BR-M8110, SLX BR-M7110, Metrea BR-U5000, BR-RS805, BR-RS505, BR-RS405, BR-RS305, TRP HD-T910, Tektro HD- R510, HD-R310, Rever MCX1 Flat Mount</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Composition</td>
                                                    <td><span>Ceramic organic Performance friction compound containing graphene. The thermal coating contains graphene. We don't use copper or any heavy metals.</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Usage</td>
                                                    <td>
                                                        <span>All-</span>Weather Conditions</td>
                                                </tr>
                                                <tr>
                                                    <td>In The Box</td>
                                                    <td>
                                                        <span>Two&nbsp;</span>Pads, One Spring</td>
                                                </tr>
                                                <tr>
                                                    <td>Lifespan</td>
                                                    <td><span>According to our own tests single set of pads lasted on average 8000km ( 4900 mi) in hilly terrain.</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Country of Origin</td>
                                                    <td><span>Poland</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

export default ProductPage;
