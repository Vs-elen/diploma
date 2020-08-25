export default class BaseComponent {
    constructor(handlers = []) {
        this.handlers = handlers;
    }

    setHandlers = () => {
        this.handlers.forEach(handler => this._addHandler(handler));
    }

    _addHandler = ({element, event, callback}) => {
        element.addEventListener(event, callback);
    }
}