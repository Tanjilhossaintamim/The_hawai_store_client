import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartItem = ({
  cartItem,
  increaseCartquantity,
  decreaseCartquantity,
  deleteToCart,
}) => {
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const increase = (id) => {
    setQuantity((prev) => prev + 1);
    increaseCartquantity(id, quantity + 1);
  };
  const decrease = (id) => {
    setQuantity((prev) => prev - 1);

    decreaseCartquantity(id, quantity - 1);
  };

  return (
    <tr>
      <td>
        <img src={cartItem.product.image} width={"50px"} />
      </td>
      <td style={{ fontWeight: 700 }}>{cartItem.product.title}</td>

      <td>&#2547; {cartItem.product.price}</td>
      <td>
        <button onClick={() => increase(cartItem.id)}>+</button>
        <input type="text" disabled value={quantity} />

        <button onClick={() => decrease(cartItem.id)}>-</button>
      </td>
      <td>&#2547; {cartItem.total_price}</td>
      <td style={{ cursor: "pointer", fontSize: "20px" }} title="Remove">
        <AiFillDelete color="red" onClick={() => deleteToCart(cartItem.id)} />
      </td>
    </tr>
  );
};

export default CartItem;
