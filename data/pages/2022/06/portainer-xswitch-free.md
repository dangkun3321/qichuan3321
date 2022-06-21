---
title: 'Portainer的安装以及docker-compose的部署'
date: 2022-06-20T18:00:00Z
lastmod: '2022-06-20'
tags: ['Docker']
draft: false
summary: 'Portainer是一个Docker可视化管理工具，可以更方便地对Docker镜像进行管理。'
layout: PostLayout
bibliography: references-data.bib
---

## Portainer的安装以及docker-compose的部署

Portainer的安装（前提是已经安装好docker和联网）。

### 运行Portainer界面镜像

```sh
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --restart=always --log-opt max-size=1g -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

### 运行Portainer旧版界面镜像

centos自带火狐浏览器可能打不开新版的

```sh
docker run -d -p 8000:8000 -p 9000:9000 --name=portainer-old --restart=always --log-opt max-size=1g -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data_old:/data portainer/portainer:latest
```

命令里面8000和 9000是占用端口，可以修改（例如9000:9000，会占用外部的9000端口，如果要修改，可以改成9200:9000这样）。

安装后，用浏览器打开9000端口，（例如：http://192.168.24.148:9000/）。
第一次打开会让新建账户，选择local方式连接（这里截图是已经建立账户的登陆界面）。

![](/static/images/2022/06/portainer-xswitch-free/portainer_xs01.png)

进入Stacks，并复制docker-compose的内容，和变量文件（或者把变量复制过来）。

![](/static/images/2022/06/portainer-xswitch-free/portainer_xs02.png)

记得填Names，这里编辑器会检查文件内容（例如这里提示的重名）如果全部正确后，下面部署按键会亮。

![](/static/images/2022/06/portainer-xswitch-free/portainer_xs03.png)
![](/static/images/2022/06/portainer-xswitch-free/portainer_xs04.png)

假如部署有问题，右上角会提示。如果部署的时候，要拉取镜像，部署会比较花时间（不要急着关闭界面，大部分时候不是卡了，而是下载镜像比较花时间，例如这里的报错是端口已经被占用的意思）。

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs05.png)

部署完成后，会自动返回Stacks，可以看到生成的。

## Portainer的界面介绍

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs06.png)

这里是已经连结好了本地docker的界面。

- Dashboard：主界面
- APP Templates：安装程序的模版（需要连接的上docker hub的，但国内一般都连不上，所以不常用）可以快速安装一些程序（例如mysql各种数据库，nodejs这些），会自动拉docker-compose然后运行
- Stacks：可以用来编辑和运行docker-compose
- Containers：可以看到所有的docker（有的不是用docker-compose方式部署，那就要到这个地方看）
- Inages：docker镜像管理
- Networks：docker网络管理
- Volumes：docker卷管理
- Events：日志
- Host：连结docker的基本信息
- 剩下的SETTINGS是Portainer的用户管理和设置，一般用不上

## Portainer的常用操作

docker start，docker stop等

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs07.png)

- 对应docker start，docker stop等命令。
点击容器名，进入容器操作。

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs08.png)

- Logs：对应 docker logs 命令

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs09.png)
-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs10.png)

日志自动更新和滚动，提供下载功能（偶尔会下载不下来）。

- Stats：查看容器运行的CPU和内存和进程

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs11.png)
-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs12.png)

- Console和Attach：进入容器的控制台，两者区别可以百度。对应 docker exec 和 docker Attach命令

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs13.png)

Console方式会选择Command，进不去时候可以尝试切换下

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs14.png)

点击“Connect”后，输入fs_cli（freeswitch的控制台）

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs15.png)

- 修改已经运行的docker（修改后会重新部署）

-![](/static/images/2022/06/portainer-xswitch-free/portainer_xs16.png)

最下面一栏经常用到，用于修改docker运行的卷，网络，变量，分配的内存，权限等。

- Docker-compose部署时候的变量列表。

![](/static/images/2022/06/portainer-xswitch-free/portainer_xs17.png)
