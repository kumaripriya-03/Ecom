import { useDispatch, useSelector } from "react-redux";
import { categorisedCartItem } from "../types/model";
import { incrementQuantity, decrementQuantity } from "../redux/reducers/cart2.reducer";

function Cart2() {
  const cartItems: categorisedCartItem[] = useSelector((state: any) => state.cart2);
  const dispatch = useDispatch();

  const quantityIncrement = (index: number) => {
    dispatch(incrementQuantity(index))
  }

  const quantityDecrement = (index: number) => {
    dispatch(decrementQuantity(index))
  }

  return (
    <div className="card-container" style={{ justifyContent: "center" }}>
      {cartItems.map((cartItem: categorisedCartItem, index: number) => (
        <div className="card" key={index}>
          <div className="card-header" style={{ border: "none" }}>
            <h4>{cartItem.cartItem?.title}</h4>
          </div>
          <div className="card-content" style={{ textAlign: "center" }}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={cartItem.cartItem?.images[0]}
              alt=""
            />
            <h4>Quantity: {cartItem.quantity}</h4>
          </div>
          <div className="card-footer">
            <div className="adder-remover">
              <div className="add" onClick={() => quantityIncrement(index)}
              >+</div>
              <div className="quantity">
                <input type="text" name="" id="" value={cartItem.quantity} />
              </div>
              <div className="remove" onClick={() => quantityDecrement(index)}>-</div>
            </div>
            <br />
            <button className="btn-add-to-cart">
              Total: {cartItem.quantity * (cartItem.cartItem?.price || 0)}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart2;
