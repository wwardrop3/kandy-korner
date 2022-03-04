import {React, useEffect, useState} from "react"
import { Route } from "react-router-dom"
import { useHistory } from "react-router-dom"




export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    const [employeeList, createEmployeeList] = useState("")

    const history = useHistory()
    
    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location&_sort=manager&_order=desc")
            .then(res => res.json())
            .then(response => setEmployees(response))
        },
        []
    )

    useEffect(
        () => {
            const listArray = employees.map(employee => {
                return <p key = {`${employee.id}`}>{employee.name} works at {employee.location.name}</p>
            })
            createEmployeeList(listArray)

        },[employees])

    return (
        <>
        
        <h2>Employees</h2>
        <button
        onClick={
            (evt) => {
                history.push("./employees/create")
            }
            
        }
        >Hire Employee</button>
        {employeeList}
        </>
    )







}