import React from "react"
import ReactDom from "react-dom"

import classes from "./Modal.module.css"

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>
}

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = ({ children, onClose }) => {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
