export default class GraphDiagram {
    static template = document.querySelector('#graph__diagram-template').content;

    constructor(container, date, percent) {
        this.container = container;
        this.date = date;
        this.percent = percent;

    }

    createGraphBar = () => {
        this.graphBar = GraphDiagram.template.cloneNode(true).children[0];
        this.graphBar.querySelector('.graph__bar-label').textContent = this.date;
        this.graphBar.querySelector('.graph__bar-percent').textContent = this.percent;
        this.graphBar.querySelector('.graph__bar').style.width = `${this.percent}%`;
        return this.graphBar;
    }

    renderGraphBar = () => {
        const instance = this.createGraphBar();
        this.container.append(instance);
    }

}