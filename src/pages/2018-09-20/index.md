---
title: Roppongi.js#6
date: "2018-09-20"
---

Roppongi.js参加してきたのでメモ
[https://roppongi-js.connpass.com/event/98983/](https://roppongi-js.connpass.com/event/98983/)


## WebAssemblyのこれまでとこれから by [@fnwiya](https://twitter.com/urahiroshi)
<script async class="speakerdeck-embed" data-id="dc6eee68302845f9bdc35cd814cbaadd" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
https://speakerdeck.com/urahiroshi/sethuo-dong-falsesusume

WebAssemblyはvsJSではなくJSが不得意なところのサポート

実際に使われているプロジェクト  
[Figma](https://www.figma.com/)とか  
数値は早いが文字列遅かったり呼び出し遅かったりするので今後に期待

## Vue.jsをv0.11.0からv2.5.16にあげようとしている話 by [@iidaapp](https://twitter.com/iidaapp)
闇が深い。  
bowerやgruntをwebpackへ  

vueのmigrationはこれを使ったらしい  
https://github.com/vuejs/vue-migration-helper

こういうパッケージやら時代の進みで負債になるのどうにかなんないすかね…


## TypeScript and immutability by [@brn0227](https://twitter.com/brn227)
<script async class="speakerdeck-embed" data-id="e879bc4998574dc0b8cdd9d6d3fe0dcb" data-ratio="1.41436464088398" src="//speakerdeck.com/assets/embed.js"></script>
https://speakerdeck.com/brn/typescript-and-immutability  
外部ライブラリかスプレッド演算子使うしかない  
・参照透過性  
・副作用無し  
・PureComponentでパフォアッブ  
[Immutable.js](https://github.com/facebook/immutable-js)はTypeScriptと相性が悪い  
↓  
[immer](https://github.com/mweststrate/immer)  
PlanObject最高

## プロトタイプを越えるReact Native by [@timakin](https://twitter.com/__timakin__)
<script async class="speakerdeck-embed" data-id="b052bb7cc6f148b99cd0c9db88ae0722" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
https://speakerdeck.com/timakin/react-native-beyond-prototype


[FastImage](https://github.com/DylanVann/react-native-fast-image)

課金ライブラリ  
[react-native-iap](https://github.com/dooboolab/react-native-iap)



## JavaScriptはコンパイル言語か by [@ariaki](https://twitter.com/ariaki4dev)
<script async class="speakerdeck-embed" data-id="22f1c345f89449b7aeb81d98b668bee3" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
https://speakerdeck.com/ariaki/is-javascript-a-compiled-language

[ASTExploer](https://astexplorer.net/)  
JavaScriptをASTに分割。  
[metaJS](http://int3.github.io/metajs/)  
JavaScriptをASTに分割してステップ実行  
[escodegen](https://estools.github.io/escodegen/demo/index.html)  
Esprima/escodegenを使ってjsパース/再生成  


## Universal package.json by [@れこ](https://twitter.com/L_e_k_o)
https://talks.leko.jp/universal-package.json/#0

[react-native-web](https://github.com/necolas/react-native-web)最近ちょくちょく見るイメージ  
webpackかMetro Bundlerかどっちかでわかれる  

## 親に向かってなんだそのz-indexは！！ by [@ojisan](https://twitter.com/bug_ojisan)
<script async class="speakerdeck-embed" data-id="e5c905298752499b83cb006b28bd0c11" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
https://speakerdeck.com/sadnessojisan/qin-nixiang-katutenandasofalsez-indexha  
[重ね合わせコンテキスト](https://developer.mozilla.org/ja/docs/Web/Guide/CSS/Understanding_z_index/The_stacking_context)
