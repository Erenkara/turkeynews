import { DataTransferService } from './../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoryName:string;
  categoryList: any[];

  constructor(private data: DataTransferService) { }

  ngOnInit() {
    this.categoryList = [
      {name: "business"},
      {name: "entertainment"},
      {name: "health"},
      {name: "science"},
      {name: "sports"},
      {name: "technology"}
    ];
    this.data.currentMessage.subscribe(categoryName => this.categoryName = categoryName)
    console.log("nav")
    console.log(this.categoryName)
  }

  sendCategory(categoryName) {
    this.data.changeMessage(categoryName)
  }
}
