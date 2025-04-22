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
    title: 'WebSpeedHackathon 2022 for Student: 2位',
    description:
      'Reactで作られたアプリケーションを高速化するイベントに参加しました',
    tags: ['イベント', '受賞'],
  },
  {
    id: 'klabexpertcamp',
    year: 2022,
    month: 3,
    title: 'KLabExpertCamp 2022',
    description:
      'TCP/IPプロトコルスタックをCで実装する5日間のイベントに参加し、ARPやUDPについて学びました',
    tags: ['イベント'],
    links: [
      {
        name: 'microps',
        url: 'https://github.com/toshi-pono/microps',
      },
    ],
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
    title: 'DeNA 短期インターン: 優勝',
    description: '3日間のハッカソンに参加しReactを用いて開発を行いました',
    tags: ['インターン', '受賞'],
  },
  {
    id: 'UTEone2023',
    year: 2023,
    month: 2,
    title: 'UTE1 チームtetoraSS 3位',
    description:
      'Webアプリケーションが正しく高速に動くよう改善するコンテストに参加しました',
    tags: ['イベント', '受賞'],
    links: [
      {
        name: 'UTE-1｜君は本当に「No.1」なのか？学生限定ITコンテスト',
        url: 'https://x.com/traPisct/status/1629417166176141314',
      },
    ],
  },
  {
    id: 'recruit2025',
    year: 2024,
    month: 9,
    title: 'RECRUIT INTERNSHIP for Data Specialists 2024',
    description:
      'データエンジニアとしてインターンシップに参加し、プロンプトエンジニアリングの実験管理基盤の構築を行いました',
    tags: ['インターン'],
  },
  {
    id: 'ISUCON 14',
    year: 2024,
    month: 12,
    title: 'ISUCON 14',
    description: 'チームtetoraとして参加し、MIXI賞/学生3位となりました',
    tags: ['イベント', '受賞'],
  },
  {
    id: 'git_challenge',
    year: 2024,
    month: 8,
    title: 'git challenge #14',
    description: 'Gitのトラブル解決を行うイベントに参加し、優勝しました',
    tags: ['イベント', '受賞'],
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
