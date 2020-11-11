import * as React from "react";
import * as Modal from "react-modal";
import TextField from "material-ui/";
import RaisedButton from "material-ui/RaisedButton";
import { ModalProps } from "@typings/modal";

const RegisterModal = ({
  isOpen,
  onRequestClose,
  setActiveModal,
}: ModalProps) => (
  <Modal
    className="register-modal"
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <form className="form" action="/auth/register" method="POST">
      <h1>Register</h1>
      <TextField
        hintText="Enter Username"
        floatingLabelText="Username"
        name="username"
        autoFocus
      />
      <br />

      <TextField
        hintText="Enter Password"
        floatingLabelText="Password"
        name="password"
        type="password"
      />
      <br />
      <TextField
        hintText="Enter E-mail"
        floatingLabelText="E-mail"
        name="email"
      />
      <br />

      <TextField
        hintText="Enter Address"
        floatingLabelText="Address"
        name="address"
      />
      <br />
      <TextField
        hintText="Enter Telephone Number"
        floatingLabelText="Telephone Number"
        name="phone"
      />
      <br />
    </form>
  </Modal>
);

export default RegisterModal;
