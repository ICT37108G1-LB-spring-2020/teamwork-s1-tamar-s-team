import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.sass']
})
export class PhoneComponent implements OnInit {
  id: number;
  phone;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private phonesService: PhonesService) { 
    route.params.subscribe(
      params => { 
        this.id = params['id']; 
      }
    ); 
  };

  loadPhone(): void {    
    this.phonesService.requestPhoneById(this.id).subscribe(
      (item) => {
        this.phone = item;
        this.loading = false;
      }  
    )
  }

  ngOnInit(): void {
    this.loadPhone();
  }
}
