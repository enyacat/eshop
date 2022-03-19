import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";
import { getCartTotal } from "../store/reducer";

export default function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({cart.length} items): <strong>${value}</strong>
            </p>
            <small className='subtotal-gift'>
              <input type='checkbox' /> This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
