---
title: 'xtra_config参数详解'
date: 2022-06-05T17:59:00Z
lastmod: '2021-06-05'
tags: ['API文档']
draft: false
summary: 'xTra是XSwitch XUI的底层REST框架，xtra_config.lua是全局配置文件。'
layout: PostLayout
bibliography: references-data.bib
---

xTra是XSwitch XUI的底层REST框架，使用Lua语言开发，我们未来将开源核心的框架，也会开放相关的框架文档。在此，我们仅讨论`xtra_config.lua`配置文件中的参数。

`xtra_config.lua`是一个标准的Lua文件，导出一个`config` Table，是xTra框架的全局配置。修改配置文件会立即生效。基本配置格式为：

```lua
local config = {}
config.key = "value"
return config
```

`xtra_config.lua`配置文件的搜索顺序优先级如下：

- `/etc/xtra/`
- `vendor`的上一层目录
- `vendor`目录

其中，`vendor`是xTra框架的目录，一般建议放到`vendor`的上层目录。目前，`vendor`在XUI代码内容，XUI代码安装位置默认位于FreeSWITCH安装目录下，如`/usr/local/freeswitch/xui`。如果你拿到的是XSwitch发行版的Docker，`xtra_config.lua`一般位于宿主机上，以便在Docker容器停止后修改过的内容不失效。可以将该文件挂载到Docker容器内上述任意目录。

配置文件中有些参数已没有实际使用，但由于历史原因而存在。有些参数的值也不能改动。总的原则是，如果你不知道参数的细节，就保持原来的默认值。

下面是该配置文件的默认值及解释，**先参数，后解释**。在Lua中，`--`代表注释。

```lua
-- config.file = debug.getinfo(1).source
```

该参数是只读的，用于记录`xtra_config.lua`文件的实际路径，方便调试。如在同时有多个文件的情况下，可以打印出该路径以判断哪个是实际生效的。该参数在使用`luac`编译后的Lua中不能正确获取文件路径，可以使用指定的字符串，如：

```lua
config.file = '/etc/xtra.lua`
```

该参数对XUI实际运行无影响。

```lua
config.dsn = os.getenv("DSN")
```

配置数据库连接字符串。XUI早期的版本支持SQLite，新的版本已不支持，上述配置中从环境变量中获取连接参数，因而你可以使用在`.env`中指定的环境变量。

该参数取值如下，推荐使用最后一种：

```lua
-- SQLite连接字符串
config.dsn = "sqlite://xui"
-- ODBC连接，需要配置odbc.ini
config.dsn = "odbc://xui:xui:xui"
-- 原始PostgreSQL连接字符串
config.dsn = "pgsql://host=xswitch-pg dbname=xui user=xui password='xui' "
-- 现代PostgreSQL连接字符串，需要PostgreSQL 9以上版才支持
-- config.dsn = "pgsql://postgresql://用户名:密码@主机名/数据库名"
config.dsn = "pgsql://postgresql://xui:xui@xswitch-pg/xui"
```

```lua
-- config.check_permissions = true
```

无效。

```lua
config.redis_host = "xswitch-redis"
config.redis_port = 6379
-- config.redis_pass = nil
```

Redis连接参数。XSwitch支持连接Redis，可以用作用户登录鉴权的Session存储，也可以支持XSwitch内部的并发控制等。

```lua
config.db_auto_connect = true
```

是否自动连接数据库，必须为`true`。

```lua
config.auto_record = false
```

是否自动录音。目前仅对`cti`有效。

```lua
config.auto_log = false
```

是否自动写日志。如果打开，所有的增、删、改等REST操作将会写到数据库中，可以在XUI上的日志菜单中查看。

```lua
config.base_dir = "/usr/local/freeswitch"
```

FreeSWITCH安装目录。

```lua
config.sounds_dir = config.base_dir .. "/sounds"
```

系统声音文件目录（只读）。

```lua
config.storage_dir = config.base_dir .. "/storage"
```

系统存储目录。该目录中存储可变的内容，如通话过程中产生的录音等。该目录应该是可写的，在Docker容器中应该挂载宿主机上的目录以支持持久化存储。

```lua
config.recording_path = config.base_dir .. "/storage/recordings"
```

录音存储路径。

```lua
config.fiforecord_path = config.base_dir .. "/recordings"
```

`mod_fifo`录音存储路径。

```lua
config.callcenterrecord_path = config.base_dir .. "/recordings"
```

`mod_callcenter`录音存储路径。

```lua
config.upload_path = config.base_dir .. "/storage/upload"
```

上传媒体文件存储路径。

```lua
config.block_path = config.base_dir .. "/storage/blocks"
```

积木脚本存储路径。

```lua
config.xui_path = config.base_dir .. "/xui"
```

XUI后台脚本存储路径。

```lua
config.audio_extension = "wav"
```

录音文件默认扩展名。可以是`wav`或`mp3`。

```lua
config.video_extension = "mp4"
```

录像文件默认扩展名。目前仅支持`mp4`。

```lua
config.ivr_greeting = "ivr/ivr-generic_greeting.wav"
config.ivr_invalid = "ivr/ivr-that_was_an_invalid_entry.wav"
```

IVR相关语音。

```lua
config.audio_codec = "G722,PCMU,PCMA,GSM,G729,iLBC"
config.video_codec = "VP8,H264,G722,PCMU,PCMA,GSM,G729,iLBC"
```

外呼是使用的默认的音视频编码，目前仅针对会议自动外呼有效。。

```lua
config.openvpn_path =  "/root/keys"
```

OpenVPN相关配置。

```lua
config.switch_domain = "xswitch.cn"
```

外呼时使用的域。目前仅对会议有效。

```lua
config.switch_port = "8000"
```

外呼时使用的端口号。目前仅对会议有效。

```lua
config.abnormal_instant_conference_timeout = "120"
```

会议相关。

```lua
config.auth = "hash" -- or true | file | hash | redis
```

HTTP认证鉴权Session的存储方式。

- `hash`：存在FreeSWITCH内部哈希表中，重启后浏览器端所有用户都需要重新登录。
- `true`：跟`hash`一致。
- `file`：存储到文件中，可以持久化，FreeSWITCH重启后无需重新登录。
- `redis`：存储到Redis中，比`file`更高效，而且可以多台FreeSWITCH共享。

```lua
config.session_path = "/tmp"
```

如果开启`file` Session存储，设置Session文件的路径。

```lua
config.force_domain = 'xswitch.cn'
```

强制用户的域都是该值。FreeSWITCH是一个多租户系统，但是在小型应用中使用起来会很复杂。开启该选项后所有用户都属于同一个域。

```lua
-- config.password_use_a1_hash = true
```

是否开启A1哈希加密支持。如果不开启则密码是明文的。A1哈希跟域有关，如果开启后，以后改变域时必须让所有用户修改密码。

```lua
config.view_path = config.base_dir .. "/xui/lua/xui/view"
```

xTra是一个MVC框架，该选项配置View的路径。XUI是前后端分离的，前后端数据交互使用JSON格式，不使用View。

```lua
-- config.prefix_table = "gw"
```

Todo.

```lua
-- config.httpFifoNotificationURL="http://localhost:9999"
```

特殊应用。在呼叫中心应用中，用于简单的来电弹屏通知。

```lua
config.tz = 8
```

时区，东8区为北京时间。

```lua
-- config.cross_domain="http://192.168.3.119:8081"
-- config.cross_domain="*"
```

配置HTTP跳域支持（CORS），`*`代表接受所有来源（Referer）。

```lua
-- config.conferenceForceMatchCID = true
```

会议安全选项，呼叫会议的主叫号码必须匹配到一个预置的成员才能呼入，详细见会议相关文档。

```lua
config.wechat_base_url = "http://example.com"
config.wechat_realm = "xyt"
config.template_id = "Mu6mySnQiCRdCa5QmJSCBOSIkAxjgm3CuUpp6FqTCnA"
-- config.wechat = {}
-- config.wechat.xyt = {APPID = 'wx', APPSEC = ''}
-- config.ticket_type_wechat_default = 'TICKET_TYPE_0' -- default ticket type from wechat
```

微信公众号集成，支持简单的工单集成。

```lua
config.allow_change_ip = false
```

是否允许在界面上修改IP地址。在Docker中不允许。

```lua
-- config.qywechat = {}
-- config.qywechat.CorpID = ''
-- config.qywechat.CorpSecret = ''
-- config.qywechat.AgentID = 10001
-- config.xui_url = "https://xswitch.cn"
-- config.qywechat_webhookkey = 'f588ba02xxxxxxxxx'
```

企业微信集成。

```lua
-- config.callcenter_bridge_failed_to_break = true
```

Callcenter相关设置。


```lua
-- config.conference_use_pin = true
```

会议是否使用密码。

```lua
config.upload_max_size = os.getenv("UPLAOD_MAX_SIZE") or "100M"
```

最大上传文件大小。

```lua
-- config.cc_track_on = true -- track callcenter
-- config.cc_record_template = "$${base_dir}/storage/recordings/${strftime(%Y%m%d)}/cc-${strftime(%H%M%S)}-${caller_id_number}-${destination_number}-${uuid}.mp3"
```

见Callcenter相关文档。

```lua
-- config.cluster = true  -- Kamailio <-> FS cluster
-- config.cluster_ik_gateway = "internal_kamailio"  -- the gateway name to internal Kamailio
-- config.cluster_gk_gateway = "gateway_kamailio"  -- the gateway name to gateway Kamailio
-- token to send http rpc request to kamailio
-- config.with_kamailio = true
-- config.kamailio_servers = os.getenv("KAMAILIO_LIST")
-- config.kamailio_servers = 'gw-kam:9060'
--config.kam_http_token = os.getenv("KAM_HTTP_TOKEN")
--config.kam_http_token = 'Bearer ' .. os.getenv("KAM_HTTP_TOKEN")
```

集群相关设置，与Kamailio配合部署。

```lua
config.forget_password = true
```

是否允许自助找回密码。

```lua
config.free_register = true
```

是否允许自动注册。

```lua
config.register_audit = true
```

注册是否需要审核。

```lua
config.callback_gateway = "callback"
```

回呼是使用的网关。

```lua
config.codec_list = "PCMA,PCMU,G729,G722,OPUS,VP8"
-- config.codec_list = os.getenv("GW_CODECS") or "PCMU,PCMA,G729,G722,OPUS,VP8,H264"
```

默认的编解码列表。


```lua
-- config.tts_engine = "tts_baidu"
-- config.tts_voice = 'ting-ting'
```

TTS相关设置。

```lua
-- config.with_opensips = true
```

与OpenSIPS配合使用。
