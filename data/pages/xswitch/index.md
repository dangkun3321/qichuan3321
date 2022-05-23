---
title: 'xswitch中都有什么？'
date: 2022-05-21T15:59:00Z
lastmod: '2022-05-21'
tags: ['xswitch']
draft: false
summary: 'xswitch软交换媒体引擎（FreeSWITCH）相关文档'
layout: PostLayout
bibliography: references-data.bib
---

xswitch（全小写）即小樱桃版的FreeSWITCH，多年来，XSwitch的开发者为FreeSWITCH开源项目贡献了数不清的补丁和新特性。但并不是所有特性都能被上游接受，因此，我们单独维护了[一个分支](https://git.xswitch.cn/xswitch/xswitch)。我们始终坚持上游优先（Upstream First）的原则，尽量把对大家有用的补丁都提交到上游仓库中去，有的也会优先提到Signalwire的Enterprise版中，还有一部分在我们内部的私有分支里，未开源。下面是xswitch中的部分新功能和新特性。

- 会议相关：XSwitch对视频会议做了很多补丁，修复了一些Bug，支持xTalk，支持100人同屏（`10x10`画面），性能提升，单机在同一会议中可支持200方720p视频。
- 把Redis当成消息队列用，发送JSON消息
- Lua原生支持JSON，支持同步和异步HTTP请求
- Verto支持XUI登录，支持Redis做共享Session
- OpenH264模块增强
- 支持H265编解码
- 支持不解码直接播放mp4，性能提升N倍
- 支持不解码录像，性能提升N倍
- `mod_callcenter`功能增强
- 支持4G VoLTE和5G NR视频呼叫
- 支持音视频重协商、音视频升降级
- 支持JWT鉴权
- `mod_png`功能增强
- 播放RTSP流
- 支持SIP双流（BFCP）
- K8S支持优化
- AMR编码优化
- MRCP增强
- 支持视频点击坐标传递
- 除`png`外，支持`jpg`、`bmp`、`hdr`等图像格式
- 支持双声道SSML
- 支持播放透明`png`图片
- Jitter Buffer增强
- 支持WebRTC local mDNS协商
- 增加一些通道变量控制呼叫行为

以上只是个不完整的列表。详细的功能和特性我们后面还会专门写文章介绍。

xswitch与原生的FreeSWITCH完全兼容，也可以不加我们的Web UI独立运行。如有需要可以直接联系我们。
