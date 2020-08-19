export default class CommitCardList { 

constructor(container, callbackCard) {
    this._container = container;
    this._callbackCard = callbackCard;
}

addCommitCard = (date, name, mail, info, link) => {
    const _instance = this._callbackCard(date, name, mail, info, link);
    this._container.append(_instance);
}
}