
import Contacts from "../Contacts.json";
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    CHANGE_FAVORITE,
    EDIT_CONTACT
} from "./types";

const initialState = {
    allContacts: Contacts,
    currentContact: {}
};

export default function reducer(state = initialState, action){
    const { payload } = action;
    switch(action.type){
        case ADD_CONTACT:
            return {
                ...state,
                allContacts: [payload,...state.allContacts]
            }
        case CHANGE_FAVORITE:
            state.allContacts.map(item => item.id === payload ?
                     item.isFavorite = !item.isFavorite : item);
            return {
                ...state
            }
        case DELETE_CONTACT:
            let leftContacts = state.allContacts.filter(item => item.id !== payload);
            return {
                ...state,
                allContacts: leftContacts
            }
        case EDIT_CONTACT:
            let contacts = state.allContacts.filter(item => item.id !== payload.id);
            contacts.unshift(payload);
            return {
                ...state,
                allContacts: contacts
            }
        default:
            return state;   
    }
}