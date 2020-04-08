import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css'],
})
export class SocialPostComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  thoughtPost: Post[] = [
    {
      title: 'Grand Circus',
      thought: 'Grand Circus is cool',
    },
    {
      title: 'Ritual',
      thought: 'Ritual is a well developed app',
    },
    {
      title: 'Scott',
      thought: 'Scott rides scooters',
    },
  ];

  showPost: boolean = false;

  onSubmit(e) {
    this.showPost = !this.showPost;
  }

  onDelete(post): void {
    this.thoughtPost = this.thoughtPost.filter((x) => x !== post.title);
  }
}
