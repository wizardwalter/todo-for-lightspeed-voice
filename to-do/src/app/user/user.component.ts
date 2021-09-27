import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/todo.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(
    public userService: UserService,
    public activatedRoute: ActivatedRoute,
    public todoService: TodoService
  ) {}
  username;
  user;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.username = params.get('username');
    });
    this.userService.getOneUser(this.username).subscribe((res) => {
      this.user = res['user'];
      console.log(this.user)
    });
  }
}












// this.members.forEach((element) => {
//   element.forEach((element) => {
//     this.userService.getOneUser(element).subscribe((res) => {
//       this.members2.push(res['user']);
//     });
//   });
// });
//  for(let i = 0; i < this.members2.length; i++){
//    for(let j = 0; j < this.members2.length; j++)
//     if(this.members2[i] == this.members2[j]){
//       console.log('i',this.members2[i])
//       console.log('j',this.members2[j])
//       this.members2.splice(i,1)
//     }
// }
