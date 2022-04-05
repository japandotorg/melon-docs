---
title: Giveaway Settings
sidebar_position: 2
---

* `[p]gset autodelete`

Set whether giveaway command invocations get automatically deleted or not.

Pass true to delete and false to not.

**Syntax:** `[p]gset autodelete <toggle>`

* `[p]gset blacklist`

Blacklist roles from giveaway permanently without having to pass them as requirements each time.

You can send multiple role ids or mentions.

Sending nothing will show a list of blacklisted roles.

**Syntax:** `[p]gset blacklist [roles..]`

* `[p]gset bypass`

See a list of roles that can bypass requirements in giveaways.

**Syntax:** `[p]gset bypass add [roles...]` | `[p]gset bypass remove [roles...]`

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

* `[p]gset gmsg`

Set a custom giveaway message. This message shows above the giveaway embed.

**Syntax**: `[p]gset gmsg <message>`

* `[p]gset hostdm`

Customize the host dm settings.

message - `{prize}`, `{winners}`, `{winners_amount}`, `{server}`, `{jump_url}`

**Syntax:** `[p]gset hostdm toggle <toggle>` | `[p]gset hostdm message <message>`

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