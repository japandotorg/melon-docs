import { DocsThemeConfig } from "nextra-theme-docs/.";
import { useRouter } from 'next/router';

import logo from './static/images/logo.svg'

const config: DocsThemeConfig = {
    project: {
        link: 'https://github.com/japandotorg/melon-docs',
    },
    docsRepositoryBase: 'https://github.com/japandotorg/melon-docs/tree/dev',
    useNextSeoProps() {
        const { route } = useRouter()
        if (route !== '/') {
            return {
                titleTemplate: 'Melon Docs',
            };
        };
    },
    logo: <span>MELON DOCS</span>,
    logoLink: logo,
    head: (
        <>
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
            <meta 
                name="description"
                content="Documentation website for Melon Discord Bot."
            />
            <meta 
                name="og:description"
                content="Documentation website for Melon Discord Bot."
            />
            <meta name="twitter:site:domain" content="guide.melonbot.io" />
            <meta name="twitter:url" content="https://guide.melonbot.io/" />
            <meta name="og:title" content="MELON DOCS" />
            <meta name="apple-mobile-web-app-title" content="MELON DOCS" />
        </>
    ),
    editLink: {
        text: 'Edit this page on GitHub',
    },
    feedback: {
        content: () => <> Give us feedback &lt;3 </>,
        labels: 'Feedback',
    },
    sidebar: {
        titleComponent: ({ title, type }) => {
            if (type === 'separator') {
                return <span className="cursor-default"> {title} </span>
            };
            return <> {title} </>
        },
        defaultMenuCollapseLevel: 0,
    },
    footer: {
        text: <> Copyright © {new Date().getFullYear} japandotorg </>
    },
};

export default config;
