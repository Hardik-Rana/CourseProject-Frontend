import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses=[
    {
      "course": {
        "id": 2,
        "title": "Angular",
        "description": "Framework for Frontend",
        "youtubeLink": "https://www.youtube.com/watch?v=PSRhmtiRNm4&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C",
        "rating": 4,
        "keywords": "web,frontend,google",
        "userId": 2
      },
      "authorName": "Hardik"
    },
    {
      "course": {
        "id": 6,
        "title": "string",
        "description": "Testing",
        "youtubeLink": "string",
        "rating": 1,
        "keywords": "string",
        "userId": 6
      },
      "authorName": "Manan"
    },
    {
      "course": {
        "id": 8,
        "title": "string1",
        "description": "string",
        "youtubeLink": "string",
        "rating": 2,
        "keywords": "string",
        "userId": 2
      },
      "authorName": "Hardik"
    },
    {
      "course": {
        "id": 2,
        "title": "Angular",
        "description": "Framework for Frontend",
        "youtubeLink": "https://www.youtube.com/watch?v=PSRhmtiRNm4&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C",
        "rating": 5,
        "keywords": "web,frontend,google",
        "userId": 2
      },
      "authorName": "Hardik"
    },
    {
      "course": {
        "id": 6,
        "title": "string",
        "description": "Testing",
        "youtubeLink": "string",
        "rating": 3,
        "keywords": "string",
        "userId": 6
      },
      "authorName": "Manan"
    },
    {
      "course": {
        "id": 8,
        "title": "string1",
        "description": "string",
        "youtubeLink": "string",
        "rating": 2,
        "keywords": "string",
        "userId": 2
      },
      "authorName": "Hardik"
    }, {
      "course": {
        "id": 2,
        "title": "Angular",
        "description": "Framework for Frontend",
        "youtubeLink": "https://www.youtube.com/watch?v=PSRhmtiRNm4&list=PL8p2I9GklV45--5t7_N4lveUI6Y31vQ6C",
        "rating": 2,
        "keywords": "web,frontend,google",
        "userId": 2
      },
      "authorName": "Hardik"
    },
    {
      "course": {
        "id": 6,
        "title": "string",
        "description": "Testing",
        "youtubeLink": "string",
        "rating": 5,
        "keywords": "string",
        "userId": 6
      },
      "authorName": "Manan"
    },
    {
      "course": {
        "id": 8,
        "title": "string1",
        "description": "string",
        "youtubeLink": "string",
        "rating": 0,
        "keywords": "string",
        "userId": 2
      },
      "authorName": "Hardik"
    }
  ];

  thumbnail=["https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  "https://img.youtube.com/vi/ovnYGCwUe7U/maxresdefault.jpg",
  "https://img.youtube.com/vi/Ata9cSC2WpM/maxresdefault.jpg"
  
];
}
