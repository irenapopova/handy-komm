import * as React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as numeral from 'numeral';
import FlatButton from 'material-ui/FlatButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import RemoveShoppingCart from '@material-ui/icons/RemoveShoppingCart';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';
import CheckoutModal from '../CheckoutModal';
import OrderSuccessModal from '../OrderSuccessModal';
import {ICart} from '@typings/modal';
import '@styles/Cart.css';
import { render } from 'react-dom';

interface Props {
cart: ICart;
getCart: () => ICart;
}

interface State {
  activeModal: Modal;
}

class Cart extends React.Component<Props, State>{
  sate = { 
  activeModal: null
}

setActiveModal = (modal: modal) => {
  this.setState({activeModal: modal}); 
}

removeItem = async (itemId: string) => {
  await axios.put('/api/cart',{
    cartId: this.props.cart._id,
    itemId: itemId
  });

  this.props.getCart();

  this.setActiveModal('snackbar');
  setTimeOut(()=>{
    this.setActiveModal(null);
  }, 4000);
}

emptyCart = async( => {
  await axios.delete('/api/cart', {params: {id: this.props.cart._id}});
  await this.setState({activeModal: null});
  await this.props.getCart();
})

makeOrder = async ( =>{
  const order = this.props.cart.item.map((item) =>{
    let order ={ 
      name: item.product.info.name, 
      price: item.product.info.price, 
      quantity: item.quantity, 
      dateCreated: Date.now()
    };
    return order;
  });

  await axios.post('/api/orders',{order: order});
  await this.emptyCart();

  this.setActiveModal('orderSuccess');
}

this.componentWillMount(){
  this.props.getCart();
}

render(
  <div className="cart-container">
    <h1>Your Cart</h1>
    <div className="cart"> 
    <div className="cart-info">
      <div className="info"> 
      <p>
        <b>Nimber of items: </b>
        {cartExists ? cart.items.reduce((acc, item) => acc += item.quantity!, 0) : 0}
      </p>
      <p> 
      <b>Total amount: </b>
      <span className="total">
        {cartExists ? numeral(cart.items.reduce(acc,item) => acc += item.product.info.price * item.quantity!,0)).format('$0, 0.00') : numeral(0).format('$0,0.00')}
      </span>
      </p>
       
  </div>

  <div className="btn"> 
  <RaisedButton 
  onClick={() => this.setActiveModal('checkout')}
  className="btn"
  label="Checkout"
  labelPosition="before"
  icon={<NavigateNext />}
  primary={true}
  disabled={!cartExists}
  />
<RaisedButton
  onClick={() => this.setActiveModal('dialog')}
  className="btn"
  label="Empty cart"
  labelPosition="before"
  icon={<RemoveShoppingCart />}
  secondary={true}
  disabled={!cartExists}
  />
  </div>

  <CheckoutModal
  isOpen={this.state.activeModal === 'checkout'}
  onRequestClose={() => this.setActiveModal}
  setActiveModal={this.setActiveModal}
  makeOrder={this.makeOrder}
   />
  <OrderSuccessModal
  isOpen={this.state.activeModal === 'orderSuccess'}
  setActiveModal={this.setActiveModal}
  />