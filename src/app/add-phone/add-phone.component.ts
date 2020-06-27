import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.sass']
})
export class AddPhoneComponent implements OnInit {
  addPhoneForm:FormGroup; 

  constructor(formBuilder: FormBuilder, private phonesService: PhonesService) {
    this.addPhoneForm = formBuilder.group({
      'model': [''],
      'type': [''],
      'price': [''],
      'imgUrl': ['']
    })
  }

  addPhone(){
    this.phonesService.requestPhoneAdding(this.addPhoneForm.value).subscribe(() => {
      alert("Phone has been successfully added!");
      this.addPhoneForm.reset();
    });
  }

  onSubmit(): void {
    this.addPhone();
  }

  ngOnInit(): void {
  }
}
