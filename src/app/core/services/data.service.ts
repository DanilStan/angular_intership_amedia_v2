import { Injectable } from '@angular/core'

export interface NewsData {
  number: string
  title: string
  paragraphOne: string
  paragraphTwo?: string
  paragraphThree?: string
  id?: number
}

export interface InfoData {
  id?: number
  img1x: string
  img2x: string
  imgAlt: string
  title: string
  text: string
  linkText?: string
  link?: string
  icon?: {
    iconLink: string[]
    iconSvg: string[]
  }
}

export interface FooterIcon {
  id?: number
  img: string
  link: string
  imgAlt: string
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
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
      paragraphTwo: 'Мораторій на інспекційний дерконтроль',
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

  infoData: InfoData[] = [
    {
      id: 1,
      img1x: 'assets/img/fist.png',
      img2x: 'assets/img/fist2.png',
      imgAlt: 'Image of human fist',
      title: 'Зіткнулися з корупцією?',
      text: 'Пишіть нам',
      linkText: 'hello@thedigital.gov.ua',
      link: 'mailto:hello@thedigital.gov.ua',
    },
    {
      id: 2,
      img1x: 'assets/img/message.png',
      img2x: 'assets/img/message2.png',
      imgAlt: 'Image message icon',
      title: 'Напишіть у чат-бот',
      text: 'Оберіть месенджер',
      icon: {
        iconLink: [
          'https://www.viber.com/diia_help_bot',
          'https://t.me/mincifra_bot',
          'https://www.messenger.com/t/1285934254793174/?messaging_source=source%3Apages%3Amessage_shortlink&source_id=1441792&recurring_notification=0',
        ],
        iconSvg: [
          'assets/img/icons/sprite.svg#icon-viber',
          'assets/img/icons/sprite.svg#icon-telegram',
          'assets/img/icons/sprite.svg#icon-facebook',
        ],
      },
    },
    {
      id: 3,
      img1x: 'assets/img/tel.png',
      img2x: 'assets/img/tel2.png',
      imgAlt: 'Image of telephone icon',
      title: 'Зателефонуйте на гарячу лінію',
      text: 'Працює з 09:00 до 18:00',
      linkText: '+38 097 162 85 29',
      link: 'tel:+38 097 162 85 29',
    },
  ]

  footerIconData: FooterIcon[] = [
    {
      id: 1,
      img: 'assets/img/icons/facebook-footer.svg',
      link: 'https://www.facebook.com/mintsyfra/',
      imgAlt: 'Facebook Icon',
    },
    {
      id: 2,
      img: 'assets/img/icons/twitter-footer.svg',
      link: 'https://twitter.com/mintsyfra',
      imgAlt: 'Twitter Icon',
    },
    {
      id: 3,
      img: 'assets/img/icons/telegram-footer.svg',
      link: 'https://t.me/mintsyfra',
      imgAlt: 'Telegram Icon',
    },
    {
      id: 4,
      img: 'assets/img/icons/instagram-footer.svg',
      link: 'https://www.instagram.com/mintsyfra.official/',
      imgAlt: 'Instagram Icon',
    },
    {
      id: 5,
      img: 'assets/img/icons/youtube-footer.svg',
      link: 'https://www.youtube.com/channel/UCJpDqJoUTcjMJgBY-DRtfcg',
      imgAlt: 'Youtube Icon',
    },
    {
      id: 6,
      img: 'assets/img/icons/whatsapp-footer.svg',
      link: 'https://t.me/mincifra_bot',
      imgAlt: 'Telegram Bot Icon',
    },
  ]
}
