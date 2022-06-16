# XSwitch 实现docker可视化管理

## 安装docker和docker-compose

此版本基于debian系统安装，以管理员身份`root`安装。

```shell
第一步 卸载系统自带的软件
apt-get remove docker docker-engine docker.io containerd runc

第二步 更新系统 
apt-get update

第三步 安装插件
apt-get install apt-transport-https ca-certificates curl gnupg lsb-release gnupg2 pass -y

第四步 添加Docker官方的 GPG key
curl -fsSL https://download.docker.com/linux/debian/gpg |gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

第五步 使用下面的命令设置stable源
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" |tee /etc/apt/sources.list.d/docker.list > /dev/null

第六步 安装
apt-get update
apt-get -y install docker-ce docker-ce-cli containerd.io docker-compose


第七步 启动docker
systemctl start docker
systemctl enable docker
```

## 安装 Portainer

Portainer是一个可视化的Docker操作界面，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和服务等集中管理和操作、登录用户管理和控制等功能。
[官网](https://www.portainer.io/)

### 通过命令安装 Portainer

```sh
$ docker volume create portainer_data
$ docker run -d -p 8000:8000 -p 9000:9000 --name portainer --restart=always --log-opt max-size=1g \
-v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest
```
如端口被占用可以自行修改，修改`9001:9001`，重启参数`--restart=always`。

### 首次登录 Portainer

启动后，通过本地浏览器访问：`http://localhost:9000`， 直接进入Portainer注册用户界面。
输入12位密码后，创建用户。首次会直接登录系统。
![](image/portainer_first_login.png)

非首次登录，会出现以下登录界面
![](image/portainer_login.png)

### Portainer 操作界面

- 登录后，点击`Get Started`

![](image/portainer_01.png)

- 选择`local`

![](image/portainer_02.png)

- 选择`Stacks`

![](image/portainer_stacks.png)

- 选择`Add stacks`

![](image/portainer_add_stacks.png)

### 下载XSwitch并创建目录

到[小樱桃官网](https://xswitch.cn)可下载`XSwitch`

```sh
wget https://xswitch.cn/download/xswitch-install.tar.gz --user xswitch --password password
tar zxvf xswitch-install.tar.gz
cd xswitch-install
```
将文件`env.example`改名`.env`存放到桌面,根据服务器的网络配置修改文件`.env`。

```sh
# xswitch-lua use env

DSN=postgresql://xui:xui@127.0.0.1/xui
SIP_PORT=7060
SIP_TLS_PORT=7061
SIP_PUBLIC_PORT=7080
SIP_PUBLIC_TLS_PORT=7081
VERTO_WS_PORT=8081
VERTO_WSS_PORT=8082
RTP_START=10000
RTP_END=20000
ESL_PORT=8021
EXT_IP=192.168.100.20
LOCAL_IP=192.168.100.20
FREESWITCH_DOMAIN=xswitch.cn
FREESWITCH_DEFAULT_PASSWORD=1234
FREESWITCH_EVENT_SOCKET_PASSWORD=1234
PKG_CONFIG_PATH=/usr/local/pg-static/lib/pkgconfig:/usr/local/freeswitch/lib/pkgconfig

# xswitch-pg use env
PGDATA=/var/lib/postgresql/data/pgdata
TZ=PRC
POSTGRES_PASSWORD=xswitch1qaz!

# xswitch-nginx use env（xswitch和xswitch-pg镜像不要此项）
HTTP_PORT=80
NGINX_PROXY=192.168.100.20
```

在服务器上创建目录

```sh
mkdir /data
```
### 添加xswitch-pg
打开`docker-compose.yml`。
Name填写`xswitch-pg`，复制`xswitch-pg`内容到`Web editor`框中，加载`.env`变量。

![](image/xswitch_pg.png)

Web editor 内容如下

```
version: "3"

services:  
  xswitch-pg:
    container_name: "xswitch-pg"
    image: ccr.ccs.tencentyun.com/free/xswitch-pg:latest
    network_mode: "host"
    restart: always
    env_file: ./.env
    volumes:
      - /data/postgres:/var/lib/postgresq/data
```

![](image/xswitch_env.png)

添加完成后，显示以下图片

![](image/xswitch_finish.png)

### 添加xswitch和xswitch-nginx-xui
以上述方法分别添加`xswitch`和`xswitch-nginx-xui`。

```
version: "3"

services:
  xswitch:
    container_name: "xswitch"
    image: ccr.ccs.tencentyun.com/free/xswitch-lua-free:4.0.0
    network_mode: host
    logging:
      driver: "json-file"
      options:
        max-file: "10"
        max-size: "200m"
    restart: always
    env_file: ./.env
    ulimits: 
      core: -1
    privileged: true
    stdin_open: true
    tty: true
    volumes:
      - /data/log:/usr/local/freeswitch/log
      - /data/storage/upload:/usr/local/freeswitch/storage/upload
      - /data/storage/vosk:/usr/local/freeswitch/storage/vosk
      - /data/storage:/usr/local/freeswitch/storage
      - /data/sounds:/usr/local/freeswitch/sounds
      - /data/xtra_config.lua:/usr/local/freeswitch/xui/lua/xui/xtra_config.lua
```

```
version: "3"

services:
  xswitch-nginx-xui:
    container_name: "xswitch-nginx-xui"
    image: ccr.ccs.tencentyun.com/free/xswitch-nginx-xui:4.0.0
    network_mode: "host"
    restart: always
    env_file: ./.env
    volumes:
      - /data/storage:/usr/local/freeswitch/storage
```
完成上述添加，可以在`Containers`中查看，并查看启动状态。

![](image/xswitch_free.png)

### 使用XSwitch
经过一翻精彩操作，我们终于可以看到`XSwitch`了。体验一下吧。
通过浏览器输入`http://localhost`，初始账号和密码均为`admin`。

![](image/xs.png)

输入账户和密码，进行我们XSwitch旅行吧！

![](image/xs-free.png)


### Portainer 简单操作

- 第一红框内有容器的操作命令如： 启动、停止、重启、删除等。
- 第二个红框内的是容器的的一些快接按键，依次有日志、容器元数据信息、容器状态、登录容器。

![](image/portainer.png)


### 注意事项
- 需要注意的是在添加`xswitch-pg`和`xswitch`不需要加载`.env`中`HTTP_PORT`和`NGINX_PROXY`变量。
- 如遇到登录账号密码错误，可删除容器，重新进行添加。
- 无法打开网页可以查看日志。如有80端口被占用可以自行调整端口。或将`xswitch`停止后重启`xswitch-nginx-xui`,最后将`xswitch`启动。