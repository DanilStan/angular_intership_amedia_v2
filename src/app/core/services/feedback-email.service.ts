import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { FeedbackData } from '../interfaces/page'

import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

interface ResponseCheckEmail {
  data: {
    success: boolean
  }
}

@Injectable({
  providedIn: 'root',
})
export class feedbackEmailService {
  // private existingUsernames = ['stanislavov@gmail.com', 'Superman', 'Joker', 'Luthor']

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
