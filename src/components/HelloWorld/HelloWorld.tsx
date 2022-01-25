import React from 'react';
import { HelloWorldProps } from './HelloWorldProps';

export default function HelloWorld ({ name = 'John Doe' }: HelloWorldProps) {
    return <h1>Hello World from { name }</h1>;
}