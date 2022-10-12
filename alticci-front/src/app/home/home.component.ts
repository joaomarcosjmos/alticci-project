import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  number: any;

  constructor(private service: AppService) { }
  ngOnInit(): void {
    this.number = 0;
    this.calculateAlticci();
  }

  calculateAlticci() {
    this.service.getAlticciSequence(this.number).subscribe((response: any) => {
      alert(response);
    });
  }
}
