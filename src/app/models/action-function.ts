export interface ActionFunction<T extends any[]> {
    (...params: T): void;
}