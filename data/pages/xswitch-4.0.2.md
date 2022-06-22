---
title: 'XSwitch v4.0.2版发布'
date: 2022-06-22T17:00:00Z
lastmod: '2022-06-22'
tags: ['版本']
draft: false
summary: 'XSwitch v4.0.2版，包含很多Bug更新及新特性'
layout: PostLayout
bibliography: references-data.bib
---

# XUI 更新

- 修改文件导出格式解决不兼容问题
- 修复`DOD`和`DID`批量导入失败问题以及去除多余空格
- 话单界面增加时长统计功能
- 修复预约会议状态，根据事件显示会议中或未开始
- 路由目的类型增加“指定预约会议”
- 界面导出文件由原来的`.csv`改为`.xlsx`
- 会议默认中文提示音
- 修改会议模版初始化值，默认开启`moderator-controls`和`caller-controls`
- 修复话单查询时，不选开始和结束时间无法查询bug
- 修复xtra_config.lua中录音文件后缀不起作用问题
- 话单增加时长统计功能
- 支持EdgeTTS


# xswitch 软交换引擎更新

- 支持Edge TTS
- 增加分段录像支持
- 会议中增加子命令`all-but`可以排除部分`member id`
- 核心支持无分片的VP8帧
- 会议增加conferenceControl jsapi，支持按顺序批量执行命令


# 模块 更新

- `mod_tts_commandline`支持`.mp3`格式
- `mod_unimrcp`添加`app-uuid`参数，配合mod_xcc订阅detect事件
- `mod_xcc`增加了Play数字人语音开始和结束事件


# 架构更新

- 简化安装脚本
- 所有持久化存储数据都统一放到`data`目录
- 默认不启动Nginx
- 增加`make up-nginx`启动Nginx


# 升级建议

本次升级系统启动脚本有变动，建议按照[安装指南](/pages/xswitch-install/)重新安装。如果之前已安装过4.0.0/4.0.1版本，并且想保留原有配置，也可以直接修改`docker-compose.yml`中的版本号。如：

```
ccr.ccs.tencentyun.com/free/xswitch-lua-free:4.0.2
```

如果大家对我们的产品有好的意见或建议，欢迎[给我们提工单](https://git.xswitch.cn/xswitch/docs/issues/1)。感谢您使用XSwitch。
