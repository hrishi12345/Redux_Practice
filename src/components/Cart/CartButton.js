
import { useDispatch, useSelector} from 'react-redux';
import classes from './CartButton.module.css';
import { cartHandler } from '../../store/index';


const CartButton = (props) => {
  const valu=useSelector((state)=>state.ui.totalQuantity)
  const dispatch=useDispatch()
  const submitHandler=()=>{
      dispatch(cartHandler())

  }
  return (
    <button className={classes.button} onClick={submitHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{valu}</span>
    </button>
  );
};

export default CartButton;
