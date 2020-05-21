import React from 'react';
import ActionButton from './ActionButton';
import { CSSTransition } from 'react-transition-group';


export default function LoginModal(props) {
  return (
    <div className="modal-takeover" onClick={props.close} >
        <CSSTransition
        in={props.in}
        timeout={300}
        classNames="modal-content"
        unmountOnExit
        >
            <form className="modal-content" onSubmit="#" onClick={(e) => (e.stopPropagation()) }>
                <div className="form-container">
                  <h1>Login</h1>
                  <input type="text" placeholder="Username" name="uname" required />
                  
                  <input type="password" placeholder="Password" name="psw" required />

                  <ActionButton action={props.close} style="Prime" text="Login" />
                </div>
            </form>
        </CSSTransition>
    </div>
  );
}