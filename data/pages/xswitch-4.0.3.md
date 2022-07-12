---
title: 'XSwitch v4.0.3版发布'
date: 2022-07-06T15:00:00Z
lastmod: '2022-07-06'
tags: ['版本']
draft: false
summary: 'XSwitch v4.0.3版'
layout: PostLayout
bibliography: references-data.bib
---

这是一次小的更新和Bug修复

# XUI 更新

- 优化IVR欢迎音部分出现卡顿情况
- 历史会议接口增加更多返回数据
- 修复IVR转队列时，如果队列开启录音挂断问题
- 修复会议话单有时不生成问题
- 修复会议按键控制部分不生效问题
- 修复话单部分不显示呼叫源问题
- 修复界面所有批量导入导出兼容问题
- 增加按用户组查询话单功能
- 优化会议密码逻辑


# 升级建议

本次升级变化较小，如果原先版本是4.0.2，可以直接修改版本号更新，具体操作如下：

linux修改`docker-compose.yml`文件，Mac修改`docker-compose-mac.yml`文件，将文件中service为xswitch的image一行的版本号由4.0.2改为4.0.3

```
ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.2
```
修改为

```
ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.3
```

如果用nginx，还需要按照上边把service为xswitch-nginx-xui的image一行的版本号也修改为4.0.3。

修改后，执行`make down`关闭服务。

再执行`make up`重新启动服务，如果想用nginx则执行`make up-nginx`。

# 结语

如果您刚接触XSwitch，可以先阅读[XSwitch快速入门](https://xswitch.cn/docs/xswitch-tutorial.html)。

如果大家在使用过程中遇到什么问题，可以参考[https://xswitch.cn/pages/howto/trouble-shoot/](https://xswitch.cn/pages/howto/trouble-shoot/)。

如果大家对我们的产品有好的意见或建议，欢迎[给我们提工单](https://git.xswitch.cn/xswitch/docs/issues/1)。感谢您使用XSwitch。
