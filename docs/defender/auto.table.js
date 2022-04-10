import React from "react";

export const articles = [
    {
        module: "Invite Filter",
        description: "Detects and takes action on unwanted Discord invites posted in your community."
    },
    {
        module: "Join Monitor",
        description: "Detects surges of users joining your server and notifies the staff about newly created accounts. It can also raise your server's verification level if it detects a raid."
    },
    {
        module: "Raider detection",
        description: "Also commonly referred as antispam / antiraid, it takes action on users spamming messages."
    },
    {
        module: "Comment Analysis",
        description: "Leverages the power of machine learning to detect a wide range of potentially unwanted messages. Powered by Google's Perspective API."
    },
    {
        module: "Warden",
        description: "	A complex module that lets you define rules. Rules are sets of conditions and actions that you can define to automate moderation, monitoring and much more. If something isn't covered by the other modules, it can probably be done with Warden."
    }
];

export const columns = [
    {
        Header: "Module",
        accessor: "module",
        className: "data-table left",
    },
    {
        Header: "Description",
        accessor: "description",
        className: "data-table"
    },
];