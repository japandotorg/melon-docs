import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import github from 'prism-react-renderer/themes/github';
import dracula from 'prism-react-renderer/themes/dracula';
import { site } from '../../versionConfig';
import useThemeContext from '@theme/hooks/useThemeContext';

const VersionedCodeBlock = ({ language, code }) => {
    const modified = code
        .replace(/{{site.melonVersion}}/g, site.melonVersion)
        .replace(/{{site.soloaderVersion}}/g, site.soloaderVersion)
        .trim();
    const theme = getCodeBlockTheme();
    return (
        <Highlight
            {...defaultProps}
            code={modifiedCode}
            language={language}
            theme={theme}>
                {({className, style, tokens, getLineProps, getTokenProps}) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({line, key: i})}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({token, key})} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )
            }
        </Highlight>
    );
};

function getCodeBlockTheme() {
    const {isDarkTheme} = useThemeContext();
    if (isDarkTheme) {
        return dracula;
    } else {
        return github;
    }
}

export default VersionedCodeBlock;