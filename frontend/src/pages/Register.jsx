import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register , reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import '../App.css';

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

    const {user , isLoading , isError , isSuccess , message} = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/login')
        }

        dispatch(reset())

    }, [ user, isError , isSuccess, message, navigate, dispatch])

    

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(password !== password2){
            toast.error('Password do not match')
        }else{
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

    if(isLoading){
        return <Spinner/>
    }




  return (
    <>
        <section className='heading'>
            <h1>
                <FaUser/>Register
            </h1>
            <p>Please create an account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id='name' 
                    name='name' 
                    value={name} 
                    placeholder='Enter Your Name' 
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    id='email'
                    name='email'
                    value={email}
                    placeholder='Enter Your Email'
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    id='password'
                    name='password'
                    value={password}
                    placeholder='Enter Your Password'
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder='Confirm Your Password'
                    onChange={onChange}
                />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Register</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register