import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/user';
import { UserService } from '../../services/user.service';
import { AlertifyService } from '../../services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private aletify: AlertifyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
this.route.data.subscribe(data => {
  this.user = data.user;
});
  }

  // loadUser() {
   // this.userService
      // .getUser(+this.route.snapshot.params.id)
      // .subscribe((user: User) => (this.user = user), error => this.aletify.error(error));
  // }
}
