import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import "./Login.scss";
import ActionButton from "./ActionButton";
import LoginModal from "./LoginModal";
export default function Login() {
  const [loggedIn, setLoggedInState] = useState(false);
  const [modalOpened, setModalState] = useState(false);
  const [modalInteriorOpened, setModalInteriorState] = useState(false);
  
  return (
    <div className="login-Container">
      <ActionButton text="Login" style="Prime" action={() => setModalState(true)} />

      <CSSTransition
        in={modalOpened}
        timeout={300}
        classNames="modal-takeover"
        unmountOnExit
        onEnter={() => setModalInteriorState(true)}
        onExited={() => setModalInteriorState(false)}
      >
        <LoginModal close={() => {setModalInteriorState(false); setModalState(false)}} in={modalInteriorOpened} />
      </CSSTransition>
    </div>
  );
}
