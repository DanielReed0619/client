import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const ProductForm  = () => {

    // let [title, setTitle] = useState("")
    // let [price, setPrice] = useState(5)
    // let [description, setDescription] = useState("")

    const {id} = useParams();
    const history = useHistory();

    let [product, setProduct] = useState({
        title:"",
        price:0,
        description:""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/singleProduct/${id}`)
        .then(res=>{
            console.log("getting all products", res)
            setProduct(res.data.results)
        })
        .catch(err=> console.log("error", err))
    },[])

    const changeHandler =(e) =>{
        console.log("form changed")
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    

    const editSubmitHandler = (e) =>{
        e.preventDefault()

        axios.put(`http://localhost:8000/api/updateProduct/${id}`, product)
        .then(res=>{
            console.log("updating product", res)
            history.push("/")
        })
        .catch(err=> console.log("error", err))

        }




    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={editSubmitHandler}>
                <div className="form-group">
                    <label htmlFor=''>Title</label>
                    <input onChange={changeHandler} type="text" name="title" id="" className='form-control' value={product.title}/>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Price</label>
                    <input  onChange={changeHandler} type="number" name="price" id="" className='form-control' value={product.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor=''>Description</label>
                    <input  onChange={changeHandler} type="text" name="description" id="" className='form-control' value={product.description}/>
                </div>
                <input type="submit" value="Update Product" className='btn btn-success'/>
            </form>
        </div>
    );
}


export default ProductForm