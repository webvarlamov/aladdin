import {Component} from '@angular/core';
import {HttpClientService} from "./service/http/http-client.service";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aladdin';

  constructor(private httpClientService: HttpClientService) {
  }
}
