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
    id: 'mixi',
    year: 2021,
    month: 11,
    title: 'mixi Bug Shooting Challenge #6',
    description:
      'ログやソースコードからシステムの不具合を見つけ出し修正するというチャレンジに参加して優勝しました',
    tags: ['イベント', '受賞'],
    links: [
      {
        name: 'Bug Shooting Challenge #6で優勝しました！',
        url: 'https://toshi00.hatenablog.com/entry/2021/11/08/234901',
      },
    ],
  },
  {
    id: 'seccamp',
    year: 2021,
    month: 8,
    title: 'セキュリティ・キャンプ全国大会2021',
    description:
      'X-2 IoTものづくりコースに参加し、JTAGアダプタの制作やセキュリティについて学びました',
    tags: ['イベント'],
    links: [
      {
        name: 'セキュリティ・キャンプ全国大会2021詳細',
        url: 'https://www.ipa.go.jp/jinzai/camp/2021/zenkoku2021_index.html',
      },
      {
        name: 'JTAGアダプター製作記（Speaker Deck）',
        url: 'https://speakerdeck.com/toshi00/jtagadapterzhi-zuo-ji-seccamp2021-x-2',
      },
    ],
  },
  {
    id: 'webspeedhackathon',
    year: 2022,
    month: 3,
    title: 'WebSpeedHackathon 2022 for Student：2位',
    description:
      'Reactで作られたアプリケーションを高速化するイベントに参加しました',
    tags: ['イベント', '受賞'],
  },
  {
    id: 'pixiv',
    year: 2022,
    month: 2,
    title: 'pixiv 春インターン',
    description: '小説チームに参加しReactでの開発やテストの実装を行いました',
    tags: ['インターン'],
  },
  {
    id: 'DeNA',
    year: 2022,
    month: 9,
    title: 'DeNA 短期インターン：優勝',
    description: '3日間のハッカソンに参加しReactを用いて開発を行いました',
    tags: ['インターン', '受賞'],
  },
].sort((a, b) => {
  if (a.year === b.year) {
    return b.month - a.month
  }
  return b.year - a.year
})

export const tags = Array.from(new Set(logs.map((log) => log.tags).flat()))
export const defaultTags = ['インターン', '受賞', 'イベント']

export const filterLogs = (tags: string[]) => {
  return logs.filter((log) => {
    return log.tags.some((tag) => tags.includes(tag))
  })
}
