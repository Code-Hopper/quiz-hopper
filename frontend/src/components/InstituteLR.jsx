import React, { useState } from 'react'

import Navbar from './sections/Navbar'

const InstituteLR = () => {

  let [institue, setInstitue] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    userName: "",//create user name by removeing spaces in the name
    password: ""
  })

  let hadelSubmit = (event) => {
    event.preventDefault()

    // set institute username start

    let username = "@"+institue.name.trim()

    institue.userName = username

    // set institute username end

    console.log(institue)
  }

  let handelChange = (event) => {
    let { name, value } = event.target

    setInstitue((prev) => {
      return { ...prev, [name]: value }
    })

  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className="container">

          <form onSubmit={hadelSubmit}>
            <input onChange={handelChange} type="text" placeholder='name' name='name' value={institue.name} />
            <input onChange={handelChange} type="email" placeholder='email' name='email' value={institue.email} />
            <input onChange={handelChange} type="tel" placeholder='contact' name='contact' value={institue.contact} />
            <textarea onChange={handelChange} name="address" id="" cols="30" rows="10" value={institue.address}></textarea>
            <input onChange={handelChange} type="text" placeholder='password' name='password' value={institue.password} />

            <button className='btn btn-success' type='submit'>Submit</button>

          </form>

        </div>
      </div>
    </>
  )
}

export default InstituteLR