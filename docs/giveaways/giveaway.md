---
title: Giveaway
sidebar_position: 2
---

This page shows the usage of melon's giveaways system.

:::note

**FOR ALL COMMANDS THAT HAVE A MESSAGE ARGUMENT**

If you are replying to a giveaway message instead of passing an id or link, you must pass a *fake* value for the `message_id` argument.

This fake value can be literally anything you want.

:::

## Usage

* ### `[p]g cancel`

Cancel a giveaway. This is similar to [`[p]g end`](/docs/giveaways/giveaway#pg-end) but it doesn't go throuhg the complete ending process.
I.E the end message, and dms are not processed. The giveaway message is deleted from the channel and also from bot storage.

**Syntax:** `[p]g cancel [message_id]`

```js title="Example:"
[p]g cancel 12345678901234567890

// or if you want to reply to a message
[p]g cancel x
```

* ### `[p]g create`

This asks you different questions one by one to start a giveaway. ( For Beginners )

* ### `[p]g eligible`

A simple command to check if you are eligible for a giveaway or not.

If you aren't eligible the command will reply with the reason why you aren't eligible.

:::tip

You can also reply to a giveaway message instead of passing it's id

:::

**Syntax:** `[p]g eligible [message_id]`

```js title="Example:"
[p]g eligible 12345678901234567890

// or if you want to reply to a message
[p]g eligible x
```

* ### `[p]g end`

End a giveaway prematurely.

`Reason` is an optional argument to pass why the giveaway was ended.

:::tip

You can also reply to a giveaway message instead of passing it's id

Pass `all` to the message parameter to end all active giveaways in your server.

:::

**Syntax:** `[p]g end [message_id] [reason]`

```js title="Example:"
[p]g end 12345678901234567890

[p]g end all

// or if you want to reply to a message
[p]g end x
```


* ### `[p]g entrants`

Check who has entered the giveaway until now.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g entrants [message_id]`

```js title="Example:"
[p]g entrants 12345678901234567890

// or if you want to reply to a message
[p]g entrants x
```



* ### `[p]g flash`

Start multiple flash giveaways with a given prize.

:::note

`<amount>` is the number of giveaways to flash. Minimum amount is 2.

These giveaways will have 1 winner and will last for 20 seconds each.

:::

**Syntax:** `[p]g flash <amount> <prize>`

```js title="Example:"
[p]g flash 10 Flash giveaways.
```



* ### `[p]g list`

List all the active giveaways in a server.

**Syntax:** `[p]g list`

```js title="Example:"
[p]g list
```



* ### `[p]g reroll`

Reroll the winners for an ended giveaway.

You can pass the `winners` argument to specify how many winners you want to reroll.

The `exclude_old_winners` argument is a boolean argument (AKA one of 1/2, true/false, yes/no, on/off) which determines whether to exclude the old winners from the reroll.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g reroll [message_id] [winners=1] [exclude_old_winners=False]`

```js title="Example:"
[p]g reroll 12345678901234567890

// or if you want to reply to a message
[p]g reroll x 2 True
```




* ### `[p]g start`

Start a giveaway with a prize.

:::tip

The time argument is optional, you can instead use the [`--ends-at`](/docs/giveaways/flags#--ends-at) flag to specify more accurate time span.

:::

Requires either a manager role set with the `[p]gset manager @mygiveawaymanagerrole` or the bot mod role set with `[p]set addmodrole` or manage messages permissions.

Use [ `[p]g create` ](/docs/giveaways/giveaway#pg-create) instead if you want a step by step process.

**Syntax:** `[p]g start [time] <no_of_winners> [requirements] <prize> [flags]`

```js title="Example:"
[p]g start 30s 1w my life
[p]g start 1h 1w someroleid;;anotherroleid[bypass];;anotheranotherroleid[blacklist] ok boomer
[p]g start 1w this giveaway has no time argument --ends-at 20 august 2022 12am UTC --msg but has the '--ends-at' flag
```





* ### `[p]g show`

Show the giveaway that has the given message id.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g show [message_id]`

```js title="Example:"
[p]g show 12345678901234567890

// or if you want to reply to a message
[p]g show x
```




* ### `[p]g top`

See the giveaway managers who have performed the most giveaways in the server.

**Syntax:** `[p]g top`

```js title="Example:"
[p]g top
```

