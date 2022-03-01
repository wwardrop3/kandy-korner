import { React, useState, useEffect } from "react";

export const ProductTypeList = () => {
    const [productTypes, setproductTypes] = useState([])
    const [productTypeList, createproductTypeList] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/productTypes?_sort=name&_order=asc")
            .then(res => res.json())
            .then(response => {
                setproductTypes(response)
            })
        },[]
    )

    useEffect (
        () => {
            const productTypesNameArray = productTypes.map(productType => {
                return <p key = {`${productType.id}`}>{productType.name}</p>
            })

            createproductTypeList(productTypesNameArray)
        },[productTypes]
    )


    return(
        <>
        <div>{productTypeList}</div>
        </>
    )       
}