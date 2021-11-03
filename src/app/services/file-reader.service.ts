import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FileReaderService {
  constructor(
    private http: HttpClient
  ) {

  }
  getText(
    urlEncoded: any
    ): any{
    return this.http.get(urlEncoded, {responseType: 'text'});
  }
}
