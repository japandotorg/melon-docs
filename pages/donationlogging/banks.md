---
title: Banks
sidebar_position: 2
---

Banks were briefly explained in the [Intro](/docs/donationlogging/intro) section. This section will go into more details about banks.

Like previusly mentioned, banks were introduced to allow you to log donations of multiple currencies simultaneously instead of being limited to one currency at a time. This means each bank has different properties and can be tracked and logged separately.

## Properties

* ### Name

    The name of the bank is the name of the currency that you want to log donations of. This is the name that will be used in the logs and in the leaderboard and when you want to add/remove donations from a user.

    The name of a bank, however, can not be changed once it is created. If you want to change the name of a bank, you will have to delete the bank and create a new one with the new name.

* ### Emoji

    The emoji of a bank is the emoji that will be used in the logs and in the leaderboard. This is the emoji that will be used to represent the currency that you want to log donations of.

    The emoji of a bank can be changed at any time. You can change the emoji of a bank by using the [`[p]donoset bank emoji`](/docs/donationlogging/donoset#pdonoset-bank-emoji) command.

* ### Log channel

    This is the discord channel where log records will be sent. This is the channel where you will be able to see the logs of donations that are made.

    Tracks of who added/removed donations to/from whom, how much they added/removed, and when they added/removed them will be sent to this channel.

    The log channel of a bank can be changed at any time. You can change the log channel of a bank by using the [`[p]donoset bank log`](/docs/donationlogging/donoset#pdonoset-bank-logchannel) command.

* ### Hidden

    Some banks might be used for internal purposes. For example, you might have a bank that you use to log donations that you receive from your patrons. You might not want to show this bank in the [`dono bal`](/docs/donationlogging/dono#pdono-bal) and [`dono check`](/docs/donationlogging/dono#pdono-check) commands. You can hide a bank by using the [`[p]donoset bank hide`](/docs/donationlogging/donoset#pdonoset-bank-hide) command.

    Banks can be hidden at any time and can be unhidden at any time. You can unhide a bank by using the [`[p]donoset bank unhide`](/docs/donationlogging/donoset#pdonoset-bank-unhide) command.

* ### Default

    The default bank is the bank that will be used when you don't specify a bank. For example, if you want to add donations to a user, you can use the [`[p]dono add`](/docs/donationlogging/dono#pdono-add) command. If you don't specify a bank, the default bank will be used.

    The default bank can be changed at any time. You can change the default bank by using the [`[p]donoset bank default`](/docs/donationlogging/donoset#pdonoset-bank-default) command.

* ### Bank items

    When using the [`dono add`](/docs/donationlogging/dono#pdono-add) command, it gets tiring when you constantly have to write different amounts of donations. For example, if you want to add 100 donations to a user, you will have to write `100` every time. This can get tiring and annoying.

    To tackle this laziness of ours, we came up with the concept of bank items. Each bank can register bank items. Each bank item has a name and an amount. When you add donations to a user, you can use the name of the bank item instead of the amount. This will add the amount of the bank item to the user.

    To add a bank item to a bank, you can use the [`[p]donoset bank item add`](/docs/donationlogging/donoset#pdonoset-bank-item-add) command. To remove a bank item from a bank, you can use the [`[p]donoset bank item remove`](/docs/donationlogging/donoset#pdonoset-bank-item-remove) command.

    Bank items can be added at any time and can be removed at any time.

* ### Milestone Roles

    Now ofcourse each amount of donation might have different perks for the donator. For example, if a user donates 100 donations, they might get a role. If they donate 200 donations, they might get another role and so on. Melon allows this to be done easily. Each separate bank can have milestone roles.even so that eavh milestone amount can have multiple roles to assign to the donor.

    The command to add milestone roles is [`[p]donoset bank roles add`](/docs/donationlogging/donoset#pdonoset-bank-roles-add). The command to remove milestone roles is [`[p]donoset bank roles remove`](/docs/donationlogging/donoset#pdonoset-bank-roles-remove).

    The syntax and process is explained in the command's help message and guide.

This is all for the properties of a bank. Now let's move on to the commands that can be used in this cog.