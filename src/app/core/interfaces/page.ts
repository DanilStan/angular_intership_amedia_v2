export interface MetaData {
  title?: string
  description?: string
  ogTitle?: string
  ogDescription?: string
  keywords?: string
  ogImageUrl?: string
  ogVideoUrl?: string
}

export interface Page<T> {
  slug: string
  title: string
  metaData: MetaData
  contentData: T
}

export interface FeedbackData {
  email: string
}

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
