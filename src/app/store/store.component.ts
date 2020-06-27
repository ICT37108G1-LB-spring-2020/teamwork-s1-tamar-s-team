import { Component, OnInit } from '@angular/core';
import { PhonesService } from '../services/phones.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.sass']
})
export class StoreComponent implements OnInit {
  phones: Object; 
  loading: boolean = true;

  constructor(private phonesService: PhonesService) {

  }

  loadPhonesList(): void { 
    this.phonesService.requestPhones().subscribe(data => {
      this.phones = data;
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.loadPhonesList();
  }
}
