import React from 'react'
import { useDispatch } from 'react-redux'
import { createGuide } from '../../features/guides/guideSlice'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'
import { FaImage, FaUpload } from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'



function AddGuide() {

  // fuction to dispatch the createGuide action
  const [guideName, setGuideName] = React.useState("");
  const [guideEmail, setGuideEmail] = React.useState("");
  const [guidePhone, setGuidePhone] = React.useState("");
  const [guideExperience, setGuideExperience] = React.useState("");
  const [guideDescription, setGuideDescription] = React.useState("");
  const [guideImage, setGuideImage] = React.useState("");

  const dispatch = useDispatch()

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

    dispatch(createGuide(guide));

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Guide added successfully',
      showConfirmButton: false,
      timer: 1500
    })

  };

  // Initialize state to hold the image
  const [image, setImage] = React.useState(null)

  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
      setGuideImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  // Function to remove the image
  const handleImageRemove = () => {
    setImage(null)
  }

  const { reset } = useForm();

  const handleCancel = () => {
    reset();
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
                        onChange={e => setGuideName(e.target.value)} 
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
                        onChange={e => setGuideEmail(e.target.value)}      
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
            <button type="button" class="btn btn-outline-danger btn-long " onClick='/guides' >Cancel</button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default AddGuide
