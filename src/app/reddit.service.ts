import { Injectable } from '@angular/core';
import { Reddit } from './reddit.model';
import { REDDITS } from './mock-reddits';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Injectable()
export class RedditService {
  reddits: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.reddits = angularFire.database.list('reddits');
  }

  getReddits() {
    return this.reddits;
  }

  getRedditById(redditId: number){
    for (var i = 0; i <= REDDITS.length - 1; i++) {
      if (REDDITS[i].id === redditId) {
        return REDDITS[i];
      }
    }
  }

}
