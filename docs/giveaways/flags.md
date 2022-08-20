---
title: Giveaway Flags
sidebar_position: 5
---

This page explains how to use the extra argument flags in giveaways to make them more customizable.

These flags start with two dashes `--` followed by the setting name and an optional value after a space.
Multiple flags can be used separated by a space.

```js title="Example:"

--flag1 value --flag2 --flag3 value
// notice how flag 2 doesn't have a value. This flag acts like a toggle

```

Not all flags have the value as optional, some require values to be specified in order to work.

Some flags can have aliases to them that can be used alternatively to the original flag.

Flags are provided after the title for the giveaway in the [`[p]g start`](/docs/giveaways/giveaway#pg-start) command.

## Flag names, usage and effect

* ### Regular Flags

  * ### `--allow-multiple-winners`

      Alias: `--amw`

      Purpose: This flag toggles the option for a user to be chosen multiple times as the winner for the same giveaway.

:::note

      If not explicitly used, 
      the bot will try to select different users to be the winners for the giveaway to satisfy the amount of winners specified.

      If it fails to do so (AKA there weren't enough entrants), all entrants would be considered as winners.

:::

      Usage: `--allow-multiple-winners`

      ```js title="Example:"

      [p]g start 1m 1 test giveaway --allow-multiple-winners
      
      [p]g start 1m 1 test giveaway --amw
      
      ```

  * ### `--channel`

      Alias: `--chan`

      Purpose: This flag sets the channel the giveaway will be sent in.

      Usage: `--channel <channel>`

:::note

      If not explicitly used, the bot will send the giveaway in the channel the command was used in.

:::

:::note

      `<channel>` can be a channel mention, channel id, or channel name.

:::
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --channel #general

      [p]g start 1m 1 test giveaway --channel 1234567890

      [p]g start 1m 1 test giveaway --channel general

      [p]g start 1m 1 test giveaway --chan #general
      ```

  * ### `--donor`

      Purpose: This flag sets a user as the donor for the giveaway.

      Usage: `--donor <user>`

:::note

      `<user>` can be either a mention, an id, or simply a username

:::
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --donor @User

      [p]g start 1m 1 test giveaway --donor 1234567890

      [p]g start 1m 1 test giveaway --donor User#1234
      
      ```

  * ### `--ends-at`

      Alias: `--end-in` `--ends-in` `--end-at`

      Purpose: This flag sets the time the giveaway will end.

:::tip

      Use this flag if you want to set an accurate time for the giveaway to end.

      This flag accepts almost every date format you can give it.

:::

:::note
      
      If the `<time>` argument is not specified in the giveaway command, usage of this flag will be compulsory.

      This flag holds precedence over the `<time>` argument.

:::

      Usage: `--ends-at <time>`
      
      ```js title="Example:"

      [p]g start 1 test giveaway --ends-at december 30 2022

      [p]g start 1 test giveaway --end-in 1 day

      ```

  * ### `--extra-multi`

      Alias: `--em`

      Purpose: This flag sets role multipliers specific to the current giveaway.

:::note

      Role multipliers act as an entry multiplier for users that joined the giveaway and have the specified role.

      Entries are added up for each role multiplier a user has.

:::

      Usage: `--extra-multi <role-multi-pairs>`

:::note

      `<role-multi-pairs>` is a space separated list of role names and multipliers.

      The format to specify multipliers is: `<role>=<multi>`

      where `<role>` can be a role mention, role id, or role name, and `<multi>` is a number.
      
:::
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --extra-multi @Role=2 @Role2=3

      [p]g start 1m 1 test giveaway --em 1234567890=2 Role-name=3
      
      ```

  * ### `--message`

      Alias: `--msg`

      Purpose: This is a message that is sent alongside to the giveaway embed when a giveaway is started.

      Usage: `--message <message>`

      ```js title="Example:"

      [p]g start 1m 1 test giveaway --message Join the giveaway by clicking on the emoji below the embed!

      // or you can use the alias
      [p]g start 1m 1 test giveaway --msg Join the giveaway by clicking on the emoji below the embed!

      ```

  * ### `--no-defaults`

      Purpose: This flag disables the default role blacklists and bypass for the current giveaway.
      
      Usage: `--no-defaults`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --no-defaults
      
      ```

  * ### `--no-donor`

      Purpose: This flag disables the donor from joining the current giveaway.

:::note

      The donor defaults to the host of the giveaway if not provided using the [`--donor`](/docs/giveaways/flags#--donor) flag.

:::
      
      Usage: `--no-donor`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --no-donor
      
      ```

  * ### `--no-multi`
      
      Purpose: This flag disables the entry role multipliers for the current giveaway.
      
      Usage: `--no-multi`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --no-multi
      
      ```

  * ### `--starts-at`

      Alias: `--start-in` `--starts-in` `--start-at`
      
      Purpose: This flag sets the time the giveaway will start.
      
:::tip
      
      Use this flag if you want to set an accurate time for the giveaway to start.
      
      This flag accepts almost every date format you can give it.
      
:::
      
      Usage: `--starts-at <time>`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --starts-at december 30 2022
      
      [p]g start 1m 1 test giveaway --start-in 1 day
      
      ```

  * ### `--ping`
      
      Purpose: This flag will trigger the set pingrole to be pinged when a giveaway is started.
      
      Usage: `--ping`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --ping
      
      ```

  * ### `--thank`

      Purpose: This flag will send a thank you message alongside the giveaway message thanking the donor.

:::note
      
      This message is customizable as you want through the [`[p]gset tmsg`](/docs/giveaways/settings#pgset-tmsg) command.

:::
      
      Usage: `--thank`
      
      ```js title="Example:"
      
      [p]g start 1m 1 test giveaway --thank
      
      ```

* ### Special Flags

  * ### `--amount`

      Alias: `--amt`

      Purpose: This flags adds the given amount to the donor's (or host's if donor is not specified) donation balance.

:::tip

      This flag accepts most of the amount formats commonly used.
      Such as exponents (1e3), decimals (1.5), and k-notation (2k).
      
      And also all shorthand amount units.
      Such as million (1M) and billion (1B).

      These formats can be combined all together to create a larger amount.

:::

:::note

      This flag is only usable if the `DonationLogging` cog is loaded on the bot

:::

      Usage: `--amount <amount>`
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --amount 1.5k

      [p]g start 1m 1 test giveaway --amount 5m

      [p]g start 1m 1 test giveaway --amount 1.5e3

      [p]g start 1m 1 test giveaway --amt 1.5k
      
      ```

  * ### `--bank`

      Purpose: This flag will set the bank to be used to add the amount set with [`--amount`](/docs/giveaways/flags#--amount).

:::note

      This flag is only usable if the `DonationLogging` cog is loaded on the bot and is to be used in conjunction with the [`--amount`](/docs/giveaways/flags#--amount) flag.

      If this flag is not used, the default bank will be used.

:::

      Usage: `--bank <bank>`
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --bank bank-name
      
      ```

  * ### `--messages`

      Aliases: `--msgs` `--msg-req` `--msg-count`

      Purpose: This flag sets the number of messages required to join the giveaway.

:::tip

      This flag can be used as an alternative to providing this requirement in the `[requirements]` argument of the [`[p]g start`](/docs/giveaways/giveaway#pg-start) command.

:::

      Usage: `--messages <amount>`
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --messages 10

      [p]g start 1m 1 test giveaway --msgs 10
      
      ```

  * ### `--message-channel`

      Aliases: `--message-channels` `--msg-chans` `--msg-channel` `--msg-chan` `--msg-ch`

      Purpose: This flag sets the channels in which the messages requirement will be checked.

:::tip

      Use this flag if you want to limit which channel the messages requirement will be checked in.

      You can specify multiple channel by splitting them with a space.

:::

:::note

      If this flag is not used, the message requirement will be valid in all channels.

:::

      Usage: `--message-channel <channel>`
      
:::note

      `<channel>` can be multiple channel IDs, channel names, or channel mentions split by a space.
      
:::

      ```js title="Example:"

      [p]g start 1m 1 test giveaway --message-channel #general #bot-testing

      [p]g start 1m 1 test giveaway --msg-chans #general #bot-testing

      [p]g start 1m 1 test giveaway --msg-chan 1234567890 0987654321

      ```

  * ### `--cooldown`

      Alias: `--cd`

      Purpose: This flag sets the cooldown for the giveaway's message requirements.

:::note

      This flag basically just adds delay between the emssage count for a user. 
      Meaning this will prevent messages being counted if they spam messages.

:::

      Usage: `--cooldown <time in seconds>`
      
      ```js title="Example:"

      [p]g start 1m 1 test giveaway --cooldown 10

      [p]g start 1m 1 test giveaway --cd 10
      
      ```

Here's a few simple examples of a giveaway using multiple flags in a single giveaway:

```js title="Example:"

[p]g start 1m 1 test giveaway --amount 1.5k --messages 10 --message-channel #general --cooldown 10

[p]g start 1m 1 test giveaway --msg Love me love me say that you love me --thank --donor @user

[p]g start 1m 1 test giveaway --no-donor --no-multi

```