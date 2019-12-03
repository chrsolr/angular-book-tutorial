import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'

export interface GitHubResult {
  incomplete_results: boolean
  total_count: number
  items: GitHubUser[]
}

export interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  score: number
}

@Injectable()
export class GitHubService {
  constructor(private _http: HttpClient) {}

  getGitHubData(searchTerm: string): Observable<GitHubResult> {
    return this._http.get<GitHubResult>(`https://api.github.com/search/users?q=${searchTerm}`)
  }
}
