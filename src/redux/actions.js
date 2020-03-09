import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    CHANGE_FAVORITE,
    EDIT_CONTACT
} from "./types"

import store from "./store"
export const addContactAction = (Contact) => (
    store.dispatch({
        type: ADD_CONTACT,
        payload: Contact
    })
)

export const deleteContactAction = (id) => (
    store.dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
)

export const changeFavoriteAction = (id) => (
    store.dispatch({
        type: CHANGE_FAVORITE,
        payload: id
    })
)

export const editContactAction = (Contact) => (
    store.dispatch({
        type: EDIT_CONTACT,
        payload: Contact
    })
)