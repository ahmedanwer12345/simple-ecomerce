import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {NavLink} from "react-router-dom";


function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(data);
                console.log(filter);
            }
            return () => {
                componentMounted = false;
                console.log("rong")
            }
        }

        getProducts();

    }, [])
    const Loading = () => {
        return (
            <>
            <div className="col-md-3">
              <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
              <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
              <Skeleton height={350}/>
            </div>
            <div className="col-md-3">
              <Skeleton height={350}/>
            </div>
            </>
        )
    }
    const filterProduct = (cat) => {
        const listData = data.filter((x) => x.category === cat);
        setFilter(listData);
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                            <div className="col-md-3 my-5" key={product.id} >
                                <div className="card h-100 text-center p-4"  >
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title.substring(0,12)}...</h5>
                                            <p className="card-text fw-bolder lead">${product.price}</p>
                                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                        </div>
                                </div>
                            </div>
                    )
                })};
            </>
        )
    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row ">
                    <div className="col-12 mb-5">
                        <h1 className='text-center fw-bolder display-6'>Latested Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row  justify-content-center">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Products