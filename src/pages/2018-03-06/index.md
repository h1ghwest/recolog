---
title: gatsby自動デプロイとスクショ
date: "2018-03-01"
---

このブログの更新方法をmasterへpushでgithub-pagesへ自動デプロイを  
CircleCIを用いて追加した。
[recolog/circle.yml](https://github.com/t0m0120/recolog/blob/master/circle.yml)

またgh-pages更新後に[GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer)を使って更新後の記事の  
スクリーンショットをS3に保存しDiscordへ通知するよう処理を追加した。
[recolog/screenshot.js](https://github.com/t0m0120/recolog/blob/master/screenshot.js)