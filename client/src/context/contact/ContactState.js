import React, { useReducer } from "react";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { v4 as uuid } from "uuid";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_FILTER,
  CLEAR_CURRENT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "ANBC",
        email: "ANBC@g.com",
        phone: "51515234",
        type: "personal",
      },
      {
        id: 2,
        name: "hzdhdzh",
        email: "hzdhdzh@g.com",
        phone: "33132225111",
        type: "personal",
      },
      {
        id: 3,
        name: "544",
        email: "544@g.com",
        phone: "7654752452",
        type: "personal",
      },
      {
        id: 4,
        name: "AN5454BC",
        email: "AN5454BC@g.com",
        phone: "4263643745",
        type: "professional",
      },
      {
        id: 5,
        name: "A3131NBC",
        email: "A3131NBC@g.com",
        phone: "76751525",
        type: "personal",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);
  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Contact

  //Filter Contact

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
