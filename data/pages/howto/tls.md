---
title: '如何在XSwitch中开启TLS'
date: 2022-05-23T10:00:00Z
lastmod: '2022-05-23'
tags: ['How-To文档', '安全']
draft: false
summary: '随着时代的发展，TLS也慢慢成了SIP通信的标配'
layout: PostLayout
bibliography: references-data.bib
---

随着时代的发展，TLS也慢慢成了SIP通信的标配，下面我们来看一下如何在XSwitch中开启TLS支持。

# 使用自签名证书

TLS需要使用证书，XSwitch默认安装会有一个自签名的证书`/usr/local/freeswitch/certs/tls.pem`，我们先使用该证书演示TLS配置。

首先，打开【高级】⇨【SIP】，选择一个SIP Profile，进入，修改并开户所有TLS相关的配置参数，如：

- `tls`：`true`，是否开启TLS支持
- `tls-bind-params`：`transport=tls`，绑定TLS参数，会出现在Contact等头域中
- `tls-cert-dir`：`$${certs_dir}`，这是一个全局变量，默认值是`/usr/local/freeswitch/certs/`，指定证书路径
- `tls-ciphers`：`$${sip_tls_ciphers}`，全局变量，代表使用的加密算法，默认值是``
- `tls-only`：`false`，如果改为True，则仅支持TLS，不支持UDP/TCP。
- `tls-passphrase`：如果证书有密码保护，需要填，否则留空。
- `tls-sip-port`：`$${sip_tls_port}`，全局变量，默认为`5061`。
- `tls-verify-data`：是否检查日期。
- `tls-verify-depth`：`2`，设置允许的TLS验证链的最大深度。
- `tls-verify-in-subjects`：默认为空。
- `tls-verify-policy`：`none`。
- `tls-version`：`$${sip_tls_version}`，默认值为：`tlsv1,tlsv1.1,tlsv1.2`。

然后，点击右上角的重启，或在控制台上执行`reload mod_sofia`就可以了，如果在详细信息中看到如下内容，表示TLS配置好了：

```
tls-bind-url: sips:mod_sofia@192.168.7.8:5061;maddr=172.18.0.3;transport=tls
```

可以使用如下`openssl`命令检查是否可以连接，如：

```
openssl s_client -connect 172.18.0.3:5061
CONNECTED(00000003)
Can't use SSL_get_servername
depth=0 C = US, CN = FreeSWITCH
verify error:num=18:self signed certificate
verify return:1
depth=0 C = US, CN = FreeSWITCH
verify return:1
---
Certificate chain
 0 s:C = US, CN = FreeSWITCH
   i:C = US, CN = FreeSWITCH
---
Server certificate
-----BEGIN CERTIFICATE-----
...
```

下面，就可以尝试通过SIP客户端连接了，不过，不是所有客户端都支持自签名证书。有的客户端支持不验证TLS证书，如果有的话可以尝试开启该选项测试。

# 使用权威机构签发的TLS证书

如果在生产环境使用，需要使用权威机构签发的TLS证书。很多权威机构也提供免费的证书，比如国内的一些云厂商，国外的Let's Encrypt等。

XSwitch需要`pem`格式的TLS证书，如果你收到的证书不是`pem`格式的，可以转换成`pem`格式的，以GoDaddy的证书为例：

```
openssl x509 -in gd_bundle-g2-g1.crt -out chain.pem -outform PEM
cat 客户提供的证书.pem chain.pem > fullchain.pem
cat fullchain.pem 客户的私钥.pem > tls.pem
```

使用它替换掉XSwitch中的`tls.pem`即可。

**注意**：[RFC 5922](https://www.rfc-editor.org/rfc/rfc5922.html#section-7.2)明确规定SIP协议必须不支持泛域名证书。所以，请不要使用泛域名证书。

> 本文的内容同样适用于FreeSWITCH。
