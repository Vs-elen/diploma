import { formatDate } from '../utils/format-date';

export default class NewsCard {
    static template = document.querySelector('#results__cards-template').content;

    constructor(url, date, headline, extract, sourceName, webLink) {
        
        this.url = url;
        this.date = date;
        this.headline = headline;
        this.extract = extract;
        this.sourceName = sourceName;
        this.webLink = webLink;
    }

    createNewsCard = () => {
        const commitDate = formatDate(this.date);

        this.newsCard = NewsCard.template.cloneNode(true).children[0];
       
        this.newsCard.querySelector('.results__card-image').style.backgroundImage = `url(${this.url})`;
        this.newsCard.querySelector('.results__card-date').textContent = commitDate;
        this.newsCard.querySelector('.results__card-title').textContent = this.headline;
        this.newsCard.querySelector('.results__card-extract').textContent = this.extract;
        this.newsCard.querySelector('.results__card-source').textContent = this.sourceName;
        this.newsCard.querySelector('.results__card-link').setAttribute('href', `${this.webLink}`);

        return this.newsCard;
    }
}