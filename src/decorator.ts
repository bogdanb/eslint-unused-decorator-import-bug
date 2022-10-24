export function Decorator<T, C extends new (...args) => T>(
    name: string
): (Constructor: C) => void {
    return (Constructor: C) => {
        console.log("Should decorate:", Constructor, "with name:", name)
    };
}
