export default class GraphDiagram {
    static template = document.querySelector('#graph__diagram-template').content;

    constructor(container, date, percent) {
        this._container = container;
        this._date = date;
        this._percent = percent;

    }

    _createGraphBar = () => {
        this._graphBar = GraphDiagram.template.cloneNode(true).children[0];
        this._graphBar.querySelector('.graph__bar-label').textContent = this._date;
        this._graphBar.querySelector('.graph__bar-percent').textContent = this._percent;
        this._graphBar.querySelector('.graph__bar').style.width = `${this._percent}%`;
        return this._graphBar;
    }

    renderGraphBar = () => {
        const instance = this._createGraphBar();
        this._container.append(instance);
    }

}