import Products from './Products';

function Home() {
    return (
        <div>
            <div className="card bg-dark border-0 text-black">
                <img src="https://www.newgenapps.com/hubfs/Imported_Blog_Media/eCommerce-Website-Components-photo.jpg" className="card-img" alt="background" height="550px" />
                <div className="card-img-overlay d-flex align-items-center">
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