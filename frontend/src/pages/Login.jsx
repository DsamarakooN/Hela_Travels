import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Facebook, Google, Apple, Twitter} from 'react-bootstrap-icons';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="login__Container ">
        <div className="login__Container__heading">
          <h1>
            Login
          </h1>
          <p>Login and Enjoy Your <span style={{color: "#25D366"}}>Dream Holiday</span></p>
        </div>

        <div className="">
          <div className="row d-flex justify-content-center align-items-center h-10">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="./images/login.png"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Login with</p>
                  <a className="fs-icon" href="#"><Facebook className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Google className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Twitter className="icon" size={32} /></a>
                  <a className="fs-icon" href="#"><Apple className="icon" size={32} /></a>

                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
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

                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="d-flex text-center text-lg-start mt-4 pt-2">
                  <button type="button" className="btn btn-outline-success btn-lg "
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                    onClick={onSubmit}
                  >
                    Login
                  </button>
                </div>

                <div className="d-flex text-center text-lg-start mt-1 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                    className="">Register</a></p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login