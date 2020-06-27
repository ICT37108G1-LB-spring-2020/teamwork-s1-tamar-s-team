import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { PhonesService } from './services/phones.service';
import { PhoneComponent } from './phone/phone.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    AdminComponent,
    PhoneComponent,
    SpinnerComponent,
    AddPhoneComponent,
    EditPhoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PhonesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
