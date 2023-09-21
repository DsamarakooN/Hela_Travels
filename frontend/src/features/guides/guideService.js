import axios from 'axios';

const API_URL = 'https://hela-travels.onrender.com/api/guides/';

// Get all guides
const getGuides = async () => {
    const response = await axios.get(API_URL + 'all');
    return response.data;
}

// Get guide by id
const getGuideById = async (guideId) => {
    const response = await axios.get(API_URL + guideId);
    return response.data;
}

// Add a guide
const createGuide = async (guideData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        },
    }
    const response = await axios.post(API_URL + 'add' , guideData , config);
    return response.data;
}

// Update a guide
const updateGuide = async (guideId, guideData) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        },
    }
    const response = await axios.put(API_URL + 'update/' + guideId , guideData , config);
    return response.data;
}

// Delete a guide
const deleteGuide = async (guideId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.token}`
        },
    }
    const response = await axios.delete(API_URL + 'delete/' + guideId , config);
    return response.data;
}

const guideService = {
    getGuides,
    getGuideById,
    createGuide,
    updateGuide,
    deleteGuide
}


export default guideService;
