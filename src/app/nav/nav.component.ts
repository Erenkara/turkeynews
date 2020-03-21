import { DataTransferService } from './../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categoryName:string;
  categoryList: any[];
  contentParam: string;

  constructor(private data: DataTransferService,private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.categoryList = [
      {name: "business", tr_name:"iş dünyası"},
      {name: "entertainment", tr_name:"eğlence"},
      {name: "health", tr_name :"sağlık"},
      {name: "science", tr_name:"bilim"},
      {name: "sports", tr_name:"spor"},
      {name: "technology",tr_name:"teknoloji"}
    ];
     this.activatedRoute.params.subscribe(p => {
      this.categoryName = p["content"];
    });
    this.data.currentMessage.subscribe(categoryName => this.categoryName = categoryName)
  }

  sendCategory(categoryName) {
    this.data.changeMessage(categoryName)
  }
}
