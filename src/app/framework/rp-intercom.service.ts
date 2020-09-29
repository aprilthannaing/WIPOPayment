import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs';
declare var jQuery: any;
@Injectable()
export class RpIntercomService {
    _cbpayurl:string = "";
    _apiurl:string = "";
    _mpuurl:string = "";
    sessionid: string = "";  
    version: string = ""; 
    private _mybean: any;
    transRef: string = "";
    merDqrCode: string = "";

    private _rpbeanSource = new Subject<any>();
    sendBean(x: any) {
        this._mybean = x;
        this._rpbeanSource.next(x);
    }
}