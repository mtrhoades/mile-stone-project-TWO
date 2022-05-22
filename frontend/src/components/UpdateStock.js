// IMPORTS
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// FUNCTIONAL COMPONENT
const UpdateStock = ({ stock }) => {
        // VANILLA JS SECTION

   // useState section:
   const [symbol, setSymbol] = useState(stock.symbol);
   const [stock_name, setStockName] = useState(stock.stock_name);
   const [price, setPrice] = useState(stock.price);


   const [show, setShow] = useState(false); // for modal


   // useEffect section:


   // helper function section:
const updateStock = async (e) => {
  e.preventDefault();
  try {
    const body = { symbol };
    const response = await fetch(`http://localhost:3006/stocks/${stock.stock_id}`, {
      method: 'PUT',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)
    });

    console.log(body);

    window.location='/';

  } catch (err) {
    console.error(err.message);
  }
}

// modal functions:
const handleShow = () => setShow(true); // opening the modal
const handleClose = () => setShow(false); // closing the modal



    // JSX SECTION
  return (
    <div>

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-outline-success btn-sm"
        data-toggle="modal"
        data-target={`#id${stock.stock_id}`}
      >
        Edit
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id={`id${stock.stock_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                  <div class="modal-header ">
                      <h5 class="modal-title" id="exampleModalLabel">Edit Stock Info</h5>
                      <button type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
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
          </div>
            <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    data-dismiss="modal"
                    onClick={e => updateStock(e)}
                >
                        Save
                </button>
            </div>
          </div>
      </div>
  </div>





    </div>
  )
}


export default UpdateStock;