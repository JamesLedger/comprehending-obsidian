import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
    constructor(leaf: WorkspaceLeaf){
        super(leaf);
    }

    getViewType(): string {
        return VIEW_TYPE_EXAMPLE
    }

    getDisplayText(): string {
        return "Entry Analysis";
    }

    async onOpen(){
        const container = this.containerEl.children[1];
        container.empty();
        container.createEl("h2", {text: "Entry Semantic Analysis"});
        container.createEl("h5", {text: "This is the text!"});
    }

    async onClose(){
        // Nothing to tidy up!
    }
}