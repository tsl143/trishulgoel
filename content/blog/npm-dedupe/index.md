---
title: 'npm dedupe'
date: '2021-01-11'
tags:
  - javascript
  - npm
  - TIL
show: true
micro: true
author: trishul
description: A simple way to organize duplicated node module dependency.
---

Over a period of time my `package-lock.json` file grew substantially and I see lots of packages are used by multiple other packages as dependencies and hence being duplicated. I found this native NPM way of arranging the dependencies and removing duplicate installs.

```BASH
  - npm dedupe
```

This can shorthand to `npm ddp`.

From docs 

> Searches the local package tree and attempts to simplify the overall structure by moving dependencies further up the tree, where they can be more effectively shared by multiple dependent packages.


[Reference](https://docs.npmjs.com/cli/v6/commands/npm-dedupe)

