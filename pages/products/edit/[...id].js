import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EditProduct() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return;
  }
  console.log({productInfo})
  
  useEffect(() => {
    axios.get("/api/products?id=" +id).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);

  return (
    <Layout>
      <h1>Edit Product </h1>
      {productInfo && <ProductForm {...productInfo}></ProductForm>}
    </Layout>
  );
}
