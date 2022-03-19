---
title: Parsing Blocks
sidebar_position: 4
---

Parsing blocks interact with tag invocaation and the affect the tag's output in Discord

## Restriction Blocks

The following blocks allow for restriction of tags behind roles or channels, or setting tag cooldowns.

### Require Block

The require block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is not in the targeted channel or doesn’t have the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a `,`.

**Usage:** `{require(<role,channel>):[response]}`

**Aliases:** whitelist

**Payload:** response, None

**Parameter:** role, channel

```js title="Example:"
{require(admin)}
{require(#・public-lounge, #・lemons-recreational-suite・):This tag can only be run in #🟦・public-lounge and #・lemons-recreational-suite・}
{require(855358569209397279, 816655055054307359, 858137305500090399):You aren't allowed to use this tag.}
```

### Blacklist Block

The blacklist block will attempt to convert the given parameter into a channel or role, using name or ID. If the user running the tag is in the targeted channel or has the targeted role, the tag will stop processing and it will send the response if one is given. Multiple role or channel requirements can be given, and should be split by a `,`.

**Usage:** `{blacklist(<role, channel>):[response]}`

**Payload:** response, None

**Parameter:** role, channel

```js title="Example:"
{blacklist(Quarantine)}
{blacklist(#・support-center):This tag is not allowed in #・support-center}
{blacklist(Tag Blacklist, 526473119008030730):You are blacklisted from usig tags}
```

### Cooldown Block

The cooldown block implements cooldown when running a tag. The parameter requires 2 values to be passed: `rate` and `per` integers. The `rate` is the number of times the tag can be used every `per` seconds.

The payload requires a `key` value, which is the key used to store the cooldown. A key should be any string that is unique if a channel's ID is passed as a key, the tag's cooldown will be enforced on that channel. Running the tag in a separate channel would have a different cooldown with the same `rate` and `per` values.

The payload also has an optional `message` value, which is the message to be send when the cooldown is exceeded. If no message i passed, the default message will be sent instead. The cooldown message supports 2 blocks: `key` and `retry_after`.

**Usage:** `{cooldown(<rate>|<per>):<key>|[message]}`

**Payload:** key, message

**Parameter:** rate, per

```py title="Example:"
{cooldown(1|10):{author(id)}}
# the tag author used the tag more than once in 10 seconds
# The bucket for 775213020766142464 has reached its cooldown. Retry in 3.25 seconds
{cooldown(3|3):{channel(id)}|Slow down! This tag can only be used 3 times per 3 seconds per channel. Try again in **{retry_after}** seconds.}
# the tag was used more than 3 times in 3 seconds in a channel
# Slow down! This tag can only be used 3 times per 3 seconds per channel. Try again in **0.74** seconds.
```

## Message Block

Message blocks modify the tag's output

### Embed Block

An Embed block will send an embed in the tag response. there are two ways to use the embed block, either by using properly formatted embed JSON from an embed generator or manually inputting the accepted embed attributes.

**JSON**

Using JSON to create an embed offers complete embed customization. Multiple embed generators are available online to visualize and generate embed JSON.

**Usage:** `{embed(<json>)}`

**Payload:** None

**Parameter:** json

```js title="Example:"
{embed({"title:":"Lemon!", "description":"Just a test embed"})}
{embed({
    "title":"Here's a hug gif",
    "image":{"url":"https://i.some-random-api.ml/GxDcJMiyra.gif"},
    "color":15194415
})}
```

**Manual**

The following embed attributes can be set manually:

* `title`
* `description`
* `color`
* `url`
* `thumbnail`
* `image`
* `field` - ( see below )

Adding a field to an embed requires the payload to be split by `|`, into either 2 or 3 parts. The first part is the name of the field, and the third optionally specifies whether the field should be inline.

**Usage:** `{embed(<attribute>):<value>}`

**Payload:** value

**Parameter:** attribute

```js title="Example:"
{embed(color):#ffff88}
{embed(title):DANK LOVERS}
{embed(description):DANK LOVERS is a dank memer based Discord server, with good and experienced staff}
{embed(field):Speciality|We have the best event and giveaway managers you will ever get to know.|false}
```

Both methods can be combined to create an embed in a tag. The following tagscript uses JSON to create an embed with fields and later set the embed title.

```js
{embed({"fields":[{"name":"Field 1", "value":"Field description", "inline":false}]})}
{embedd(title):my title}
```

### Redirect Block

Redirects the tag response to either the given channel, the author's DMs, or uses a reply based on what is passed to the parameter.

**Usage:** `{redirect(<"dm"|"reply"|channel>)}`

**Payload:** None

**Parameter:** "dm", "reply", channel

```js title="Examples"
{redirect(dm)}
{redirect(reply)}
{redirect(#・public-lounge)}
{redirect(802568125413064725)}
```

### Delete Block

### React Block

## Utility Blocks

The following utility blocks extend the power of tags that interface with bot commands.

### Command Block

Run a command as if the tag invoker had ran it. Only 3 command blocks can be used in a tag.

**Usage:** `{command:<command>}`

**Aliases:** `c, com, command`

**Payload:** command

**Parameter:** None

```py
{c:ping}
# invokes ping command
{c:kick {target(id)} toxic}
# invokes ban command on the pinged user with the reason as "toxic"
```

Override a command's permission requirements. This can override mod, admin, or general user permission requirements when running commands with the [Command Block](/docs/custom-commands/parsing#command-block). Passing no parameter will default to overriding all permissions.

In order to add a tag with the override block, the tag author must have `Manage Server` permissions.

This will not override bot owner commands or command checks.

**Usage:** `{override(["admin"|"mod"|"permissions"]):[command]}`

**Payload:** command

**Parameter:** "admin", "mod", "permissions"

```py
{override}
# overrides all commands and permissions
{override(admin)}
# overrides commands that require the admin role
{override(permissions)}
{override(mod)}
# overrides commands that require the mod role or have user permission requirements
```