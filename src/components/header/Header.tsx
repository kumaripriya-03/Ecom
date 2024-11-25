import { useSelector } from 'react-redux';
import './Header.css';
import { IProduct } from '../../types/model';
function Header() {

  const products: IProduct[] = useSelector((state: any) => {
    return state.cart2;
  })

    return(
        <>
          <div className='nav'>
            <div className="nav-item">
                <a href="/">Easy Buy</a>
            </div>
            <div className="nav-item">
            <a href="/signIn">Sign In</a>
            <a href="/cart">Cart ({products.length})</a>
            </div>
          </div>

        </>
    )
}

export default Header;