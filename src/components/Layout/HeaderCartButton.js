import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const nbOfCartItems = cartCtx.items.reduce((curNb, item) => {
    return curNb + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your cart</span>
      <span className={classes.badge}>{nbOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
