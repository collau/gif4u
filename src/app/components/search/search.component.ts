import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Http, Response } from '@angular/http';
import {GIF} from './GIF';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

@Injectable()
export class SearchComponent implements OnInit {

  @ViewChild('searchGIFForm')
  searchGIFForm: NgForm;

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter<number>();

  private apiURL = 'http://api.giphy.com/v1/gifs/search?api_key=Kf4yZpbunyjW6DWn3632kA71xib2z74c&q=';
  gifData = [];
  http: Http;

  page = 1;


  constructor( http: Http ) { this.http = http; }

  ngOnInit() {

    }

    search (text: HTMLInputElement): void {
    var link = this.apiURL + text.value;
    console.log(link);

    this.http.request(link).subscribe((res: Response) => {
      console.log(res);
      this.gifData = res.json().data;
      console.log(this.gifData);

    });

    }

  pageChanged(n: number): void {
    this.page = n;
  }


  addGIFToDatabase (saveGIF: HTMLInputElement, gifURL: string): void {

    const save: GIF = {
      username: saveGIF.value,
      gifURL: 'gifURL'
    };
    // this.http.post(url, save) TODO
    //   .toPromise()
    //   .then(() => { /* success */ });
  }




}
