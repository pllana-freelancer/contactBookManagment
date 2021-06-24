import { Action } from '@ngrx/store';
import { Contact } from '../models/contact.model';

export enum ContactActionType {
  ADD_CONTACT = '[CONTACT] Add Contact',
  OPEN_CONTACT = '[CONTACT] Open Contact',
}

export class AddContactAction implements Action {
  readonly type = ContactActionType.ADD_CONTACT;

  constructor(public payload: Contact) {}
}

export type ContactAction = AddContactAction;
