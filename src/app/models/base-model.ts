export abstract class BaseModel
{
    title: string;
    parent?: any;
    elements?: any[];

    constructor(title: string, models?: any[])
    {
        this.title = title;
        this.elements = models;

        if (this.elements)
            for (let child of this.elements)
                child.parent = this;
    }
}