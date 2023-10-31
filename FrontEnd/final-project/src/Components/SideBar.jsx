import React from 'react'
import "./Sidebar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css"

function Sidebar() {
    return (
        <div id="sb">
            <div className="sidebar">
                <div className="delivery">
                    <h6>Delivery Day</h6>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Get It in 2 Days
                    </label>
                    <br />
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Get It by Tomorrow
                    </label>
                </div>

                <hr />

                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Customer Review"
                    menuVariant="dark"
                >
                    <NavDropdown.Item href="#action/3.1">⭐⭐⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">⭐⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">⭐⭐</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">⭐</NavDropdown.Item>
                </NavDropdown>

                <hr />

                <div className="brand">
                    <h6>Brand</h6>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        ABC
                    </label>
                    <br />
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        DEF
                    </label>
                    <br />
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        GHI
                    </label>
                    <br />
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        XYZ
                    </label>
                </div>

                <hr />

                <div className="price">
                    <h6>Price</h6>
                    <input className="mp" type="number" placeholder="Min" />
                    <input type="number" className="mp" placeholder="Max" />
                    <br />
                    <input type='submit' className='button' value='Go' />
                </div>

                <hr />

                <div className="discount">
                    <h6>Deals & Discounts</h6>
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        All Discounts
                    </label>
                    <br />
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Today's Deals
                    </label>
                    <br />

                    <hr />

                </div>
            </div>
        </div>
    )
}

export default Sidebar