import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const HireEmployeeForm = () => {
    const [locations, setLocations] = useState([])
    const [employee, setEmployee] = useState({
            name: "",
            locationId:"",
            manager:false,
            fullTime:"",
            hourlyRate:15
    })

   useEffect(
       () => {
           fetch("http://localhost:8088/locations")
           .then(res =>res.json())
           .then(
               (response) => setLocations(response))
       },[]
   )

    
    
    const history = useHistory()

    const sendEmployee = (evt) => {

        evt.preventDefault()

        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }

        return fetch("http://localhost:8088/employees", fetchOptions)
        .then(res => res.json())
        .then(
            () => {
                history.push("/employees")
            }
        )

        
    }

    
    return(
        <>
            <h2>Employee Sign-up</h2>
            <div className = "employeeForm">
                <fieldset className = "employee__name">
                    <label htmlFor = "employeeName">Employee Name</label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        }
                        required autoFocus
                        type = "text" id = "employeeName"
                        className = "formControl"
                        placeholder = "Enter Full Name"
                    />
                </fieldset>
                <fieldset className = "employee__location">
                    <label htmlFor="employeeLocation">Select Location</label>
                        <select 
                        id="employeeLocation"
                        //onChange is a type of event listener
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.locationId = parseInt(evt.target.value)
                                setEmployee(copy)
                            }}
                            >
                            <option value = "0">Select Location</option>
                                {locations.map(location => {
                                    return <option value = {location.id} key = {location.id}>{location.name}</option>
                            })} 
                        </select>
                </fieldset>

                <fieldset className = "employee__rank">
                    <label htmlFor="employeeRank">Are you applying to be a manager?</label>
                    <input
                    required
                    autoFocus
                    type="checkbox"
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.manager = Boolean(evt.target.value)
                            if(copy.manager === true){
                                copy.hourlyRate = 25
                            }
                            setEmployee(copy)
                        }
                    }
                    />
                </fieldset>

                <fieldset className = "employee__type">
                    <label htmlFor="employeeType">Select Employment Type</label>
                    <div
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = Boolean(evt.target.value)
                                setEmployee(copy)
                                
                            }}>
                            <input type = "radio" name ="option" value={true}/>Full-Time
                            <input type = "radio" name = "option" value={false}/>Part-Time
                    </div>
                    
                </fieldset>
                 

                    <button onClick={sendEmployee}>Submit Employee</button>

                
            </div>
        </>
    )



}