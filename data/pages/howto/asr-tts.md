---
title: '如何在XSwitch中使用ASR及TTS'
date: 2022-06-06T18:00:00Z
lastmod: '2022-06-06'
tags: ['How-To文档', '人工智能']
draft: false
summary: '随着人工智能的发展，ASR/TTS技术也是臻成熟，与机器人对话，也渐渐成了人们日常生活的一部分。'
layout: PostLayout
bibliography: references-data.bib
---

随着人工智能的发展，ASR/TTS技术也是臻成熟。与机器人对话，也渐渐成了人们日常生活的一部分。在此，我们来看一下如何使用XSwitch的ASR/TTS功能。

ASR的全称是Automatic Speech Recogonation，即语音识别，TTS的全称是Text To Speech，即文本到语音转换，也称语音合成。

通过使用ASR/TTS，XSwitch可以完成机器人自动智能语音交互，如电话通知、问卷调查、话费催收等。

## 配置XSwitch连接阿里云

XSwitch有多个相关的模块，下面在阿里云的ASR/TTS服务来说明，其它的我们后面再说。

关于阿里云ASR/TTS的AI产品说明可以参考[https://help.aliyun.com/product/30413.html
](https://help.aliyun.com/product/30413.html)。

在此，我们使用XSwitch内置的`mod_ali`模块连接阿里云。进入【AI】⇨【阿里】⇨【ali】，在【Setting参数】中填上阿里的`acckey`和`secret`，这是阿里云用户获取登录Token的接口。

在TTS和ASR中填上`appkey`，也可以从阿里云的配置界面上获取到。

配置完成后，到【高级】⇨【系统管理】⇨【系统模块】中，找到`mod_ali`，在控制列中点击【加载】，模块颜色由灰色变为黑色，表示加载成功。把启用改为【是】，以便下次XSwitch重启时能自动加载。

## 测试TTS

到【呼叫】⇨【路由】中，新建一条路由：

- 名称：`tts`，也可以随意
- 被叫字冠：`tts`，也可以是其它号码，如`1234`等
- 呼叫源：`default`
- 目的地类型：高级功能/系统

新出现的“文本”框中填入以入内容：

```
answer
speak ali|default|你好，欢迎致电烟台小樱桃网络科技有限公司
```

其中：

- `ali`：TTS引擎名称
- `default`：TTS噪音，也可以使用阿里文档中提供的其它噪音名称，如`xiaoyun`等。

提交后，用话机拨打`tts`号码就可以听到声音了。

也可以这样：

```
answer
set tts_engine=ali
set tts_voice=default
speak 你好，欢迎致电烟台小樱桃网络科技有限公司
```

## 测试ASR

到【呼叫】⇨【路由】中，新建一条路由：

- 名称：`asr`，也可以随意
- 被叫字冠：`asr`，也可以是其它号码，如`1234`等
- 呼叫源：`default`
- 目的地类型：高级功能/系统

新出现的“文本”框中填入以入内容：

```
answer 
set tts_engine=ali
set tts_voice=default
play_and_detect_speech say:'你好，请说' detect:ali default
info 
log err $${detect_speech_result}
```

打开【高级】⇨【扩展功能】⇨【终端】就可以看到日志。上面使用了`err`级别的日志是为了红色能显示的更醒目。

## 问题跟踪与调试

如果不能一次成功，可以通过终端上显示的日志内容跟踪调试。但Web界面上功能有限，高级的命令要过入XSwitch后台，使用如下步骤可以进入XSwitch控制台：

```sh
make bash
fs_cli
```

- 检查所有的参数是否输入正确
- 输入`ali_token`看是否正确获取到Token
- 模块会定期获取Token，日志中有类似如下的内容：`Aliyun token expires after: 213431`

## 高级应用

通过上述步骤，可以初步确定XSwitch已能正常提供ASR/TTS功能。在实际应用中，一般会多次交互，XSwitch支持以下方式与系统交互：

- Lua脚本：可以直接在XSwitch中写Lua脚本交互
- XSWitch XCC API：[XCC API示例](https://git.xswitch.cn/xswitch/xcc-examples)中有很多各种语言的TTS及ASR的例子。
- XSwitch AI API：该API可以使用HTTP接口控制XSwitch。

具体的例子我们后面再补充。

## 其它模块

其它模块操作也类似

- `mod_huawei`：华为
- `mod_baidu`：百度
- `mod_ifly`：讯飞

## MRCP

除了上述模块外，XSwitch也支持通过MRCP连接ASR/TTS。关于MRCP的配置，我们后面再补充。
