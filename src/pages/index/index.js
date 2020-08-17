import './index.css';
import SearchInput from '../../js/components/SearchInput';
import NewsCard from '../../js/components/NewsCard';
import NewsCardList from '../../js/components/NewsCardList';
import NewsApi from '../../js/modules/NewsApi';
import DataStorage from '../../js/modules/DataStorage';
import ValidateForm from '../../js/utils/validate-form';

import {INITIAL_CONTAINER} from '../../js/constants/constants';

const searchButton = document.querySelector('.search__section-button');
const newsCardContainer = document.querySelector('.results__cards');
const searchSectionInput = document.querySelector('.search__section-input');
const searchForm = document.querySelector('.search__section-form');
const showMoreButton = document.querySelector('.results__button');
const resultsBlock = document.querySelector('.results');



const newsApi = new NewsApi();
const validateForm = new ValidateForm(searchSectionInput, searchForm, searchButton);

const searchInput = new SearchInput(sendQueryCallback);
const dataStorage = new DataStorage('cards');

function createNewsCard(...args) {
    const newsCard = new NewsCard(...args);
    return newsCard.createNewsCard();
}

const newsCardList = new NewsCardList(newsCardContainer, createNewsCard, showMoreButton,);

function showNewsCards(item) {
    newsCardList.addNewsCard(item.urlToImage, item.publishedAt, item.title, item.description, item.source.name);
}


let curSize = 0;

function sendQueryCallback(event) {
    event.preventDefault();
    newsCardContainer.innerHTML = '';
    localStorage.clear();

    newsApi.getNews(searchSectionInput.value)
        .then((res) => {
            localStorage.clear();
            dataStorage.putCards(res.articles);
            
            curSize = 0;
            showMore();







        })


}


showMore()

function showMore() {
    const someArray = dataStorage.getCards();
    const list = someArray.slice(curSize, curSize + INITIAL_CONTAINER);
    list.map((item) => {
        showNewsCards(item)
    })

    curSize += INITIAL_CONTAINER;
    
    if (someArray.length <= curSize) {
        showMoreButton.hidden = true;
    } else {
        showMoreButton.hidden = false;
    }
}



showMoreButton.addEventListener('click', showMore)


validateForm.setSubmitButtonState();



