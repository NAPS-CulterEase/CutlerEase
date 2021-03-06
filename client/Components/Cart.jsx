import React from 'react';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Cart(props){
  const [modalIsOpen, setIsOpen] = useState(false);

  const { handleClick, customerCart } = props;

  function openModal() {
    // if (!props.userId) {
      // alert('Please login before accessing the cart');
      // return;
    // }
      setIsOpen(true);
  }

  // function afterOpenModal() {
  // }

  function closeModal() {
    setIsOpen(false);
  }


  useEffect(() => {
    closeModal();
}, [props.isLoggedIn])

const arr = [];
let totalPrice = 0;

  for (let i = 0; i < customerCart.length; i++) {
    let knife = customerCart[i];
    totalPrice += Number(knife.price) * knife.quantity;
    arr.push(
      <tr key={`item${i}`}>
        <th><img className='cart_img' height='120' width='120' src={knife.img_url} /></th>
        <th>{knife.name}</th>
        <th>
          <div>
            <button className='removeOne' id={`add-${knife.product_id}`} onClick={handleClick}> - </button>
          <span> {knife.quantity} </span>
            <button className='addOne' id={`delete-${knife.product_id}`}onClick={handleClick}> + </button>
          </div>
          </th>
        <th>${knife.price}</th>
      </tr>
    )
  }


  /**
   *
   * 
   */


  return (
    //ADD: if props.isLoggedIn is true call closeModal 
    
    <div>
      <button 
        onClick={openModal} className = 'cartBtn'>Cart</button>
      {/* onClick = "functionOne(); functionTwo();" */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <h1 id='shoppingCartHeader'>Your shopping cart</h1>
          <table border = "1">
            <tbody>
              <tr>
                <th>Picture</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price per knife</th>

              </tr>
              {arr}
            </tbody>
          </table>
          <h3>Total Price: ${totalPrice}</h3>
          <button>Proceed to checkout</button>
      </Modal>
    </div>
  );
}

export default Cart;