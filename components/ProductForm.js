import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [price, setPrice] = useState(existingPrice || "");
  const [goToProducts, setGoToProducts] = useState(false);
  const router = useRouter();

  const saveProduct = async (e) => {
    e.preventDefault();
    const data = { title, description, price };

    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  };


  if (goToProducts) {
    router.push("/products");
  }

  function uploadImages(ev){
    console.log("dgbdfbdnb", ev)
      }
  return (
    <form onSubmit={saveProduct}>
      <label>Product Name</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Product Name"
      />
      <label> Photos</label>
      <div className="mb-2">
        
       <label className=" rounded-lg cursor-pointer bg-gray-500 w-24 h-24 flex flex-col justify-center text-sm text-gray-300 items-center">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
</svg> 
Upload
<input type="file" className="hidden" onChange={uploadImages} />
        </label>
        {!images?.length && <div>No Photos in this product</div>}
      </div>
      <label>Description</label>
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <label>Price (in USD)</label>
      <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="Price"
      />
      <button type="submit" className="btn-primary">
        Save
      </button>
    </form>
  );
}
