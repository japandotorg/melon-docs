---
title: Example Tags
sidebar_position: 5
---

The following tags listed show examples of using tagscript blocks.

## Context Variables Example

The following tag shows an example of using the various attributes listed in [Default Variables](/docs/custom-commands/page3).

```rs
[p]tag + intro **HI {user(nick)}, WELCOME TO {guild}**

**__USER BLOCK USAGE__**
User: {user(name)}#{user(discriminator)}
ID: {user(id)}
Created: {user(created_at)}
Joined: {user(joined_at)}
Color: {user(color)}

**__SERVER BLOCK USAGE__**
Name: {server(name)}
ID: {server(id)}
Created: {server(created_at)}
Member Count: {server(member_count)}
Human Count: {server(humans)}
Bot Count: {server(bots)}
Sever Info: {server(description)}

Random Member: {server(random)}

**__CHANNEL BLOCK USAGE__**
Name: {channel(name)}
ID: {channel(id)}
Mention: {channel(mention)}
Created: {channel(created_at)}
NSFW: {channel(nsfw)}
Topic: {channel(topic)}
```

## Information Storage Example

This simple tag shows how to store repeated/informational text. This tag has often been used in a support server

```rs
[p] tag + ss Please send a screenshot. It’s much easier to figure out your problem if we can see what went wrong.
```

## Information Storage Example

The following tag is a simple example of using a tag to add an alias to a command.

```rs
[p]tag + l {c:lock {args}}
```

## Embed Tag Example

The following is an example of using embeds in tags ( JSON ). This tag has often been used in dank memer servers.

```rs
[p] tag + gping {require(855358569209397279,802817599078793216,871979044072210504}:<:dl_staff:855594650244874260>}
{override}
{embed({
    "footer":{
        "text":"donate for more~",
        "icon_url":"https://cdn.discordapp.com/icons/772708529744248842/a_199686d2146bf5dc49cc2894f711139f.gif?size=256",
        "proxy_icon_url":"https://images-ext-1.discordapp.net/external/5cE3C1obxdjK_HDdnMNqeDnICyM9RSEEtD_emeIexUU/%3Fsize%3D256/https/cdn.discordapp.com/icons/772708529744248842/a_199686d2146bf5dc49cc2894f711139f.gif"
    },
    "thumbnail":{
        "url":"https://cdn.discordapp.com/emojis/814383389759111209.gif",
        "proxy_url":"https://cdn.discordapp.com/emojis/814383389759111209.gif",
        "width":112,
        "height":112
    },
    "color":16287842,
    "type":"rich",
    "description":"<a:partyy:892522448413687829>  __**Sponsor**__: {args(1):,}\n<a:partyy:892522448413687829> __**Prize**__: {args(2):,}\n<a:partyy:892522448413687829> __**Message**__: {args(3):,}\n<a:pinkheart:892524596568420413> **THANK SPONSOR IN <#802568125413064725>** <a:pinkheart:892524596568420413>",
    "url":"https://discord.gg/danklovers",
    "title":"<a:giveaway:855465212177809459> ** 𝐆𝐈𝐕𝐄𝐀𝐖𝐀𝐘** <a:giveaway:855465212177809459>"
})}
{c:forcemention 802820502292267069}
```