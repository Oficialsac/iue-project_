import { Component , OnInit} from '@angular/core';
import { UserService } from '../user/user.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})

export class HomeComponent implements OnInit {

  
  role: boolean = true;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    if(localStorage.getItem('role') == 'admin'){
      this.role = true;
    }else{
      this.role = false;
    }
  }
}
