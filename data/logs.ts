export interface Log {
  id: string
  year: number
  month: number
  title: string
  description: string
  tags: string[]
  links?: {
    name: string
    url: string
  }[]
}

export const logs: Log[] = [
  {
    id: 'seccamp',
    year: 2021,
    month: 8,
    title: 'セキュリティ・キャンプ全国大会2021',
    description:
      'X-2 IoTものづくりコースに参加し、JTAGアダプタの制作やセキュリティについて学びました。',
    tags: ['イベント'],
    links: [
      {
        name: 'セキュリティ・キャンプ全国大会2021詳細',
        url: 'https://www.ipa.go.jp/jinzai/camp/2021/zenkoku2021_index.html',
      },
    ],
  },
  {
    id: 'webspeedhackathon',
    year: 2022,
    month: 3,
    title: 'WebSpeedHackathon 2022 for Student 2位',
    description:
      'Reactで作られたアプリケーションを高速化するイベントに参加しました。',
    tags: ['イベント', '受賞'],
  },
].sort((a, b) => {
  if (a.year === b.year) {
    return b.month - a.month
  }
  return b.year - a.year
})
