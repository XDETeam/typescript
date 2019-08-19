import { Node } from "typescript";

// TODO: It would be cool to organize transformation in a tree. Because
// AsExpression can be used by many castings to different types. For example:
// TODO: Just make an extensions over MayBe monad?
// TODO: It would be also good to pass some state through the flow.
export class Visitor<T extends Node> {
    private constructor(private value: T | undefined) {}
    
    static of<R extends Node>(value: R): Visitor<R> {
        return new Visitor(value);
    }

    static none<R extends Node>(): Visitor<R> {
        return new Visitor<R>(undefined);
    }
    
    static ofType<R extends Node>(
        value: Node,
        validate: (node: Node) => node is R
    ): Visitor<R> {
        if (validate(value)) {
            return new Visitor(value);
        }

        return Visitor.none();
    }

    is<R extends Node>(
        map: (node: T) => Node | undefined,
        validate: (node: Node) => node is R
    ): Visitor<R> {
        if (this.value) {
            const mapped = map(this.value);
            if (mapped && validate(mapped)) {
                return Visitor.of<R>(mapped);
            }
        }

        return Visitor.none<R>();        
    }

    when(validate: (node: T) => boolean): Visitor<T> {
        if (this.value && validate(this.value)) {
            return this;
        }

        return Visitor.none<T>();        
    }

    do(job: (node: T) => void): Visitor<T> {
        if (this.value) {
            job(this.value);
        }

        return this;
    }
}
