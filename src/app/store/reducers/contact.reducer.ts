// // import the interface
import { Contact } from '../models/contact.model';
import { ContactAction, ContactActionType } from '../actions/contact.action';
import { AppState } from '../models/app-state.model';
// //create a dummy initial state

const initialState : Array<Contact> = [{
  firstName : 'First',
  lastName : 'Last',
  email : 'test@email.com 9999999999 9999',
  phone : '123-456-789',
  address : '1010 Wien'
}];

export function ContactReducer(
  state: Array<Contact> = initialState,
  action: ContactAction
) {
  switch (action.type) {
    case ContactActionType.ADD_CONTACT:
      return [...state, action.payload];
    default:
      return state;
  }
}
