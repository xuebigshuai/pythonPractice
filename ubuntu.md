## 安装乌班图系统
- Ubuntu（友帮拓、优般图、乌班图）是一个以桌面应用为主的开源GNU/Linux操作系统，Ubuntu 是基于Debian GNU/Linux
- ubuntu 中大部分的软件安装和更新都是利用apt命令，从Ubuntu的服务器直接安装
- 删除不使用的软件
```
$sudo apt remove libreoffice-common

$sudo apt remove unity-webapps-common
```
- deb 安装格式，要安装deb安装包，使用dpkg这个终端命令。
```
$sudo dpkg -i <package.deb>
```
* 让ubuntu全屏的命令
```
$xrandr
然后选择正确的分辨率
$xrandr -s 1360x768
```
* 安装谷歌浏览器(下载chrom的deb安装包)
```
$sudo apt install libappindicator1 libindicator7
$sudo dpkg -i google-chrome-stable_curremt_amd64.deb
$sudo apt -f install
```
* 安装搜狗输入法（下载搜狗deb安装包） 安装好后需要重新启动系统
，首先要有小企鹅输入法fcitx输入平台。
```
$sudo apt-get install  fcitx
$sudo dpkg -i sougoupinyin_2.1.0.006_amd.deb
$sudo apt -f install
```
* 安装python
```
sudo apt install ipython
sudo apt install ipython3
sudo apt install python-pip
sudo apt install python3-pip
```
pip为python的包管理工具
##  Linux系统
--- 
### 一、什么是操作系统
* Linux和Unix 是多用户操作系统
* windowXp以及之前的都是单用户操作系统
* Linux（Ubuntu）操作系统没有盘符概念，只有一个根目录‘/’，所有文件都在它的下面
### 二、Linux常用的终端命令
---
**小技巧**   
放大终端ctrl+shift+=  
缩小ctrl+- 
---
---
* 常用的Linux命令基本使用（区分大小写）  
| 序号 | 命令 | 对应英文 | 作用  
ls list &nbsp;查看当前文件夹下的内容  
pwd print work directory 查看当前所在的文件夹  
cd[目录名] change directory 切换文件夹  
touch[文件名] 如果文件不存在，新建文件  
mkdir[目录名] make directory 创建目录  
rm[文件名] remove 删除指定的文件名
clear 清屏  
* 终端命令的格式  
```
command[-options][parameter]
说明  
    command:命令名，相应英文的单词或单词的缩写
    [-options]:选项，可对命令控制，也可以省略
    [parameter]:传给命令的参数，可以是零个、或多个
    [] 代表可选 
  查询帮助信息
   1、command --help 
   2、man command
   (manual)的缩写
   用man时的操作键
   空格 显示手册的下一屏
   enter键 一次滚动手册的一行
   b 回滚一屏
   f 前滚一屏
   q 退出
   /word 搜索word字符串
```
* ls 命令类似 DOS下的dir命令
* Linux 下文件和目录特点
  * 文件或目录最长可以有256个字符
  * 以点.开头的文件是隐藏文件，需要用 ls -a 才能显示出来
  * . 表示当前目录
  * .. 表示上一级目录
* ls 常用项  
  * -a 显示所有文件及文件夹，包含隐藏文件
  * -l 以列表的方式显示文件详情信息
  * -h 配和-l 一起使用显示文件的大小
  * -f  如果是目录，会加上反斜线
  ```
  ls -lha
  ```
* ls 通配符的使用
  * *号代表任意个数个字符
  * ?代表任意一个字符，至少一个
  * []表示可以匹配字符组中的任意一个
  * [a,b,c] 表示匹配abc中的任意一个
  * [a-f]表示匹配a到f中的任意一个
* cd 切换目录
  * cd 切换到当前用户的主目录（/home/用户目录）

  * cd~ 切换到当前用户的主目录（/home/用户目录）（~代表用户的目录）
  * cd .切换到当前目录
  * cd .. 切换到上级目录
  * cd - 可以在最近两次工作目录之间切换
* touch 
  * 如果文件不存在 创建文件
  * 如果存在，修改该文件最后一次的修改时间
* mkdir
  * -p 可以递归创建目录
  ```
  mkdir -p a/b/c/d
  ```
  * Linux系统同一个目录下不能有相同名字的文件及文件夹
* rm 删除文件后不能恢复
   * -d或–directory 　直接把欲删除的目录的硬连接数据删成0，删除该目录
   *  -f或–force 　强制删除文件或目录。
   * -i或–interactive 　删除既有文件或目录之前先询问用户。
   * -r或-R或–recursive 　递归处理，将指定目录下的所有文件及子目录一并处理。
   * -v或–verbose 　显示指令执行过程。　 
  * rm 也可以使用通配符进行删除。
  ###  拷贝和移动文件
   * tree[目录名] 以树状图列出文件目录结构
   * cp 源文件 目标文件 复制文件或目录
   * mv move 移动文件或者目录 或者重命名
   ```
   mv 移动的文件|目录   目标目录
   ```
* tree -d 只显示目录
* cp
   * -i 复制如果存在给出覆盖提示
   * -r 复制目录
### 查看文件内容
   * cat (concatenate) cat 文件名 查看文件内容、创建文件、文件合并、追加文件内容等功能
   * more 分屏显示文件内容
   * grep 搜索文本文件内容
----
* cat 
  * -b 对非空行进行编号
  * -n 对输出的所有行进行编号
* grep 搜索工具，允许对文本文件进行正则查找
  * -n 显示匹配行及行号
  * -v 显示不包含匹配文本的所有行（相当于求反）
  * -i 忽略大小写
  * grep 搜索关键字 搜索目标
###  三、其他
* echo 文字内容
  * echo 会在终端中显示参数指定的文字，通常会和重定向联合使用
* 重定向 > 和 >>
  * Linux 允许将命令执行结果重定向到一个文件
  * 将本应显示在终端上的内容输出/追加到指定文件中
  * '>' 表示输出，会覆盖原文件的内容
  * '>>'表示追加，会将内容追加到已有的文件末尾
* 管道 |  
   * Linux允许将一个命令的输出可以通过管道做为另一个命令的输入。
   * 常用的管道命令有
       * more:分屏显示内容
       * grep:在命令执行结果的基础上查询指定的文本
### 远程管理常用命令
* shutdown 关机/重启 服务器系统
  * -r 重新启动
  （提示: 不指定选项和参数，默认表示1分钟之后关闭电脑）
  * 常用命令示例
```
# 重新启动操作系统，其中now表示现在
$ shutdown -r now
# 立刻关机
$shutdown now
#系统将在今天20：25关机
$shutdown 20:25
#系统将在10分钟后关机
$shutdown +10
#取消之前的关机计划
$shutdown -c
``` 
* 查看或配置网卡信息
  * ifconfig
  * ping
* 远程登陆和复制文件
  * ssh
  * scp
* 域名和端口
  * ssh 默认端口为22
  * web服务器 80
  * https 443
  * ftp 21
  * 默认的端口可以省略
* ssh客户端的简单使用
  * ssh [-p port] user@remote
     * user 是在远程机器上的用户名，如果不指定的话默认是当前用户
     * remote 远程机器的地址
     * port 是 sshServer的端口，不指定的话，默认是22
     * 使用exit 退出当前的登陆用户
   * ssh只能在Linux和Unix下使用，Windows下载ssh工具
   （xshell或者putty或者ssh）
* scp 的使用（secure copy）
  * 只能在Linux或者unix下使用，window下使用ftp传输文件
  * scp [-P port] user@remote p是大写
  * 将本地Desktop目录下的01.py拷贝到远程家目录下的 Desktop/01.py,注意：':'后面的路径如果不是绝对路径，则以用户的家目录作为参照路径。
  ```
  scp -P port Desktop/01.py user@remote:Desktop/01.py
  ```
  * 将远程文件复制到本地‘
  ```
  scp -P port user@remote:Desktop/01.py Desktop/01.py
  ```
  * 加上 -r 可以选择上传文件夹
  ```
  scp -r demo user@remote:Desktop
  ```
### SSH高级应用
  * 免密登录
  * 配置别名  
 |提示：有关SSH配置信息都保存在用户家目录下的.ssh目录下
#### 免密登陆
  * 配置公钥
  ```
  执行 ssh-keygen 即可生成ssh钥匙
  ``` 
  * 上传公钥到服务器上
  ```
  执行ssh-copy-id -p port user@remote(ip),可让远程服务器记住我们的公钥。
  ```
#### 配置别名
   * 步骤
      * 在 ~/.ssh下创建config文件，里面追加以下内容
      ```
      Host 另一台服务器的别名(例如 mac)
          HostName IP地址
          Port 22
      ```
      保存之后就可以用别名登陆远程服务器了如 ssh mac ,scp 同样可以使用
## 用户权限相关命令
   * ls -l 查看文件夹下的详情信息，从左到右依次是
      * 权限 第一个字母为d表示目录，文件为 -
      * 硬链接数 ， 通俗的讲，就是能够有多少种方式访问当前的文件或目录
      * 拥有着 及home/目录下的用户。
      * 组
      * 大小
      * 时间
      * 名称
   * 文件的权限
      * r (read) 可读
      * w (write)可写
      * x (excute)可执行
      ```
              目录   拥有着者权限       组权限     其他用户权限
      文件权限 -     rw-                rw-       r-- 
      目录权限 d     rwx                rwx       r-x
      ```
   * chmod 可以修改用户/组 对文件和目录的权限
      * 命令格式（+为增加权限，-为去除权限）
      ```
      chmod +/- rwx 文件名|目录
      ```
   * 超级用户
     * root 一般不使用root ，root 用于系统管理和维护
     装系统时，一般都有默认要创建一个标准用户
     * 标准用户想使用超级用户的权限时，只需给命令前加 sudo,这样就能使用超级用户权限
   * 组管理终端命令
     * 创建组/删除组的终端命令都需要通过sudo执行
     ```
     groupadd 组名 添加组
     groupdel 组名 删除组
     cat /etc/group 确认组信息
     chgrp -R 组名 文件/目录名  修改文件/目录 的所属组
     ```
   * 用户管理终端命令
     | 提示: 创建/删除/修改其他用户密码的终端命令都需要通过sudo执行
     * 创建用户/设置密码/删除用户
     ```
     useradd -m -g 组 新建用户名   添加新用户    -m 自动建立用户家目录   -g 指定用户所在的组，否则会建立一个和同名的数组

     passwd 用户名                 设置用户密码    如果为普通用户，直接用passwd可以修改自己的账户密码

     userdel -r 用户名             删除用户       -r 选项会自动删除用户家目录

     cat /etc/passwd|grep 用户名                   新建用户后，用户信息保存在/etc/passwd文件中 
     ```
   * 查看用户信息
      * id [用户名]  查看用户UID和GID信息
      * who   查看当前登陆的用户列表
      * whoami 查看当前登陆用户的账户名
      * passwd 文件
         * /etc/passwd 文件存放的是用户的信息，由6个分号组成的7个信息，分别为
         ```
         1、用户名
         2、密码（x,表示加密的密码）
         3、UID(用户标识)
         4、GID(组标识)
         5、用户标识或本地账号（为空表示本地账号）
         6、家目录
         7、登录使用的shell，就是登录之后，使用的终端命令，ubuntu 默认是bash
         ```
      * usermod
         * 用来设置用户的主组/附加组和登录的shell
         * 主组：通常在新建用户时指定，在etc/passwd的第4列GID对应的组
         * 附加组：在 etc/group 中最后一列表示该组的用户列表，表示这些用户有该组权限。即用于指定用户的附加权限。
         | 提示：设置了用户的附加组，需要重新登录才能生效！
         ```
         # 修改用户的主组（passwd的GID）
         usermod -g 组 用户名
         # 修改用户的附加组
         usermod -G 组 用户名
         # 修改用户登录shell(shell是一款软件)
         usermod -s /bin/bash
         ```
         * 注意： 使用 useradd添加的用户没有sudo 以 root 权限执行命令 可以使用以下命令将用户添加到附加组sudo中
         ```
         usermod -G sudo 用户名
         ```
      * which 可以查看执行命令所在位置
      ```
      which ls
      # 输出 /bin/ls
      ```
      * bin 和 sbin (存放可执行文件的目录)
         * 在Linux中，绝大多数可执行文件都是保存在/bin,/sbin,/user/bin,/user/sbin
         * /bin(binary)是二进制执行文件目录，主要用于具体应用
         * /sbin（system binary）是系统管理员专用的二进制存放目录，主要用于系统管理
         * /user/bin (user commands for application) 后期安装的一些软件
         * /user/sbin 超级用户的一些管理软件
         * 提示：cd 这个终端命令是内置在系统的内核中的，没有独立的文件，因此无法用which找到
      * 切换用户的终端命令
          * su - 用户名 切换用户，并且切换目录，- 可以切换到用户的家目录，否则保持位置不变
          * exit 退出当前登录账户
          ```
          su 不接用户名，可以切换到root，但不推荐使用，不安全
          exit 是退出当前用户，返回切换前的账户。
          ```
      * 修改文件权限
         1. chown 修改拥有者
         2. chgrp 修改组
         3. chmod 修改权限
         * 命令格式如下
         ```
         # 修改文件|目录的拥有者
         chown 用户名 文件名|目录名
         # 递归修改文件|目录的组
         chgrp -R 组名 文件名|目录名
         # 递归修改文件权限
         chmod -R 755 文件名|目录名
         ```
         * chmod 在设置权限时，可以简单地使用三个数字分别对应
         拥有着 - 组 - 其他用户  的权限
         * chmod +/- rwx 只能改写文件|目录的读写权限，无法精确到用户组，所有有了数字
         ```
         拥有者   组     其他用户
         r w x   r w x   r w x
         4 2 1   4 2 1   4 2 1
         4 2 1  7  rwx
         4 2 0  6  rw-
         4 0 1  5  r-x
         4 0 0  4  r--
         0 2 1  3  -wx
         0 2 0  2  -w-
         0 0 1  1  --x
         常见的组合（u-拥有着 g-组 o-其他用户）
         777===> u-rwx g-rwx o-rwx
         755===> u-rwx g-r-x o-r-x
         644===> u-rw- g-r-- o-r--
         ```
### 系统相关的命令
   * 时间和日期
      1. date 查看系统时间
      2. cal calendar 查看日历 -y 选项可以查看一年的日历
   * 磁盘信息
      1. df -h  disk free 显示磁盘剩余空间
      2. du -h[目录名] disk usage 显示目录下的文件大小
      * -h 以人性化的方式显示文件大小
   * 进程信息
      1. ps aux  process status 查看进程的详情状况
      2. top     动态显示运行中的进程并且排序
      3. kill [-9] 进程代号   终止指定代号的进程，-9表示强行终止
      * ps 默认只会显示当前用户通过终端启动的应用程序
        ps 选项说明功能
        a  显示终端上的所有进程，包括其他用户的进程
        u  显示进程的详细状态
        x  显示没有控制终端的进程
      * 提示 使用kill 命令时，最好只终止由当前用户开启的进程。
      要退出top 可以直接输入q
   * 其他命令
     1. find [路径] -name "*.txt" 在目标路径下查找文件，如果不写目标路径，则默认是在当前文件夹下。
     2. 软连接（即快捷方式）
       * ln -s 被链接的源文件  链接文件
       ```
       注意：
         1. 没有-s选项建立的是一个硬链接文件
         2. 源文件尽量使用绝对路径，这样方便移动链接文件后，仍然可以正常工作。
       ```
      3. 打包/解包（Linux中打包用tar,MAC中用zip,windows中用rar）
          *  tar 的命令格式，tar只负责打包不负责压缩
          ```
          # 打包文件
          tar -cvf 打包文件.tar  被打包的文件/路径
          # 解包文件
          tar -xvf 打包文件.tar
          c---生成档案文件，创建打包文件
          x---解开档案文件
          v---列出归档解档的详细过程，显示进度
          f---指定档案文件名称，f后面一定是.tar文件，所以必须放在选项最后，其他选项可以随意排序，f必须放到最后面。
          ```
      4. 压缩/解压缩 （gzip,bzip2）
         * tar和gzip命令结合实现打包和压缩
      ```
      # 压缩文件
      tar -zcvf 打包压缩文件.tar.gz  被压缩的文件/路径..
      # 解压缩
      tar -zxvf 打包文件.tar.gz 
      # 解压缩到指定路径
      tar -zxvf 打包文件.tar.gz -C 目标目录路径
      bzip2
      tar -jcvf 打包文件.tar.bz2 被压缩的文件/路径
      tar -jxvf 打包文件.tar.bz2
      ```
         


