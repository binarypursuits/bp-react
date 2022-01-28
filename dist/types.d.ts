interface HelloWorldProps {
    name?: string;
}
export function HelloWorld({ name }: HelloWorldProps): JSX.Element;
export class HelloWorldWc extends HTMLElement {
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    render(): void;
    get name(): string;
    set name(value: string);
}

//# sourceMappingURL=types.d.ts.map
