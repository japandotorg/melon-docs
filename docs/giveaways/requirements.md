---
title: Giveaway Requirements
sidebar_position: 4
---

Melon's Giveaways come with an extensible requirements system that allows you to set certain restrictions to who can join a giveaway.

These requirements are of three types:

* **Role Based**: A user must or must not have a certain role to join a giveaway.

    * **Required**: The user must have the role to join.

    * **Blacklist**: The user must not have the role to join.

    * **Bypass**: The user can bypass ***ALL*** requirements of the giveaway.

* **Amari Based**: A user must have a certain amari level or amari weekly xp to join a giveaway.

    * **ALEVEL**: The user must have the amari level to join.

    * **AWEEKLY**: The user must have the amari weekly xp to join.

* **Messages**: A user must have sent a certain amount of messages to join a giveaway.

Requirements are specified as the third argument of the [`[p]g start`](/docs/giveaways/giveaway#pg-start) command.

Requirements, as a command argument, are completely optional and can either be emitted from the command invocation **OR** just kept as *none*.

```js title="Examples:"

[p]g start 5m 1 none testing

[p]g start 5m 1 testing
// in the above example, 5m is the time, 1 is the amount of winners and testing is the title/prize.
// The requirement argument was omitted
```

The format of a single requirements is as follows:

**SYNTAX:** `requirement-value[requirement-type]`

Where, requirement-value is:
    
* a role ID, mention or name (for role based requirements)

* a number (for amari based or message requirements)

and requirement-type is:

* ### `alevel` 
    for amari level requirements

* ### `aweekly` 
    for amari weekly xp requirements

* ### `blacklist` 
    for blacklisted role

* ### `bypass` 
    for bypassing all requirements

* ### `messages` 
    for message requirements

* ### `required` 
    for required role

:::note

The [requirement-type] should be specified within square brackets as shown (`[]`)

It is optional and defaults to `required`.

:::

:::tip

Multiple requirements can be grouped together by separating them with either a comma (`,`) or two semi-colons (`;;`).

:::

:::caution

Requirements will be completely skipped over if even 1 value is invalid so use caution when specifying requirements.

:::

```js title="Examples:"

[p]g start 5m 1 none testing

[p]g start 5m 1 role-name testing
// role-name will be set as the required role

[p]g start 5m 1 1234567890[required];;10[alevel] testing
// in the above example, 1234567890 is the role ID that will be required to join, 
// 10 is the amari level and testing is the title/prize.

[p]g start 5m 1 1234567890[blacklist];;100[messages];;10[aweekly] testing
// in the above example, 100 messages will be required to join,
// 10 is the amari level and 10 is the amari weekly xp and testing is the title/prize.

[p]g start 5m 1 1234567890[bypass];;0987654321[blacklist] testing
// in the above example, 1234567890 is the role ID that will bypass all requirements.
// 987654321 is the role ID that will be blacklisted from joining and testing is the title/prize.
```

:::danger 

Bypass roles override blacklist roles.

So if a person has both a bypass role and a blacklist role, the bypass role will allow him to bypass anyways.

:::

:::note

For the [`messages`](#messages) requirement, 
an alternative is to use the [`--messages`](/docs/giveaways/flags#--messages) flag.

You can also specify which channel to check for messages in with the [`--message-channel`](/docs/giveaways/flags#--message-channel) flag.

:::