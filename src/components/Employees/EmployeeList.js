import {React, useEffect, useState} from "react"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [employeeList, createEmployeeList] = useState("")


    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(response => setEmployees(response))
        },
        []
    )

    useEffect(
        () => {
            const listArray = employees.map(employee => {
                return <p key = {`${employee.id}`}>{employee.name}</p>
            })
            createEmployeeList(listArray)

        },[employees])

    return (
        <>
        {employeeList}
        </>
    )







}