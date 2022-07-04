---
title: 'XSwitch支持的TTS语音对比'
date: 2022-07-01T14:00:00Z
lastmod: '2022-07-01'
tags: ['XSwitch']
draft: false
summary: 'XSwitch支持TTS语音合成实例'
layout: PostLayout
bibliography: references-data.bib
---

之前一直有同学问是否可以出一篇专门关于`XSwitch`支持TTS的介绍文章，今天，它来了~

`XSwitch`支持国内主流ASR/TTS厂商，这篇文章从示例出发，所有语音文件均通过`XSwitch`内部模块与TTS Server交互生成。

本篇文章内测试实例均使用同一文本：
> 您好，欢迎致电烟台小樱桃网络科技有限公司。烟台小樱桃是高新技术企业，坐落在美丽 的黄海之滨。让互联互通更顺畅，让实时互动更高效，小樱桃将竭诚为您服务。

### 阿里

<audio controls name="espeak">
      <source src="/media/ali.wav" type="audio/wav"/>
</audio>

* 耗时：800.311 ms  

### 讯飞

<audio controls name="espeak">
      <source src="/media/xunfei.wav" type="audio/wav"/>
</audio>

* 耗时：214.198ms  
* 合成音频存在噪音，修复中


### 百度

<audio controls name="espeak">
      <source src="/media/baidu.mp3" type="audio/mpeg"/>
</audio>

* 耗时：761.342 ms  


### 华为

<audio controls name="espeak">
      <source src="/media/huawei.wav" type="audio/wav"/>
</audio>

* 耗时：1270.315 ms  

### espeak-ng

<audio controls name="espeak">
      <source src="/media/espeak.mp3" type="audio/mpeg"/>
</audio>

* 耗时：25ms  


### edge-tts

<audio controls name="edge-tts">
      <source src="/media/edge-tts.mp3" type="audio/mpeg"/>
</audio>

* 耗时：1675ms  

### 小结

注意，阿里、讯飞、百度、华为四种TTS语音均为在线合成，使用这些服务不仅需要有相应的账号，而且大部分也需要付费才能使用。

而`espeak-ng`与`edge-tts`为容器内部可执行程序合成，无需额外申请账号，但目前只用于测试阶段。具体操作方法可参考[如何在XSwitch中使用Edge TTS](/pages/howto/edge-tts/)

如您有如何需求和问题，请及时联系我们！