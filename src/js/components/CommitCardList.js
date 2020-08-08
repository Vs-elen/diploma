export default class CommitCardList { 

constructor(container, callbackCard) {
    this.container = container;
    this.callbackCard = callbackCard;
}

addCommitCard = (date, name, mail, info, link) => {
    const instance = this.callbackCard(date, name, mail, info, link);
    this.container.append(instance);
}
}