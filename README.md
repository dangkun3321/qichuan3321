# Xswitch 官网

[Xswitch 官网项目](https://xswitch.cn/)

## 运行项目

```
make setup
make dev
```

打开浏览器在 `localhost:3000` 预览

## 编译生产环境代码

```
make setup (执行过一次可跳过)
make release
```

生产代码环境在 `./out` 文件夹

## 本地预览生产环境界面

```
make setup (执行过一次可跳过)
make release
cd ./out
python3 -m http.server 9000
```

打开浏览器在 `localhost:9000` 预览

## 开发

本项目在此[模版](https://github.com/timlrx/tailwind-nextjs-starter-blog)基础上开发

本系统使用了代码美化插件，在提交时会自动格式化代码，如果发现提交不成功，可以执行`git diff`查看美化后的文件，然后只要执行`git add 对应的文件`即可。

参见： <https://git.xswitch.cn/xyt/xswitch-website/pulls/3/files>

## 发布

```
make install
```

## 增加页面

只需要在`/data/pages/`目录下增加相应的`.md`文件。命名规则如下：

- 如果是通用的页面，如`docs.md`，则直接以简洁的方式命名
- 如果是新闻性质的页面，使用日志前缀，如`2022-02-02.md`，可以有个一可选的关键词，如`2022-02-02-xswitch-rocks.md`


## 链接

- 绝对链接会从新Tab中打开，如`https://xswitch.cn/docs`
- 相对链接在本窗口中打开，如`/docs`
