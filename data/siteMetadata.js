const siteMetadata = {
  title: 'XSwitch - 高度可定制的实时音视频通信平台',
  author: '小樱桃科技',
  headerTitle: 'XSwitch',
  description: '呼叫中心 视频会议 指挥调度 5G视频网关 VoIP SIP WebRTC',
  keywords: '呼叫中心,视频会议,指挥调度,5G视频网关,VoIP,SIP,WebRTC', // keywords: "关键字1,关键字2,关键字3"
  language: 'zh',
  theme: 'light', // system, dark or light
  siteUrl: 'https://xswitch.cn',
  siteLogo: '/static/images/logo.png',
  email: 'info@x-y-t.cn',
  github: 'https://github.com/rts-cn',
  githubDiscussions: 'https://github.com/rts-cn/rts/discussions',
  xyt: 'https://x-y-t.cn', // 小樱桃官网
  rts: 'http://rts.cn', // RTS 中文社区
  weibo: 'https://weibo.com/u/7749415518', //新浪微博
  freeswitchCN: 'http://freeswitch.org.cn', // FreeSWITCH 中文社区
  signupStandard: 'https://jinshuju.net/f/KA4jtc', // 申请标准版
  signupEnterprise: 'https://jinshuju.net/f/KA4jtc', // 申请企业版试用
  signupXswitchCloud: 'https://jinshuju.net/f/KA4jtc', // 申请 xswitch cloud
  telephone: '0535-6753997',
  icp: '鲁ICP备17017005号',
  locale: 'zh',
  getStarted: 'https://xswitch.cn/docs/xswitch-tutorial.html',
  analytics: {
    // supports plausible, simpleAnalytics or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
    baiduAnalyticsId: 'a43df86b23ae409ca3d6eea68b7b7aff', // 百度统计 ID
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: '', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
