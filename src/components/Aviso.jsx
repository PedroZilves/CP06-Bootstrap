import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Aviso() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aviso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>A partir de 10/11 abriremos nova loja na Rua dos Eucaliptos, 735!!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK!
          </Button>
          {/* <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Aviso;