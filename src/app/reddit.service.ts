import { Injectable } from '@angular/core';
import { Reddit } from './reddit.model';
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

  addReddit(newReddit: Reddit) {
    this.reddits.push(newReddit);
  }

  getRedditById(redditId: string){
    return this.angularFire.database.object('reddits/' + redditId);
  }
}
