import React , { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuides } from '../../features/guides/guideSlice'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const AllGuides = () => {
    const dispatch = useDispatch();
    const { guide, guides , isLoading, isError, message} = useSelector(state => state.guide);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getGuides());
        

    }, [dispatch]);

    if (isLoading) {
        return <Spinner />
    }

    //console.log(guides);
  
  return (
    <div className="guide__container">
        
        <div className="allGuidePage__heading">
            <h1>Find a Best Guide for Your Trip</h1>
        </div>
        
        <div className="guideCards__container">
            {guides?.map((guides) => (
                <div className="card guideCards " key={guides._id} style={{ width: '20rem' }} >
                    <div className="guideCards-body">
                        <div className="guideCards-image">
                            <img src={guides.guideImage} alt="Driver Image" className="card-img" />
                        </div>
                        <div className="guideCard-details">
                                    <h4 className="card-title">{guides.guideName}</h4>
                                    <p className="card-text">{guides.guidePhone}</p>
                                    <p><span class="badge bg-info text-dark ">{guides.guideExperience} years of experience</span></p>
                        </div>
                        <center>

                            <Link to={"/#"}><button className='btn btn-outline-success mb-3'>View more</button></Link>

                        </center>
                    </div>
                </div>
            ))}

        </div>
        

        {user.role === 'business' && (
            <div >
                <Link to="/guides/add" className="btn btn-primary">
                    Add Guide
                </Link>
            </div>
        )}
    </div>
  )
}

export default AllGuides