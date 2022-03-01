import { React, useState, useEffect } from "react";

export const ProductList = () => {
    const [products, setproducts] = useState([])
    const [productList, createproductList] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(response => {
                setproducts(response)
            })
        },[]
    )

    useEffect (
        () => {
            const productsNameArray = products.map(product => {
                return <p key = {`${product.id}`}>{product.name}</p>
            })

            createproductList(productsNameArray)
        },[products]
    )


    return(
        <>
        <div>{productList}</div>
        </>
    )       
}