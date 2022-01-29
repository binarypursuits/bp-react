import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HelloWorld from './HelloWorld';

export interface HelloWorldProps {
    firstName: string;
    lastName: string;
}

export function renderToString (props: HelloWorldProps) {
    return ReactDOMServer.renderToString(<HelloWorld {...props} />);
}