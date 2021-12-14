import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any
  p: number = 1;
  constructor(private ds: DataService) {
    
   }

  ngOnInit(): void {
    this.ds.getUsers().subscribe((response) => {
      this.users = response;

    })
    
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
