import { ActionFunction } from "./action-function";
import { Button } from "./button";

export class Link extends Button
{
    url?: string;

    constructor(title: string,
                action?: ActionFunction<any[]>,
                url?: string, elements?: Link[],
                isActive: boolean = false,
                isDisable: boolean = false)
    {
        super(title, action, elements, isActive, isDisable);
        this.url = url;
    }
}