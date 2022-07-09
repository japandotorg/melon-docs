---
title: SlashTags
sidebar_position: 1
---

Slash Tags allow you to create custom [Discord Slash Commands](https://blog.discord.com/slash-commands-are-here-8db0a385d9e6) which harness the power of the TagScriptEngine. If you haven't already, it's recommended you also read the [Tags](/docs/custom-commands/blocks) page for a general understanding of TagScript blocks.

## Tag Creation

:::note

`[p]` is your prefix.

:::

Add a tag using the folling command:

```py
[p]slashtag add mytag Hi This is my first tag!
```

The bot will then ask for a tag description, for which you can respond with:

```
My first slash command.
```

Afterwards, the bot will ask whether you would like to add arguments to the tag. In this example, we won't be adding any arguments, so reply no:

```
no
```

Invoke the slash with a `/`:

```
/mytag
```

The bot then responds with the tag's tagscript:

```
Hi This is my first tag!
```

## Context Variables

Tags come with built-in variable blocks you can access for more information about the invocation context. These are:

- `author`
- `channel`
- `server`

You can see attributes available using these blocks in [Default Variables](/docs/custom-commands/variables).
