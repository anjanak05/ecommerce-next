import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct(){
    const [title, setTitle] =useState("");
    const [description, setDescription] =useState("");
    const [price, setPrice] =useState("");

const createProduct= async(e)=>{
    e.preventDefault()
    const data = {title, description, price}
    await axios.post("/api/products", data)
}
    return(
        <Layout>
            <form onSubmit={createProduct}>
            <h1>New Product </h1>
            <label>Product Name</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="Product Name" />
            <label>Description</label>
            <textarea placeholder="Description"  onChange={(e)=>setDescription(e.target.value)} value={description} ></textarea>
            <label>Price (in USD)</label>
            <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder="Price" />
            <button type='submit' className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}