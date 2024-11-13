import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MatGridListModule, MatCardModule,MatButtonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(private postService: PostService){

  }

  posts : any[] =  [
  ];
  

  ngOnInit(){ 

    this.postService.getAll().subscribe((data) => {

      this.posts = data;

    }) ;

  }

}
