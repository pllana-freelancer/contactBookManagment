import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../store/models/contact.model';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: Contact;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showContact(item : Contact) {
    this.dialog.open(ContactDetailComponent, {data : item});
  }

}
