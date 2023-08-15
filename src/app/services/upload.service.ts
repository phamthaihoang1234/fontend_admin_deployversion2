import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  url = "http://localhost:8080/api/auth/upload-file";

  constructor(private http: HttpClient) { }

  uploadProduct(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    return this.http.post(this.url, data)
  }

  

  uploadCustomer(file: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('file', file);
    return this.http.post(this.url, data)
  }
}
