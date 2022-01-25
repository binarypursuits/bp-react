import React from 'react';
import { HelloWorldProps } from './HelloWorldProps';

export default function HelloWorld ({ name }: HelloWorldProps) {
    return <h1>Hello World from { name }</h1>;
}