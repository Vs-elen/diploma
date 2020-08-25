import { showLastWeek } from '../utils/show-last-week-function'
import { setToday } from '../utils/set-today'
import { NEWS_API } from '../constants/constants'


export default class NewsApi {
    constructor() {
        this.apiKey = NEWS_API;
    }


    getNews = (query) => {

        const today = setToday();
        const lastSevenDays = showLastWeek();
        
        return fetch(`https://nomoreparties.co/news/v2/everything?q=${query}&from=${lastSevenDays}&to=${today}&language=ru&pageSize=100&apiKey=${this.apiKey}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } 
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }
}