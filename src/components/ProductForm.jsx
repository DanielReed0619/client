import React, {useState} from 'react';
import axios from 'axios';



const ProductForm  = () => {

    let [title, setTitle] = useState("")
    let [price, setPrice] = useState(5)
    let [description, setDescription] = useState("")



    const submitHandler = (e) =>{
        e.preventDefault()
        
        let product = {title, price, description}

        axios.post("http://localhost:8000/api/newProduct", product)
            .then(res=> {
                console.log("posted", res)
            })
            .catch(err=>console.log("error in submitting post request", err))
        }




    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor=''>Title</label>
                    <input onChange={(e) => {setTitle(e.target.value)}} type="text" name="" id="" className='form-control'/>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Price</label>
                    <input onChange={(e) => {setPrice(e.target.value)}} type="number" name="" id="" className='form-control'/>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Description</label>
                    <input onChange={(e) => {setDescription(e.target.value)}} type="text" name="" id="" className='form-control'/>
                </div>
                <input type="submit" value="Create Product" className='btn btn-success'/>
            </form>
        </div>
    );
}


export default ProductForm