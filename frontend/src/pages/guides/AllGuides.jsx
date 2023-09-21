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


    console.log(guides);

    
  return (
    <div>
        <h1>All Guides</h1>
        
        <div className="row">
            {guides?.map((guides) => (
                <div className="col-md-4" key={guides._id}>
                    <div className="card m-2">
                        <div className="card-body">
                            <h5 className="card-title">{guides.guideName}</h5>
                            <p className="card-text">{guides.guideDescription}</p>
                            <a href="#" className="btn btn-primary">See More</a>
                        </div>
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