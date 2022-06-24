---
title: '如何在XSwitch中使用XCC API'
date: 2022-06-23T19:00:00Z
lastmod: '2022-06-23'
tags: ['How-To文档', 'API文档']
draft: false
summary: 'XSwitch连接NATS并提供XCC API。'
layout: PostLayout
bibliography: references-data.bib
---

XSwitch XCC API功能非常强大，几乎可以完全代替ESL，并提供比ESL更多的功能，支持使用几乎所有语言进行二次开发。

## 安装NATS

XSwitch默认支持XCC API，但你首先得有个NATS。

NATS是一个消息队列，支持Pub/Sub。NATS用Docker启动很简单，如：

```sh
docker run --name xswitch-nats --rm -p 4222:4222 nats:latest
```

为了验证NATS是否正常，可以使用NATS客户端工具测试，如，在macOS上执行：

```sh
brew tap nats-io/nats-tools
brew install nats-io/nats-tools/nats
```

打开一个终端，订阅消息：

```sh
nats sub '>'
```

再打开一个终端，发布消息：

```sh
nats pub hello hello
```

关于NATS客户端在其它平台上的使用方法，可以参考[https://github.com/nats-io/natscli](https://github.com/nats-io/natscli)。

## 使用Docker Compose启动NATS

你也可以尝试把以下内容加到你的`docker-compose.yaml`中然后使用Docker Compose管理你的NATS服务。

```yaml
  xswitch-nats:
    container_name: xswitch-nats
    image: nats:latest
    command: -p 4222
    ports:
      - "${NATS_PORT:-4222}:4222"
      - "${NATS_HTTP_PORT:-8222}:8222"
```

## 配置XSwitch连接NATS

打开菜单【高级】⇨【系统管理】⇨【XCC】⇨【xcc】，在XCC-SETTINGS部分找到`nats-url`，设置为指向你的NATS服务器，如：

```
nats://xswitch-xcc:4222
nats://192.168.0.1:4222
nats://username:password@192.168.0.1:4222
```

点击上面的【重载】按钮重新加载模块。就可以连接到NATS上了。

如果你像上一节那样订阅了所有消息（使用`>`作为主题通配符），那么你就可以看到XSwitch定期发的心跳消息。

## 配置订阅

为了能让你的应用给XSwitch发消息，你需要让XSwitch订阅消息。找到【XCC-SUBS】页签，可以看到里面默认订阅了`cn.xswitch.node.$${core_uuid}`这个主题，这个`$${core_uuid}`是随机生成的，每次XSwitch重启都会变（实际上这在云原生部署中是正确的姿势），你也可以订阅一个确定的主题，如`cn.xswitch.node.test`等。

修改后要重载模块。

可以点击【详细信息】查看连接和运行状态。也可以在控制台上使用`xcc status`命令查看。

然后，你就可以使用[XCC Examples](https://git.xswitch.cn/xswitch/xcc-examples)中的示例控制你的XSwitch了。

## 在命令行上执行命令

你也可以尝试在命令行上执行XSwitch中的命令，以`status`命令为例：

开一个终端执行`nats sub '>'`，开另一个终端执行如下命令，一切正常的话你应该能在第一个终端上看到命令回复的结果。

```sh
echo '{
  "jsonrpc": "2.0",
  "id": "0",
  "method": "XNode.NativeAPI",
  "params": {
    "ctrl_uuid": "uuid",
    "cmd": "status"
  }
}' | nats pub cn.xswitch.node.test
```

## 跟踪调试

使用`nats sub '>'`命令订阅所有NATS消息，所有问题都一目了然。

在XSwitch控制台上可以使用`xcc debug on 9`查看更详细的NATS消息日志。

## 其它

参阅[XSwitch XCC API手册](https://xswitch.cn/docs/xswitch-xcc.html)获取更多信息。
