import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  // const product = useSelector((state) => {
  //   return state.product.product;
  // });

  // const dispatch = useDispatch();
  // const addCartHandler = () => {
  //   dispatch(addCartActions.addCart());
  // };
  // const minusCartHandler = () => {
  //   dispatch(addCartActions.minusCart());
  // };
  // const totalValue = product * price.toFixed(3);
  const dispatch = useDispatch();
  const addCartHandler = () => {
    dispatch(
      cartActions.addItemHandler({
        id,
        title,
        price,
      })
    );
  };
  const removeCartHandler = (e) => {
    dispatch(cartActions.removeItemHandler(id));
  };
  return (
    <>
      <li className={classes.item}>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            {total}{" "}
            <span className={classes.itemprice}>
              (${price.toFixed(2)}/item)
            </span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={removeCartHandler}>-</button>
            <button onClick={addCartHandler}>+</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
