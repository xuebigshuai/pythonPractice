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
* 常用的Linux命令基本使用  
| 序号 | 命令 | 对应英文 | 作用  
ls


