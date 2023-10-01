import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createGuide } from '../../features/guides/guideSlice'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import { FaImage, FaUpload } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../../firebaseConfig'
import Spinner from '../../components/Spinner'


function AddGuide() {

  // fuction to dispatch the createGuide action
  const [guideName, setGuideName] = React.useState("");
  const [guideEmail, setGuideEmail] = React.useState("");
  const [guidePhone, setGuidePhone] = React.useState("");
  const [guideExperience, setGuideExperience] = React.useState("");
  const [guideDescription, setGuideDescription] = React.useState("");
  const [guideImage, setGuideImage] = React.useState("");

  //to get the current user details from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  //to set form name and email to the current user name and email
  useEffect(() => {
    setGuideName(user.name)
    setGuideEmail(user.email)
  }, [user]);
  
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.guide
  )

  const handleSubmit = (e) => {
    e.preventDefault();

    const guide = {
      guideName,
      guideEmail,
      guidePhone,
      guideExperience,
      guideDescription,
      guideImage
    };

    dispatch(
      createGuide(
        guide
    )).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Guide added successfully',
        showConfirmButton: false,
        timer: 1500
      }).finally(() => {
      Navigate('/guides')
      })
    }).catch((error) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        text: error.message,
        showConfirmButton: false,
        timer: 1500
      })
    });
  };

  // Initialize state to hold the image
  const [image, setImage] = React.useState(null)

  // Function to handle image selection
  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        const fileName = file.name;
        const storageRef = ref(storage, `images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const downloadURL = await new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload progress:", progress.toFixed(2));
                },
                (error) => {
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });

        setImage(URL.createObjectURL(event.target.files[0]));
        setGuideImage(downloadURL);
        console.log(downloadURL);
    }
};
  // Function to remove the image
  const handleImageRemove = () => {
    setImage(null)
  }

  const handleCancel = () => {
    Navigate('/guides')
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='addGuide__Container'>
      <div className='addGuide__Container__heading'>
        <h1>Be a part of the <span style={{ color: "#25D366" }}>Hela Travels </span> family</h1>
        <h2>Fill the form below to register as a guide</h2>
      </div>

      <div className='addGuide__Container__form'>
        <form className='guide_reg_Form' onSubmit={handleSubmit}>
          <div class="row">
            <div class="col">

              {/* Guide name input */}

              <div className="mb-3 ">
                <Form.Group controlId="formGuideName">
                  <Form.Label>Guide Name</Form.Label>
                  <Form.Control 
                        type="text" 
                        placeholder="Enter guide name" 
                        required 
                        value={guideName} 
                        disabled
                  />
                </Form.Group>
              </div>

              {/* Guide email input */}
              <div class="mb-3">
                <Form.Group controlId="formGuideEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        required 
                        value={guideEmail}
                        disabled      
                  />
                </Form.Group>
              </div>

              {/* Guide phone number input */}
              <div className="mb-3">
                <Form.Group controlId="formGuidePhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control 
                      type="tel" 
                      placeholder="Enter phone number" 
                      required pattern="[0-9]{10}"
                      value={guidePhone}
                      onChange={e => setGuidePhone(e.target.value)}
                  />
                </Form.Group>
              </div>

              {/* Guide experience input */}
              <div className="mb-3">
                <Form.Group controlId="formGuideExperience">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control 
                      type="number" 
                      placeholder="Enter years of experience" 
                      required min="1" 
                      max="100"
                      value={guideExperience}
                      onChange={e => setGuideExperience(e.target.value)}
                  />
                </Form.Group>
              </div>

              {/* Guide description input */}
              <div className="mb-3">
                <Form.Group controlId="formGuideDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                      as="textarea" 
                      placeholder="Enter about you" 
                      rows={3} 
                      required 
                      value={guideDescription}
                      onChange={e => setGuideDescription(e.target.value)}   
                  />
                </Form.Group>

              </div>

            </div>
            <div class="col">

              {/* Guide image input */}
              <div className="image__upload__container">
                <Form.Group controlId="formGuideImage">

                  <Form.Control 
                    type="file" 
                    onChange={handleImageChange} 
                    hidden 
                  />
                  <div className="image-container">
                    {image ? (
                      <>
                        <Image src={image} rounded className="uploaded-image" />
                        <button type="button" className="remove-image-button" onClick={handleImageRemove}>
                          x
                        </button>
                      </>
                    ) : (
                      <FaImage className="upload-image" />
                    )}

                  </div>
                  <Form.Label>Upload your image here <FaUpload className='mx-lg-3' /></Form.Label>
                </Form.Group>
              </div>

            </div>

          </div>

          {/* Submit button */}
          <div className='registration__submit_btn '>

            <button type="submit" class="btn btn-outline-success btn-long " >Submit</button>
            <button type="button" class="btn btn-outline-danger btn-long " onClick={handleCancel} >Cancel</button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default AddGuide
