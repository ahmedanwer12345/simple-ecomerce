import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div>
            <div className="card text-bg-dark border-0 text-black">
                <img src="/assets/b.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                        <h5 className="card-title display-3 mb-0 fw-bolder">NEW SEASONS ARRIVALES</h5>
                        <p className="card-text fs-2 lead">CHECK OUT OF THE TREND</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home