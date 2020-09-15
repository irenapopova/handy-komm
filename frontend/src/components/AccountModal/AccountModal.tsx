import * as React from 'react';
import * as Modal from 'react-modal';
import TextField, { RaisedButton } from 'material-ui/RaisedButton';
import {IUser} from '@typings/state/index';
import '@styles/AccountModal.css';
import { render } from 'react-dom';

interface Props{
  user: IUser;
  isOpen: boolean:
  onRequestClose: () => void;
}

interface State {
email: string;
address: string;
phone: string;
}

class AccountModal extends React.Component<Props, State>{
  state = {
    email: this.props.user.email,
    address: this.props.user.address,
    phone: this.props.user.phone,
  }


onInputChange = (e: React.FormEvent<HTMLInputElement>) =>{
  const value = e.currentTarget.value;
  const key = e.currentTarget.name;
  this.setState((prevState: State) => ({ 
    ...prevState, 
  [key]: value
  }));
}

render() {
  return (
    <Modal
    className="account-modal"
    isOpen={this.props.onRequestClose}
    >
<form 
className="form" action="/api/user" method="POST">
  <hi>Edit Account</hi>
  <TextField
  id="email"
  hintText="Enter E-mail"
  floatingLabelText="E-mail"
  name="address"
  value={this.state.address}
  onChange={this.onInputChange}
  /><br 
  />

  <TextFiels 
  id="address"
  hintText="Enter Address"
  floatingLabelText="Address"
  name="address"
  value={this.state.address}
  onChange={this.onInputChange}
/><br />

<TextField
id="phone"
hinText="Enter Telephone Number"
floatingLabelText="Telephone Number"
name="phone"
value={this.state.phone}
onChange={this.onInputChange}
/> <br />
<RaisedButton
className="btn"
label="Save"
primary={true}
type="submit"
/>

</form>

    </Modal>
  );
}
}

export default AccountModal;