import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../features/auth/authSlice'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Swal from 'sweetalert2'

function UpdateProfile() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [role, setRole] = useState(user.role)
  const [businessType, setBusinessType] = useState(user.businessType)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to update your profile?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#25D366',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(
          updateProfile({
            name,
            email,
            role,
            businessType
          })
          
        ).then(() => {
          // toast.success('Profile updated successfully')
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Profile updated successfully',
            showConfirmButton: false,
            timer: 1500
          })
          navigate('/profile')
        }).catch((error) => {
          toast.error(error.message)
        })
    

      }
    })




    
  
  }

  return (
    <section className="vh-90">
      <div className="profile__container py-1 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
              <div className="card-body p-5 text-center">
                <h1 className="mb-0"><FaUser /></h1>
                <h2 className="mb-5"><span style={{ color: "#25D366" }}>Update</span> Profile</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Name</label>
                    <input type="text" id="name" className="form-control form-control-lg"
                      value={name} onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email</label>
                    <input type="text" id="email" className="form-control form-control-lg"
                      value={email} onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Role</label>
                    <input type="text" id="role" className="form-control form-control-lg"
                      value={role} onChange={(e) => setRole(e.target.value)}
                    />
                  </div> */}

                  <div className="form-outline mb-4" >
                    <label className="form-label">User Mode</label>
                    <div>
                      <input type="radio" id="user" name="role" value="user"
                        checked={role === 'user'} onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="user">Traveler</label>
                    </div>
                    <div>
                      <input type="radio" id="business" name="role" value="business"
                        checked={role === 'business'} onChange={(e) => setRole(e.target.value)}
                      />
                      <label htmlFor="business">Business</label>
                    </div>
                  </div>
                  {role === 'business' && (
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">Business Type</label>
                      <input type="text" id="businessType" className="form-control form-control-lg"
                        value={businessType} onChange={(e) => setBusinessType(e.target.value)}
                        required
                      />
                    </div>
                  )}
                  <button type="submit" className="btn btn-success btn-lg btn-block">Update Profile</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpdateProfile