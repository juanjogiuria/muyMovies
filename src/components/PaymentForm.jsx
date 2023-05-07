import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import "react-credit-cards-2/dist/lib/styles.scss"
import { useCartContext } from '../context/CartContext';

const PaymentForm = () => {
  const [paymentChecked, setPaymentChecked] = useState(false);
  const { calcularTotalCart, cartList } = useCartContext()
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  const paymentMade = () => {
    setPaymentChecked(true)
  }

  return (
    <div className='payment-container'>

      <div className='payment-card'>
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <label htmlFor="number">Número de tarjeta:</label>
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Name in card"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <div className='expiry-cvv'>
            <div>
              <label htmlFor="expiry">Vencimiento:</label>
              <input
                type="numer"
                name="expiry"
                placeholder="Vencimiento"
                value={state.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="4"
              />
            </div>
            <div>
              <label htmlFor="cvc">CVV:</label>
              <input
                type="numer"
                name="cvc"
                placeholder="CVC"
                value={state.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="3"
              />
            </div>
          </div>
        </form>

        <div className='total'>
          <span className='total-legend'>Total:</span>
          <span className='total-value'>
            ${calcularTotalCart(cartList)}
          </span>
        </div>
        {
          !paymentChecked ? <button type="submit" onClick={() => paymentMade()}>Pagar</button> : ""
        }
      </div>

      {
        paymentChecked 
        ? 
        <div className='payment-checked'>
          <h4>Pago realizado con exito</h4>
          <p>Gracias por su compra!</p>
        </div>
        :
        ""
      }
    </div>
  );
}

export default PaymentForm;