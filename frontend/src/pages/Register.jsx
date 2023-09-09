import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { logout, register, reset } from '../features/auth/authSlice'
import { Facebook, Google, Apple, Twitter } from 'react-bootstrap-icons';
import Spinner from '../components/Spinner'
import '../App.css';
import Swal from 'sweetalert2'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registration Success',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(logout());
      navigate('/login')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('Password do not match')
    } else {
      const userData = {
        name,
        email,
        password
      }

      dispatch(register(userData))
        .catch(error => {
          toast.error(error.message)
        });
    }
  }

  if (isLoading) {
    return <Spinner />
  }




  return (
    <>
      <section className="login__Container ">
        <div className="login__Container__heading">
          <h1>
            Register
          </h1>
          <p>Register and Enjoy Your <span style={{ color: "#25D366" }}>Dream Holiday</span></p>
        </div>

        <div className="">
          <div className="row d-flex justify-content-center align-items-center h-10">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="./images/login-min.png"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Register with</p>
                  <a className="fs-icon" href="#"><Facebook className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Google className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Twitter className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Apple className="icon" size={32} /></a>

                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                {/* Name Input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Name</label>
                  <input id='name'
                    name='name'
                    value={name} className="form-control form-control-lg"
                    placeholder="Enter Your Name"
                    onChange={onChange}
                  />
                </div>

                {/* Email input */}
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input id='email'
                    name='email'
                    value={email} className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={onChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input type="password"
                    id='password'
                    name='password'
                    value={password} className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={onChange}
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Confirm Password</label>
                  <input type="password"
                    id='password2'
                    name='password2'
                    value={password2} className="form-control form-control-lg"
                    placeholder="Confirm password"
                    onChange={onChange}
                  />
                </div>

                <div className="d-flex text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-outline-success btn-lg "
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    onClick={onSubmit}
                  >
                    Register
                  </button>
                </div>

                <div className="d-flex text-center text-lg-start mt-1 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="/login"
                    className="">Login</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Register