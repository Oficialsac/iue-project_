import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  User = {
    username: '',
    password: '',
  };

  usernameValid: boolean = false;
  passwordValid: boolean = false;
  succes = false;
  admin_role = false;

  public groupForm!: FormGroup;

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    if (localStorage.getItem('role')?.length! > 0) {
      localStorage.clear();
    }
    this.initForm();
  }

  initForm(): void {
    this.groupForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get Username() {
    return this.groupForm.get('username')!;
  }
  get Password() {
    return this.groupForm.get('password')!;
  }

  loginSesion(): void {
    this.usernameValid = this.groupForm.get('username')?.valid || false;
    this.passwordValid = this.groupForm.get('password')?.valid || false;

    if (this.usernameValid && this.passwordValid) {
      // Here we need call to API to verify this user

      this.User = {
        username: this.groupForm.get('username')?.value,
        password: this.groupForm.get('password')?.value,
      };

      this.userService.login(this.User).subscribe((res) => {
        localStorage.setItem('role', res.role);
        this.router.navigateByUrl('home')
      });

      // if (this.succes) {
      //   // if (this.admin_role) {
      //   //   this.userService.role = true;
      //   //   this.router.navigateByUrl('/home')
      //   // } else {
      //   //   this.userService.role = false;
      //   //   this.router.navigateByUrl('/home')
      //   // }
      // }
    }
  }

}
