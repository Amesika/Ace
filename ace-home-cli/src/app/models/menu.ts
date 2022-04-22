export class Menu {
    icon: string;
    title: string;
    linkActive: string;
    link?: string[];
    href?: string;
    subMenus: Menu[];

    constructor() {
        this.icon = "";
        this.title = "";
        this.linkActive = "";
        this.subMenus = [];
    }
    
}