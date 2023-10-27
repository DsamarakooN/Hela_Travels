import React , {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGuides } from '../../features/guides/guideSlice'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import "../../App.css"


const AllGuides = () => {
    

    const dispatch = useDispatch();
    const { guide, guides , isLoading, isError, message} = useSelector(state => state.guide);
    const { user } = useSelector((state) => state.auth);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        dispatch(getGuides());
        

    }, [dispatch]);

    const searchItems = (searchValue) => {
      setSearchInput(searchValue);
      if (searchInput !== '') {
          const filteredData = guides.filter((guide) => {
              return Object.values(guide).join('').toLowerCase().includes(searchInput.toLowerCase());
          });
          setFilteredResults(filteredData);
      } else {
          setFilteredResults(guides);
      }
  };

  return (
    <div className="guide__container">
        <div className="allGuidePage__heading">
            <h1>Find a Best Guide for Your Trip</h1>
        </div>

        <input type="search" placeholder="Search for Guides Here.." className="form-control" style={{marginBottom:20, width:550 }} onChange={(e) => searchItems(e.target.value)}></input>

        <div className="guideCards__container">
            {searchInput.length > 1 ? (
                filteredResults.map((guide) => 
                  isLoading ? (
                    Array(10).fill().map((item, index) => (
                      <div className="card guideCards skeleton " key={index} style={{ width: '20rem' }}>
                        <Skeleton height={200} />
                        <div className="guideCards-body skeleton">
                          <div className="guideCards-image skeleton1">
                            <Skeleton height={100} width={100} circle={true} />
                          </div>
                          <div className="guideCard-details skeleton2">
                            <h4 className="card-title"><Skeleton /></h4>
                            <p className="card-text"><Skeleton /></p>
                            <p><Skeleton /></p>
                          </div>
                          <div className="skeleton3">
                          <center>
                            <Skeleton width={100} />
                          </center>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="card guideCards " key={guide._id} style={{ width: '20rem' }} >
                      <div className="guideCards-body">
                          <div className="guideCards-image">
                          <img src={guide.guideImage} alt="driver" className="card-img" />
                          </div>
                          <div className="guideCard-details">
                          <h4 className="card-title">{guide.guideName}</h4>
                          <p className="card-text">{guide.guidePhone}</p>
                          <p><span class="badge bg-info text-dark ">{guide.guideExperience} years of experience</span></p>
                          </div>
                          <center>
                          <Link to={"/#"}><button className='btn btn-outline-success mb-3'>View more</button></Link>
                          </center>
                      </div>
                      </div>
                  )
                )
            ) : (
                guides.map((guide) => 
                  isLoading ? (
                    Array(10).fill().map((item, index) => (
                      <div className="card guideCards skeleton " key={index} style={{ width: '20rem' }}>
                        <Skeleton height={200} />
                        <div className="guideCards-body skeleton">
                          <div className="guideCards-image skeleton1">
                            <Skeleton height={100} width={100} circle={true} />
                          </div>
                          <div className="guideCard-details skeleton2">
                            <h4 className="card-title"><Skeleton /></h4>
                            <p className="card-text"><Skeleton /></p>
                            <p><Skeleton /></p>
                          </div>
                          <div className="skeleton3">
                          <center>
                            <Skeleton width={100} />
                          </center>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="card guideCards " key={guide._id} style={{ width: '20rem' }} >
                      <div className="guideCards-body">
                          <div className="guideCards-image">
                          <img src={guide.guideImage} alt="driver" className="card-img" />
                          </div>
                          <div className="guideCard-details">
                          <h4 className="card-title">{guide.guideName}</h4>
                          <p className="card-text">{guide.guidePhone}</p>
                          <p><span class="badge bg-info text-dark ">{guide.guideExperience} years of experience</span></p>
                          </div>
                          <center>
                          <Link to={"/#"}><button className='btn btn-outline-success mb-3'>View more</button></Link>
                          </center>
                      </div>
                      </div>
                  )
                )
            )}
        </div>

        {user && user.role === 'business' &&  (
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