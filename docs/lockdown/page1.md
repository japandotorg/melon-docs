---
title: Lock and Unlock
sidebar_position: 1
---

## Lock
This command is used to lock a channel of your choice, if no channel is provided bot will unlock it for the present channel. <br />
Provide a role or member if you would like to lock it for them.
You can lock a maximum of 10 things at a time.

**Usage:** `[p]lock <role/user>`

```js title="Example:"
[p]lock
// locks the present channel for @everyone
[p]lock 526473119008030730
// locks the present channel for the given username
[p]lock #public-lounge @inthedark.org
// locks the #public-lounge channel for @inthedark.org
[p]lock 855358569209397279
// locks the present channel for the given roles
[p]lock #event-room @event ping
// locks #event-room channel for the event-ping role
```

## Unlock
This command is used to unlock a channel of your choice, if no channel is provided bot will unlock it for present channel <br />
Provide a role or member if you would like to unlock it for them.
You can unlock a maximum of 10 things at a time.

**Usage:** `[p]unlock <role/user>`

```js title="Example:"
[p]unlock
// unlocks the present channel for @everyone
[p]unlock 526473119008030730
// unlocks the present channel for the given username
[p]unlock #public-lounge @inthedark.org
// unlocks the #public-lounge channel for @inthedark.org
[p]unlock 855358569209397279
// unlocks the present channel for the given roles
[p]unlock #event-room @event ping
// unlocks #event-room channel for the event-ping role
```
