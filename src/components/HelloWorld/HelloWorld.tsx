import React from 'react';
import { HelloWorldProps } from './HelloWorldProps';

export default function HelloWorld ({ firstName, lastName }: HelloWorldProps) {
    return <div><h1>Hello World</h1><h2>{ firstName }</h2><h2>{ lastName }</h2></div>;
}
