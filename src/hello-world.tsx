import React from 'react';

export interface HelloWorldProps {
    firstName: string;
    lastName: string;
}

export function HelloWorld ({ firstName, lastName }: HelloWorldProps) {
    return <div><h1>Hello World</h1><h2>{ firstName }</h2><h2>{ lastName }</h2><h3>This might make me rich...</h3></div>;
}
