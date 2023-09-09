import axios from 'axios';

const API_URL = 'https://hela-travels.onrender.com/api/users/';

//register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;

}

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;

}

// logout user
const logout = () => {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }


// update user profile
const updateProfile = async (userData) => {
  const user = JSON.parse(localStorage.getItem('user'));

  const config = {
      headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
      },
  }

  const response = await axios.put(API_URL + 'profile', userData, config)

  if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const authService = {
    register,
    logout,
    login,
    updateProfile
}

export default authService;