---
title: Donations
sidebar_position: 3
---

The `dono` top command is the one that handles the basics of donations such as adding, removing and viewing donations.

<!-- [
│   'dono',
│   'dono add',
│   'dono amountcheck',
│   'dono bal',
│   'dono check',
│   'dono leaderboard',
│   'dono notes',
│   'dono remove',
│   'dono reset',
│   'dono retrieve',
│   'dono setup',
] -->

This guide is categorized alphabetically however the first command mentioned is required to be run before any other command.

* ### [p]dono setup

    * #### Description
    
        This command is used to setup the donation logging system. It is required to be run before any other command.
        This sets up the basics of the system so that you don't run into problems.
        Other commands won't bne accessible until this command is run.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `setup` is the subcommand of the command.
    
        ```css
        [p]dono setup
        ```

* ### [p]dono add

    * #### Description
    
        This command is used to add a donation to a user
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `add` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono add [bank] <amount_or_items> [user] [reason] >
        ```
    
    * #### Arguments
    
        * `bank` is the bank in which the donation was made.
        * `amount_or_item` is the amount of the donation or an item name set with [`[p]donoset bank item add`](/docs/donationlogging/donoset#pdonoset-bank-item-add).
        * `user` is the user who donated.
        * `reason` is the reason for the donation.
    
    * #### Examples
    
        ```css
        [p]dono add bank 1000 @user
        [p]dono add bank 1000 @user reason
        ```

* ### [p]dono amountcheck

    * #### Description
    
        This command is used to check the amount of donations a user has made greater than or lower than to the specified amount.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `amountcheck` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono amountcheck <bank> <function> <amount> >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
        * `function` is one of `less` or `more`.
        * `amount` is the amount to check against.
    
    * #### Examples
    
        ```css
        [p]dono amountcheck bank less 1000
        [p]dono amountcheck bank more 1000
        ```

* ### [p]dono bal

    * #### Description
    
        This command is used to check the amount of donations you have made.
        You cannot check the amount of donations made by other users with this command.
        For that, use the [`dono check`](/docs/donationlogging/dono#p-dono-check) command.

        Omitting the bank argument will show the total amount of donations in all banks made by you.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `bal` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono bal [bank] >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
    
    * #### Examples
    
        ```css
        [p]dono bal
        [p]dono bal bank
        ```

* ### [p]dono check

    * #### Description
    
        This command is used to check the amount of donations made by a user.
        You can check the amount of donations made by other users.

        This command is only for mods and admins.

        Omitting the bank argument will show the total amount of donations in all banks made by the user.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `check` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono check [bank] [user] >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
        * `user` is the user to check.
    
    * #### Examples
    
        ```css
        [p]dono check bank @user
        ```

* ### [p]dono leaderboard
  
    * #### Description
    
        This command is used to check the leaderboard of donations made by users.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `leaderboard` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono leaderboard <bank> >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
    
    * #### Examples
    
        ```css
        [p]dono leaderboard bank
        ```

* ### [p]dono leaderboard today

    * #### Description
    
        This command is used to check the leaderboard of donations made by users today.

        This leaderboard is reset every day at midnight utc.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `leaderboard` is the subcommand of the command.
        * `today` is the subcommand of the subcommand.
    
        ```xml
        Syntax: < [p]dono leaderboard today <bank> >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
    
    * #### Examples
    
        ```css
        [p]dono leaderboard today bank
        ```

* ### [p]dono leaderboard weekly

    * #### Description
    
        This command is used to check the leaderboard of donations made by users this week.

        This leaderboard is reset every week on monday at midnight utc.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `leaderboard` is the subcommand of the command.
        * `weekly` is the subcommand of the subcommand.
    
        ```xml
        Syntax: < [p]dono leaderboard weekly <bank> >
        ```
    
    * #### Arguments
    
        * `bank` is the bank to check.
    
    * #### Examples
    
        ```css
        [p]dono leaderboard weekly bank
        ```

* ### [p]dono notes

    * #### Description
    
        This command is used to see all the notes (aka reason in commands like `dono add/remove`) set for users.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `notes` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono notes [user] >
        ```
    
    * #### Arguments
    
        * `user` is the user to check.
    
    * #### Examples
    
        ```css
        [p]dono notes @user
        ```

* ### [p]dono remove

    * #### Description
    
        This command is used to remove a donation from a user
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `remove` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono remove [bank] <amount> [user] [reason] >
        ```
    
    * #### Arguments
    
        * `user` is the user who donated.
        * `bank` is the bank in which the donation was removed.
        * `amount` is the amount of the donation removed.
        * `reason` is the reason for the donation removal.
    
    * #### Examples
    
        ```css
        [p]dono remove bank 1000 @user
        [p]dono remove bank 1000 @user reason
        ```

* ### [p]dono reset

    * #### Description
    
        This command is used to reset the donation of a user

        Not providing a bank, will reset the user's donations for all banks available.
    
    * #### Usage
    
        * `p` is the prefix of the bot.
        * `dono` is the name of the command.
        * `reset` is the subcommand of the command.
    
        ```xml
        Syntax: < [p]dono reset [bank] [user] [reason] >
        ```
    
    * #### Arguments
    
        * `user` is the user who donated.
        * `bank` is the bank in which the donation was reset.
        * `reason` is the reason for the donation reset.
    
    * #### Examples
    
        ```css
        [p]dono reset bank @user
        [p]dono reset bank @user reason
        ```
