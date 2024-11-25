import { useEffect } from "react";
import {
  ICategorisedProduct,
  IProduct,
  IProductResponse,
} from "../../types/model";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import {setProduct} from '../../redux/reducers/product.reducer'
import { updateCart2 } from "../../redux/reducers/cart2.reducer";

async function getProducts(): Promise<IProductResponse> {
  return (await fetch("https://dummyjson.com/products")).json();
}

function Product() {
  const products: ICategorisedProduct[] = useSelector((state: any) => {
    return state.products;
  })
  const dispatcher = useDispatch();

  useEffect(() => {
    getProducts().then((data: IProductResponse) => {
      if (data) {
        const categorisedProducts = data.products.map(
          (product: IProduct) => product.category
        );
        const uniqueCategories = [...new Set(categorisedProducts)];
        const uniqueCategoryDataObject = uniqueCategories.map(
          (category: string) => ({
            category: category,
            data: data.products.filter(
              (product: IProduct) => product.category === category
            ),
          })
        );

        dispatcher(setProduct(uniqueCategoryDataObject))
        
      }
    });
  }, []);

  

  const addToCart2 = (product: IProduct) => {
    dispatcher(updateCart2(product))

  }

  return (
    <>
      <div className="product-container">
        {products.map(
          (categorisedProduct: ICategorisedProduct ) => {
            return (
              <>
              <div>
              <h1>{categorisedProduct.category}</h1>
              </div>
              <div className="card-container">
               

                {categorisedProduct.data.map((product: IProduct) => (
                  <div className="card">
                    <div className="card-header">
                      <img src={product.images[0]} />
                    </div>
                    <div className="card-footer">
                      <p className="title">{product.title}</p>
                      <p className="description">Brand: {product.brand}</p>
                      <p className="description">Price: {product.price}</p>
                      <p className="description">Rating: {product.rating}</p>
                      <p className="description">Stock: {product.stock}</p>
                      {/* <button className="btn-add-to-cart" onClick={() => addToCart(product)}>Add to cart</button> */}
                      <button className="btn-add-to-cart" onClick={() => addToCart2(product)}>Add to cart</button>

                    </div>
                  </div>
                ))}
              </div>
              </>
            );
          }
        )}
      </div>
    </>
  );
}

export default Product;
