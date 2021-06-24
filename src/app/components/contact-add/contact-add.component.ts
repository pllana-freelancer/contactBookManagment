import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.model';
import { Contact } from '../../store/models/contact.model';
import { AddContactAction } from '../../store/actions/contact.action';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {

  constructor(private store: Store<AppState>) {}


  ngOnInit(): void {
  }

  addContact(form: NgForm) {
    this.store.dispatch(new AddContactAction(form.value));
  }

}
