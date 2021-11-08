import React from 'react';
import * as components from './componenets';

const ReactLiveScope = {
    React,
    ...React,
    ...components,
};

export default ReactLiveScope;