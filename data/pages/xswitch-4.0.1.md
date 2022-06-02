---
title: 'XSwitch v4.0.1版发布'
date: 2022-06-01T10:52:00Z
lastmod: '2022-06-01'
tags: ['版本']
draft: false
summary: 'XSwitch v4.0.1版，包含很多Bug更新及新特性'
layout: PostLayout
bibliography: references-data.bib
---

XSwitch v4.0.1版，这是一次小的更新，包含一些Bug修复及新特性。


# XUI 更新

- 修复媒体文件及话单切换页数后查询及显示bug，修改媒体文件中主叫号码/被叫号码查询由原来的精准查询改为模糊查询
- 修复媒体文件-录制功能及录制后语音文件不能播放bug
- 修复IVR界面中action如果为转分机无法编辑问题
- 修复预约会议增加管理员密码后呼入失败问题
- 修复路由界面最大长度不显示问题
- 修复DOD设置后号码变换不起作用问题
- 修复黑白名单bug

# xswitch 软交换引擎更新

- xswitch 更新到`master`
- 同步官方 master `f5a2a59758`
- `null` Endpoint增加在视频中显示主叫号码
- `conferenceInfo` JSON API增加过滤器，可以按`target`或`role-id`等过滤成员
- 增加`conferenceControl` JSON API
- 修复一个在某些情况下在使用`mod_xml_curl`模块时缺少会议名称参数的问题
- 视频会议增加自动轮循API

# XCC 更新

- 增加微信小程序支持
- 修复ASR `no_play`和`no_break`参数导致的问题
- 增加`EventChannelBroadcast` API

# 架构更新

- 增加ARM64 Docker镜像
- 调整安装脚本，更易于使用

# 升级建议

本次升级系统启动脚本有变动，建议按照[安装指南](/pages/xswitch-install/)重新安装。如果之前已安装过4.0.0版本，也可以直接修改`docker-compose.yml`中的版本号。如：

```
ccr.ccs.tencentyun.com/free/xswitch-lua-free:4.0.1
```

如果大家对我们的产品有好的意见或建议，欢迎[给我们提工单](https://git.xswitch.cn/xswitch/docs/issues/1)。感谢您使用FreeSWITCH。
