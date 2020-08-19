import { formatDate } from '../utils/format-date';

export default class NewsCard {
    static template = document.querySelector('#results__cards-template').content;

    constructor(url, date, headline, extract, sourceName, webLink) {
        
        this._url = url;
        this._date = date;
        this._headline = headline;
        this._extract = extract;
        this._sourceName = sourceName;
        this._webLink = webLink;
    }

    createNewsCard = () => {
        const _commitDate = formatDate(this.date);

        this._newsCard = NewsCard.template.cloneNode(true).children[0];
       
        this._newsCard.querySelector('.results__card-image').style.backgroundImage = `url(${this._url})`;
        this._newsCard.querySelector('.results__card-date').textContent = _commitDate;
        this._newsCard.querySelector('.results__card-title').textContent = this._headline;
        this._newsCard.querySelector('.results__card-extract').textContent = this._extract;
        this._newsCard.querySelector('.results__card-source').textContent = this._sourceName;
        this._newsCard.querySelector('.results__card-link').setAttribute('href', `${this._webLink}`);

        return this._newsCard;
    }
}