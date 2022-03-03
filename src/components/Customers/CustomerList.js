import { useEffect, useState } from "react"


export const CustomerList =() =>{
    const [customers, setCustomer] = useState([])
    const [customerCounterString, createCustomerCounterString] = useState("")
    

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(
                (response) => {
                    setCustomer(response)
                }
            )
        }
    )

    useEffect(
        () => {
            if(customers.length === 1){
                createCustomerCounterString("There is 1 customer")
            } else {
                createCustomerCounterString(`There are ${customers.length} customers`)
            }
        }
    )

    return (
        <>
        <h2>Customers</h2>
        {customerCounterString}
        {customers.map(customerObject => {
            return <p key="`customer--${customerObject.id}`">{customerObject.name}</p>
        })
        }
        </>
    )



}

