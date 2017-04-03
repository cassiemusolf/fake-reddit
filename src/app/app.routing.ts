import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopularComponent } from './popular/popular.component';
import { AddRedditComponent } from './add-reddit/add-reddit.component';
import { RedditDetailComponent } from './reddit-detail/reddit-detail.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'popular',
    component: PopularComponent
  },
  {
    path: 'add-reddit',
    component: AddRedditComponent
  },
  {
    path: 'reddits/:id',
    component: RedditDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
