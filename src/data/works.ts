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
    id: 'slopenav',
    title: 'SlopeNav',
    subtitle: 'ブラインドスキー支援システム',
    date: '2025/02',
    description:
      'ブラインドスキーを支援するためのシステムです。シミュレーション環境において、カメラを用いて障害物を検知し、ターンに基づく経路を設計、音声ガイドで誘導します。',
    links: [
      {
        name: 'Augmented Humans 2025',
        url: 'https://augmented-humans.org/program/',
      },
    ],
    images: [
      {
        path: 'slopenav.webp',
        alt: 'SlopeNavはブラインドスキーを支援するためのシステムです',
      },
      {
        path: 'slopenav_system.webp',
        alt: 'カメラを用いて障害物を検知し、ターンに基づく経路を設計、音声ガイドで誘導します',
      },
      {
        path: 'slopenav_path.webp',
        alt: 'ターンに基づく経路を設計',
      },
    ],
    techs: ['Python', 'OpenCV'],
    tags: ['研究'],
    color: '#ebdfcf',
  },
  {
    id: 'alchemycode',
    title: 'AlchemyCode',
    date: '2024/08',
    subtitle: '魔法陣風ARマーカー',
    description:
      '魔法陣風ARマーカーの設計と読み取りパイプラインの構築を行いました。',
    links: [
      {
        name: 'MIRU2024',
        url: 'https://miru-committee.github.io/miru2024/',
      },
    ],
    images: [
      {
        path: 'alchemycode/alchemycode.webp',
        alt: 'AlchemyCodeはスマートフォンで読み取り可能な魔法陣風ARマーカーです',
      },
      {
        path: 'alchemycode/alchemycode_pipeline.webp',
        alt: 'AlchemyCodeを読み取るための機械学習パイプライン',
      },
      {
        path: 'alchemycode/alchemycode_pattern.webp',
        alt: 'AlchemyCodeの設計',
      },
      {
        path: 'alchemycode/alchemycode_examples.webp',
        alt: 'AlchemyCodeの読み取り例',
      },
    ],
    tags: ['研究', 'ハッカソン'],
    techs: ['Python', 'OpenCV'],
    color: '#e8e7e3',
  },
  {
    id: 'monoeye',
    title: 'MonoEye mobile',
    subtitle: 'ウェアラブル姿勢推定',
    date: '2023/12',
    description:
      '胸部に装着した魚眼カメラを用いて姿勢推定するシステムの高速化とウェアラブル化に取り組みました。モデルの推論高速化、推論パイプラインの構築やwebビューの実装を行いました。',
    links: [
      {
        name: '第31回インタラクティブシステムとソフトウェアに関するワークショップ(WISS 2023)',
        url: 'https://www.wiss.org/WISS2023Proceedings/data/2-B01.pdf',
      },
    ],
    images: [
      {
        path: 'monoeye.webp',
        alt: 'MonoEye mobileは魚眼カメラを用いて姿勢推定を行うウェアラブルシステムです。',
      },
      {
        path: 'monoeye_overview.webp',
        alt: '胸部装着型ウェアラブル姿勢推定システム',
      },
      {
        path: 'monoeye_system.webp',
        alt: '魚眼画像を取得しJetsonOrinNano上の推論モデルで姿勢推定',
      },
      {
        path: 'monoeye_example.webp',
        alt: '場所に依存せず利用できるため、ライフログデバイスやスキル向上支援に活用可能',
      },
    ],
    techs: ['Python', 'ONNX'],
    tags: ['研究'],
    color: '#eeded3',
  },
  {
    id: 'aiotraq',
    title: 'AiotraQ',
    subtitle: 'traQ向けBotメッセージ送信ライブラリ',
    date: '2024/06',
    description:
      'PythonでtraQ Botを高速に開発するためのライブラリです。宣言的に記述できるため、traQのAPIを意識せずにBotを開発できます',
    links: [
      {
        name: 'AiotraQ',
        url: 'https://toshi-pono.github.io/aiotraq/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/toshi-pono/aiotraq',
      },
      {
        name: '発表スライド',
        url: 'https://speakerdeck.com/toshi00/aiotraqdebao-su-botkai-fa',
      },
    ],
    images: [
      {
        path: 'aiotraq/aiotraq.webp',
        alt: 'AiotraQはtraQ Botを高速に開発するためのライブラリです',
      },
      {
        path: 'aiotraq/aiotraq_background.webp',
        alt: 'LLMのローディング表示や画像の表示を手軽にできるtraQBotライブラリが欲しい',
      },
      {
        path: 'aiotraq/aiotraq_propopsed.webp',
        alt: 'AiotraQはtraQのAPIを意識せずにBotを開発できます',
      },
      {
        path: 'aiotraq/aiotraq_example.webp',
        alt: 'AiotraQを用いたtraQ Botの例',
      },
    ],
    techs: ['Python', 'CI/CD'],
    tags: ['個人開発'],
    color: '#33a7e5',
  },
  {
    id: 'mikage',
    title: 'Mikage',
    subtitle: 'Gaussian Splatting',
    date: '2023/09',
    description:
      'Gaussian Splattingを用いて3Dシーンの保存・閲覧ができるプラットフォームです。\n\nDIGI-CON HACKATHON 2023にて制作。画像処理などを担当',
    links: [
      {
        name: 'DIGI-CON HACKATHON 2023『Mikage』',
        url: 'https://trap.jp/post/2031/',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/cat-crosswalk/mikage-client',
      },
    ],
    images: [
      {
        path: 'mikage.webp',
        alt: 'MikageはGaussian Splattingを用いて3Dシーンの保存・閲覧ができるプラットフォームです',
      },
      {
        path: 'mikage_issue.webp',
        alt: 'Mikageは資料集め・資料管理の難しさを、撮影した空間を好きな角度から眺めるという手法で解決します',
      },
      {
        path: 'mikage_main.webp',
        alt: 'Gaussian Splattingを用いて画像を3次元点群に変換することで、好きな角度から眺めることが可能になります',
      },
    ],
    techs: ['Python'],
    tags: ['ハッカソン'],
    color: '#202326',
  },
  {
    id: 'fooder',
    title: 'Fooder',
    subtitle: 'レストラン即決サービス',
    date: '2022/06',
    description:
      'traP内ハッカソンで制作したレストラン即断即決サービスです。3タップで近くのお店からおすすめを選んでくれます。優秀賞 & チームラボ賞を受賞。\n\nフロントエンド・バックエンド・デザインを担当しました。',
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
      { path: 'fooder/fooder.webp', alt: 'fooderのロゴ' },
      { path: 'fooder/fooder_question.webp', alt: 'fooderの質問画面' },
      { path: 'fooder/fooder_flow.webp', alt: 'fooder利用の流れ' },
      { path: 'fooder/fooder_tech.webp', alt: 'fooderの技術スタック' },
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
      { path: 'typoime.webp', alt: 'IME自作のすすめ' },
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
      { path: 'poketch.webp', alt: 'ポケッチの外観' },
      { path: 'poketch_note.webp', alt: 'ノート機能の実例' },
      {
        path: 'poketch_band.webp',
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
      'traP冬ハッカソンにて制作したお絵かきリレーゲームです。複数人で協力して大きな絵を完成させます。テーマ賞。 \n\nフロントエンドの実装を担当しました。',
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
        path: 'nascalay_howtoplay.webp',
        alt: 'キャンバスを分割して、最後にまとめる',
      },
      {
        path: 'nascalay_canvas.webp',
        alt: '画面中央のキャンバスに絵を書いて送信する',
      },
      {
        path: 'nascalay_example.webp',
        alt: '結果',
      },
    ],
    techs: ['React'],
    tags: ['ハッカソン', 'Web'],
    color: '#96A0C0',
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
      { path: 'root3.webp', alt: 'ROOT3コンセプト画像' },
      {
        path: 'root3_explain.webp',
        alt: 'ROOT3は割り勘計算を簡単に記録計算できるサービスです',
      },
      {
        path: 'root3_view1.webp',
        alt: 'グループを作成し、招待QRコードを読み込んで、出費を記録します。あとは好きなときに精算するだけ！',
      },
      { path: 'root3_view2.webp', alt: 'PWAにも対応しています' },
    ],
    techs: ['React'],
    tags: ['ハッカソン', 'Web'],
    color: '#428C95',
  },
  {
    id: 'jtag',
    title: 'JTAG Adapter',
    subtitle: '自作デバッグ用基板',
    date: '2021/12',
    description:
      'FT232HLを利用したJTAG/I2C/UARTデバッグ器具です。GroveコネクタでI2C通信も可能です。KiCadを用いて基板設計を行い実装しました。\n\nセキュリティ・キャンプ2021 X-2トラックにて制作した基板の改良版です',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toshi-pono/jtagAdapter',
      },
    ],
    images: [
      {
        path: 'jtag.webp',
        alt: 'JTAG Adapterの写真',
      },
      {
        path: 'jtag_kicad.webp',
        alt: 'JTAG Adapterの3D図',
      },
    ],
    techs: ['KiCad', '電子工作'],
    tags: ['個人開発'],
    color: '#459D87',
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
      { path: 'typoime-vscode.webp', alt: 'TypoIME-VSCodeのストアの写真' },
    ],
    techs: ['VSCode', 'TypeScript'],
    tags: ['個人開発'],
    color: '#EFF1F3',
  },
  {
    id: 'linq',
    title: 'linQ',
    subtitle: 'ブックマーク共有サービス',
    date: '2021/10',
    description:
      'traP春ハッカソンにて制作しました。ブックマークの共有・閲覧ができるサービスです。技術賞。\n\nバックエンドの実装を担当しました。',
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
    images: [{ path: 'linq.webp', alt: 'linQサービス画像' }],
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
      'ポートフォリオです。Next13のAppDirectoryを使用しています。Vercelにデプロイしています。',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toshi-pono/toshi00-portfolio',
      },
    ],
    images: [{ path: 'portfolio.webp', alt: 'ポートフォリオコンセプト画像' }],
    techs: ['Next.js'],
    tags: ['個人開発', 'Web'],
    color: '#ECF2FB',
  },
]

export const getWork = async (id: string): Promise<Work | undefined> => {
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
