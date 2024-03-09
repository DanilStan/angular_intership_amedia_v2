import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { FeedbackData } from 'src/app/core/interfaces/page'

interface ResponseCheckEmail {
  data: {
    success: boolean
  }
}

@Injectable({
  providedIn: 'root',
})
export class FeedbackEmailService {
  constructor(private http: HttpClient) {}
  checkIfUsernameExists(value: string): Observable<boolean> {
    return this.http
      .post<ResponseCheckEmail>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/check-unique-email', {
        email: value,
      })
      .pipe(map((res) => res.data.success))
  }

  sendEmail(emailObject: FeedbackData): Observable<FeedbackData> {
    return this.http.post<FeedbackData>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create', emailObject)
  }
}
