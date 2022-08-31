---
title: '小樱桃技术人员必读'
date: 2022-08-24T15:59:00Z
lastmod: '2021-08-24'
tags: ['小樱桃']
draft: false
summary: '小樱桃技术人员必读'
layout: PostLayout
bibliography: references-data.bib
---

这是小樱桃新员工的必读文章，在此，我们分享给大家，希望对大家有用。也欢迎大家批评。

## 欢迎

欢迎加入小樱桃。不管你是刚刚走出象牙塔，还是有多年的深资工作经历，都请认真读一遍这篇文章。该文章包含我们写代码的一些习惯和规范。记住下面这些：

- 你加入的是一个团队，需要跟大家通力协作
- 你所有的贡献，或错误，都会对整个团队、甚至我们的客户产生影响
- 你做出贡献，我们都会很高兴；你遇到困难，我们都会帮助你

## 代码规范

好的代码规范是写代码的根本，不管你以前有什么背景和习惯，请与我们保持同样的风格，当然，我们永远欢迎新的改进建议。

* 一般来说，如果我们在其它已有项目上开发，应遵照原有项目的代码风格。
* 如果现有语言有相应的代码风格惯例，我们应该遵守，如Ruby和JS默认使用2个空格缩进，而C语言大部分习惯是4个或8个的Tab缩进。
* **如果一种语言有相应的VS Code代码格式化插件，我们应该尽量使用插件自动的格式化功能。**
* 某些默认的自动格式化插件（如C/C++）不符合我们原先的习惯，我们应该进行通过`.vscode/settings`选择一种代码风格，以及使用`.clang-format`进行代码格式化。
* 代码格式化在VS Code中使用`Option(或Alt) + Shift + F`快捷键触发。
* 代码格式化应该单独一个提交或几个，单独提Pull Request，不应该跟其它提交混在一起提交。
* 一些特殊的代码不应该自动格式化，如FreeSWITCH测试框架下的代码中有很多宏，格式化插件不认识，反而会搞乱。
* 我们需要每个文件尾部都有一个空行。VSCode代码格式化会删除掉尾部的空行，可以使用`Cmd（或Ctrl）+ Shift + P`，打开`Open Settings(JSON)`，添加如下两行配置：

```
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true
```

也可以打开`Open User Settings`，在`Search Settings`中输入`newline`，在找到的`Insert Final Newline`和`Trim Final Newline`处打钩。

在没有风格可参照的情况下，特别是在C语言的情况下，应按以下约定：

* **使用 UNIX 换行符**
* 缩近使用 4 个字符的 Tab，不要使用空格。
* 逗号后面要有空格，等号前后都要有空格。
* `if`、`else`、`white`等与大括号之间要有空格，以与函数调用区分。
* 提交代码前先用`git diff`看一下，确保每行最后不要留有空白（空格或Tab）。

## 编辑器

我们一般使用VSCode编辑器。编辑器相关的配置如`./vscode`应该放到`.gitignore`里面并不应该提交到项目仓库中。其它编辑器的配置也类似。

一般来说，如果编辑器有两个配置文件，一个配置文件是可以大家共享的，另一个是跟个人环境相关的。那这种情况下可以共享和可以放到仓库中。但跟个人相关的信息应该在单独的配置文件中并且需要忽略掉。

## 项目

项目名称一般以“`-`”分隔，在程序语言中一般转换为以“`_`“分隔。如`uni-x`项目在源代码中可能是`uni_x`。有其它约定的除外（如FreeSWITCH的模块统一使用`mod_xxx`）。

## C

* 变量名用小写 + 下划线，如`this_is_a_var`

## Go

参照Go语言通用的命名规范。

## ProtoBuffer

参照ProtoBuffer通用的命名规范。

## Erlang

变量名用 Camel case，如 ThisIsAVar.

.erl 源文件的 Meta Data 按以下顺序

* module
* author
* export
* include_lib
* include
* behavior
* define
* record

## Docker

- 推荐在Linux或Mac上使用Docker
- 在Windows上需要使用WSL2，参考 https://github.com/rts-cn/xswitch-free 上的安装说明。

## 数据库

数据库使用 PostgreSQL。尽量使用 [Rails 风格](https://ruby-china.github.io/rails-guides/active_record_basics.html) 的表名及字段定义。即，表名用复数，字段名示例如下：

```
id
user_id
created_at
updated_at
deleted_at
```

## 代码提交原则

* 勤提交，粒度细一点
* 提交说明尽量用英文，英文水平不高可以用中文
* 提交说明尽量有描述性，让别人看了知所云
* 需要大段说明的，第一行为标题，然后加一空行，然后是大段说明的正文

## 代码提交流程

代码提交到我们的 Git 代码库中，如：

```bash
git clone git@git.xswitch.cn/xyt/freeswitch.git
git checkout -b new-feature-branch
edit
git diff
git commit
git diff --cached
git push
```

- `push`后会生成一个Url，把该Url复制粘贴到浏览器中可以直接提一个Pull Request。
- 如果有多人在同一个分支上工作，修改前尽量先沟通以避免不必要的冲突。
- 如果代码审核的人要求你修改代码，修改后可以直接在原分支上提交，**不需要重新提PR**。

如果一个PR中代码Commit比较多而且反复修改比较多，可以进行`squash`，将某些提交合并，以便更符合逻辑。如果分支离`master`分支比较远，尽量`rebase`到最新，并解决冲突。在自己的分支上提交可以`push -f`，并且**不需要重新提PR**，当然如果该分支上有其它协作者要通知对方及时`pull --rebase`，以免引起混乱。但是master分支**永远不要**`push -f`，除非经过深入探讨。

如果你的分支离主分支比较远，这时候可能需要把主分支最新的内容合并进来。最好不要`merge`，而是使用`rebase`，如，在你的分支里：

```bash
git fetch origin
git rebase orign/master
git push # 或git push -f
```

如果你是在一个Fork后的仓库中工作，那么，`remote`可能对应的不是`origin`，也可能叫`upstream`或者你自己起的其它名字。以`upstream`为例，你应该这样做，在你的分支上：

```
git fetch upstream
git rebase upstream/master
# 解决可能的冲突
git push -f
```

负责代码合并的人需要掌握合并技巧，掌握直接合并、Rebase再合并以及Squash然后合并的区别。在实际应用中根据训练程序自己可以选择，目标是产生更“干净”的代码树。代码合并后应该在仓库中删除相关分支（需要时可重建）。

## 分支原则

- `master`（或`main`）:  开发主分支，所有人一般在自己的分支上开发，并提PR，由专人Review并将阶段性成果`merge`到`master`分支
- 其它（特性分支）：其它人均可以服务器上建立自己的特性分支，一般以特性的名字命名，如`fix-issue-xx`或`add-xx-feature`等。
- 如果你没有在仓库创建分支的权限，可以Fork到自己的仓库中再提Pull Request。

## Public Key

SSH 或 Git 服务器需要你的 Public Key ，如果如下命令生成`ed25519`格式的Key，这样生成的Key全短一些：

```
    ssh-keygen -t ed25519
```

该命令会生成`id_ed25519`（私钥）以及`id_ed25519.pub`（公钥）。这叫[不对称加密](https://baike.baidu.com/item/不对称加密算法)，小心保存好你自己的私钥（不要让任何人得到），可以把公钥共享给别人。

以下命令会生成 `id_dsa` 及 `id_id_dsa.pub`，RSA格式：

```
    ssh-keygen
```

在Windows 上使用 tortoise git 时可能需要在 pubkey 及 putty key 间转换。

参考：http://blog.csdn.net/zoucui/article/details/6135078

## 参考资料

### C

http://sunxiunan.com/?p=1661

### Git Book

* http://progit.org/
* http://git-scm.org
* http://www.juvenxu.com/2010/11/28/a-successful-git-branching-model/
* http://blog.csdn.net/basicthinker/article/details/6629508
* http://www.open-open.com/lib/view/open1328069889514.html

### Git Case

git help cherry

* http://stackoverflow.com/questions/10834593/how-do-i-merge-from-another-git-branch-excepting-some-commits-and-have-sane-ea

### Git config

我的 `.gitconfig`，供参考。

```ini
[alias]
        last = log -1 HEAD
        st = status 
        co = checkout 
        ci = commit 
        br = branch
        df = diff
        dfc = diff --cached
        pr = pull --rebase
        lg = log -p
        who = shortlog -s --

[color]
  status = auto
  branch = auto
  ui = auto

[master]
        branch = always
[core]
    whitespace = trailing-space,space-before-tab
    execludes = /Users/seven/.gitexcludes
[apply]
    whitespace = fix

.gitexcludes

.svn
```

下面是一个简单的Bash脚本可以方便的`git add`多个文件。使用方法：将本脚本放到搜索路径下，如`$HOME/bin`，执行`git status`显示改动过的文件，然后复制需要添加的文件，执行`7add.sh`，粘贴，回车，`Ctrl+D`或`Command+D`键退出。再运行`git status`查看。

```bash
#!/bin/bash

t=`cat`

echo $t

for f in $t; do
	if [ -f $f ]; then
		echo $f
		git add $f
	fi
done
```

### Git分支策略

一般来说，我们遵循以下分支策略。

* `master`分支为生产分支，永远**不要**擅自`push -f`。
* 所有开发工作都在独立的分支上进行，完成后，`rebase`到`master`分支，再提PR。
* 每一个提交应该保持逻辑独立，大的改动不要都放到一个提交里。
* 所有代码都要确保双人Review，根据情况，代码可以用直接合并，Rebase合并，Squash合并等方式。
* 如果代码审查者要求你修改代码，你可以修改代码后提交到你的分支，并`push -f`，不需要删除PR重建。
* 如果工作没有完成，可以在pr标题中中写上WIP，Gitea或Github都会防止这样的PR被合并。
* 没有WIP的pr都应该逻辑正确，要有正确的描述，描述尽量用英文。如果描述信息过长，写一个简短的描述，空一行，再写正文。
* 合并后删除临时分支。
* 分支应该尽快合并，如果分支相关的功能会持续较长时间，则尽量定期`rebase`到`master`，以避免合并时冲突过多。
* 如果在分支开发中有一些公用的功能，可以先临时开分支合并到`master`分支。

### Git代码修改简易流程

- 在修改代码前拉取最新代码 `git pull`，或`git pull --rebase`
- 在修改代码前创建一个新分支 `git branch -b your-new-branch-name`
- 修改代码，保存，提交 `git commit -m 'fix ....`
- `git push`，一般会生成一个链接，把该链接复制到浏览器可以快速提Pull Request
- 提一个Pull Request
- 等待Review及合并

## 新手FAQ

### VS Code在保存时自动格式化了我的代码，可以回退吗？

一般来说按Ctrl+Z或Cmd+Z就可以回退，再保存一次就可以了。

### 我不知道该从哪里做?

* 看文档，了解基本概念及各技术要点和本质，比如Markdown和Git分别是什么，它们是解决什么问题的
* 使用“广度优先算法”学习。也就是说，比如你在阅读这篇文章时，先读完本文章，再点击相关的链接深入学习，而不要一上来就点开无数的链接钻进各种各样新奇的技术的牛角尖里
* 熟悉Git工具，熟悉代码，有时间就看别人提交的代码修改，看别人的代码是最好的学习方式
* 开始试着编码
* 找一个好的编辑器并熟悉它。在 Mac上我们以前习惯用 TextMate和Sublime text 2( 2( http://ruby-china.org/topics/3107 )，在 )，在 Linux 上推荐 vi vi http://qgymje.iteye.com/blog/503120 ，现在推荐使用VS Code: https://code.visualstudio.com/
* 多写代码，多向大家请教
* 学好[Markdown](/pages/xyt/markdown/)
* 理解[Makefile](/pages/xyt/makefile/)
* 学会[Docker](https://github.com/rts-cn/xswitch-free)
* 学会[提问](http://www.freeswitch.org.cn/blog/2012/10/how-to-ask/)
* 学会[调试](http://www.freeswitch.org.cn/blog/2012/09/rubber-duck-problem-solving/)
* 尝试[写文档](/pages/write-docs/)
* 学习[程序员技术练级攻略](http://coolshell.cn/articles/4990.html)。
* 学习[更多文档](/docs/)

此外，遇到问题，可以到 Google上搜索，其次是 https://cn.bing.com/ ，再次者是百度。搜出来的文章，一般像简书、知乎、RUNOOB上的文章一般质量比较高一些。

### 怎么才算学会了？

当你能把你学到的知识，能给别人讲会时，你就真的学会了。

## 结束语

最后，别忘了持续更新优化本文档。
