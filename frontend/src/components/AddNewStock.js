// IMPORTS
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






// FUNCTIONAL COMPONENT
const AddNewStock = () => {
        // VANILLA JS SECTION

   // useState section:
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   // useEffect section:


   // helper function section:


    // JSX SECTION
  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Add Stock
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Stock</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-group">
            <label for="formGroupExampleInput">Ticker Symbol</label>
              <input
                class="form-control"
                type="text"
                placeholder="Type Ticker Symbol Here"
                name="symbol"
                id="symbol"
                required
              >
              </input>
            </div>
            <div class="form-group">
            <label for="formGroupExampleInput">Stock Name</label>
              <input
                class="form-control"
                type="text"
                placeholder="Type Stock Name Here"
                name="name"
                id="name"
                required
              >
              </input>
            </div>
            <div class="form-group">
            <label for="formGroupExampleInput">Stock Price</label>
              <input
                class="form-control"
                type="text"
                placeholder="Type Stock Price Here"
                name="price"
                id="price"
                required
              >
              </input>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}


export default AddNewStock;

//testing the push for modal changes