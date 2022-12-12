import { useDispatch } from "react-redux";
import { addCartActions, cartActions } from "../store/cart-slice";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const {id,quantity, title, price, description } = props;
  // const dispatch = useDispatch();
  // const addCartHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(addCartActions.addCart());
  // };
  const dispatch = useDispatch();
  const addCarthandHandler = ()=>{
    dispatch(cartActions.addItemHandler({
      id,
      title,
      price,
    }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addCarthandHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
