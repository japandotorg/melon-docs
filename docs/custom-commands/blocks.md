---
title: TagScriptEngine Blocks
sidebar_position: 2
---

TagScriptEngine Blocks usage and examples.

# TagScriptEngine Blocks

## Core Blocks

### Assignment Block 

Variables are useful for choosing a value and referencing it later in a tag. Variables can be rederenced using brakcets as any other block.

Usage: `{=(<name>):<value>}`

Aliases: `assign, let, var`

Payload: value

Parameter: name

```py title="Example:"
{=(prefix):<}
The prefix here is `{prefix}`.
# The prefix here is `<`.
{assign(day):Sunday}
{if({day}==Saturday):It's Saturday my bois, weekend go brr|The day is {day}.}
# The day is Sunday.
```
### Random Block

Pick a random item from a list of strings, split by either `~` or `,`. An optional seed can be provided to the parameter to always choose the same item when using the seed.

Usage: `{random([seed]):<list>}`

Aliases: `#, rand`

Payload: list

Parameter: seed, None

```py title="Example:"
{random:Lemon, Unknown, Clad} attempts to ban the user!
# Possible Outputs
# Lemon attempts to ban the user!
# Unknown attempts to ban the user!
# Clad attempts to ban the user!
{=(insults):I’d like to kick you in the teeth, but why should I improve your looks?~Yo Mama so dumb she bought tickets to Xbox Live.~You look like a monkey, and you smell like one too.}
{=(insult):{rand:{insults}}}
{insult}
# Assigns a random insult to the insult variable
```

### Math Block

Math blocks perfom the mathematical operations in the payload and return the results.

Aliases: `+, m, math, calc`

> Evaluates the mathematical operations in the payload in the correct order of operations and returns the result. Block names are synonymous.

Variables:
* `a+b` - addition
* `a-b` - subtraction
* `a*b` - multiplication
* `a/n` - division
* `a^b` - exponent
* `abs(x)` - absolute value of x
* `round(x)` - rounds x to the nearest whole number
* `trunc(x)` - truncates x to ineger value (chops off decimals)
* `sin(x)` - returns the sine of x radians
* `cos(x)` - returns the cosine of x radians
* `tan(x)` - returns the tangent of x radians
* `exp(x)` - returns euler's number raised to the power of x
* `sgn(x)` - returns the sign of x, for `x>0` returns 1, for `x=01` returns 0, for `x<0` returns -1.
* `log(x)` - returns the logarithm of x (base 10)
* `ln(x)` - returns the natural logaritm of x (base e)
* `log2(x)` - returns the logarithm of x (base 2)
* `pi` or `PI` can be used to indicate 𝜋 (3.141592653589793)
* `e` or `E` can be used to indicate euler's number (2.718281828459045)

```py title="Example:"
{math:cos(pi)} 
# will return -1.0
{m:round(7.8)+trunc(8.9)}
# will return 16
```

### Range Block

The range block picks a random number from a range of numbers seperated by `-`. the number range is inclusive, so it can pick the starting/ending number as well. Using the rangef block will pick a number to the tenth decimal place.

An optional seed can be provided to the parameter to always choose the same item when using that seed.

Usage: `{range([seed]):<lowest-highest>}`

Aliases: `rangef`

Payload: number

Parameter: seed, None

```py title="Example:"
Your lucky number is {range:10-30}
# Your lucky number is 7
# Your lucky number is 21
{=(height):{rangef:5-7}}
I am guessing your height is {height}ft
# I am guessing your height is 5.3ft
```
### Control Blocks

#### If Block

The if block returns a message based on the passed expression to the parameter. An expression is represented by two values compared with an operator.

The payload is required a message that must be split by `|`. If the expression evaluates true, then the message before `|` is returned, else the message after is returned.

Expression Operators:

Operator | Check | Example | Description
---------|-------|---------|--------
`==` | equality | a==a | value 1 is equal to value 2
`!=` | inquality | a!=b | value 1 is not equal to value 2
`>` | greater than | 9>6 | value 1 is greater than value 2
`<` | less than | 6>9 | value 1 is less than value 2
`>=` | greater than or equality | 10>=10 | value 1 is greater than or equal to value 2
`<=` | less than or equality | 6<=9 | value 1 is less than ot equal to value 2

Usage: `{if(<expression>):<message>]}`

Payload: message

Parameter: expression

```py title="Examples:"
{if({args}==69):You guessed it right, the number I was thinking of is 69|Too {if({args}<69):low|high}, try again}
# if args is 69
# You guessed it right, the number I was thinking of is 69
# if args is 21
# Too low, try again
# if args is 89
# Too high, try again
```

#### Break Block

The break block will force the tag output to only be the payload of this block, if the passed expresssion evaluates true. If no message is provided to the payload, the tag output will be empty.

This differs from the `StopBlock` as the stop block stops all tagscript processing and returns its message while the break block continues to process blocks. If command blocks exist after the break block, they will still execute.

Usage: `{break(<expression>):[message]}`

Aliases: `short, shortcircuit`

Payload: message

Parameter: expression

```py title="Example:"
{break({args}==):You did not provide any input}
```

#### All Block 

The all block checks that all of the passed expressions are true. Multiple expressions can be passed to the parameter by splitting them with `|`.

The payload is a required message that must be split by `|`. If the expression evaluates true, then the message before the `|` is returned, else the message after is returned.

Usag `{all(<expression|expression|...>):<message>}`

Aliases: `and`

Payload: message

```py title="Example:"
{all({args}>=69|{args}<=420):You picked {args}|You must provide a number between 69 and 420}
# if {args} is 21
You must provide a number between 69 and 420
# if {args} is 89
You picked 89
```

#### Any Block

The any block checks that any of the passed expressions are true. Multiple expressions can be passed to the parameter by splitting them with `|`.

The payload is a required message that must be split by `|`. If the expression evaluates true, then the message before the `|` is returned, else the message after is returned.

Usage: `{any(<expression|expression|...>):<message>}`

Aliases: `or`

Payload: message

Parameter: expression

Examples:

```py title="Example:"
{any({args}==UwU|{args}==OwO|{args}==TwT):Mwahh {user(name)}|Bye}
# if {args} is OwO
Mwahh inthedark.org
# if {args} is hello
Bye
```

#### Fifty-fifty Block

The fifty-fifty block has a 50% change of returning the payload, and 50% chance of returning null.

Usage: `{50:<message>}`

Aliases: `5050, ?`

Payload: message

Parameter: None

```py title="Example:"
I pick {if({5050:.}!=):heads|tails}
# I pick tails
```

#### Stop Block

The stop block stops tag processing if the given parameter is true. If a message is passed to the payload it will return the message.

Usage: `{stop(<bool>):[string]}`

Aliases: `halt, error`

Payload: string, None

Parameter: bool

```py title="Example:"
{stop({args}==):You must provide arguments for this tag}
# enforces providing arguments for a tag
```

### String Blocks

#### Replace Block

The replace block will replace specific characters in a string. The parameter should split by a `,`, containing the characters to fund before the command and the replacements after

Usage: `{replace(<original,new>):<message>}`

Aliases: `None`

Payload: message

Parameter: original, new

```py title="Examples:"
{replace(o,i):welcome to the server}
# welcime ti the server
{replace(1,6):{args}}
# if {args} is 19
# 69
{replace(, ):Test}
# T e s t
```
#### URLEncode Block

This block will encode a given string into a properly formatted url with non-url compliant characters replaced. Using `+` as the parameter will replace spaces with `+` rather than `%20`

Usage: `{urlencode(["+"]):<string>}`

Payload: string

Parameter: "+", None

```py title="Example:"
{urlencode"covid-19 sucks}
# covid-19%20sucks
{urlencode(+):i am stuck at home writing docs}
# i+am+stuck+at+home+writing+docs
# the following tagscript can be used to search up tag blocks
# assume {args} = "command block"
<https://japandotorg.me/about?q={urlencode(+):{args}}&check_keywords=yes&area=default>
# <https://japandotorg.me/about?q=command+block&check_keywords=yes&area=default>
```

### Miscellaneous Blocks

#### Strftime Block

The strf block converts and formats timestamps based on [strftime formatting spec](https://strftime.org). Two types of timestamps are supported: ISO and epoch. If a timestamp isn't passed, the current UTC time is used.

Invoking this block with `unix` will return the current Unix timestamp.

Usage: `{strf([timestamp]):<format>}`

Aliases: `unix`

Payload: format, None

Parameter: timestamp

```py title="Example:"
{strf:%Y-%m-%d}
# 2021-07-11
{strf({user(timestamp)}):%c}
# Thrus Oct 7 21:10:28 2018
{strf(1420070400):%A %d, %B %Y}
# Thursday 01, January 2015
{strf(2019-10-09T01:45:00.805000):%H:%M %d-%B-%Y}
# 01:45 09-October-2019
{unix}
# 1629182008
```

#### Timedelta Blocks

Timedelta blocks calculate the delta, or difference between two time values.

```py title="Timedelta Blocks:"
{td(optional DateTime or Unix time):DateTime value}
# Outputs a string describing the difference in time between the parameters and the payload.
```

If no parameters are provided, the TagScript Engine defaults to use the current DateTime as the implied parameters.

```py title="Example:"
{td:2022-01-01 00.00.00}
# The above expression as of 2021-10-07 would output 2 months 24 days 6 hours, or the time until Midnight New Years Day
{td({m:trunc({unix}-3600)}):{strf:%m-%d %H.%M.%S}}
# The above expression will always out put 1 hour because {unix} is the current time and we subtracted 3600 seconds
```
