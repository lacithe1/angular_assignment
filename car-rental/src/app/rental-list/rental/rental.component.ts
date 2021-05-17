import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/models/car';
import { User } from 'src/models/user';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  @Input()
  user!: User;
  cars!: Car[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToCarForm(id){
    this.router.navigate([ '/car-form' ], {
      queryParams: {
        id: id
      }
    })
  }
}
