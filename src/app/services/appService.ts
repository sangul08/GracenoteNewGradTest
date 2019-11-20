import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppService {
    constructor(private httpClient: HttpClient){ }
    private baseURL = 'http://data.tmsapi.com/v1.1/programs/';
    getDetails(rootID: string): Observable<any>{
        const params1 = new HttpParams().set('api_key', 'kqtwdcapd2a5hth6aqw4h65f');
        return this.httpClient.get(this.baseURL.concat(rootID), {params: params1});
    }
}
