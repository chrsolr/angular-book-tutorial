import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { PasswordValidator, UsernameValidator } from './validators'
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  result: { username: string; passwword: string }

  constructor(fb: FormBuilder, private _loginService: LoginService) {
    this.form = fb.group({
      username: ['', Validators.compose([Validators.required, UsernameValidator.cannotContainSpacde])],
      password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpacde])],
    })
  }

  ngOnInit() {}

  login() {
    const username = this.form.controls.username.value
    const password = this.form.controls.password.value
    const result = this._loginService.login(username, password)

    this.form.controls.username.setErrors({
      invalidLogin: !!result,
    })

    this.form.controls.password.setErrors({
      invalidLogin: !!result,
    })
  }
}
