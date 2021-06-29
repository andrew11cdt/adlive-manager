import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { parseTitle } from "../../utils/common.util";
import styles from "./styles.module.scss";

export default function ConfirmModal({title, onExecute, show, setShow}) {
  function handleContinue() {
    setShow(false)
    onExecute()
  }
  return (
    <Modal
      className={styles.createCampainModal}
      show={show}
      onHide={() => null}
    >
      <Modal.Header>
        <Modal.Title className={styles.title}>Confirm {parseTitle(title)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to continue ?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleContinue}>
          {parseTitle(title) || 'Continue'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
