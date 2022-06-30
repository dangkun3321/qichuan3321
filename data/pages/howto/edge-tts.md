---
title: '如何在XSwitch中使用Edge TTS'
date: 2022-06-15T22:00:00Z
lastmod: '2022-06-15'
tags: ['How-To文档', '人工智能']
draft: false
summary: 'XSwitch根据Voice智能选择TTS模型及如何使用Edge TTS。'
layout: PostLayout
bibliography: references-data.bib
---

在[如何使用XSwitch内置的离线ASR及TTS](https://xswitch.cn/pages/howto/offline-asr-tts/)中我们已经学会如何使用离线ASR及TTS，但由于`espeak-ng`放出来的声音不好听，在我们不屑努力下，终于找到一个声音更加清晰流畅且可以免费使用的的TTS引擎[edge-tts](https://github.com/rany2/edge-tts)。

文末有`edge-tts`和`espeak-ng`生成的音频实例，以供大家参考。

本文中所讲TTS是基于`mod_tts_commandline`模块实现的，上一篇文章已经说明如何使用该模块，不再赘述。  

为了防止`XSwitch`镜像体积过大，XSwitch中默认不带`edge-tts`，如果需要使用，可以自行安装：

```sh
make bash                # 进入XSwitch容器
apt-get update
apt-get install python3-pip
pip install edge-tts     # 安装，在容器内执行该命令
```

安装完成后，可以在容器内使用以下命令测试是否成功：

```sh
edge-tts --text "Hello world" --write-media /tmp/hello.mp3
```

可以在宿主机上使用如下命令将该文件从容器中Copy出来：

```sh
docker cp xswitch:/tmp/hello.mp3 .
```

如果这个声音文件正常，那表示edge-tts已经安装成功了。如果有其它问题可以参见[edge-tts](https://github.com/rany2/edge-tts)。

接下来我们开始改造它，目的是能让它根据`Voice`类型自动选择需要使用的`TTS`模型。  

### 修改`tts_commandline.conf.xml`  

**若你使用的`XSwitch`版本为4.0.2及以上，可跳过此步骤，直接进行`配置路由规则`**

- 将原始的`espeak-ng -v ${voice} -w ${file} ${text}`修改为`sh $${scripts_dir}/xui/tts.sh ${voice} ${file} ${text}`

- 在`tts_commandline.conf.xml`新增如下配置：

```xml
<ext-maps>
    <map ext="mp3" voice="zh-CN-YunxiNeural"/>
    <map ext="mp3" voice="zh-CN-YunyangNeural"/>
    <map ext="mp3" voice="zh-CN-XiaoxiaoNeural"/>
</ext-maps>
```

退出保存，在命令行上重新加载模块：
    
```sh
reload mod_tts_commandline
```

其中`$${scripts_dir}/xui/tts.sh`为`tts.sh`脚本存放路径。该脚本和`tts_commandline.conf.xml`实例见文末。
    
当然，也可以在XUI界面上重新加载。

注意，如果我们想使用`edge-tts`提供的其他`Voice`，则需将对应的`ShortName`如以上方式新增到配置文件内，并重新加载`mod_tts_commandline`即可。

**若仍然使用`espeak-ng`，无需修改配置文件！**

`edge-tts`提供的`Voice`列表，可通过`edge-tts --list-voice`查询，下方为`edge-tts`常用`Voice`：

|ShortName|Gender|Locale|
|:---------| :--- | :-------|
|zh-CN-XiaoxiaoNeural| Female |zh-CN|
|zh-CN-XiaoyiNeural| Female |zh-CN|
|zh-CN-YunjianNeural|Male| zh-CN |
|zh-CN-YunxiNeural|Male| zh-CN |
|zh-CN-YunxiaNeural|Male| zh-CN|
|zh-CN-YunyangNeural|Male|zh-CN|
|zh-TW-HsiaoChenNeural| Female |zh-TW|
|zh-HK-HiuMaanNeural| Female |zh-HK|
|en-IE-EmilyNeural| Female |en-IE|
|en-US-AriaNeural| Female |en-US|
|en-US-GuyNeural|Male|en-US|
|en-US-JennyNeural| Female |en-US|
|en-GB-SoniaNeural|Female|en-GB|
|cy-GB-NiaNeural|Female|cy-GB|

### 配置路由规则

上一篇文章中我们提到在“文本”框中填入以下内容：

```
answer
speak tts_commandline|zh|你好，欢迎致电烟台小樱桃网络科技有限公司
```

上面这种方式使用的是默认`TTS`引擎是`espeak-ng`，XSwitch内置，但是不大好听。

接下来我们修改“文本”框中的内容如下：

```
answer
speak tts_commandline|zh-CN-XiaoxiaoNeural|你好，欢迎致电烟台小樱桃网络科技有限公司
```

其中`zh-CN-XiaoxiaoNeural`是`edge-tts`提供的`Voice`。

然后当我们呼叫`tts`测试时，`mod_tts_commandline`会识别到我们使用的`Voice`是`zh-CN-XiaoxiaoNeural`，它会自动选用`edge-tts`为我们播放离线`TTS`语音。

注意，由于`edge-tts`合成的音频文件格式为`.mp3`，需要确保在XSwitch中提前加载了`mod_shout`模块，否则会出现不支持`mp3`格式的报错！

`tts.sh`实例如下，也可根据你的实际需要进行修改：

```bash
#!/bin/sh

voice=$1;
file=$2;
text=$3;

if [ "$voice" = "zh-CN-XiaoxiaoNeural" -o "$voice" = "zh-CN-YunyangNeural" -o "$voice" = "zh-CN-XiaoxiaoNeural" ]; then
    edge-tts --text "$text" --voice "$voice"  --write-media "$file";
else
    espeak-ng -v "$voice" -w "$file" "$text";
fi
```

`tts_commandline.conf.xml`配置如下：

```xml
<configuration name="tts_commandline.conf" description="TextToSpeech Commandline configuration">
    <settings>
    <!--
    Some variables will be replaced :
    ${text}: input text (quoted)
    ${rate}: sample rate (example: 8000)
    ${voice}: voice_name passed to TTS(quoted)
    ${file}: output file (quoted, including .wav extension)

    Example commands can be found at:
    https://freeswitch.org/confluence/display/FREESWITCH/mod_tts_commandline#mod_tts_commandline-Examplecommands
    -->
    <param name="command" value="sh $${scripts_dir}/xui/tts.sh ${voice} ${file} ${text}"/>
    </settings>
    <ext-maps>
        <map ext="mp3" voice="zh-CN-YunxiNeural"/>
        <map ext="mp3" voice="zh-CN-YunyangNeural"/>
        <map ext="mp3" voice="zh-CN-XiaoxiaoNeural"/>
    </ext-maps>
</configuration>
```

## 音频示例

俗话说百闻不如一见，但这里，不管怎么说都不如一“闻”，听听有什么区别。

- edge-tts

<audio controls name="edge-tts">
      <source src="/media/edge-tts.mp3" type="audio/mpeg"/>
</audio>

- espeak-ng

<audio controls name="espeak">
      <source src="/media/espeak.mp3" type="audio/mpeg"/>
</audio>

## 小结

- `edge-tts`好听，但需要连网
- `espeak-ng`可以离线使用，但听着有点难受
- 两者都支持中、英文等多种语言
- 两者都可以免费使用，在开发、测试时用起来很方便
