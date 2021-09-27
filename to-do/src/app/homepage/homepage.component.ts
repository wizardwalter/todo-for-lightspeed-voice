import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public userService: UserService) { }
  users;
  ngOnInit(): void {
    this.userService.getUsers().subscribe(res =>{
      this.users = res['users']
    })

  }

}
