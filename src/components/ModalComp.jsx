import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalComp = ({ addModal, addCloseModal, addContact }) => {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    number: "",
    gender: "",
  });

  const handleChange = (e) => {

    setContact({
        ...contact,
        [e.target.id]: e.target.value,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addCloseModal();
    addContact(contact);
    setContact({
      firstName: "",
      lastName: "",
      number: "",
      gender: "",
    });
  };

  return (
    <div>
      <Modal show={addModal} onHide={addCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                Firstname
              </label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                value={contact.firstName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Lastname
              </label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                value={contact.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="form-control"
                placeholder="+998 99 999 99 99"
                value={contact.number}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <select
                id="gender"
                className="form-select"
                value={contact.gender}
                onChange={handleChange}
              >
                <option value="gender">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={addCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
