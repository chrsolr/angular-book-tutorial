import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user'

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass'],
})
export class UserFormComponent implements OnInit {
  countries = ['USA', 'Singapore', 'Hong Kong', 'Australia']
  model = new User('', '', '')
  submitted = false

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true
  }
}
