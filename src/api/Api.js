import axios from "axios"

export async function productsData(){
    const products = await axios.get("https://api.jsonbin.io/v3/b/645b101e8e4aa6225e99fcdc")

    return products
}