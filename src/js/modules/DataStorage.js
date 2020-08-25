export default class DataStorage {
    constructor(keyName) {
        this.keyName = keyName;
    }
    
    putCards = (storageCards) => {
        localStorage.setItem(this.keyName, JSON.stringify(storageCards));
        return storageCards;
    }

    getCards = () => {       
       return JSON.parse(localStorage.getItem(this.keyName));
    }

    clearStorage = () => {
        localStorage.clear();
    }

}