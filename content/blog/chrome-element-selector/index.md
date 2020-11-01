---
title: 'Chrome DOM element selector '
date: '2020-11-01'
tags:
  - javascript
  - debug
  - TIL
show: true
micro: true
author: trishul
description: I discovered a hidden gem in chrome devtools, how to select a DOM element and use it in console as a global variable.
---

I discovered a hidden gem in chrome devtools, how to select a DOM element and use it in console as a global variable. This comes super handy in debugging an application in production  
All I nned to do is select a DOM node from `Inspect element` and if you notice the selected node will be having a prefix in `Inspect element` panel `==$0`, this `$0` means that you can reference this node in the console with the variable `$0`

<video src="./chrome-select-element.mov" autoplay loop controls></video>

[Reference](https://developers.google.com/web/tools/chrome-devtools/dom/#current)

