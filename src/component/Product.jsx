import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/actions';
import { useParams , NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


function Product() {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();

    }, [])
    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={450} width={450}/>
                </div>
                <div className="col-md-6">
                    <Skeleton width={300} height={50} />
                    <Skeleton  height={75} />
                    <Skeleton width={150} height={25} />
                    <Skeleton  height={50} />
                    <Skeleton  height={150} />
                    <Skeleton width={200} height={50} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} height="400px" width="400px" />
                </div>
                <div className="col md-6">
                    <h4 className="text-uppercase text-black-50"> {product.category} </h4>
                    <h1 className="display-5"> {product.title} </h1>
                    <p className="lead fw-bolder">
                        Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i>{" "}
                    </p>
                    <h3 className="display-6 fw-bold my-4"> $ {product.price} </h3>
                    <p className="lead"> {product.description} </p>
                    <button
                    onClick={() => addProduct(product)}
                        className="btn btn-outline-dark px-4 py-2"
                    >
                        Add to Cart
                    </button>

                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </>
        )
    }


    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product