import React from 'react';
import Typewriter from "typewriter-effect";

export function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Discord Bot",
                    "Multipurpose Discord Bot",
                    "A Powerful Multipurpose Discord Bot",
                    "Custom Commands",
                    "Custom Slash Commands",
                    "Giveaways",
                    "Donation Logging",
                    "Bump Reminder",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
};
