import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from './store/models/contact.model';
import { AppState } from './store/models/app-state.model';
import { MatDialog } from '@angular/material/dialog';
import { ContactAddComponent } from './components/contact-add/contact-add.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  contacts: Observable<Array<Contact>>;
  selectedContact: Contact;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.contacts = this.store.select((store) => store.contacts);
  }

  addContact() {
    this.dialog.open(ContactAddComponent);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }
}
