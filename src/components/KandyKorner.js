import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"


export const KandyKorner = () => {
    return(
    <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) { //if the customer exists, return the application views as normal
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          )}
         else { //if the customer does not exist, add login to url just like a route
        return ( <Redirect to="/login"/> )}
          }}
    />
    
    <Route path="/login">
        <Login/>
    </Route>
    <Route path="/register">
        <Register/>
    </Route>
       
   
  </>
    )
}

