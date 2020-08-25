export default class Statistics {
    constructor(cards, queries) {
        this._cards = cards;
        this._queries = queries;
    }

    changeData = (title, perWeek, perTitle) => {
        title.textContent = this._queries;
        perWeek.textContent = this._cards.length;
        perTitle.textContent = this._countTitles(this._queries);
        
    }

    _countTitles = (heading) => {
        const _titlesNumber = this._cards.filter(function (card) {

            if (card.title.toLowerCase().includes(heading.toLowerCase())) {
                return card;
            }
        });
        return (_titlesNumber.length);
    }    
}