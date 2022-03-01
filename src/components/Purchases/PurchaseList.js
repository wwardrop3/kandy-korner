import { useState, useEffect } from "react";

export const PurchaseList = () => {
    const [purchases, setPurchases] = useState([])
    const [productPurchases, setProductPurchases] = useState([])
    const [purchaseString, createPurchaseString] = useState([])


    
    useEffect(
        () => {
            fetch("http://localhost:8088/purchases?_expand=customer&_expand=employee&_expand=location")
            .then(res => res.json())
            .then(response => setPurchases(response))
        },[]
    )
    
    useEffect(
        () => {
            fetch("http://localhost:8088/productPurchases?_expand=product&_expand=purchase")
            .then(res => res.json())
            .then(response => setProductPurchases(response))
        },[purchases]
    )

    useEffect(
        () => {
            const listArray = purchases.map(purchase => {
                const foundProductPurchases = productPurchases.filter(productPurchase => {
                    return purchase.id === productPurchase.purchaseId
                })
                const foundProductNames = []
                foundProductPurchases.forEach(foundProductPurchase => {
                    foundProductNames.push(foundProductPurchase.product.name)
                });

                const foundProductNamesString = foundProductNames.join(", ")

                return <p key = {`purchase--${purchase.id}`}>{purchase.customer.name} purchased {foundProductNamesString}</p>
            
            
            })

            createPurchaseString(listArray)
    

        },[purchases, productPurchases]
        )

    return (
        <>
        <div>{purchaseString}</div>
        </>
    )
}
    