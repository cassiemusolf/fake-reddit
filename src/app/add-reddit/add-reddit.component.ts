import { Component, Output, EventEmitter } from '@angular/core';
import { Reddit } from '../reddit.model';
@Component({
  selector: 'app-add-reddit',
  templateUrl: './add-reddit.component.html',
  styleUrls: ['./add-reddit.component.css']
})
export class AddRedditComponent {
  @Output() newRedditSender = new EventEmitter();

  submitForm(name: string, user: string, content: string, id: number) {
    var newRedditToAdd: Reddit = new Reddit(name, user, content, id);
    this.newRedditSender.emit(newRedditToAdd);
  }
}
