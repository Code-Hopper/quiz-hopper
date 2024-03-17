import React, { useState } from 'react'
import axios from "axios"

import Navbar from './sections/Navbar'

const InstituteLR = () => {

  let [institute, setInstitute] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    userName: "",//create user name by removeing spaces in the name
    password: ""
  })

  let response;

  let hadelSubmit = async (event) => {
    event.preventDefault()

    // set institute username start

    let username = "@" + institute.name.trim()

    username = username.replaceAll(" ", "")

    institute.userName = username

    // set institute username end

    console.log(institute)

    // call axios to send data from frontend to backend server

    try {

      response = await axios({
        method: "POST",
        url: "http://localhost:5000/api/register-institute",
        data: {
          institute
        }
      })
    } catch (err) {
      console.log("unable to send data to backend !")
      console.log(err)
    }

    console.log(response)
    console.log(response.status)
    console.log(response.data.message)

  }

  let handelChange = (event) => {
    let { name, value } = event.target

    setInstitute((prev) => {
      return { ...prev, [name]: value }
    })

  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className="container">

          <form onSubmit={hadelSubmit}>
            <input onChange={handelChange} type="text" placeholder='name' name='name' value={institute.name} />
            <input onChange={handelChange} type="email" placeholder='email' name='email' value={institute.email} />
            <input onChange={handelChange} type="tel" placeholder='contact' name='contact' value={institute.contact} />
            <textarea onChange={handelChange} name="address" id="" cols="30" rows="10" value={institute.address}></textarea>
            <input onChange={handelChange} type="text" placeholder='password' name='password' value={institute.password} />

            <button className='btn btn-success' type='submit'>Submit</button>

          </form>

        </div>
      </div>
    </>
  )
}

export default InstituteLR