export default class NewsCardList {
    
    constructor(container, callbackCard) {
        this._container = container;
        this._callbackCard = callbackCard;
    }
    
    addNewsCard = (...args) => {
        const _instance = this._callbackCard(...args);
        this._container.append(_instance);
    }
}