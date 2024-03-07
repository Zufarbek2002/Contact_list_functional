import { useState } from "react";
import ModalComp from "./ModalComp";
import ContactList from "./ContactList";

const SearchComp = () => {
  const [addModal, setAddModal] = useState(false);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      number: "+998 99 999 99 99",
      gender: "Male",
    },
    {
      id: 2,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
    {
      id: 3,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
    {
      id: 4,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
    {
      id: 5,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
    {
      id: 6,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
    {
      id: 7,
      firstName: "Tom",
      lastName: "Smith",
      number: "+998 88 888 88 88",
      gender: "Male",
    },
  ]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [filteredContact, setFilteredContact] = useState(contacts)

  const addOpenModal = () => {
    setAddModal(true);
  };
  const addCloseModal = () => {
    setAddModal(false);
  };

  const addContact = (contact) => {
    const newContact = [...contacts, { ...contact, id: contacts.length + 1 }];
    setContacts(
      newContact
    );
    setFilteredContact(newContact)
  };
  const handleSearch = (e) => {
    let text = e.target.value.toLowerCase();
    setSearch(text);
    setFilteredContact(
            contacts.filter(
            (e) =>
              e.firstName.toLowerCase().includes(text) ||
              e.lastName.toLowerCase().includes(text)
          ),
    )
    setContacts(filteredContact);
  };

  const handleFilter = (e) => {
    const gender = e.target.value;
    setFilter(gender);
    let filtered;
    if (gender == "All") {
      filtered = contacts;
    } else {
      filtered = contacts.filter(
        (contact) => contact.gender == gender
      );
    }
    setFilter({
      filteredContact: filtered,
    });
  };

  return (
    <div className="container">
      <div className="header py-5 d-flex gap-4">
        <input
          type="text"
          id="search"
          className="form-control w-100 p-2"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
        />
        <select
          id="group"
          className="form-select w-50"
          value={filter}
          onChange={handleFilter}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <button
          className="btn btn-outline-success w-50"
          // onClick={addOpenModal}
        >
          All
        </button>
        <button
          className="btn btn-outline-success w-50"
          // onClick={addOpenModal}
        >
          Favourite
        </button>
        <button className="btn btn-outline-success w-50" onClick={addOpenModal}>
          New Contact
        </button>
      </div>
      <ModalComp
        addCloseModal={addCloseModal}
        addModal={addModal}
        addContact={addContact}
      />
      <ContactList
        contacts={filteredContact}
        // handleDelete={handleDelete}
        // handleEdit={handleEdit}
      />
      {/* <EditContact
        editCloseModal={editCloseModal}
        editModal={editModal}
        contactEditing={contactEditing}
      /> */}
    </div>
  );
};

export default SearchComp;
