import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/models/app-state.model';
import { Contact } from '../../store/models/contact.model';
import { AddContactAction } from '../../store/actions/contact.action';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public contact: Contact) {}


  ngOnInit(): void {
  }

}
