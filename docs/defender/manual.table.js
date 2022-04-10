import React from 'react';

export const manual = [
    {
        module: "Alert",
        description: "Allows your helper roles to report threats to the staff. Upon \"ringing the bells\" the staff is privately pinged with detailed context as to where the emergency is taking place. Additionally, this module can be configured so that after a certain time with no staff activity the server enters a state of emergency and certain modules (such as voteout) are rendered available to helpers.",
    },
    {
        module: "Vaporize",
        description: "Particularly effective against raids. It provides a quick way to ban vast amounts of new users without creating new mod-log entries."
    },
    {
        module: "Silence",
        description: "Upon activation, it is able to instantly delete messages from certain ranks. This is particularly useful when a raid is in progress."
    },
    {
        module: "Voteout",
        description: "Starts a voting session to expel a user. This module was designed specifically for emergency mode so that when the staff is absent helper roles are still able to take care of things by themselves."
    }
];

export const col = [
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