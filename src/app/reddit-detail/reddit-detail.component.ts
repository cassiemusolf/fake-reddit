import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Reddit } from '../reddit.model';
import { RedditService } from '../reddit.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-reddit-detail',
  templateUrl: './reddit-detail.component.html',
  styleUrls: ['./reddit-detail.component.css'],
  providers: [RedditService]
})

export class RedditDetailComponent implements OnInit {
  redditId: string;
  redditToDisplay;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private redditService: RedditService
  ) {}

  voteUp(clickedReddit) {
    clickedReddit.upvote += 1;
  }

  voteDown(clickedReddit) {
    clickedReddit.upvote -= 1;
  }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.redditId = urlParameters['id'];
    });
    this.redditToDisplay = this.redditService.getRedditById(this.redditId);
  }

}
