import { NgModule } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { ProductsComponent } from './components/products/products.component'
import { GitHubComponent } from './components/git-hub/git-hub.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { UserFormComponent } from './components/user-form/user-form.component'
import { LoginComponent } from './components/login/login.component'

export const routing = RouterModule.forRoot([
  { path: '', component: HomeComponent },
  { path: 'Products', component: ProductsComponent },
  { path: 'User Form', component: UserFormComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'GitHub', component: GitHubComponent },
  { path: '**', component: NotFoundComponent },
])
