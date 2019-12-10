---
title: 'Get list of all global npm packages installed'
date: '2017-08-27'
description: 'Get list of all global npm packages installed'
tags:
  - javascript
  - oops
  - es5
show: 'true'
author: trishul
---
Sometimes I get conflicts in path and get confused between globally and locally installed npm packages.

So I need to find out what packages I installed globally.

I googled it and found out how :P (duhhh) Putting here for my reference or may be others can get too.

```
npm list -g --depth=0
```
(–depth – Max display depth of the dependency tree.)

This gives following output

```
/usr/local/lib
├── create-react-app@1.3.1
├── gulp@3.9.1
├── mocha@3.4.2
├── npm@4.2.0
└── web-ext@1.10.1 -> /Users/<username>/web-ext
```

Detailed list options can be found [here](https://docs.npmjs.com/cli/ls).
