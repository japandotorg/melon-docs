---
title: Donation Settings
sidebar_position: 4
---

This command is used to manage the settings of the donation logging system.

<!-- [
│   'donoset autorole',
│   'donoset autorole add',
│   'donoset autorole remove',
│   'donoset bank',
│   'donoset bank add',
│   'donoset bank default',
│   'donoset bank emoji',
│   'donoset bank hide',
│   'donoset bank item',
│   'donoset bank item add',
│   'donoset bank item list',
│   'donoset bank item remove',
│   'donoset bank list',
│   'donoset bank remove',
│   'donoset bank reset',
│   'donoset bank roles',
│   'donoset bank roles add',
│   'donoset bank roles list',
│   'donoset bank roles remove',
│   'donoset bank unhide',
│   'donoset logchannel',
│   'donoset managers',
│   'donoset reset',
│   'donoset showsettings',
│   'donoset transferdata',
] -->

* ### [p]donoset autorole add

    * #### Description
    
        THis command enables whether or not milestone roles should be given to users when they reach a certain amount of donations.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `autorole` is the subcommand of the command.
        * `add` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]donoset autorole add <true_or_false> >
        ```
    
    * #### Arguments
    
        * `true_or_false` is whether or not to enable the autorole feature.

    * #### Examples
    
        ```css
        [p]donoset autorole add true

        [p]donoset autorole add false
        ```

* ### [p]donoset autorole remove

    * #### Description

        This command enables whether or not milestone roles should be removed from users when they go below a certain amount of donations.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `autorole` is the subcommand of the command.
        * `remove` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset autorole remove <true_or_false> >
        ```

    * #### Arguments

        * `true_or_false` is whether or not to enable the autorole feature.

    * #### Examples

        ```css
        [p]donoset autorole remove true

        [p]donoset autorole remove false
        ```

* ### [p]donoset backup

    * #### Description

        This command is used to backup the donation data.

        Using this command, sends (a) file(s) to the channel where the command was used which contain all the data of the donation logging system.

        This can be restores with the use of the [`[p]donoset restore`](#pdonoset-restore) command.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `backup` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset backup >
        ```

    * #### Examples

        ```css
        [p]donoset backup
        ```

* ### [p]donoset bank

    * #### Description

        This command is used to manage the banks of the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank [subcommand] >
        ```

    * #### Subcommands

        * [`add`](/docs/donationlogging/donoset#pdonoset-bank-add)
        * [`default`](/docs/donationlogging/donoset#pdonoset-bank-default)
        * [`emoji`](/docs/donationlogging/donoset#pdonoset-bank-emoji)
        * [`hide`](/docs/donationlogging/donoset#pdonoset-bank-hide)
        * [`item`](/docs/donationlogging/donoset#pdonoset-bank-item)
        * [`list`](/docs/donationlogging/donoset#pdonoset-bank-list)
        * [`remove`](/docs/donationlogging/donoset#pdonoset-bank-remove)
        * [`reset`](/docs/donationlogging/donoset#pdonoset-bank-reset)
        * [`roles`](/docs/donationlogging/donoset#pdonoset-bank-roles)
        * [`unhide`](/docs/donationlogging/donoset#pdonoset-bank-unhide)

* ### [p]donoset bank add

    * #### Description

        This command adds banks for the dono logging system in your server.

        You can provide multiple banks at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `add` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank add <name_emoji_pairs...> >
        ```

    * #### Arguments

        * `name_emoji_pairs` is the name and emoji pairs of the banks to add.
            These pairs should be like `name,emoji` and should be separated by spaces.

    * #### Examples

        ```css
        [p]donoset bank add bank1,emoji1 bank2,emoji2 bank3,emoji3
        ```

* ### [p]donoset bank default

    * #### Description

        This command sets the default bank for the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `default` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank default <bank_name> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to set as the default bank.

    * #### Examples

        ```css
        [p]donoset bank default bank1
        ```

* ### [p]donoset bank emoji

    * #### Description

        This command sets the emoji for a bank in the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `emoji` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank emoji <bank_name> <emoji> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to set the emoji for.
        * `emoji` is the emoji to set for the bank.

    * #### Examples

        ```css
        [p]donoset bank emoji bank1 :emoji:
        ```

* ### [p]donoset bank hide

    * #### Description

        This command hides a bank from the donation logging system.

        This means that the bank will not be shown in the [`dono bal`](/docs/donationlogging/dono#pdono-bal) and [`dono check`](/docs/donationlogging/dono#pdono-check) commands.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `hide` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank hide <bank_name> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to hide.

    * #### Examples

        ```css
        [p]donoset bank hide bank1
        ```

* ### [p]donoset bank info

    * #### Description

        This command shows information about a bank in the donation logging system.

        This includes the name, emoji, and whether or not the bank is hidden and other information.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `info` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank info <bank_name> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to show information about.

    * #### Examples

        ```css
        [p]donoset bank info bank1
        ```

* ### [p]donoset bank item

    * #### Description

        This command and its subcommands handle items that are accepted instead of amount in commands like [`dono add`](/docs/donationlogging/dono#pdono-add) and [`dono remove`](/docs/donationlogging/dono#pdono-remove).

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `item` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank item [subcommand] >
        ```

    * #### Subcommands

        * [`add`](/docs/donationlogging/donoset#pdonoset-bank-item-add)
        * [`remove`](/docs/donationlogging/donoset#pdonoset-bank-item-remove)
        * [`list`](/docs/donationlogging/donoset#pdonoset-bank-item-list)

* ### [p]donoset bank item add

    * #### Description

        This command adds items to a bank in the donation logging system.

        You can provide multiple items at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `item` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank item <bank_name> <item_amount_pairs...> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to add the items to.
        * `item_amount_pairs` is the item and amount pairs to add to the bank.
            These pairs should be like `item,amount` and should be separated by spaces.

    * #### Examples

        ```css
        [p]donoset bank item add bank1 item1,100 item2,2000 item3,30000
        ```

* ### [p]donoset bank item list

    * #### Description

        This command lists the items in a bank in the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `item` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank item list <bank_name> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to list the items of.

    * #### Examples

        ```css
        [p]donoset bank item list bank1
        ```

* ### [p]donoset bank item remove

    * #### Description

        This command removes items from a bank in the donation logging system.

        You can provide multiple items at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `item` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank item <bank_name> <item_names...> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to remove the items from.
        * `item_names` is the names of the items to remove from the bank.

    * #### Examples

        ```css
        [p]donoset bank item remove bank1 item1 item2 item3
        ```

* ### [p]donoset bank list

    * #### Description

        This command lists the banks in the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `list` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank list >
        ```

    * #### Examples

        ```css
        [p]donoset bank list
        ```

* ### [p]donoset bank log

    * #### Description

        This command sets the logchannel for a bank in the donation logging system.

        This is the channel where the donation logs will be sent to.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `log` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank log <bank_name> <logchannel> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to set the logchannel for.
        * `logchannel` is the logchannel to set for the bank.

    * #### Examples

        ```css
        [p]donoset bank log bank1 #donation-logs
        ```

* ### [p]donoset bank remove

    * #### Description

        This command removes a bank from the donation logging system.

        This means that the bank will no longer be shown in the [`dono bal`](/docs/donationlogging/dono#pdono-bal) and [`dono check`](/docs/donationlogging/dono#pdono-check) commands.

        This also means that all the items and donations in the bank will be removed.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `remove` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank remove <bank_names...> >
        ```

    * #### Arguments

        * `bank_names` is the names of the banks to remove separated by spaces.

    * #### Examples

        ```css
        [p]donoset bank remove bank1 bank2 bank3
        ```

* ### [p]donoset bank reset

    * #### Description

        This command resets the bank in the donation logging system.

        This means that all donations in the bank will be removed.

        This does not remove the bank from the system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `reset` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank reset <bank_names...> >
        ```

    * #### Arguments

        * `bank_names` is the names of the banks to reset separated by spaces.

    * #### Examples

        ```css
        [p]donoset bank reset bank1 bank2 bank3
        ```

* ### [p]donoset bank roles

    * #### Description

        This command and its subcommands handle roles that are accepted instead of amount in commands like [`dono add`](/docs/donationlogging/dono#pdono-add) and [`dono remove`](/docs/donationlogging/dono#pdono-remove).

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `roles` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank roles [subcommand] >
        ```

    * #### Subcommands

        * [`add`](/docs/donationlogging/donoset#pdonoset-bank-roles-add)
        * [`remove`](/docs/donationlogging/donoset#pdonoset-bank-roles-remove)
        * [`list`](/docs/donationlogging/donoset#pdonoset-bank-roles-list)

* ### [p]donoset bank roles add

    * #### Description

        This command adds roles to a bank in the donation logging system.

        You can provide multiple roles at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `roles` is the subcommand of the command.
        * `add` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank roles add <bank_name> <amount_roles_pairs...> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to add the roles to.
        * `amount_roles_pairs` is the amount and role pairs to add to the bank.
            These pairs should look like this: `<amount,role_id>[:another_role_id:...]`.

    * #### Examples

        ```css
        [p]donoset bank roles add bank1 1,123456789012345678:123456789012345678:123456789012345678 2,123456789012345678
        ```

* ### [p]donoset bank roles list

    * #### Description

        This command lists the roles in a bank in the donation logging system.

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `roles` is the subcommand of the command.
        * `list` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank roles list <bank_name> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to list the roles of.

    * #### Examples

        ```css
        [p]donoset bank roles list bank1
        ```

* ### [p]donoset bank roles remove

    * #### Description

        This command removes roles from a bank in the donation logging system.

        This command is especially useful because you have fine grain control over which roles to remove and from which milestones.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `roles` is the subcommand of the command.
        * `remove` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank roles remove <bank_name> <amount_roles_pairs...> >
        ```

    * #### Arguments

        * `bank_name` is the name of the bank to remove the roles from.
        * `amount_roles_pairs` is the amount and role pairs to remove from the bank.
            These pairs should look like this: `<amount,role_id>[:another_role_id:...]`.

    * #### Examples

        ```css
        [p]donoset bank roles remove bank1 1,123456789012345678:123456789012345678:123456789012345678 2,123456789012345678
        ```

* ### [p]donoset bank unhide

    * #### Description

        This command unhides banks in the donation logging system.

        This means that the banks will be visible in the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `bank` is the subcommand of the command.
        * `unhide` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset bank unhide <bank_names...> >
        ```

    * #### Arguments

        * `bank_names` is the names of the banks to unhide separated by spaces.

    * #### Examples

        ```css
        [p]donoset bank unhide bank1 bank2 bank3
        ```

* ### [p]donoset managers

    * #### Description

        This command and its subcommands handle managers in the donation logging system.

        Managers are users that can use commands like [`dono add`](/docs/donationlogging/dono#pdono-add) and [`dono remove`](/docs/donationlogging/dono#pdono-remove).

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `managers` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset managers [subcommand] >
        ```

    * #### Subcommands

        * [`add`](/docs/donationlogging/donoset#pdonoset-managers-add)
        * [`remove`](/docs/donationlogging/donoset#pdonoset-managers-remove)

* ### [p]donoset managers add

    * #### Description

        This command adds managers to the donation logging system.

        Managers are users that can use commands like [`dono add`](/docs/donationlogging/dono#pdono-add) and [`dono remove`](/docs/donationlogging/dono#pdono-remove).

        You can provide multiple managers at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `managers` is the subcommand of the command.
        * `add` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset managers add <managers...> >
        ```

    * #### Arguments

        * `managers` is the roles that can manage donations.

    * #### Examples

        ```css
        [p]donoset managers add @role1 roleid2 rolename3
        ```

* ### [p]donoset managers remove

    * #### Description

        This command removes managers from the donation logging system.

        Managers are users that can use commands like [`dono add`](/docs/donationlogging/dono#pdono-add) and [`dono remove`](/docs/donationlogging/dono#pdono-remove).

        You can provide multiple managers at once.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `managers` is the subcommand of the command.
        * `remove` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset managers remove <managers...> >
        ```

    * #### Arguments

        * `managers` is the roles that can no longer manage donations.

    * #### Examples

        ```css
        [p]donoset managers remove @role1 roleid2 rolename3
        ```

* ### [p]donoset reset

    * #### Description

        This command resets the donation logging system.

        This means that all banks, managers, and settings will be reset to their default values.

        This command is useful if you want to start over with the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `reset` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset reset >
        ```

    * #### Examples

        ```css
        [p]donoset reset
        ```

* ### [p]donoset restore

    * #### Description

        This command restores the data from a backup that was created with the [`donoset backup`](/docs/donationlogging/donoset#pdonoset-backup) command.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `restore` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset restore <message_id> >
        ```

        :::note 
            The message ID should be the ID of the message that contains the backup.
            This can also be a link to the message.
        :::

    * #### Arguments

        * `message_id` is the ID of the message that contains the backup files

    * #### Examples

        ```css
        [p]donoset restore 123456789012345678
        ```

* ### [p]donoset showsettings

    * #### Description

        This command shows the settings of the donation logging system.

        This command is useful if you want to see the current settings of the donation logging system.

    * #### Usage

        * `p` is the prefix of the bot.
        * `donoset` is the name of the command.
        * `showsettings` is the subcommand of the command.

        ```xml
        Syntax: < [p]donoset showsettings >
        ```

    * #### Examples

        ```css
        [p]donoset showsettings
        ```
