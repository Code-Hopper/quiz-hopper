import React, { useState } from 'react'
import axios from "axios"

import Navbar from './sections/Navbar'

// importing images
import registerImg from "../components/media/register.png"

// importing fontawesome icons
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";


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

  const [nameFocused, setNameFocused] = useState(false);
  const [nameFilled, setNameFilled] = useState(false);

  // to show or hide we need a state variable

  let [showPassword, setShowPassword] = useState(false)

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

  // floting fields

  const handleNameFocus = () => {
    setNameFocused(true);
  };

  const handleNameBlur = () => {
    setNameFocused(false);
    if (nameFilled) {
      setNameFilled(true);
    } else {
      setNameFilled(false);
    }
  };

  const handleNameChange = (event) => {
    setNameFilled(event.target.value !== '');
  };

  // to show or hide a password

  let togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className="container">

          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#login-form-container" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#register-form-container" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="login-form-container" role="tabpanel" aria-labelledby="pills-home-tab">
              {/* login form */}
            </div>
            <div class="tab-pane fade" id="register-form-container" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className='row'>
                <div className="col">
                  <img className='img-fluid' src={registerImg} alt="register" />
                </div>
                <div className="col">

                  <h1>Please Register Institute !</h1>

                  <div className={`form-floating ${nameFocused || nameFilled ? 'focused' : ''}`}>
                    <input
                      name='name'
                      type="text"
                      className='form-control'
                      id="nameInput"
                      placeholder=' '
                      onFocus={handleNameFocus}
                      onBlur={handleNameBlur}
                      onChange={handleNameChange}
                    />
                    <label htmlFor="nameInput">Enter Name</label>
                  </div>

                  <form onSubmit={hadelSubmit}>
                    <input className='form-control' onChange={handelChange} type="text" placeholder='Institute Name' name='name' value={institute.name} />
                    <input className='form-control' onChange={handelChange} type="email" placeholder='Admin Email Address' name='email' value={institute.email} />
                    <input className='form-control' onChange={handelChange} type="tel" placeholder='Admin Contact' name='contact' value={institute.contact} />
                    <textarea className='form-control' onChange={handelChange} placeholder='Institute Address' name="address" id="" cols="30" rows="10" value={institute.address}></textarea>

                    <div className='d-flex'>

                      <input className='form-control' onChange={handelChange} type={showPassword ? "text" : "password"} placeholder='password' name='password' value={institute.password} />
                      <button onClick={togglePassword} className='d-flex align-items-center gap-1 btn btn-danger'>
                        {showPassword ? "Hide" : "Show"}
                        {showPassword ? <FaEyeSlash /> : <FaEye/>}
                      </button>

                      {/* validate password to have 8 chars , a special char , a number and a upper & lower case latter */}

                    </div>

                    <button className='btn btn-success' type='submit'>Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InstituteLR