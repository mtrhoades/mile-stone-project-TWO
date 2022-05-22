// IMPORTS
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// COMPONENT IMPORTS



// FUNCTIONAL COMPONENT
const AddNewStockModal = () => {
        // VANILLA JS SECTION

   // useState section:
   const [show, setShow] = useState(false); // for modal


   // for new data being added:
   const [symbol, setSymbol] = useState('');
   const [stock_name, setStockName] = useState('');
   const [price, setPrice] = useState('');


   // helper functons:
  const handleClose = () => setShow(false); // closing the modal
  const handleShow = () => setShow(true); // opening the modal

  

   // useEffect section:


   // helper function section:
   const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
        const body = { symbol, stock_name, price };
        const response = await fetch("http://localhost:3006/stocks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        // console.log(response);

        window.location = '/';
        
    } catch (err) {
        console.error(err.message)
    }
};



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
            <div class="form-group row">
              <label for="Symbol" class="col-sm-2 col-form-label" >Symbol</label>
              <input 
                type="text"
                class="form-control form-control-sm"
                id="Symbol"
                placeholder="Symbol"
                value={ symbol }
                onChange={e => setSymbol(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="Name" class="col-sm-2 col-form-label" >Name</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="Name"
                placeholder="Name"
                value={ stock_name }
                onChange={e => setStockName(e.target.value)}
              >
              </input>
            </div>
            <div class="form-group row">
              <label for="Price" class="col-sm-2 col-form-label" >Price</label>
              <input
                type="text"
                class="form-control form-control-sm"
                id="Price"
                placeholder="Price"
                value={ price }
                onChange={e => setPrice(e.target.value)}
              >
              </input>
            </div>  
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={onSubmitForm}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )

}


export default AddNewStockModal;