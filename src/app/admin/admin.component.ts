import { Component, OnInit } from '@angular/core';
import { Reddit } from '../reddit.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [RedditService]
})
export class AdminComponent implements OnInit {

  constructor(private redditService: RedditService) { }

  ngOnInit() {
  }

  submitForm(name: string, user: string, content: string, upvote: number) {
    var newRedditToAdd: Reddit = new Reddit(name, user, content, upvote);
    this.redditService.addReddit(newRedditToAdd);
  }
}
