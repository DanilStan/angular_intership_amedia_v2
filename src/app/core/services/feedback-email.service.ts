import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'
import { FeedbackData } from '../interfaces/page'

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

  sendEmail(emailObject: FeedbackData) {
    return this.http.post<FeedbackData>('https://rm-united24-rebuild-api-public.demo.ukrohost.com/appeal/create', emailObject)
  }
}
