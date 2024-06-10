import axios from "axios";
import { resolve } from "./resolver";

const getProducts = async () => {
    // const result = await axios.get("https://fakestoreapi.in/api/products?limit=150")
    const result = await axios.get("https://fakestoreapi.com/products")

    return (result.data)

}

export {getProducts};