import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {Gif4uService} from '../../../../gif4u.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@Injectable()
export class UserComponent implements OnInit {

  @ViewChild('retrieveGIF')
  retrieveGIF: NgForm;
  retrievedGIFs = [];

  ngOnInit() {

  }

  constructor(private Gif4u: Gif4uService) { }

  retrieveuserGIF() {

    this.retrievedGIFs = [];

    this.Gif4u.getUserGifs(this.retrieveGIF.value.username)
      .then((data) => {
        console.log(data)

        for (const d of data.data) {
          this.retrievedGIFs.push({
            url: data.url
          });
        }
}
