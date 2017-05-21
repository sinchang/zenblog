---
title: 使用 adb 给创维智能电视安装 APK
date: 2017-01-22
tags:
- Android
- 智能电视
categories:
- IT
---
过年回家发现家里的创维智能电视因为系统升级导致无法通过 U 盘安装第三方 APK，不安装直播类的软件，那就没法看 CCTV 以及各卫视电视。

上网搜索发现通过 adb 操作是可以直接安装的，所以下面就记录下我是怎么在 Mac 上进行操作的。

### 安装 adb
如果你的电脑上有 homebrew 的话可以直接通过下面命令直接安装。

`brew install android-platform-tools`

### 开启 adb 开关
在电视的关于界面通过遥控器「上上下下左右左右」进入工厂模式，在「高级设置」-「其他」中的「adb开关」设置为开。

### 连接电视
先获取你的电视 ip，使用命令`adb connect ip` 进行连接。

### 安装 APK
使用命令`adb install "appName.apk"`
