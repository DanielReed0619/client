import React, { useState, useEffect } from 'react'
import axios from 'axios';


import {
    Link
} from 'react-router-dom'


const AllProducts =() => {

    let [allProducts, setAllProducts] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
        .then(res=>{
            console.log("getting all products", res)
            setAllProducts(res.data.results)
        })
        .catch(err=> console.log("error", err))
    })



    return(
        <div>
            <h1>All Products</h1>
            {allProducts.map((product, i)=>{
                return(
                    <div>
                        <h2><Link to={`/product/${product._id}`} className='btn btn-info'>{product.title}</Link></h2>
                    </div>
                )
            })}

        </div>
    )
}


export default AllProducts;