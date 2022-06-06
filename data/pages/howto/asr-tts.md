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

随着人工智能的发展，ASR/TTS技术也日臻成熟。与机器人对话，也渐渐成了人们日常生活的一部分。在此，我们来看一下如何使用XSwitch的ASR/TTS功能。

ASR的全称是Automatic Speech Recogonation，即语音识别，TTS的全称是Text To Speech，即文本到语音转换，也称语音合成。

通过使用ASR/TTS，XSwitch可以完成机器人自动智能语音交互，如电话通知、问卷调查、话费催收等。

## 配置XSwitch连接阿里云

XSwitch有多个相关的ASR/TTS模块，下面在阿里云的智能语音交互服务服务来说明。

关于阿里云ASR/TTS的AI产品说明可以参考[https://help.aliyun.com/product/30413.html
](https://help.aliyun.com/product/30413.html)。

连接阿里云ASR/TTS服务需要以下参数：

- 阿里云账号AccessKey ID和AccessKey Secret，参见[https://help.aliyun.com/document_detail/69835.html](https://help.aliyun.com/document_detail/69835.html)
- 阿里云智能语音交互服务App Key，参见[https://help.aliyun.com/document_detail/71936.html](https://help.aliyun.com/document_detail/71936.html)

在此，我们使用XSwitch内置的`mod_ali`模块连接阿里云。进入【AI】⇨【阿里】⇨【ali】，在【Setting参数】中填上阿里的`acckey`和`secret`，这是阿里云用户获取登录Token的接口。

在TTS和ASR参数中填上阿里云智能语音交互服务的`appkey`。

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
- `default`：TTS噪音，也可以使用阿里文档中提供的其它噪音（`voice`）名称，如`xiaoyun`等。

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

## 调试与排错

如果不能一次成功，可以通过终端上显示的日志内容跟踪调试。但Web界面上功能有限，高级的命令要过入XSwitch后台，使用如下步骤可以进入XSwitch控制台：

```sh
make bash
fs_cli
```

- 在界面上检查所有配置参数是否输入正确
- 输入`ali_token`看是否正确获取到Token
- 模块会定期获取Token，日志中有类似如下的内容：`Aliyun token expires after: 213431`

## 高级应用

通过上述步骤，可以初步确定XSwitch已能正常提供ASR/TTS功能。在实际应用中，一般会多次交互，XSwitch支持以下方式与系统交互：

- Lua脚本：可以直接在XSwitch中写Lua脚本交互
- [XSwitch XCC API](https://xswitch.cn/docs/xswitch-xcc.html)：[XCC API示例](https://git.xswitch.cn/xswitch/xcc-examples)中有很多各种语言的TTS及ASR的例子。
- XSwitch AI API：该API可以使用HTTP接口控制XSwitch（联系我们获取API文档）。

具体的例子我们后面再补充。

## 其它模块

其它模块操作也类似

- `mod_huawei`：华为ASR/TTS
- `mod_baidu`：百度ASR/TTS
- `mod_ifly`：讯飞ASR/TTS

## MRCP

除了上述模块外，XSwitch也支持通过MRCP连接ASR/TTS，使用`mod_unimrcp`模块。

XSwitch的XUI界面上没有提供MRCP的配置入口，使用时，需要手工修改相应的配置文件。XSwitch内置了一个`/usr/local/freeswitch/conf/mrcp/aliyun-sdm.xml`配置模板。其中，客户端即XSwitch，它会做为一个MRCP客户端连接MRCP服务器。

```xml
<include>
    <!-- Aliyun MRCP Server 7 MRCPv2 -->
    <profile name="ali" version="2">
      <!-- 客户端外部IP，如果在XSwitch与MRCP服务之间有NAT时需要配置 -->
      <!--param name="client-ext-ip" value="auto"-->
      <!-- 客户端IP，即XSwitch的IP，可以设置XSwitch使用的IP地址，或使用auto自动获取 -->
      <param name="client-ip" value="auto"/>
      <!-- 客户端端口号，根据需要配置 -->
      <param name="client-port" value="4090"/>
      <!-- MRCP服务器的IP -->
      <param name="server-ip" value="172.18.0.4"/>
      <!-- MRCP服务器的端口号 -->
      <param name="server-port" value="7010"/>
      <!--param name="force-destination" value="1"/-->
      <!-- SIP协议承载，支持TCP和UDP -->
      <param name="sip-transport" value="udp"/>
      <!-- 设置User-Agent头域 -->
      <!--param name="ua-name" value="FreeSWITCH"/-->
      <!-- 设置SDP中的origin字段 -->
      <!--param name="sdp-origin" value="FreeSWITCH"/-->
      <!-- 设置外网RTP地址，在NAT中需要设置 -->
      <!--param name="rtp-ext-ip" value="auto"/-->
      <!-- 使用的RTP IP，auto为自动获取 -->
      <param name="rtp-ip" value="auto"/>
      <!-- RTP端口号范围 -->
      <param name="rtp-port-min" value="4000"/>
      <param name="rtp-port-max" value="5000"/>
      <!--param name="playout-delay" value="50"/-->
      <!--param name="max-playout-delay" value="200"/-->
      <!-- 默认的打包间隔 -->
      <!--param name="ptime" value="20"/-->
      <!-- 使用的编码 -->
      <param name="codecs" value="PCMU PCMA L16/96/8000"/>
      <!-- 语法文件类型 -->
      <param name="jsgf-mime-type" value="application/jsgf"/>

      <!-- Add any default MRCP params for SPEAK requests here -->
      <synthparams>
      </synthparams>

      <!-- Add any default MRCP params for RECOGNIZE requests here -->
      <recogparams>
        <!--param name="start-input-timers" value="false"/-->
      </recogparams>
    </profile>
  </include>
```

可以使用如下方式进入容器修改该文件：

```sh
make bash
vi /usr/local/freeswitch/conf/mrcp/aliyun-sdm.xml
```

配置完成后，可以直接在命令行上使用命令`load mod_unimrcp`加载该模块，也可以在XUI界面上加载。

加载成功后，就可以使用了。可以将前面的例子中的TTS/ASR引擎名称由`ali`换成`unimrcp`或`unimrcp:ali`，另外，也不能使用`default`当作噪音的名称，而需要使用合法的名称如`xiaoyun`等。

**注意**：该文件的修改在容器重建后将失效，如果需要永久存储，则需要将该文件存在宿主机上并在`docker-compose.yml`文件中增加挂载配置，如：

```yml
volumes:
  - ./aliyun.xml:/usr/local/freeswitch/conf/mrcp/aliyun-sdm.xml
```

详见[《XSwitch运维手册》](https://xswitch.cn/docs/xswitch-ops.html)。

# 小结

目前，大部分云厂商都提供在线的ASR/TTS服务，大部分都以Websocket服务提供。XSwitch针对大部分云厂商专门写了相应的模块，效率高、效果好，且可以支持云厂商提供的所有功能和特性，如连续语音识别等。

MRCP协议的全称是Media Recource Control Protocol，是一个标准的访问媒体资源的协议，但是该协议比较老，而且也不适合互联网。虽然像阿里云等厂商也提供该协议，但只不过是增加了一层转换网关，增加了一个故障点，且完全浪费资源，示意图如下：

有MRCP：

```
      SIP                                        MRCP协议               Websocket
话机 ------> [(mod_sofia) XSwitch (mod_unimrcp)] ---------> [MRCP服务器] --------> 阿里云服务器
```

没有MRCP：

```
      SIP                                   Websocket
话机 ------> [(mod_sofia) XSwitch (mod_ali)] --------> 阿里云服务器
```

所以，尽量使用我们XSwitch原生的模块，节省资源。

除此之外，原生模块与MRCP服务器的另一个区别是，原生模块一般返回JSON数据，而MRCP会返回XML格式的数据。

当然，如果你的ASR/TTS厂商仅支持MRCP协议，那就这么用吧。

如果你在开发测试中需要离线ASR/TTS，参见[如何使用XSwitch内置的离线ASR及TTS](/pages/howto/offline-asr-tts/)。
