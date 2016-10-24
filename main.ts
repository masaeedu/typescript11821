interface Node {
    parent: Node | undefined;
}

// Works
function f(node: Node): boolean {
    for (let current: Node | undefined = node; current !== undefined; current = current.parent) {
    }
    return false;
}

// (14, 81): Object is possibly 'undefined'
function f2(node: Node): boolean {
    for (let current: Node | undefined = node; current !== undefined; current = current.parent) {
        return true;
    }
    return false;
}

// (22, 81): Object is possibly 'undefined'
function f3(node: Node): boolean {
    for (let current: Node | undefined = node; current !== undefined; current = current.parent) {
        continue;
    }
    return false;
}

// (30, 81): Object is possibly 'undefined'
function f4(node: Node): boolean {
    for (let current: Node | undefined = node; current !== undefined; current = current.parent) {
        break;
    }
    return false;
}
