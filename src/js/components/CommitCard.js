import { formatDate } from '../utils/format-date';

export default class CommitCard {
    static template = document.querySelector('#swiper-slide__template').content;

    constructor(date, name, mail, info, link) {
        this._date = date;
        this._name = name;
        this._mail = mail;
        this._info = info;
        this._link = link;

    }

    create = () => {
        const _commitDate = formatDate(this._date);


        this._commitCard = CommitCard.template.cloneNode(true).children[0];
        this._commitCard.querySelector('.swiper-slide__content-date').textContent = _commitDate;
        this._commitCard.querySelector('.swiper-slide__content-name').textContent = this._name;
        this._commitCard.querySelector('.swiper-slide__content-mail').textContent = this._mail;
        this._commitCard.querySelector('.swiper-slide__content-info').textContent = this._info;
        this._commitCard.querySelector('.swiper-slide__content-photo').setAttribute('src', this._link);
        
        return this._commitCard;
    }

}