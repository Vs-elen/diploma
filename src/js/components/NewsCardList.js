export default class NewsCardList {
    
    constructor(container, callbackCard, button) {
        this.container = container;
        this.callbackCard = callbackCard;
        this.button = button;     
    }
    
    addNewsCard = (...args) => {
        const instance = this.callbackCard(...args);
        this.container.append(instance);
    }


   
}