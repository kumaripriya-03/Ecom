import { useSelector } from "react-redux";
import { categorisedCartItem, IProduct } from "../types/model";

function Cart() {
  const cartItems: IProduct[] = useSelector((state: any) => state.cart);

  const cartIds = cartItems.map((cartItem: IProduct) => cartItem.id);
  const uniqueCartIds = [...new Set(cartIds)];

  let categorisedCartItems: categorisedCartItem[] = uniqueCartIds.map(
    (cartId: number) => ({
      cartItem: cartItems.find((product: IProduct) => product.id === cartId),
      quantity: cartItems.filter((product: IProduct) => product.id === cartId)
        .length,
      totalPrice:
        cartItems.find((product: IProduct) => product.id === cartId)?.price ||
        0 *
          cartItems.filter((product: IProduct) => product.id === cartId).length,
    })
  );

  const addProductToCart = (product: IProduct | undefined) => {
    if (product) {
      const index = categorisedCartItems.findIndex(
        (cartItem: categorisedCartItem) => cartItem.cartItem?.id === product.id
      );
      categorisedCartItems[index].quantity++;
      categorisedCartItems = [...categorisedCartItems];
      console.log("==> categorisedCartItems", categorisedCartItems);
    }
  };

  const removeProductFromCart = (product: IProduct | undefined) => {
    if (product) {
      const index = categorisedCartItems.findIndex(
        (cartItem: categorisedCartItem) => cartItem.cartItem?.id === product.id
      );

      if (categorisedCartItems[index].quantity > 1) {
        categorisedCartItems[index].quantity++;
      } else {
        categorisedCartItems.splice(index, 1);
      }
      categorisedCartItems = [...categorisedCartItems];
      return categorisedCartItems;
    }
  };

  return (
    <div className="card-container" style={{ justifyContent: "center" }}>
      {categorisedCartItems.map(
        (cartItem: categorisedCartItem, index: number) => (
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
                <div
                  className="add"
                  onClick={() => addProductToCart(cartItem.cartItem)}
                >
                  +
                </div>
                <div className="quantity">
                  <input type="text" name="" id="" value={cartItem.quantity} />
                </div>
                <div
                  className="remove"
                  onClick={() => removeProductFromCart(cartItem.cartItem)}
                >
                  -
                </div>
              </div>
              <br />
              <button className="btn-add-to-cart">
                Total: {cartItem.quantity * (cartItem.cartItem?.price || 0)}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Cart;
