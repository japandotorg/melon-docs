# Contributing

## Local development

Clone the repo into your desired folder, `cd` into it, and install the dependencies.

```bash
git clone https://github.com/japandotorg/melon-docs.git
cd melon-docs
npm install | yarn install
```

I personally prefer yarn more but at the end of the day it's your choice/wish what node package manager you want to use.
You can use `npm run start` or `yarn start` to open up a local version of the site at http://localhost:3000. If you need to use a different port, run it as `npm run start -- --port=5000` or `yarn run start -- --port=5000`, or if you need to use a different host, run it as `npm run start --host 0.0.0.0` or `yarn run start -- --host 0.0.0.0`.

## Enabling HTTPS

There are multiple ways to obtain a ceritificate. We will use [mkcert](https://github.com/FiloSottile/mkcert) as an example.

1. Run `mkcert localhost` to generate `localhost.pem` + `localhost-key.pem`.
2. Run `mkcert -install` to install the cert in your trust store, and restart your browser.
3. Start the app with HTTPS env variables:
```bash
HTTPS=true SSL_CRT_FILE=localhost.pem SSL_KEY_FILE=localhost-key.pem yarn start
```
4. Open `https://localhost:3000/`

> *Remember to git ignore any unnecessery file like `localhost.pem` or anything similar if it's not already ignored.*

## Adding pages

To add a new page to the guide, create a `file-name.md` or `file-name.mdx` file inside th folder of your choice inside the [docs sub-folder](https://github.com/japandotorg/melon-docs/tree/dev/docs). If you want to link to `/docs/some-folder/some-file.html`, you would create a `some-file.md` or `some-file.mdx` file inside the folder. [React](https://reactjs.org) will/should automatically pick up on it and set up the routing appropriately.

## General guidelines

Because we want to keep everything as consistent and clean as possible, here are some guidelines we strongly recommend you try to follow when making a contribution.

### Spelling, grammer, and wording

Improper grammar, strange wording, and incorrect spelling are all things that may lead to confusion when a user reads a guide page. It's important to attempt to keep the content clear and consistent. Re-read what you've written and place yourself in the shoes of someone else for a moment to see if you can fully understand everything without any confusion.

Don't worry if you aren't super confident with your grammar/spelling/wording skills; all pull requests get thoroughly reviewed, and comments are left in areas that need to be fixed or could be done better/differently.

#### "You"/"your" instead of "we"/"our"

When explaining parts of a guide, it's recommended to use "you" instead of "we" in most situations. For example:

```diff
- To check our `[p]gset` config, you can run `[p]gset showsettings`.
+ To check your `[p]gset` config, you can run `[p]gset showsettings`

- Our final configuration should look like this: ...
+ Your final configuration should look like this: ...

- Before we can actually do this, we need to update our configuration.
+ Before you can actually do this, you need to update your configuration.
```

#### "We" instead of "I"

When referring to yourself, use "we" (as in "the writers of this guide") instead of "I". For example:

```diff
- If you don't already have this module setup, I would highly recommend doing so.
+ If you don't already have this module setup, we would highly recommend doing so.
# Valid alternative:
+ If you don't already have this module setup, it's highly recommended that you do so.

- In this section, I'll be covering how to do that really cool thing everyone's asking about.
+ In this section, we'll be covering how to do that really cool thing everyone's asking about.
```

#### Inclusive language

Try to avoid gendered and otherwise non-inclusive language. Examples are:

* Whitelist -> Allowlist
* Blacklist -> Denylist
* Master/Slave -> Leader/follower, primary/replica, primary/secondary, primary/standby
* Gendered pronouns (e.g. he/him/his) -> They, them, their
* Gendered terms (e.g. guys) -> Folks, people
* Sanity check -> Quick check, confidence check, coherence check
* Dummy value -> Placeholder, sample value

#### Paragraph structure

Tied in with the section above, try to keep things as neatly formatted as possible. If a paragraph gets long, split it up into multiple paragraphs so that it adds some spacing and is easier on the eyes.

#### Tips, warnings, and danger messages

If you have a tip to share with the reader, you can format them in a specific way so that it looks appealing and noticeable. The same goes for warning and "danger" messages.

```py
# In this section, we'll be doing some stuff!

:::tip

You can do this stuff even faster if you do this cool thing listed in this tip!

:::

:::warning

Make sure you have your config setup before trying this.

:::

:::info

This module can do these amazing things.

:::

:::danger

Be careful; this action is irreversible!

:::
```
