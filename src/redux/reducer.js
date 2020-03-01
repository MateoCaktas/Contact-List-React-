
import Contacts from "../Contacts.json";
import { TEST, ADD_CONTACT, DELETE_CONTACT, CHANGE_FAVORITE } from "./types";

const initialState = {
    allContacts: Contacts
};

export default function reducer(state = initialState, action){    
    console.log(action);
    const { payload } = action;
    switch(action.type){
        case TEST:            
            return {
                ...state
            }
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
            console.log('test');
            console.log(payload);
            let something = state.allContacts.filter(item => item.id !== payload);
            console.log(something);
            return {
                ...state,
                allContacts: something
            }
        default:
            return state;   
    }
}