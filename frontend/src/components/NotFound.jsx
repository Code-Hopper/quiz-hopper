import React from 'react'
import Navbar from './sections/Navbar'

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className='container-fluid position-absolute top-50 start-50 translate-middle'>
        <div className="container d-flex justify-content-center align-items-center">
          <h1 className='text-light bg-danger p-3'>*Page Not Found 404*</h1>
        </div>
      </div>
    </>
  )
}

export default NotFound