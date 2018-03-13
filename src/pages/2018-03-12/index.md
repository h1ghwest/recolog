---
title: serverless framework入門
date: "2018-03-12"
---

[serverless/serverless](https://github.com/serverless/serverless)
Lambdaなどのサーバレス環境のデバッグやデプロイをお手軽にするツール  

discordへ現在のgithubの草を通知するLambdaFunction  
[t0m0120/github-contribute-checker](https://github.com/t0m0120/github-contribute-checker)を  
[t0m0120/github-contribute-checker-serverless](https://github.com/t0m0120/github-contribute-checker-serverless)へserverlessに直した。


[Serverless AWS Lambda CLI Reference](https://serverless.com/framework/docs/providers/aws/cli-reference/)

```bash
$ sls create -t template_name -p function_name
```

からhandler.jsとserverless.ymlの編集をし

```
$ sls deploy 
```

でデプロイ


CLI上でtest/deployをこなせる上にS3やDynamoDBなどを引っ張れるのでお手軽

react-nativeでは[AWSMobileHub]https://aws.amazon.com/jp/mobile/()