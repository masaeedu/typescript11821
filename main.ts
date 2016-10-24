interface Node {
    parent: Node;
}

function shouldNodeBeConsidered1(ruleKey: string, node: Node): boolean {
    for (let current: Node | undefined = node; current !== undefined; current = current.parent) { // works
    }

    return false;
}

function shouldNodeBeConsidered2(ruleKey: string, node: Node): boolean {
    for (
        let current: Node | undefined = node;
        current !== undefined;
        current = current.parent // <-- [ts] Object is possibly 'undefined'.
                                 //          let current: ts.Node | undefined

     ) {
        if (shouldNodeBeConsidered2(ruleKey, current)) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}
