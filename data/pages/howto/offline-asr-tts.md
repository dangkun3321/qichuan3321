---
title: '如何使用XSwitch内置的离线ASR及TTS'
date: 2022-06-06T21:00:00Z
lastmod: '2022-06-06'
tags: ['How-To文档', '人工智能']
draft: false
summary: 'XSwitch内置了ASR/TTS模块便于在离线环境中测试使用。'
layout: PostLayout
bibliography: references-data.bib
---

在[如何在XSwitch中使用ASR及TTS](/pages/howto/asr-tts/)中提到，XSwitch内置了很多ASR/TTS模块，但大多数的ASR/TTS服务都是云厂商提供的。使用这些服务不仅需要有相应的账号，而且大部分也需要付费才能使用。在开发测试时，有时用起来就不能随心所欲。

为方便大家开发与测试，XSwitch也提供了离线的ASR与TTS。

## tts_commandline

该模块是XSwitch内置的模块，XSwitch提供了配套的`espeak-ng`，可以支持中文。

在命令行上加载模块：

```sh
load mod_tts_commandline
```

当然，也可以在XUI界面上加载，殊途同归。

到【呼叫】⇨【路由】中，新建一条路由：

- 名称：`tts`，也可以随意
- 被叫字冠：`tts`，也可以是其它号码，如`1234`等
- 呼叫源：`default`
- 目的地类型：高级功能/系统

新出现的“文本”框中填入以入内容：

```
answer
speak tts_commandline|zh|你好，欢迎致电烟台小樱桃网络科技有限公司
```

其中，`zh`表示是中文。

然后就可以呼叫`tts`进行测试了。

注意，`espeak-ng`放出来的声音不好听，但对于开发测试来说，有总比没有好。我们后续会给出一个更“好听”的使用方法，敬请期待。

## mod_ai

XSwitch在`mod_ai`中提供了一个`asr`服务，可离线使用，效果还不错。使用开源的Vosk引擎。Vosk引擎比较小，但是模型文件比较大，因而需要单独下载。

首先，进入宿主机上的`storage`目录，创建`vosk`目录，如下：

```
cd data/storage
mkdir vosk
```

到以下地址下载模型文件，解压后放到刚刚创建的`vosk`目录。

https://alphacephei.com/vosk/models

目前测试了以下几个模型：

- vosk-model-cn-0.1 8k
- vosk-model-small-cn-0.3 16k
- vosk-model-small-en-us-0.15 16k
- vosk-model-en-us-daanzu-20200328 16k

然后，到XUI上【AI】⇨【AI】⇨【default】中，配置Asr-Models，启用相应的模型配置。配置完成后【重载】模块。

### 简单使用

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
play_and_detect_speech say:'你好，请说' detect:asr:ai default
info
log err $${detect_speech_result}
```

打开【高级】⇨【扩展功能】⇨【终端】就可以看到日志。上面使用了`err`级别的日志是为了红色能显示的更醒目。

上述命令中，也可以通过`asr:ai:vosk-model-cn-0.1`指定使用的模型。

### 使用方法

其中，asr engine参数语法为：

```
engine[:model]
```

其中`:model`可以省略，如果省略，则使用能找到的第一个模型，如：

```
ai:vosk-model-cn-0.1     # 使用AI模块，8k语音模型
asr:ai:vosk-model-cn-0.1 # 使用AI模块，FreeSWITCH兼容模式，8k语音模型
```

### 在XCC中的用法

XCC中，不需要`asr:`前缀，用起来更高效。

```js
asr_engine = 'ai:vosk-model-cn-0.1'

params = {
	command = "xcc_detect_speech",
	data = {
		speech = {
			engine = asr_engine,
			grammar = "default",
			no_input_timeout = 5000,
			speech_timeout = 8000,
			partial_events = true,
			params = {
				language = 'zh-CN',
				-- "interim-results" = "true"
			}
		}
	}
}
```

### 在Lua中使用

FreeSWITCH兼容用法（Lua）：

```lua
session:execute("detect_speech", "asr:ai:vosk-model-cn-0.1 default default default")
```

## 其它

`mod_ai`模块实现了：

- AI API：类似`mod_httapi`，但是用JSON代替XML
- `ai` ASR Interface：是一个XCC的ASR，仅用于`xcc_detect_speech`，不适用于在核心中调用。
- `asr` ASR Interface：是一个XCC ASR的包装器，通过使用`asr:your-xcc-asr-interface-name`可以将XCC ASR包装成系统原生接口使用。

XCC ASR主要是取消了核心状态机，通过以下参数发送事件，事件驱动，而无须核心中的忙等待。

- `asr-result-fire-json-event`：发送JSON事件，可以使用JSON Event Channel订阅`ai_asr`主题获取事件。
- `asr-result-fire-switch-event`：发送原生FreeSWITCH Detected Speech事件，可以在ESL中获取。
- `asr-result-fire-session-event`：发送Sesion事件，可以在Lua onInputCallback中回调。

XCC ASR由于取消了核心状态机，实现比较简单。

`asr` ASR Interface实现了一个包装器，通过JSON Event Channel与XCC ASR Interface通信。主题格式为：`ai_asr.$channel_uuid`，因此，`channel-uuid`参数是必须的。`channel-uuid`不一定是真正的Channel UUID，只要是不重复的字符串就行，如果字符串发生重复，结果是未知的。

## 小结

本文提供的离线ASR/TTS仅为方便开发测试，效果不如云厂商提供的好，不建议在生产上使用。
