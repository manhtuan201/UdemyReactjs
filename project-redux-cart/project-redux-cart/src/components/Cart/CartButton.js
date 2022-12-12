import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const product = useSelector((state) => {
    return state.product.totalQuantity;
  });
  const dispatch = useDispatch();
  const showCartHandler = (e)=>{
    e.preventDefault();
    dispatch(uiActions.showCart())
  }
  
  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{product}</span>
    </button>
  );
};

export default CartButton;
