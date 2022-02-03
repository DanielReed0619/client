import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () =>{

    const {id} = useParams();
    const[SingleProd, setSingleProd] =useState({})


    useEffect(() => {
        axios.get(`http://localhost:8000/api/singleProduct/${id}`)
        .then(res=>{
            console.log("getting all products", res)
            setSingleProd(res.data.results)
        })
        .catch(err=> console.log("error", err))
    })

    return (
        <div>
            <h3>{SingleProd.title}</h3>
            <p>{SingleProd.price}</p>
            <h6>{SingleProd.description}</h6>
        </div>
    )
}



export default SingleProduct