import React, { useState, useEffect } from 'react'
import axios from 'axios';



import {
    Link
} from 'react-router-dom'


const AllProducts =() => {

    let [allProducts, setAllProducts] = useState([])
    let [deleted, setDelete] = useState()

    

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
        .then(res=>{
            console.log("getting all products", res)
            setAllProducts(res.data.results)
        })
        .catch(err=> console.log("error", err))
    },[deleted])

    const deleteProduct =(id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res =>{
            console.log(res)
            setDelete(!deleted)

        })
        .catch(err => console.log(err))
    }


    return(
        <div>
            <h1>All Products</h1>
            {allProducts.map((product, i)=>{
                return(
                    <div>
                        <h2><Link to={`/product/${product._id}`} >{product.title}</Link></h2>
                        <p>
                            <Link to={`/product/edit/${product._id}`} className='btn btn-warning'>Edit</Link>
                            <button onClick={()=>deleteProduct(product._id)} className='btn btn-danger'>Delete</button>
                        </p>
                    </div>
                )
            })}

        </div>
    )
}


export default AllProducts;