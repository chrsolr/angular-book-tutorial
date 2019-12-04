import { Component, OnInit, Input } from '@angular/core'
import { GitHubUser } from '../../services/github.service'
@Component({
  selector: 'git-hub-user',
  templateUrl: './git-hub-user.component.html',
  styleUrls: ['./git-hub-user.component.scss'],
})
export class GitHubUserComponent implements OnInit {
  @Input() user: GitHubUser

  constructor() {}

  ngOnInit() {}
}
