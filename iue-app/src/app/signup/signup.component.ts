import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user/user.services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  public formData!: FormGroup;

  User = {
    username: '',
    password: '',
  };

  usernameValid: boolean = false;
  passwordValid: boolean = false;
  succes = false;
  admin_role = false;


  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formData = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get Username() {
    return this.formData.get('username')!;
  }
  get Password() {
    return this.formData.get('password')!;
  }

  signup(): void {
    this.usernameValid = this.formData.get('username')?.valid || false;
    this.passwordValid = this.formData.get('password')?.valid || false;

    if (this.usernameValid && this.passwordValid) {
      // Here we need call to API to verify this user

      this.User = {
        username: this.formData.get('username')?.value,
        password: this.formData.get('password')?.value,
      };

      this.userService.signup(this.User).subscribe((res) => {

        window.alert("Registro exitoso")
        this.router.navigateByUrl('user')
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
