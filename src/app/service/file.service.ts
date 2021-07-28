import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  url = "https://localhost:44316/API/Demo/";

  constructor(private http : HttpClient) 
  { }

  public downloadImage(image: string) : Observable<Blob>
  {
    return this.http.get(this.url + '/GetImage?image=' + image,{
      responseType : 'blob'
    });
  }

  public downloadFile(File: string) : Observable<Blob>
  {
    return this.http.get(this.url + '/GetFile?docFile=' + File, {
      responseType : 'blob'
    });
  }

  public GetFilesData(): Observable<any[]>
  {
    return this.http.get<any[]>(this.url + '/GetFileDetails');
  }

  AddFileDetails(data : FormData) : Observable<string>
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const HttpOptions = {headers : headers};
    return this.http.post<string>(this.url + '/AddFileDetails/', data, HttpOptions);
  }
}
