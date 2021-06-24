import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ContactReducer } from './store/reducers/contact.reducer';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@NgModule({
  declarations: [AppComponent, ContactDetailComponent, ContactAddComponent, ContactCardComponent],
  entryComponents: [ 
    ContactDetailComponent, ContactCardComponent, ContactAddComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      contacts: ContactReducer,
    }),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
