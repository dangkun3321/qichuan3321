---
title: 'XSwitch v4.0.0版发布'
date: 2022-06-16T15:59:00Z
lastmod: '2021-06-16'
tags: ['XSwitch', '版本']
draft: false
summary: 'XSwitch相关文档'
layout: PostSimple
bibliography: references-data.bib
---

# XUI 更新

- 增加电话条
- 根据最新接口规范修改所有接口返回值
- 优化预约会议，隐藏原有会议室界面及路由相关信息
- 在预约会议中增加“组”界面
- 增加 xcc-rtc 动态配置文件
- 增加预约会议号码池
- 预约会议增加辅助者和短号，修改预约会议呼叫逻辑（根据短号及时间选择）
- 路由中 Applications 增加排序功能，实现呼叫时按排序依次执行

# xswitch 软交换引擎更新

- xswitch 更新到`1.10.7.3`
- 同步官方 master `4886383e`
- 外呼增加`origination_video_mode`
- 修复读取多通道文件缓冲区溢出问题
- 完善 sofia digest 返回值
- 修复`mod_verto` `verto.attach`崩溃问题
- 外呼支持 18x 阶段根据`Reason`提前挂机，需要`hangup_on_early_reason=true`
- 修复`mod_conference`透传模式会议，`switch_frame_buffer_dup`已经 dup 过的 frame 崩溃问题（比如 mod_wechat）
- 支持不解码录像，mod_mp4v2 支持多个 video tracks，需要`record_video_no_decode=true`
- 核心 last image 按需重发，需要`core_video_last_image=true`
- 增加一个离线 ASR 和 TTS 模块，方便开发对接测试

如果大家对我们的产品有好的意见或建议，您可以直接到[我们的 Git 网站](https://git.xswitch.cn/) 上注册一个账号，给我们提工单。感谢您使用 FreeSWITCH。
