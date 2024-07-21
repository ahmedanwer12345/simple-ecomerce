import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const state = useSelector((state) => state.handleCart);

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-4" to="#">COLLECTION</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end " tabindex="-1" id="navbarSupportedContent">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Collection</h5>
                            <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="/simple-ecomerce">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">Products</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                </li>

                            </ul>
                            <div className="buttons">
                                <NavLink to="/login" className="btn btn-outline-dark me-2">
                                    <i className="fa fa-sign-in me-2"></i>Login</NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark me-2">
                                    <i className="fa fa-user-plus me-2"></i>Register</NavLink>
                                <NavLink to="/cart" className="btn btn-outline-dark me-2">
                                    <i className="fa fa-shopping-cart me-2"></i>Cart ({state.length}) </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar