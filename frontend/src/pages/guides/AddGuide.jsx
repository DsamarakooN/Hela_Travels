import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import { FaImage, FaUpload } from 'react-icons/fa'


function AddGuide() {
  // Initialize state to hold the image
  const [image, setImage] = React.useState(null)

  // Function to handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  // Function to remove the image
  const handleImageRemove = () => {
    setImage(null)
  }

  return (
    <section className='addGuide__Container'>
      <div className='addGuide__Container__heading'>
        <h1>Be a part of the <span style={{ color: "#25D366" }}>Hela Travels </span> family</h1>
        <h2>Fill the form below to register as a guide</h2>
      </div>

      <div className='addGuide__Container__form'>
        <form className='guide_reg_Form'>
          <div class="row">
            <div class="col">

              {/* Guide name input */}

              <div className="mb-3 ">
                <Form.Group controlId="formGuideName">
                  <Form.Label>Guide Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter guide name" required />
                </Form.Group>
              </div>

              {/* Guide email input */}
              <div class="mb-3">
                <Form.Group controlId="formGuideEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                </Form.Group>
              </div>

              {/* Guide phone number input */}
              <div className="mb-3">
                <Form.Group controlId="formGuidePhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter phone number" required pattern="[0-9]{10}" />
                </Form.Group>
              </div>

              {/* Guide experience input */}
              <div className="mb-3">
                <Form.Group controlId="formGuideExperience">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control type="number" placeholder="Enter years of experience" required min="1" />
                </Form.Group>
              </div>

              {/* Guide description input */}
              <div className="mb-3">
                <Form.Group controlId="formGuideDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" placeholder="Enter about you" rows={3} required />
                </Form.Group>

              </div>

            </div>
            <div class="col">

              {/* Guide image input */}
              <div className="image__upload__container">
                <Form.Group controlId="formGuideImage">

                  <Form.Control type="file" onChange={handleImageChange} hidden />
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

            <button type="button" class="btn btn-outline-success btn-long " >Submit</button>
            <button type="button" class="btn btn-outline-danger btn-long ">Cancel</button>

          </div>

        </form>

      </div>

    </section>
  )
}

export default AddGuide
