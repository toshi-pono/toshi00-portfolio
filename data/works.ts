export interface WorkImage {
  path: string
  alt: string
}

export interface Work {
  id: string
  title: string
  subtitle: string // max 12 文字
  description: string
  date: string
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
    date: '2022/06',
    description:
      'traP内ハッカソンで制作したレストラン即断即決サービスです。3タップで近くのお店からおすすめを選んでくれます。\n\nフロントエンド・バックエンド・デザインを担当しました。',
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
        name: '2022 春ハッカソン 12班 「Fooder」（ブログ）',
        url: 'https://trap.jp/post/1603/',
      },
    ],
    images: [
      { path: 'fooder.webp', alt: 'fooderのロゴ' },
      { path: 'fooder_flow.png', alt: 'fooder利用の流れ' },
    ],
    tags: ['Go', 'Vue', 'ハッカソン'],
  },
  {
    id: 'TypoIME',
    title: 'TypoIME',
    subtitle: 'こっそり変換するIME',
    date: '2022/03',
    description:
      'Rust製macOS向けIMEです。入力時に似た文字に勝手に変換してしまうため、いつの間にかtypoしてしまいます。traP LT2022で発表しました。',
    links: [
      {
        name: 'TypoIME(GitHub)',
        url: 'https://github.com/toshi-pono/TypoIME',
      },
      {
        name: 'Rustでエンジニアは絶対に使えない「TypoIME」を作ろう',
        url: 'https://trap.jp/post/1691/',
      },
    ],
    images: [{ path: 'typoime.png', alt: 'IME自作のすすめ' }],
    tags: ['Rust'],
  },
  {
    id: 'poketch',
    title: 'ポケッチ',
    subtitle: 'ポケモンウォッチの再現',
    date: '2021/04',
    description:
      'M5StackCore2と3Dプリンターでポケットモンスターダイヤモンド・パールに登場する「ポケッチ」を再現しました。時計/メモ帳/歩数計/コイントス機能などを搭載しています',
    links: [
      {
        name: 'poketch(GitHub)',
        url: 'https://github.com/toshi-pono/poketch',
      },
      {
        name: 'm5stack-core2でポケッチを作ろう',
        url: 'https://trap.jp/post/1266/',
      },
    ],
    images: [{ path: 'poketch.png', alt: 'ポケッチの外観' }],
    tags: ['Arduino'],
  },
  {
    id: 'Nascalay',
    title: 'Nascalay',
    subtitle: '協力お絵かきリレーゲーム',
    date: '2021/12',
    description:
      'traP冬ハッカソンにて制作したお絵かきリレーゲームです。複数人で協力して大きな絵を完成させます。 \n\nフロントエンドの実装を担当しました。',
    links: [
      {
        name: 'お絵かきリレーNascalay',
        url: 'https://nascalay.trap.games/',
      },
      {
        name: '2021 冬ハッカソン 2班「Nascalay」（ブログ）',
        url: 'https://trap.jp/post/1467/',
      },
    ],
    images: [{ path: 'nascalay.webp', alt: 'nascalayで遊んでいる様子' }],
    tags: ['React', 'ハッカソン'],
  },
]

export const getWork = (id: string) => {
  return works.find((work) => work.id === id)
}

export const toImagePath = (file: string) => {
  return `/works/${file}`
}
