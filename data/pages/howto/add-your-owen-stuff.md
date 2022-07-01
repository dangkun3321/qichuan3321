---
title: '如何在XSwitch Docker镜像中添加你需要的东西'
date: 2022-07-01T10:00:00Z
lastmod: '2022-07-01'
tags: ['How-To文档', 'Docker']
draft: false
summary: '定制你需要的Docker镜像'
layout: PostLayout
bibliography: references-data.bib
---

XSwitch主打定制，因此，量身定作定制一个你需要的Docker镜像也是XSwitch必备的功能。

我们以[如何在XSwitch中使用Edge TTS](/pages/howto/edge-tts/)这篇文章为例。考虑到Docker镜像的大小，我们并没有将`edge-tts`内置到通用版的Docker镜像中。这样，用户在使用时就需要自行安装。如果Docker镜像重启，就又需要重新安装，有时候这不是你期户的，下面，我们带你实现你自己的Docker镜像。

## docker commit

最简单的方法就是通过`docker commit`制作自己的镜像。执行如下命令：

```sh
make bash                            # 进入XSwitch容器
apt-get update                       # 更新Linux软件源数据
apt-get install python3-pip          # 安装Python pip
pip install edge-tts                 # 安装edge-tts
```

按`Ctrl + D`退出容器，在外面执行：

```sh
docker commit xswitch my-xswitch:v1.0
```

然后，你就有了自己的镜像了。修改`docker-compose.yml`，将`image:`换成你自己的镜像，如：

```yml
image: my-xswitch:v1.0
```

然后重新Docker就可以了。在此，直接执行`make up`就行，不需要先`make down`，因为`.yml`文件变了容器会自动重建。

以后，再也不用每次都重装`edge-tts`了。

关于`dockcer commit`更多的用法可以参考[这里](https://docs.docker.com/engine/reference/commandline/commit/) 。

## docker build

当然，你也可以使用经典的`docker build`来做这个事情，先写一个`Dockerfile`，内容如下：

```docker
FROM ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.2
RUN apt-get update && apt-get install python3-pip && pip install edge-tts
```

然后在命令行上直接执行如下命令build你自己的镜像：

```
docker build -t my-xswitch:1.0 .
```

其中`-t`指定镜像的名字和标签。

殊途同归。关于`docker build`更多解释见[这里](https://docs.docker.com/engine/reference/commandline/build/) 。

## 内网

怎么把Docker镜像复制到你的内网上呢？也很简单，记住以下两个命令就好了：

```sh
docker save
docker import
```

如果不清楚这两个命令怎么用，可以查询Docker命令手册，这个，作为课后作业吧 :)。
