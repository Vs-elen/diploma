import { formatDate } from '../utils/format-date';

export default class CommitCard {
    static template = document.querySelector('#swiper-slide__template').content;

    constructor(date, name, mail, info, link) {
        this.date = date;
        this.name = name;
        this.mail = mail;
        this.info = info;
        this.link = link;

    }

    create = () => {
        const commitDate = formatDate(this.date);


        this.commitCard = CommitCard.template.cloneNode(true).children[0];
        this.commitCard.querySelector('.swiper-slide__content-date').textContent = commitDate;
        this.commitCard.querySelector('.swiper-slide__content-name').textContent = this.name;
        this.commitCard.querySelector('.swiper-slide__content-mail').textContent = this.mail;
        this.commitCard.querySelector('.swiper-slide__content-info').textContent = this.info;
        this.commitCard.querySelector('.swiper-slide__content-photo').setAttribute('src', this.link);
        
        return this.commitCard;
    }

}