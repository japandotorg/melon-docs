---
title: Giveaway
sidebar_position: 2
---

This page shows the usage of melon's giveaways system.

## Usage

* ### `[p]g create`

This asks you different questions one by one to start a giveaway. ( For Beginners )

* ### `[p]g start`

Start a giveaway with some prize of your wish.

:::tip

The time argument is optional, you can instead use the `--ends-at` flag to specify more accurate time span.

:::

Requires a manager role set with the `[p]gset manager @mygiveawaymanagerrole` or the bot mod role set with `[p]set addmodrole` or manage messages permissions.

Use [ `[p]g create` ](/docs/giveaways/giveaway#g-create) instead if you want a step by step process.

**Syntax:** `[p]g start [time] <no_of_winners> [requirements] <prize> [flags]`

```js title="Example:"
[p]g start 30s 1w my life
[p]g start 1h 1w someroleid;;anotherroleid[bypass];;anotheranotherroleid[blacklist] ok boomer
[p]g start 1w this giveaway has no time argument --ends-at 21 january 2022 12am UTC --msg but has the '--ends-at' flag
```

* `[p]g flash`

Start multiple flash giveaways with a given prize.

:::note

`<amount>` is the number of giveaways to flash.

These giveaways will have 1 winner and will last for 10 seconds each.

:::

**Syntax:** `[p]g flash <amount> <prize>`



* `[p]g reroll`

Reroll the winners for an ended giveaway.

You can pass the winners argument to specify how many winners you want to reroll.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g reroll [message_id] [winners=1]`

* ### `[p]g end`

End a giveaway prematurely.

This can also act as a second option for giveaways that are stuck because of some internal error. `Reason` is an optional argument to pass why the giveaway was ended.

:::tip

You can also reply to a giveaway message instead of passing it's id

Pass `all` to the message parameter to end all active giveaways in your server.

:::

**Syntax:** `[p]g end [message_id/message_link] [reason]`

* `[p]g entrants`

Check who has entered the giveaway until now.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g entrants [message_id]`

* `[p]g show`

Show the giveaway that has the given message id.

:::tip

You can also reply to a giveaway message instead of passing it's id.

:::

**Syntax:** `[p]g show [message_id]`

* `[p]g show`

List all the active giveaways in a server

:::danger

This command can break all the giveaways in a server, please use with caution.

:::

**Syntax:** `[p]g list`

* `[p]g top`

See the giveaway managers who have performed the most giveaways in the server.

**Syntax:** `[p]g top`

* `[p]g explain`

Start a paginated embeds session explaining how to use the commands of this cog and how it works.

:::note

You can pass the query parameter to see a specific explanation page.
Valid arguments are:
basics, requirements, flags, customization

:::

**Syntax:** `[p]g explain [query]`