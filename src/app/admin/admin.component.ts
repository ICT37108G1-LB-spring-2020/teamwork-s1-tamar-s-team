import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  phones: Object; 
  loading: boolean;

  constructor(private phonesService: PhonesService) {

  }

  loadPhonesList(): void { 
    this.loading = true; 
    
    this.phonesService.requestPhones().subscribe(data => {
      this.phones = data;
      this.loading = false; 
    });
  }

  deletePhone(id): void {
    this.phonesService.requestPhoneDelete(id).subscribe(() => {
      this.loadPhonesList();
    });
  }

  ngOnInit(): void {
    this.loadPhonesList();
  }
}
