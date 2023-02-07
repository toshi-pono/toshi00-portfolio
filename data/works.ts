export interface WorkImage {
  path: string
  alt: string
}

export interface Work {
  id: string
  title: string
  subtitle: string // max 12 文字
  description: string
  links: {
    name: string
    url: string
  }[]
  images: WorkImage[]
  tags: string[]
}

export const works: Work[] = [
  {
    id: 'fooder',
    title: 'Fooder',
    subtitle: 'レストラン即決サービス',
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
    images: [
      { path: 'fooder.webp', alt: 'image' },
      { path: 'fooder_flow.png', alt: 'fooder利用の流れ' },
    ],
    tags: ['Golang', 'Vue'],
  },
]

export const getWork = (id: string) => {
  return works.find((work) => work.id === id)
}

export const toImagePath = (file: string) => {
  return `/works/${file}`
}
