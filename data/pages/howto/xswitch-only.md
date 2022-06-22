---
title: '如何使用不带XUI的XSwitch'
date: 2022-06-22T10:00:00Z
lastmod: '2022-06-22'
tags: ['How-To文档', 'xswitch']
draft: false
summary: 'XSwitch内置XUI，但XUI不是必须的，本文带你试试“去掉”XUI的XSwitch'
layout: PostLayout
bibliography: references-data.bib
---

XSwitch功能强大，内置XUI。内置XUI虽然方便，但它有数据库依赖，而且，为了迁就XUI，增加了一些规则和限制。如果你只想使用底层的xswitch交换功能，可以抛开XUI的限制。下面，我们带大家来研究一下如何使用不带XUI的XSwitch。

为了大家运行方便，XSwitch前后端都在同一个镜像里，开箱即用。如果不使用XUI，也可以自己写XML配置文件。

为了能快速上手，首先，你要先学会[XSwitch Free](https://github.com/rts-cn/xswitch-free)。跑通后，关闭XSwitch Free，执行以下操作：

```sh
make eject
```

上述命令是把XSwitch Free中默认的配置文件Copy到本地，实际上执行了如下命令：

```sh
docker cp xswitch-free:/usr/local/freeswitch/conf .
```

输出结果如下：

```
conf copied to local dir, please edit docker-compose.yml to use it
```

然后，打开`docker-compose.yml`文件，把里面的`image:`行改成XSwitch社区版 的镜像，如：

```yml
    image: ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.2
```

挂载本地的配置文件，如：

```yml
    volumes:
       - ./conf/:/usr/local/freeswitch/conf:cached
```

完整文件如下：

```yml
version: "3.3"

services:
  xswitch:
    container_name: xswitch-free
    image: ccr.ccs.tencentyun.com/free/xswitch-lua-js-free:4.0.2
    environment:
        - FREESWITCH_DOMAIN=free.xswitch.cn
    env_file: .env
    # command: ["bash"]
    # stdin_open: true
    # tty: true
    # network_mode: host
    ports:
      - "${RTP_START:-2000}-${RTP_END:-2100}:${RTP_START:-2000}-${RTP_END:-2100}/udp"
      - "${SIP_PORT:-5060}:${SIP_PORT:-5060}/udp"
      - "${SIP_PORT:-5060}:${SIP_PORT:-5060}/tcp"
      - "${SIP_PUBLIC_PORT:-5080}:${SIP_PUBLIC_PORT:-5080}/udp"
      - "${SIP_PUBLIC_PORT:-5080}:${SIP_PUBLIC_PORT:-5080}/tcp"
    #   - "${VERTO_WS_PORT}:${VERTO_WS_PORT}"
    #   - "${VERTO_WSS_PORT}:${VERTO_WSS_PORT}"
    # cap_add:
    #   - SYS_PTRACE
    #   - NET_ADMIN # for iptables to work
    volumes:
       - ./conf/:/usr/local/freeswitch/conf:cached
```

然后，使用`make start`或`make run`就可以正常使用新的镜像了。

根据XSwitch Free的文档，默认的配置文件是“精减”的配置文件，你也可以根据你自己的环境需要换成你常用的配置文件。

当然，不带XUI的XSwitch也不依赖于XSwitch Free，只是这样便于说明问题，完全理解了本文的内容后你完全可以自己手写`docker-compose.yml`文件和`conf`目录中的相关文件。

TL;DR

通过上述方法，你就知道如何不使用XUI了。如果你想了解更多细节，继续读。

XUI由以下几部分构成：

- XSwitch，也就是FreeSWITCH
- mod_verto，内置HTTP服务器
- Lua，后台的REST API
- Lua，后台的数据绑定，为XSwitch提供Configuration、Dialplan等
- XUI JS，前端JS
- PostgreSQL，数据库

这一切的核心就是配置文件。如果你能找到XSwitch的配置文件`lua.conf.xml`，就会发现下面两行：

```xml
<param name="xml-handler-script" value="/usr/local/freeswitch/xui/lua/xui/fs_xml_handler.lua"/>
<param name="xml-handler-bindings" value="dialplan|result|configuration|directory|channels|chatplan|languages"/>
```

它表示只要加载了mod_lua，FreeSWITCH所需的配置文件都“动态”通过执行那个Lua脚本获取。

把它注释掉，就无效了。当然，无效是无效了，那你需要写静态的XML，或使用`mod_xml_curl`等模块提供你需要的XML。

`verto.conf.xml`里有一个`vhost`配置，如果你熟悉Apache，你就可以看到类似的概念，它启动一个HTTP服务器，静态文件从`root`中获取，动态API全部重定向到`init.lua`脚本处理。

```xml
<vhosts>
<vhost domain="localhost">
    <param name="alias" value="seven.local freeswitch.org"/>
    <param name="root" value="$${base_dir}/xui/www"/>
    <param name="script-root" value="$${base_dir}/xui/lua/xui"/>
    <param name="options-cross-domain" value="*"/>
    <param name="index" value="index.html"/>
<!--
    <param name="auth-realm" value="FreeSWITCH"/>
    <param name="auth-user" value="freeswitch"/>
    <param name="auth-pass" value="rocks"/>
-->
    <rewrites>
    <rule expression="^/api" value="/init.lua"/>
    </rewrites>
</vhost>
```

参阅本站其它文件了解更多XSwitch内部的秘密。
