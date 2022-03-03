import { React, useState, useEffect } from "react";

export const LocationList = () => {
    const [locations, setLocations] = useState([])
    const [locationsList, createLocationsList] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(response => {
                setLocations(response)
            })
        },[]
    )

    useEffect (
        () => {
            const locationsNameArray = locations.map(location => {
                return <p key = {`${location.id}`}>{location.name}</p>
            })

            createLocationsList(locationsNameArray)
        },[locations]
    )


    return(
        <>
        <h2>Locations</h2>
        <div>{locationsList}</div>
        </>
    )       
}











