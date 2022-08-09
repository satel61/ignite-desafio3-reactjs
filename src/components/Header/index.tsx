import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/images/logo.svg';
import logoroyal from '../../assets/images/logoroyal.png';
import { Container, Cart } from './styles';
import { useCart } from '../../hooks/useCart';

const Header = (): JSX.Element => {
   const { cart } = useCart();
   const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logoroyal} alt="Rocketshoes"/>
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={52} color="#999" />
      </Cart>
    </Container>
  );
};

export default Header;
