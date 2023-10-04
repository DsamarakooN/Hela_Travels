import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './user.css'

function ProfileDetails() {
    const user = useSelector((state) => state.auth.user)
  return (
    <>
        <section className="profile-page vh-90"  >
        <div className="profile__container py-1 h-100">
            
            <div className="profile-Form">
                <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5">
                    <div className="text-center">

                    <h1 className="mb-0"><FaUser /></h1>
                    <h2 className="mb-5">Profile</h2>
                    </div>
                    

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Name</label>
                    <input type="text" id="name" className="form-control form-control-lg"
                        value={user.name} disabled

                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Email</label>
                    <input type="text" id="email" className="form-control form-control-lg"
                        value={user.email} disabled

                    />
                    </div>

                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">User Mode</label>
                    <input type="text" id="role" className="form-control form-control-lg"

                        value={user.role} disabled
                    />
                    </div>

                    {/* this business tipe div should display only role === 'business' */}
                    {user && user.role === 'business' && (
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form3Example3">Business Type</label>
                            <input type="text" id="businessType" className="form-control form-control-lg"
                                value={user.businessType} disabled
                            />
                        </div>
                    )}
                    <Link to="/updateprofile" className="btn btn-success btn-lg btn-block">Update Profile</Link>
                </div>
                </div>
            </div>
            
        </div>
        <div className="container-fluid">
            <div className="row">
            <div className="col-12 text-center mt-5">
                <p>Back to <Link to="/">Home</Link></p>
            </div>
            </div>
        </div>
        </section>
    </>
  )
}

export default ProfileDetails
