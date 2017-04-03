import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Reddit } from '../reddit.model';
import { Router } from '@angular/router';
import { RedditService } from '../reddit.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RedditService]
})

export class HomeComponent implements OnInit {
  reddits: FirebaseListObservable<any[]>;

  constructor(private router: Router, private redditService: RedditService){}

  ngOnInit(){
    this.reddits = this.redditService.getReddits();
  }

  goToDetailPage(clickedReddit) {
    this.router.navigate(['reddits', clickedReddit.$key]);
  };
}
