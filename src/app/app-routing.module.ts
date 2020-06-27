import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';
import { PhoneComponent } from './phone/phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { EditPhoneComponent } from './edit-phone/edit-phone.component';

const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'phone/:id', component: PhoneComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/add', component: AddPhoneComponent },
  { path: 'admin/edit/:id', component: EditPhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
