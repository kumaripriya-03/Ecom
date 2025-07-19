// import { useDispatch, useSelector } from "react-redux";
// import { categorisedCartItem } from "../types/model";
// import { incrementQuantity, decrementQuantity } from "../redux/reducers/cart2.reducer";
// import "./Cart2.css";

// function Cart2() {
//   const cartItems: categorisedCartItem[] = useSelector((state: any) => state.cart2);
//   const dispatch = useDispatch();

//   const quantityIncrement = (index: number) => {
//     dispatch(incrementQuantity(index));
//   };

//   const quantityDecrement = (index: number) => {
//     dispatch(decrementQuantity(index));
//   };

//   return (
//     <div className="cart2-container">
//       <h2>🛒 My Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="empty-cart-message">No items in the cart.</p>
//       ) : (
//         cartItems.map((cartItem: categorisedCartItem, index: number) => (
//           <div className="cart2-card" key={index}>
//             <img
//               className="cart2-image"
//               src={cartItem.cartItem?.images[0]}
//               alt={cartItem.cartItem?.title}
//             />

//             {/* ✅ Show price below image in a clean format */}
//             {cartItem.cartItem?.price ? (
//               <p className="price-below-img">
//                 <strong>Price:</strong> ₹{cartItem.cartItem.price}
//               </p>
//             ) : null}

//             <div className="cart2-details">
//               <h4>{cartItem.cartItem?.title}</h4>

//               <div className="cart2-quantity-controls">
//                 <button onClick={() => quantityDecrement(index)}>-</button>
//                 <input type="text" readOnly value={cartItem.quantity} />
//                 <button onClick={() => quantityIncrement(index)}>+</button>
//               </div>

//               <p><strong>Total:</strong> ₹{cartItem.totalPrice.toFixed(2)}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Cart2;

import { useDispatch, useSelector } from "react-redux";
import { categorisedCartItem } from "../types/model";
import { incrementQuantity, decrementQuantity } from "../redux/reducers/cart2.reducer";
import "./Cart2.css";

function Cart2() {
  const cartItems: categorisedCartItem[] = useSelector((state: any) => state.cart2);
  const dispatch = useDispatch();

  const quantityIncrement = (index: number) => {
    dispatch(incrementQuantity(index));
  };

  const quantityDecrement = (index: number) => {
    dispatch(decrementQuantity(index));
  };

  return (
    <div className="cart2-container">
      <h2>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">No items in the cart.</p>
      ) : (
        <>
          {cartItems.map((cartItem: categorisedCartItem, index: number) => (
            <div className="cart2-card" key={index}>
              <img
                className="cart2-image"
                src={cartItem.cartItem?.images[0]}
                alt={cartItem.cartItem?.title}
              />

              <p className="price-below-img">
                <strong>Price:</strong> ₹{cartItem.cartItem?.price}
              </p>

              <div className="cart2-details">
                <h4>{cartItem.cartItem?.title}</h4>

                <div className="cart2-quantity-controls">
                  <button onClick={() => quantityDecrement(index)}>-</button>
                  <input type="text" readOnly value={cartItem.quantity} />
                  <button onClick={() => quantityIncrement(index)}>+</button>
                </div>

                <p><strong>Total:</strong> ₹{cartItem.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          ))}

          {/* ✅ Order Button */}
          <div className="order-button-wrapper">
            <button className="order-button">Order Now</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart2;

