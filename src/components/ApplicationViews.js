//purpose of this module is to invoke componenets when certain urls are entered

import React from "react";
import { Route, Routes } from "react-router-dom";
import { CustomerList } from "./Customers/CustomerList";
import { EmployeeList } from "./Employees/EmployeeList";
import { LocationList } from "./Locations/LocationList";
import { ProductList } from "./Products/ProductList";



export const ApplicationViews = () => {
    return (
        <>
        <Route path={"/employees"}>
            <EmployeeList />
        </Route>

        <Route path={"/customers"}>
            <CustomerList />
        </Route>

        <Route path={"/locations"}>
            <LocationList />
        </Route>

        <Route path={"/products"}>
            <ProductList />
        </Route>
        
        </>
    )
}