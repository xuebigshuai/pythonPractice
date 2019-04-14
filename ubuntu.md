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

