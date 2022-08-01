---
title: 'XSwitch v4.0.4版发布'
date: 2022-08-01T15:00:00Z
lastmod: '2022-08-01'
tags: ['版本']
draft: false
summary: 'XSwitch v4.0.4版，界面上增加了一些视频会议相关的功能、修复了一些显示bug，增加了一些fs模块'
layout: PostLayout
bibliography: references-data.bib
---

这是一次小的更新和Bug修复

XSwitch更新内容：
- 增加禁止画布自动清除标志
- 增加会议的视频状态
- 增加mod_odbc_cdr模块,防止cdr重复
- 增加mod_uftpd模块，支持思科话机
- 增加会议成员连接数量

XUI更新：
- 使用xui-lua-3.0.4-20220729125329-c4a5e55e版本
- 修复回呼模式下录音问题
- 在用户和分机界面增加话机MAC地址（用于需要TFTP获取话机自动配置功能，目前匹配思科话机）
- 修复AI菜单下百度等界面启动时，其他未关闭bug
- 修复网关界面网关状态有时不显示问题
- 网关/用户不可删除时增加提示信息
- 修复fifo录音不起作用以及fifo话单不显示录音问题
- 修复会议/fifo/cc话单搜索中重置按钮不起作用bug
- 修复话单不显示录音问题
- 修复cc话单查询bug
- 修复cc话单不显示录音问题


# 升级建议

可以按照部署文档重新从头搭建。

如果原先版本是4.0.3，也可以直接修改版本号更新，具体操作如下：

linux修改`docker-compose.yml`文件，Mac修改`docker-compose-mac.yml`文件，将文件中service为xswitch的image一行的版本号由4.0.3改为4.0.4

```
ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.3
```
修改为

```
ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.4
```

如果用nginx，还需要按照上边把service为xswitch-nginx-xui的image一行的版本号也修改为4.0.4。

修改后，执行`make down`关闭服务。

再执行`make up`重新启动服务，如果想用nginx则执行`make up-nginx`。

# 结语

如果您刚接触XSwitch，可以先阅读[XSwitch快速入门](https://xswitch.cn/docs/xswitch-tutorial.html)。

如果大家在使用过程中遇到什么问题，可以参考[https://xswitch.cn/pages/howto/trouble-shoot/](https://xswitch.cn/pages/howto/trouble-shoot/)。

如果大家对我们的产品有好的意见或建议，欢迎[给我们提工单](https://git.xswitch.cn/xswitch/docs/issues/1)。感谢您使用XSwitch。
