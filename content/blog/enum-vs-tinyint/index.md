---
title: 'enum Vs tinyInt'
date: '2015-12-24'
description: 'enum Vs tinyInt'
tags:
  - javascript
show: true
author: trishul
---



Long story short ENUM is evil :P

*Premature optimization is the root of all evil*. Very well put by [Chris Komlenic[](http://komlenic.com/248/about-chris-komlenic-and-komlenic-com/).

Sometimes we over optimize the database schema, as in in terms of data structures. generally we have a dilemma of using Tinyint or enum, while storing values in columns such as ‘status’, ‘isActive’, ‘isTrue’, etc. Its very difficult to assume that the status can be only given values.

If we declare the column as enum it is hell lot problematic to chnage / add and more enum value to that column when the data in table pile up. In that case its just a huge pain, we are helpless and actually we have to block table operations for a while. Which can actually cost your business. But if it were a tiny int, it would be just a new value in the SQL query.

Also while changing the datatype of enum its really pain. The enum is based on indexing and its indexing starts from 1 instead of 0. [WTF]

To clear my point following is content extract from few other blogs

* > With an ENUM we’re actually storing pieces of data in a place that was only intended to hold crucial information about the model. In short, an ENUM column violates the rules of normalization.
* > You  create an ENUM column and say “no way NEVER will this list change or need added to”. But humans are really poor at estimating the entire scope of something, and even worse at predicting the future. problem is that changing the member list for an ENUM column restructures the entire table with ALTER TABLE, which can be very expensive on resources and time
* > ENUM has limited portability to other DBMS.
* > There’s a reason ENUM is a string data type. Not only should you be using a numeric data type to store numbers
* > ENUM takes 1 byte (if under 255 values) or 2 bytes (up to maximum of 65,535 – ENUM does take up some metadata for the string value associated with it though
TinyInt takes 1 byte (maximum of 255 values)

 

Reference – [http://komlenic.com](http://komlenic.com)
