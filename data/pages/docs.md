---
title: 'XSwitch文档'
date: 2022-05-16T15:59:00Z
lastmod: '2021-06-16'
tags: ['XSwitch']
draft: false
summary: 'XSwitch相关文档列表'
layout: PostLayout
bibliography: references-data.bib
---

**版权声明：本站所有文档版权所有，仅供在本站在线阅读，任何单位或个人没有本站书面同意不得复制和分发本站文档。**

<hr/>

XSwitch 是一个高度可定制的实时音视频通信平台。XSwitch 主要由以下两部分构成：

- XUI：Web UI，即Web版的管理界面，支持基本的系统管理和WebRTC通话。
- xswitch（全小写）：软交换引擎，即小樱桃版的FreeSWITCH。基于FreeSWITCH `master`版开发，也可以独立于XUI使用。

我们的文档尽量遵循以下规范，参见[如何写技术文档](/pages/write-docs/)。

<hr/>

# 版本

- [XSwitch路线图(Roadmap)](/pages/roadmap)
- [XSwitch 4.0.0](/pages/xswitch-4.0.0)：发布于2020-05-20

# 基本文档

- [XSwitch简明用户手册](https://demo.xswitch.cn/xswitch.html)：极简用户手册，用于快速了解XSwitch功能及特性。
- [XSwitch用户手册](/docs/xswitch-user.html)：详细的用户手册。
- [XSwitch安装指南](/pages/xswitch-install/)：下载和安装指南。
- [XSwitch HowTo文档](/pages/howto/index/)：如何在XSwitch中实现xxx等这些牛x的功能？
- [xswitch中都有什么？](/pages/xswitch/index/)：xswitch（全小写，即小樱桃版的FreeSWITCH）是XSwitch中的软交换媒体引擎部分，与FreeSWITCH完全兼容，但有更多功能。
- [xswitch-free Docker镜象](https://github.com/rts-cn/xswitch-free)：纯`xswitch`，无Web UI，适用于学习FreeSWITCH。

# API文档

- [XSwitch集成指南](/docs/xswitch-integration-guide.html)
- [XSwitch认证鉴权接口](/docs/xswitch-auth.html)
- XSwitch REST API：整理中 ... （联系我们）
- [XSwitch XCC API](/docs/xswitch-xcc.html)：基于NATS的API，参见 [示例](https://git.xswitch.cn/xswitch/xcc-examples) 及 [Go语言SDK](https://git.xswitch.cn/xswitch/xctrl)

# 更多文档

- [XSwitch常见问题解答（FAQ）](https://git.xswitch.cn/xswitch/docs#常见问题解答) 。
- xTalk：WebRTC版通话和会议客户端。
- [XSwitch文档Git仓库](https://git.xswitch.cn/xswitch/docs)：更多文档列表。
