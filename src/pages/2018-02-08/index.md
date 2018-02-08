---
title: 1月に使った奴
date: "2018-02-08"
---


###[vue.js](https://jp.vuejs.org/index.html)

案件の一部に使った。  
ページ内のお気に入り機能に[localStorage](https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage) + vue.jsで対応  
ざっと見て案件に使用して使い終わった今、チュートリアルちょいちょい進めている。  
お手軽OP感。  

[なぜ仮想DOMという概念が俺達の魂を震えさせるのか](https://qiita.com/mizchi/items/4d25bc26def1719d52e6)


###[browsersync](https://browsersync.io)  

ログインが必要なサイトのcss/jsを自動更新効かせて修正したい際に  
[proxy](https://browsersync.io/docs/options#option-proxy)を噛まし、Cookieを直接コピペして強引にログイン状態を維持したまま更新作業する。 

[プロキシサーバとは](http://www.geolocation.co.jp/learn/inv/09.html)
```js
bs-config.js
module.exports = {
  proxy: {
    target: "サイトURL",
    proxyReq: [
      function(proxyReq) {
        proxyReq.setHeader(
        "Cookie","直接Cookieを張る"
        );
      }
    ]
  },
  socket: {
    domain: "localhost:3000"
  },
  rewriteRules: [
    {
      match: "http://target.com/script.min.js",
      replace: "http://localhost:3000//build/script.min.js"
    },
  ]
};
```

###[gatsby.js](https://www.gatsbyjs.org/)
このブログの作成に使用。  
React + GraphQL で作る静的プログレッシブウェブアプリケーションジェネレータ  
~~数年前に作られたMiddleman改修で消耗した~~Hugoよりビルドは遅いが生成されたページが先読みで表示等クソ早いのとRaectでナウいしReactNative触ってるので選択。  
[GitHubPages](https://pages.github.com/)へ[tschaub/gh-pages](https://github.com/tschaub/gh-pages)を使って公開

[StaticGen/静的サイトジェネレーター比較サイト](https://www.staticgen.com/)  
一応Jekyll→Hugo→Hexo→Gatsbyの順issueは多い
