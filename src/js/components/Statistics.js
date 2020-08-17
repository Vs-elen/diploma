export default class Statistics {
    constructor(cards, queries) {
        this.storedCards = {};
        this.cards = cards;
        this.queries = queries;
    }

    changeData = (title, perWeek, perTitle) => {
        title.textContent = this.queries;
        perWeek.textContent = this.cards.length;
        perTitle.textContent = this.countTitles(this.queries);
        
    }

    countTitles = (heading) => {
        const titlesNumber = this.cards.filter(function (card) {

            if (card.title.toLowerCase().includes(heading.toLowerCase())) {
                return card;
            }
        });
        return (titlesNumber.length);
    }    
}