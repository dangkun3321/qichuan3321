---
title: 'Makefile极速入门'
date: 2022-08-26T20:59:00Z
lastmod: '2021-08-26'
tags: ['小樱桃']
draft: false
summary: '带你快速读懂Makefile'
layout: PostLayout
bibliography: references-data.bib
---

小樱桃在项目文件中大量使用Makefile，如果你不了解Makefile，或者你不知道怎么给别人解释Makefile，看这篇文章，或者分享给他人。

## 什么是Makefile

- Makefile是一个工程文件，最初是为了帮助C语言写的工程项目编译用的
- Makefile由`make`程序解释并执行
- Makefile最初是在UNIX操作系统上出现的，后来被移植到Linux和Windows等其它系统上
- Makefile很好用

## 最简单的Makefile

下面，我们先来看一个最简单的Makefile。

```makefile
all:
	gcc -o test test.c
```

上面的文件可以存成`Makefile`或`makefile`，但一般前者居多。当在命令行上执行`make`命令时，它就会找到该文件并解释执行里面的指令。

其中，`all`表示一个目标（Target，目标后面总上有一个冒号），不带参数的`make`命令会执行第一个目标下的指令，在此它会编译当前目录下的`test.c`，并生成`test`程序。然后执行`./test`会在终端上打印`Hello World!`。

`test.c`内容如下：

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char **argv)
{
    printf("Hello World!\n");
}
```

在上述例子中，每次执行`make`命令都会编译文件。

**特别注意**：目标后面的命令（如上述`gcc`命令）行要以制表符（Tab）开头，而不是空格，否则，会出现`Makefile:4: *** missing separator.  Stop.`之类的错误。

## 依赖

在大型项目中通常会包含很多源文件，如果每次修改一个文件都会重复编整个项目，这显然费时费力。Makefile的一个好处就是可以指定依赖关系，以免重复编译。如，我们把Makefile改成如下的样子。

```makefile
all: test

test: test.c
	gcc -o test test.c
```

其中，目标后面的内容称为依赖。连续执行两次`make`，就会发现，第二次显示“无事可做”。

```
$ make
gcc -o test test.c
$ make
make: Nothing to be done for `all'.
```

这是因为，要完成`all`这个目标，它依赖于`test`。而`test`这个目标又依赖于`test.c`。在执行第一次`make`以后，生成了`test`这个文件，因而第二次就不会重复编译了。

如果你修改了`test.c`，则再次执行`make`，由于`test.c`比`test`新，因此会重新编译。这就是Makefile要解决的最根本的问题。

当然，太简单的示例看不到太多好处，我们看另一个比较复杂的例子。

```makefile
all: test

test: test1.o test2.o test3.o
	gcc -o test test.c test1.o test2.o test3.o

test1.o: test1.c
	gcc -c -o test1.o test1.c
test2.o: test3.c
	gcc -c -o test2.o test2.c
test3.o: test3.c
	gcc -c -o test3.o test3.c
```

在上述示例中。`test`依赖于`test.c`以及三个`.o`的目标文件，而三个文件又分别依赖于三个`.c`源文件。`gcc`命令使用`-c`参数可以生成目标文件。这样，在执行`make`命令时，它会先生成三个目标文件，最后再生成`test`可执行程序。如果修改了任何一个`.c`文件，只有依赖它的目标会触发再次编译，而没修改过的文件不会重复编译。

## 目标

我们在前面已经讲过目标。不带参数的`make`会执行它找到的第一个目标。除此之外，也可以把目标作为参数放到命令行上，如在前面的例子中，可以执行`make test`，或`make test1.o`、`make test2.o`等直达目标。

在C语言项目中，通常还会有如下目标。

```makefile
install:
	cp test /usr/local/bin/
clean:
	rm test *.o
```

其中，`install`一般用于安装程序，此处，我们直接把生成的`test`可执行程序复制到`/usr/local/bin`目录下。在UNIX/Linux系统上，该目录是非系统程序（自己制作的程序）的默认安装路径。另外，`clean`目标通用用于清除编译过程中产生的文件（保持源代码目录干净）。

## 变量

在复杂的项目中也使用变量，如下面的例子中，`SRC`就是一个变量，可以在后面用`$(SRC)`引用它。

```makefile
SRC = test.c test1.c test2.c test3.c

test: $(SRC)
	gcc -o test $(SRC)
```

除了这种明显的变量外，也有一些特殊的变量，如，上述Makefile也可以写成如下的形式，其中的`$^`代表该目标所依赖的所有文件，也就是`test:`后面的部分，即`$(SRC)`引用的内容。

```makefile
SRC = test.c test1.c test2.c test3.c

test: $(SRC)
	gcc -o test $^
```

甚至，可以写成如下形式：

```makefile
SRC = test.c test1.c test2.c test3.c

test: $(SRC)
	gcc -o $@ $^
```

看不懂了吧？上述的`$@`代表目标文件，也就是`test`。下面，是几个常见变量的列表（为了保持简洁，此处没有列出所有可能的变量）。

- `$@`：表示目标文件。
- `$^`：表示所有的依赖文件，但去除重复的。
- `$<`：表示第一个依赖文件。
- `$?`：表示比目标还要新的依赖文件列表。
- `$+`：类似`$^`，也是所有依赖目标的集合，但不会去除重复的。

如果你觉得这些变量不容易记，忘记它们。

## .PHONY

通过上面学习，可以看到，目标是跟文件名是有对应关系的。可以这么理解：如果目标对应的文件名已经存在，并且比它依赖的源文件还新，下次就无须重复执行它对应的指令。

但有时候，目标会与本地的文件或目录重名，而又想在每次执行`make`时都重新执行对应的目标时该怎么办？这样说起来比较抽象，举个具体一点的例子。好多项目中会有一个`build`目录，而Makefile中会有一个`build`目标，如：

```
build:
	echo Hello
```

这时候，无论怎么执行`make build`，都会出现`make: `build' is up to date.`，导致`echo Hello`无法正常执行。这时候，可以使用`.PHONY`目标。如：

```makefile
.PHONY: build
build:
	gcc -o ...
```

通过给`build`加上`.PHONY`标记，告诉`make`程序不要检查本地与目录重名的文件或目录。

## 小樱桃的Makefile

小樱桃常用的Makefile中会有如下内容：

```makefile
all:
	@echo OK

setup: .env

.env: env.example
	cp env.example .env
```

此处，`@echo`与上一节中的`echo`的主要区别是，前者不会在输出中回显命令行本身，而后面会回显命令行。读者可以自行实验查看其区别。

`setup`目录依赖`.env`这个文件。而这个文件默认是不存在的。因而，当执行到该目标时，就会执行对应的指令，把`env.example`复制为`.env`。

小樱桃通常将源文件存放到Git仓库中。`.env`文件通常用于存放Docker中的环境变量。而每个人使用的环境变量通常是不同的，所以该文件不应该被放到Git仓库中。因此，我们在Git仓库中放了一个`env.example`文件，用户第一次Clone Git仓库后，执行`make setup`命令初始化项目，产生一个`.env`文件，然后按需修改。该文件一般也会记到`.gitignore`文件中，因而不会被签入Git仓库。`make setup`仅需在项目初始化时执行一次，不过，即使执行多次也不会覆盖你本地的`.env`，因为，只要你的`.env`比`env.example`新，它就不会被覆盖（后面的命令根本不会执行）。当然，此处有一个风险是你修改了`env.example`再执行`make setup`，它还是会被覆盖的。但我们在实际使用时从来没遇到过问题。

小樱桃会有一些通用的目标，除了上面的`setup`，还有`build`、`run`、`start`、`stop`、`test`、`up`、`down`等，不管使用任何语言写的程序，这些目标都很容易记住，在多个项目间切换时也不用花太多时间查阅文档，虽然它们大多数时候只是简单的映射到如`npm run`、`go build`等指令。当需要查阅文档时，Makefile本身就是文档——所有的目标以及对应的命令行都整整齐齐的在Makefile中，很容易知到哪些目标都实际执行了哪些指令。

现在，你理解Makefile了吗？

## 参考文档

看看别人是怎么教你理解Makefile的。

- https://seisman.github.io/how-to-write-makefile/introduction.html
- https://zhuanlan.zhihu.com/p/56489231
- https://makefiletutorial.com/
- https://www.tutorialspoint.com/makefile/makefile_quick_guide.htm
