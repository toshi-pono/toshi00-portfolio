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
  techs: string[]
  color?: string
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
        name: '2022 春ハッカソン 12班 「Fooder」製作記',
        url: 'https://trap.jp/post/1603/',
      },
    ],
    images: [
      { path: 'fooder.webp', alt: 'fooderのロゴ' },
      { path: 'fooder_flow.png', alt: 'fooder利用の流れ' },
    ],
    techs: ['Go', 'Vue'],
    tags: ['ハッカソン', 'Web'],
    color: '#ff914c',
  },
  {
    id: 'typoime',
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
    images: [
      { path: 'typoime.png', alt: 'IME自作のすすめ' },
      { path: 'typoime_desc.webp', alt: '0とOなど似た文字に変換する' },
      { path: 'typoime_demo.gif', alt: '文字入力している様子' },
    ],
    techs: ['Rust'],
    tags: ['個人開発'],
    color: '#d7f1a5',
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
    images: [
      { path: 'poketch.png', alt: 'ポケッチの外観' },
      { path: 'poketch_note.png', alt: 'ノート機能の実例' },
      {
        path: 'poketch_band.png',
        alt: '3Dプリンタを使って腕時計バンドを取り付けた',
      },
    ],
    techs: ['Arduino'],
    tags: ['個人開発'],
    color: '#d6d4c7',
  },
  {
    id: 'nascalay',
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
        name: 'GitHub',
        url: 'https://github.com/21hack02win/nascalay-frontend',
      },
      {
        name: '2021 冬ハッカソン 2班「Nascalay」',
        url: 'https://trap.jp/post/1467/',
      },
    ],
    images: [
      { path: 'nascalay.webp', alt: 'nascalayで遊んでいる様子' },
      {
        path: 'nascalay_howtoplay.png',
        alt: 'キャンバスを分割して、最後にまとめる',
      },
      {
        path: 'nascalay_canvas.png',
        alt: '画面中央のキャンバスに絵を書いて送信する',
      },
      {
        path: 'nascalay_example.png',
        alt: '結果',
      },
    ],
    techs: ['React'],
    tags: ['ハッカソン', 'Web'],
    color: '#96A0C0',
  },
  {
    id: 'typoime-vscode',
    title: 'TypoIME-VSCode',
    subtitle: 'こっそりtypoするVSCode拡張',
    date: '2022/09',
    description:
      'TypoIMEのVSCode拡張バージョン。入力した文字を勝手に似た文字に変えてしまう最悪の拡張機能です！勝手に文字が変換される環境でプログラミングができますか？\nVSCodeの拡張機能として公開しています。',
    links: [
      {
        name: 'TypoIME-VSCode(Visual Studio Marketplace)',
        url: 'https://marketplace.visualstudio.com/items?itemName=toshi00.typoime-vscode',
      },
      {
        name: '最悪な拡張機能 TypoIME-VSCode を作ろう',
        url: 'https://trap.jp/post/1692/',
      },
    ],
    images: [
      { path: 'typoime-vscode.png', alt: 'TypoIME-VSCodeのストアの写真' },
    ],
    techs: ['VSCode', 'TypeScript'],
    tags: ['個人開発'],
    color: '#EFF1F3',
  },
  {
    id: 'root-san',
    title: 'ROOT3',
    subtitle: 'グループ割り勘計算アプリ',
    date: '2022/12',
    description:
      'traP冬ハッカソンにて制作しました。記録と自動計算で、旅行のような長期での割り勘計算を素早く助けるアプリケーションです。\n\n画面遷移アニメーションなど、フロントエンドの実装を担当しました。',
    links: [
      {
        name: 'ROOT3',
        url: 'https://root3.trap.games/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/root-san/root-san-UI',
      },
    ],
    images: [
      { path: 'root3.png', alt: 'ROOT3コンセプト画像' },
      {
        path: 'root3_explain.png',
        alt: 'ROOT3は割り勘計算を簡単に記録計算できるサービスです',
      },
      {
        path: 'root3_view1.png',
        alt: 'グループを作成し、招待QRコードを読み込んで、出費を記録します。あとは好きなときに精算するだけ！',
      },
      { path: 'root3_view2.png', alt: 'PWAにも対応しています' },
    ],
    techs: ['React'],
    tags: ['ハッカソン', 'Web'],
    color: '#428C95',
  },
  {
    id: 'linq',
    title: 'linQ',
    subtitle: 'ブックマーク共有サービス',
    date: '2021/10',
    description:
      'traP春ハッカソンにて制作しました。ブックマークの共有・閲覧ができるサービスです\n\nバックエンドの実装を担当しました。',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/hackathon21spring-05/linq-backend',
      },
      {
        name: '2021春ハッカソン 5班「linQ」製作記',
        url: 'https://trap.jp/post/1321/',
      },
    ],
    images: [{ path: 'linq.png', alt: 'linQサービス画像' }],
    techs: ['Go'],
    tags: ['ハッカソン', 'Web'],
    color: '#E5F6EF',
  },
  {
    id: 'portfolio',
    title: 'ポートフォリオ',
    subtitle: '本サイト',
    date: '2023/02',
    description:
      'ポートフォリオです。Next13のAppDirectoryを使用しています。SSGでcloudflare pagesにデプロイしています。',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toshi-pono/toshi00-portfolio',
      },
    ],
    images: [{ path: 'portfolio.png', alt: 'ポートフォリオコンセプト画像' }],
    techs: ['Next.js'],
    tags: ['個人開発', 'Web'],
    color: '#ECF2FB',
  },
]

export const getWork = (id: string): Work | undefined => {
  return works.find((work) => work.id === id)
}

export const getNextWorkId = (id: string): string => {
  const index = works.findIndex((work) => work.id === id)
  if (index === -1) {
    return works[works.length - 1].id
  }
  return works[(index + 1) % works.length].id
}

export const getPrevWorkId = (id: string): string => {
  const index = works.findIndex((work) => work.id === id)
  if (index === -1) {
    return works[0].id
  }
  return works[(index - 1 + works.length) % works.length].id
}

export const toImagePath = (file: string) => {
  return `/works/${file}`
}

export const filterWorks = (tags: string[]) => {
  return works.filter((work) => {
    return tags.some((tag) => work.tags.includes(tag))
  })
}

export const tags = Array.from(new Set(works.map((work) => work.tags).flat()))
