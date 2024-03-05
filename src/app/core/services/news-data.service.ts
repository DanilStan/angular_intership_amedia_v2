import { Injectable } from '@angular/core'
import { NewsData } from '../interfaces/page'

@Injectable({
  providedIn: 'root',
})
export class NewsDataService {
  newsData: NewsData[] = [
    {
      number: '01',
      title: 'Старт',
      paragraphOne: 'Ліквідація ДАБІ',
      paragraphTwo: 'Створення Сервісної служби',
    },
    {
      number: '02',
      title: 'Березень — Травень 2020',
      paragraphOne: 'Перехідний період',
      paragraphTwo: 'Мораторій на інспекційний держконтроль',
    },
    {
      number: '03',
      title: 'Червень 2020',
      paragraphOne: 'Створення ДІМ',
      paragraphTwo: 'Запуск нового реєстру',
    },
    {
      number: '04',
      title: 'Вересень 2020',
      paragraphOne: 'Державне агенство з питань технічного регулювання у містобудуванні',
    },
    {
      number: '05',
      title: 'Січень 2021',
      paragraphOne: 'Запровадження страхування',
    },
  ]
  constructor() {}
}
