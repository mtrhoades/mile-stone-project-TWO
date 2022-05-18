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
<<<<<<< HEAD
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
=======
        {/* <form>
        <div class="form-group">
        <label for="formGroupExampleInput">Example label</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
        </div>
        <div class="form-group"></div>
        <label for="formGroupExampleInput2">Another label</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
        </div>
        </form>  */}
          <form>
  <div class="form-group row">
    <label for="Symbol" class="col-sm-2 col-form-label" >Symbol</label>
    
    <input type="text" class="form-control form-control-sm" id="Symbol" placeholder="Symbol"></input>
  </div>
  <div class="form-group row">
    <label for="Name" class="col-sm-2 col-form-label" >Name</label>
    <input type="text" class="form-control form-control-sm" id="Name" placeholder="Name"></input>
  </div>

  <div class="form-group row">
    <label for="Price" class="col-sm-2 col-form-label" >Price</label>
    <input type="text" class="form-control form-control-sm" id="Price" placeholder="Price"></input>
  </div>  
</form>
>>>>>>> 581cabd64b3cd7db95208336acaa86ab3320354f
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