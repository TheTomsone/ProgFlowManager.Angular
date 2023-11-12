import { ActionFunction } from "./action-function";
import { BaseModel } from "./base-model";

export class Button extends BaseModel
{
    isActive: boolean;
    isDisable: boolean;
    isHovered: boolean;
    action?: ActionFunction<any[]>;

    constructor(title: string,
                action?: ActionFunction<any[]>,
                elements?: Button[],
                isActive: boolean = false,
                isDisable = false)
    {
        super(title, elements);
        this.isActive = isActive;
        this.isDisable = isDisable;
        this.isHovered = false;
        this.action = action;
    }

    toggleAction(event: Event, ...params: any[])
    {
        event.stopPropagation();
        
        if (this.action) this.action(...params);
        else
        {
            if (this.elements) this.toggleHovered();
        }
    }
    toggleActive(): void { this.isActive = !this.isActive; }
    toggleDisable(): void { this.isDisable = !this.isDisable; }
    toggleHovered(): void { this.isHovered = !this.isHovered; }
}