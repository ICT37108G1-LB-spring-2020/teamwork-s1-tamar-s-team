import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PhonesService} from '../services/phones.service';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.component.html',
  styleUrls: ['./edit-phone.component.sass']
})
export class EditPhoneComponent implements OnInit {
  editPhoneForm:FormGroup; 
  id: number;
  phone;
  loading: boolean = true;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private phonesService: PhonesService) { 
    route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    )
  };

  editPhone(){
    this.phonesService.requestPhoneEdditing(this.id, this.editPhoneForm.value).subscribe(() => {
      alert("Phone has been successfully edited");
    });
  }

  onSubmit() {
    if(this.loading == true) {
      return;
    }
    this.editPhone();
  }

  loadPhone(): void {    
    this.phonesService.requestPhoneById(this.id).subscribe(
      (item:any) => {
        this.editPhoneForm = this.formBuilder.group({
          'model': [`${item.model}`],
          'type': [`${item.type}`],
          'price': [`${item.price}`],
          'imgUrl': [`${item.imgUrl}`]
        })
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadPhone();
  }
}
