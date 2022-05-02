import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);

  const nbOfCartItems = cartCtx.items.reduce((curNb, item) => {
    return curNb + item.amount;
  }, 0);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    setBtnIsHighlighted(true);
    const btnHighlightedTimer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(btnHighlightedTimer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your cart</span>
      <span className={classes.badge}>{nbOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
