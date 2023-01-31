export interface Work {
  id: string
  title: string
  subtitle: string
  description: string
  links: {
    name: string
    url: string
  }[]
  images: string[]
  tags: string[]
}

export const works: Work[] = [
  {
    id: 'fooder',
    title: 'Fooder',
    subtitle: 'レストラン即断即決サービス',
    description:
      '部内ハッカソン（2022年春）で制作したレストラン即断即決サービスです。フロントエンドとバックエンドを担当しました。',
    links: [
      {
        name: 'Fooder',
        url: 'https://fooder.pages.dev/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/22hack12spring',
      },
      {
        name: 'ブログ(デジタル創作同好会 traP)',
        url: 'https://trap.jp/post/1603/',
      },
    ],
    images: ['fooder.webp'],
    tags: ['Golang', 'Vue'],
  },
]

export const getWork = (id: string) => {
  return works.find((work) => work.id === id)
}
