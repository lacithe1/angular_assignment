import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { User} from 'src/models/user';
@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
  }
}
