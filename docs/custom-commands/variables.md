---
title: Default Variables
sidebar_position: 3
---

The following blocks will be present and accessable as defaults when running any tag.

## Meta Variables

Meta variables reference meta attributes about the tag invocation.

### Args Block

The `{args}` block represents the arguments passed after the tag name when invoking a tag. If no parameter is passed, it returns all the text after the invocation name. If an index is passed, it will split the arguments into a list by the given splitter, and return the word at the index. The default splitter is a " ".

**Usage:** `{args([index]):[splitter]>}`

**Payload:** splitter

**Parameter:** index

**Example:**

:::note

In the following example, assume the tag's name is `argstag` and the message content is `[p]argstag When life gives you lemons, make lemonade.`

:::

```py
{args}
# When life gives you lemons, make lemonade
{args(1)}
# When life gives you lemons
{args(2):,}
# make lemonade
```

### Uses Block

The `{uses}` block returns the number of times a tag has been used.

**Usage:** `{uses}`

**Payload:** None

**Parameter:** None

```py title="Example:"
{uses}
# 1
```

## Discord Object Variables

These blocks reference Discord objects from the tag invocation context.

### Author Block

The `{author}` block with no parameters returns the tag invoker's full username and discriminator, but passing the attributes listed below to the block payload will return the attribute instead.

**Aliases:** `{user}`

**Usage:** `{author([attribute])}`

**Payload:** None

**Parameter:** attribute, None

Attribute | Description 
----------|-------------
id | Author's Discord ID
name | Author's username
nick | Author's nickname, if they have one, else their username
avatar | A link to author's avatar
discriminator | Author's discriminator
created_at | Author's account creation date
timestamp | Author's account creating date as a UTC timestamp
joined_at | Date author joined the server
mention | Author's ping mention
bot | Whethor author is a bot or not
color | Author's top role's hex color
top_role | Author's top role
roleids | List of author's role IDs

### Target Block

The `{target}` block follows the same usage and has the same attributes as the Author Block, but it's deaults to the mentioned, or the tag author.

**Usage:** `{target}`

**Aliases:** `{member}`

### Channel Block

The `{channel}` block with no parameters returns the channel's full name but passing the attributes listed below to the block payload will return the attribute instead.

**Usage:** `{channel([attribute])}`

**Payload:** None

**Parameter:** attribute, None

Attribute | Description 
----------|-------------
id | Channel's ID
name | Channel's name
created_at | Channel's creation date
timestamp | Channel's creation date as a UTC timestamp
nsfw | Weather the channel is nsfw or not
mention | Channel's ping mention
topic | Channel's topic

### Server Block

The `{server}` block with no parameters returns the server's name but passing the attributes listed bellow to the block payload will return the attribute instead.

**Usage:** `{server([attribute])}`

**Aliases:** `guild`

**Payload:** attribute, None

Attribute | Description 
----------|-------------
id | Server's ID
name | Server's name
icon | Server's icon
created_at | Server's creation date
timestamp | Server's creation date as UTC timestamp
member_count | Server's member count
bots | Number of bots in the server
humans | Number of huamns in the server
random | A random member from the server