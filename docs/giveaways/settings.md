---
title: Giveaway Settings
sidebar_position: 2
---

This page shows the usage of configuration of the giveaways system commands.

* `[p]gset autodelete`

Set whether giveaway command invocations get automatically deleted or not.

Pass true to delete and false to not.

**Syntax:** `[p]gset autodelete <toggle>`

```js title="Examples:"
[p]gset autodelete true
[p]gset autodelete false
```

![autodel example](https://shoot-up-a.school/VhndHcvRlDGRDUjx/IaJ72Pr0.png)

* `[p]gset backup`

Get a file from the bot containing giveaway customization data for your server.

**Syntax:** `[p]gset backup`

![backup example](https://shoot-up-a.school/7XO498hSacT1SK-b/fSOOe6Fl.png)

* `[p]gset blacklist`

Blacklist roles from giveaway permanently without having to pass them as requirements each time.

You can send multiple role ids or mentions.

Sending nothing will show a list of blacklisted roles.

**Syntax:** `[p]gset blacklist [roles..]`

* `[p]gset bypass`

See a list of roles that can bypass requirements in giveaways.

**Syntax:** `[p]gset bypass add [roles...]` | `[p]gset bypass remove [roles...]`

* `[p]gset defaults`

Revert all customizable settings for giveaways to their defaults.

:::note

Alternatively, if you want to set the default for an individual setting, you could pass `default` as their first argument.

For commands that support this, it is mentioned in their documentation.

:::

**Syntax:** `[p]gset defaults`

* `[p]gset disabledm`

Toggle whether the bot is allowed to dm you regarding giveaway notifications or not.

This is a global setting for each separate user. This will disallow the bot for dming you from any server.

**Syntax:** `[p]gset disabledm <toggle>`

```js title="Examples:"
[p]gset disabledm true

[p]gset disabledm false
```

![disabledm example](https://shoot-up-a.school/VrVjE7uonpZLFtyW/QOjSoTyG.png)

* `[p]gset embed`

   Customize the giveaway embed.

   Each sub command changes a different attribute of the embed and supplies different variables to be replaced.

   * `[p]gset embed color`

    Set the colour of giveaways embeds.

    if color is not passed, it will default to invisible embeds.
        
    Before this command is used, the global bot color will be used.
        
    Default is invisible (0x303036).

    **Syntax:** `[p]gset embed color [color=#2f3136]`

    * `[p]gset embed description`

    Set the description of the embed of the giveaway message.

    Available variables are:

    `{prize}, {emoji}, {timestamp}, {raw_timestamp}, {server}, {host}, {donor}, {winners}`

    **Syntax:** `[p]gset embed description <description>`

    * `[p]gset embed footer`

    Custom the giveaway embed footer. Use subcommands to customize the text and icon.

    icon - `{server_icon_url}`, `{host_avatar_url}`
    
    text - `{winners}`, `{server}`

    **Syntax:** `[p]gset embed footer icon [icon]` | `[p]gset embed footer text [text]`

    * `[p]gset embed thumbnail`

    Change the giveaway embed thumbnail. Provide a link to an image or video to set as the thumbnail.

    Usable variables are:

    `{server_icon_url}, {host_avatar_url}`

    **Syntax:** `[p]gset embed thumbnail [thumbnail]`

    * `[p]gset embed title`

    Set the title of the embed of the giveaway message.

    Available variables are: `{prize}`

    **Syntax:** `[p]gset embed title <title>`

* `[p]gset emoji`

Set a custom giveaway emoji that the bot reacts with on giveaway embeds.

:::note

The bot must have access to the emoji to be used.

:::

**Syntax:** `[p]gset emoji <emoji>`

* `[p]gset endmsg`

Set the message that gets sent when a giveaway ends.

Useable variables:

`{prize}`, `{winner}`, `{link}`

**Syntax**: `[p]gset endmsg <message>`

* `[p]gset entryaccepteddm/entryrejecteddm`

Set a message that gets sent to a user when their entry gets accepted/rejected for a giveaway (AKA they passed or did not pass all the requirements, if any).

entryrejecteddm - `{prize}` `{host}` `{jump_url}` `{server}` `{member}` `{reason}`

::note

`{reason}` is a pre formatted string detailing the reason why the user's entry was rejected.

:::

entryaccepteddm - `{prize}` `{host}` `{jump_url}` `{server}` `{member}`

:::note

You can set this to the default message by passing `default` as the first argument.

:::

:::note

This setting supports the {embed} block.

:::

**Syntax:** `[p]gset entryaccepteddm <message>` | `[p]gset entryrejecteddm <message>`

* `[p]gset header`

Set a custom giveaway message. This message shows above the giveaway embed.

:::note

You can set this to the default message by passing `default` as the first argument.

:::

**Syntax**: `[p]gset header <message>`

* `[p]gset hostdm`

Customize the host dm settings. Not passing a message would disable dming the host.

message - `{prize}`, `{winners}`, `{winners_amount}`, `{server}`, `{jump_url}`

:::note

You can set this to the default message by passing `default` as the first argument.

:::

:::note

This setting supports the {embed} block.

:::

**Syntax:** `[p]gset hostdm [message]`

```js title="Examples:"
// to set the default
[p]gset hostdm default

// to disable dming the host
[p]gset hostdm

// Non embedded message:
[p]gset hostdm Your giveaway for {prize} has ended.
Winners are: {winners(all)}
{jump_url}

//Embedded message:
[p]gset hostdm {embed(description):Your giveaway for {prize} has ended.
Winners are: {winners(all)}
{jump_url}}
```

* `[p]gset manager`

Shows the list of manager roles for this server. 

Use subcommands to add or remove roles that can manage giveaways.

If these aren't set, then manage message permissions or the bot's mod role will be required.

**Syntax:** `[p]gset manager add [roles...]` | `[p]gset manager remove [roles...]`

* `[p]gset multi`

Add a multipier to a given role. This will increase the chances of the members of that role to win in giveaways. See a list for all roles that have multipliers in giveaways in this server. Use subcommands to add or remove roles from the multiplier list.

**Syntax:** `[p]gset multi add <role> <multi>` | `[p]gset multi remove <role> <multi>`

* `[p]gset pingrole`

Set which role gets pinged in giveaways.

:::note

This only takes effect when the --ping flag is used in giveaways.

:::

**Syntax:** `[p]gset pingrole <role>`

* `[p]gset removereact`

Toggle whether the bot removed reactions from the giveaway message if a user does not pass the requirements.

:::danger

Please don't turn this on if your server has high giveaway joins, this setting can get the bot get flagged by discord and we'll prolly have to blacklist your server after that.

:::

**Syntax:** `[p]gset removereact <toggle>`

```js title="Examples:"
[p]gset removereact true

[p]gset removereact false
```

![removereact example](https://shoot-up-a.school/sugceP5kAo5xPggi/m31MWgJ8.png)

* `[p]gset restore`

Restore a giveaway settings backup from a file provided by the bot.

The message argument is the message id of the backup file message.

**Syntax:** `[p]gset restore <message>`

```js title="Examples:"
[p]gset restore 1234567890

// if you want to reply to the message instead of passing the message id
[p]gset restore x
```

![restore example](https://shoot-up-a.school/sBj_pHep5N1c_lEN/qsMb2l46.png)


* `[p]gset sdr`

Set whether the default requirements set through `[p]gset bypass/blacklist` should be shown in the giveaway embed.

:::note 

If set to False, the requirements would still be applied but not shown in the embed itself.

:::

**Syntax:** `[p]gset sdr`

* `[p]gset showsettings`

See giveaway settings configured for your server.

**Syntax:** `[p]gset showsettings`

* `[p]gset tmsg`

Set a custom message for giveaways.

:::note

This message gets sent in an embed when you use the `--thank` flag while starting a giveaway.

:::

Usable Variables: 

`{donor}`, `{donor(mention)}`, `{donor(nick)}`, `{donor(name)}`, `{donor(id)}`

:::note

You can set this to the default message by passing `default` as the first argument.

:::

**Syntax:** `[p]gset tmsg <message>`

* `[p]gset unblacklist`

Unblacklist given roles from giveaways permanently.

**Syntax:** `[p]gset unblacklist [roles...]`

* `[p]gset unreactdm`

Set whether the user is informed in dms if their reaction is removed by a third-party.

**Syntax:** `[p]gsetunreactdm <status>`

* `[p]gset winnerdm`

Customize the winner dm message.

message - Change the message that is sent to the winners when the giveaway ends.

Usable Variables:

`{prize}`, `{winnners}`, `{winners_amount}`, `{server}`, `{jump_url}`

**Syntax:** `[p]gset winnerdm message <message>`