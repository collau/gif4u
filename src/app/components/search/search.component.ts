import {Component, EventEmitter, Injectable, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Search} from './search';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

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
  searching: EventEmitter<Search> = new EventEmitter<Search>();

  private apiURL = 'http://api.giphy.com/v1/gifs/search?api_key=Kf4yZpbunyjW6DWn3632kA71xib2z74c&q=';
  gifData = [];
  http: HttpClient;

  constructor( http: HttpClient ) { this.http = http; }

  ngOnInit() {

    }

    search (searchTerm: HTMLInputElement): void {
    const link = this.apiURL + this.searchGIFForm.value;

    this.http.get(link).subscribe((res: Response) => {
      console.log(res);
      this.gifData = res as any[];
      console.log(this.gifData);

    });
    }
  // search(): Promise {
  // console.log(this.searchGIFForm.value);
  //
  // const promise = new Promise ((resolve, reject) => {
  //   const url = this.apiURL + this.searchGIFForm.value;
  //   this.http.get(url).toPromise().then(res => {
  //     // console.log(res.json());
  //     resolve();
  //   });
  // });
  // return promise;

  // }




}
