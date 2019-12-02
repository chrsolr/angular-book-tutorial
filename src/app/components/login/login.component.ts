import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PasswordValidator, UsernameValidator } from './validators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  result: { username: string; passwword: string }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required, UsernameValidator.cannotContainSpacde])],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpacde])],
    })
  }

  ngOnInit() {}

  login() {}
}
