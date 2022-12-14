---
title: 'XSwitch安装指南'
date: 2021-08-07T15:32:14Z
lastmod: '2021-02-01'
tags: ['版本']
draft: false
summary: 'XSwitch 是一个电信级的 IP 电话软交换系统和综合实时音视频多媒体通信平台，本文档描述 All-in-One 版安装过程。'
layout: PostLayout
bibliography: references-data.bib
---

# 概述

XSwitch 是一个电信级的 IP 电话软交换系统和综合实时音视频多媒体通信平台，本文档描述 All-in-One 版安装过程。

社区版包含标准 XSwitch 所有的功能，默认许可证可以支持 200 个 Channel 并发许可，以及 5 个 AI 类模块并发许可，如果需要更多并发请联系我们购买商业版。

本版本以 Docker 镜像方式提供，可以安装到 Linux、Windows、macOS 操作系统上。

# 声明

XSwitch 版权归烟台小樱桃网络科技有限公司所有。本发行版提供 Docker 镜象，任何人都可以使用，没有时间限制。本版本仅供学习和自用，不允许二次分发和售卖（但可以告诉你的客户自己下载，你可以教他使用）。使用时须保证本镜像的完整性，不准使用任何方式对本系统进行逆向、破解等，不准以任何方式向别人提供镜像中的部分文件或组件。您下载 XSwitch 表示您同意[最终用户许可协议](/pages/eula/)。

# 前期准备

XSwitch 运行于 GNU/Linux 环境，支持通用的 64 位服务器，支持虚拟机及 Docker 容器化、K8S 云原生部署，以及 Raspberry Pi 等 ARM 系统。支持阿里云、腾迅云、微软云、华为云、青云、Amazon 云等云端环境，支持私有化部署。支持国产 Linux 平台如统信 UOS、麒麟等，支持国产 CPU 如 ARM、MIPS、麒麟等，支持鲲鹏和泰山系列服务器。

本镜像目前支持X86-64（`amd64`）和ARM64（`aarch64`） CPU。本镜象基于`Debian 11`构建，宿主机可以使用任意支持 Docker的系统，但建议使用`Debain 11`，稳定性、兼容性更好。下面我们均以 Debain 操作系统为例。

为了方便大家安装，我们使用 Makefile，因此需要安装`make`，当然，如果环境不允许或无法安装`make`，可以直接参考`Makefile`文件中的指令，直接在命令行上执行即可（如果你看不懂Makefile，可以参考这篇[Makefile极速入门](/pages/xyt/makefile/)，看完了别忘了回来）。

执行下列命令在宿主机上安装相应的工具：

```bash
apt-get update
apt-get install -y make zip wget
```

下面假定您已经熟悉了 Docker 的安装和使用，如果不熟悉，请参考附件中的[Docker 安装](#docker)。

如果服务器上运行其他系统软件，为了不影响其他应用，请提前分配好系统访问域名（非必需）、IP 地址、端口等信息。

如果想测试通话等功能，请准备 SIP 话机或软电话。SIP 软电话可以参考：[《我用过的那些 SIP 客户端》](https://mp.weixin.qq.com/s/9fCf8xf_A4K6UNwZRKmhjw)

# 安装指南

在安装过程中需要从网上下载镜像及安装包，需要保持网络畅通。

## 下载解压安装包

```sh
wget https://xswitch.cn/download/xswitch-install.tar.gz --user xswitch --password password
tar zxvf xswitch-install.tar.gz
cd xswitch-install
```

## 安装指令及详细说明

### `make setup`

执行此命令是为了下载声音文件和生成`.env`文件，`.env`里的参数为docker容器运行时的环境变量。

注意，`.env`文件在Linux下默认是个隐藏文件，可以使用`ls -la`或`find . -name .env`、`cat .env`等命令显示，详见[Docker关于`.env`文件的相关说明](https://docs.docker.com/compose/environment-variables/#the-env-file)。

打开`.env`文件，修改如下几个参数：

#### 系统参数

```sh
EXT_IP=22.22.2.2     # 这是外网地址（如果是内网使用，填写内网地址即可）
LOCAL_IP=192.168.1.1 # 这是内网地址（如果是内网使用，填写内网地址即可），如果是Mac则无此参数
FREESWITCH_DOMAIN=demo.xswitch.cn # 这是填写域的地方（用户或分机的域，可根据需要自行设置，也可以设成IP地址）
```

#### Nginx 配置参数

```sh
NGINX_PROXY_IP=192.168.1.1 # 和LOCAL_IP填写相同内网地址即可，如果是Mac无需改动
HTTP_PORT=8080             # HTTP网址访问的端口（比如设置了8080，访问时输入http://ip:8080）
```

#### 其他参数说明

以下参数基本不用改动

```sh
DSN=postgresql://xui:xui@127.0.0.1/xui # 数据库连接地址，Mac下路径稍有不同
SIP_PORT=7060                          # UDP注册端口号
SIP_TLS_PORT=7061                      # TLS注册端口号
SIP_PUBLIC_PORT=7080                   # public对应端口号，用于网关对接等
SIP_PUBLIC_TLS_PORT=7081               # TLS Public对应端口号
VERTO_WS_PORT=8081                     # Verto WS对应端口号
VERTO_WSS_PORT=8082                    # Verto WSS对应端口号
RTP_START=10000                        # RTP媒体允许使用的最小端口
RTP_END=10099                          # RTP媒体允许使用的最大端口
ESL_PORT=8021                          # ESL对应端口
```

注意，如果在NAT环境下（非`host`网络，在macOS上必须使用NAT）RTP端口段不要开得太大，否则会影响效率。如果在生产环境中使用，请咨询XSwitch系统支持工程师获取最佳配置方案。

### `make up`

启动系统。首次运行会自动拉取镜象。启动后，可以通过 `http://你的服务器IP:8081` 访问Web界面。默认用户名和密码都是`admin`。

## 检查

通过执行`docker ps`可查看 docker 服务是否已正常启动。

如果有服务启动出错，可通过执行`docker logs -f xswitch`可查看`xswitch`容器相关日志（`xswitch`为容器名）。

通过执行`make bash`进入`xswitch`容器内部，然后输入`fs_cli`可以连接控制台查看系统运行情况。

# 持久化数据

XSwitch有以下持久化数据：

- `.env`：Docker容器相关的参数配置，在当前目录下
- `data`：数据库、录音等数据
	- `xtra_config.lua`：配置文件，详见[`xtra_config`参数详解](/pages/api/xtra-config/)
	- `pgdata`：PostgreSQL数据库数据
	- `storage`：存储
		- `recordings`：录音
		- `rrd`：RRD统计数据
		- `blocks`：积木
		- `sounds`：系统录音数据
	- `log`：日志

这些数据在容器停止或重启后还会继续存在。如果重装请注意备份。

如果由于任何原因搞乱了配置和数据，可以执行`make down`以及`rm -rf data`重来。如果还搞不定，删掉整个`xswitch-install`目录重新下载。

# 启用Nginx

XSwitch有内置HTTP服务器，简单起见，默认不启用Nginx。XSwitch默认只启动两个服务：

- `xswitch`：XSwitch服务
- `xswitch-pg`：PostgreSQL数据库服务

如果使用Nginx，可以执行：

```sh
make up-nginx
```

有些服务，如扩展功能中的下载日志及声音文件等可能需要启用Nginx才能使用。如果有任何问题，可以使用`make bash-nginx`查看配置文件，在`/etc/nginx/`目录中。

## Makefile 其他参考指令

### 进入 XSwitch 容器

执行`make bash`

### 进入 XSwitch 控制台

执行`make cli`

### 进入数据库

执行`make bash-pg`

### 进入 `nginx` 容器

执行`make bash-nginx`

# 附件

## Docker

本系统环境采用 Docker 部署，不建议直接使用系统默认安装的`docker`版本（通常比较旧），该文档提供的安装方式仅限于`Debian Buster 10/Debian Bullseye 11`，其他操作系统请参考 [ Docker 官网 ](https://docs.docker.com/engine/install/debian)，根据不同的操作系统安装最新 Docker

以下地址上有更多参考链接：

https://github.com/rts-cn/xswitch-free

### 安装 Docker

在服务器上安装 Docker Engine 和 Docker Compose（如果非 root 目录请在前加 sudo），如下：

```sh
apt-get remove docker docker-engine docker.io containerd runc
apt-get update
apt-get install ca-certificates curl gnupg lsb-release
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null
apt-get update
apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

安装完可以用`docker version` 和 `docker compose version`命令查看是否安装成功。

最新版的 `Compose` 是 Docker CLI的一部分，命令执行方式改为 `docker compose`， 与旧版docker-compose可并存在服务器。两者的具体区别可阅读
https://docs.docker.com/compose/cli-command-compatibility


### 更多参考

您可以参阅以下链接，或自行查找相关资料安装。安装时注意有选择国内镜像站点的一些设置比较有用，在以后使用的时候可以节省一些下载镜像的时间。

- https://www.runoob.com/docker/windows-docker-install.html
- https://www.runoob.com/docker/ubuntu-docker-install.html
- https://www.runoob.com/docker/macos-docker-install.html
- https://yq.aliyun.com/articles/625403

### 安装旧版本 docker-compose

```sh
curl -L https://get.daocloud.io/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

# 其它

XSwitch安装后，你可以继续学习[XSwitch快速入门](https://xswitch.cn/docs/xswitch-tutorial.html) 。也可以参照 [XSwitch运维手册](/docs/xswitch-ops.html) 对系统进行维护。

感谢您使用XSwitch。如果您在使用过程中有任何问题，都可以[参考这些解决方案](/pages/howto/trouble-shoot/)，或与我们联系。电子邮件：`info@x-y-t.cn` 。
