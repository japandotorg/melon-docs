---
title: Tags Intro
sidebar_position: 1
---

# Tags

Tags comes with the ability to create powerful custom commands through the usage of tag blocks. The basic block begins with a `{` and ends with an `}`. More advanced blocks may contain after the block declaration `()` to specify a parameter or a `:` to specify a payload. 

## Block Syntax

`{block(parameter):payload}`

`[arg]` = Optional

`<arg>` = Required

## Usage

:::note
`[p]` is your prefix
::: 

Add a tag using the following command:

```
[p]tag + lemon Hi lemon made a melon xP 
```

Invoke the tag with your bot's prefix and tag's name as if it were a command:

```
[p]lemon
```

The bot will respond with the stored tag content:

```
Hi lemon made a melon xP
```

## Default Variables

Tags comes with built-in variable blocks you can access for information about the invocation context. These are:

* `args`
* `author` | `user`
* `target` | `member`
* `channel`
* `guild` | `server`

You can see attributes available using these blocks in [Default Variables](/docs/custom-commands/page3).

Below is an example tag that returns info related to the tag author.

```
[p]tag + userinfo Username: **{author}**
ID: **{author(id)}**
Creation Date: **{author(created_at)}**
Bot: **{author(bot)}**
```

The `args` block can be useful for customizing tags and works well with the [Command Block](/docs/custom-commands/page4#command-block). Simple echo command that validates if args were provided:

```
[p]tag + echo {if({args}==):You must provide something to echo.|{args}}
```

Here's a tag that uses the default variable blocks as well as the [If Block](/docs/custom-commands/page2#if-block):

```json
[p]tag + exampletag Hi, this is an example of a tag.
This tag will now invoke a ping command.
{c:ping}
{delete({args(0)}==delete)}
{embed({
    "title":"The server this was invoked on was {server}.",
    "description":"{if({args}==):You did not provide any arguments for this tag|The arguments provided were: `{args}`}",
    "thumbnail":{"url":"{guild(icon)}"},
    "author":{"name":"{author} invoked this tag.","icon_url":"{author(avatar)}"},
    "color":2105893,
    "footer":{"icon_url":"{author(avatar)}","text":"{target} is the target of this tag."}
})}
```