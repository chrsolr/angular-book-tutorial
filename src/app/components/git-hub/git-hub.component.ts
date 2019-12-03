import { Component, OnInit } from '@angular/core'
import { GitHubService, GitHubUser } from '../../services/github.service'
import { FormControl } from '@angular/forms'
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.scss'],
  providers: [GitHubService],
})
export class GitHubComponent implements OnInit {
  isLoading = false
  users: GitHubUser[]
  searchControl = new FormControl()

  constructor(private _githubService: GitHubService) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(searchTerm => {
        this.isLoading = true
        this._githubService.getGitHubData(searchTerm).subscribe(value => {
          this.users = value.items
          this.isLoading = false
        })
      })
  }
}
