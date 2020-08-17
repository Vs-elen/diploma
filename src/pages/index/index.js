import './index.css';
import SearchInput from '../../js/components/SearchInput';
import NewsCard from '../../js/components/NewsCard';
import NewsCardList from '../../js/components/NewsCardList';
import NewsApi from '../../js/modules/NewsApi';
import DataStorage from '../../js/modules/DataStorage';
import ValidateForm from '../../js/utils/validate-form';
import {
    changeErrorText
} from '../../js/utils/change-error-text'

import {
    INITIAL_CONTAINER
} from '../../js/constants/constants';

const searchButton = document.querySelector('.search__section-button');
const newsCardContainer = document.querySelector('.results__cards');
const searchSectionInput = document.querySelector('.search__section-input');
const searchForm = document.querySelector('.search__section-form');
const showMoreButton = document.querySelector('.results__button');
const resultsBlock = document.querySelector('.results');
const preloaderBlock = document.querySelector('.preloader');
const failedBlock = document.querySelector('.failed');



const newsApi = new NewsApi();
const validateForm = new ValidateForm(searchSectionInput, searchForm, searchButton);

const searchInput = new SearchInput(sendQueryCallback);
const dataStorage = new DataStorage('cards');
const dataStorageQuery = new DataStorage('queries');

function createNewsCard(...args) {
    const newsCard = new NewsCard(...args);
    return newsCard.createNewsCard();
}

const newsCardList = new NewsCardList(newsCardContainer, createNewsCard, showMoreButton,);

function showNewsCards(item) {
    newsCardList.addNewsCard(item.urlToImage, item.publishedAt, item.title, item.description, item.source.name, item.url);
}


let curSize = 0;
failedBlock.style.display = 'none';

function sendQueryCallback(event) {
    event.preventDefault();
    newsCardContainer.innerHTML = '';
    preloaderBlock.classList.remove("preloader_style_hidden");
    failedBlock.style.display = 'none';


    newsApi.getNews(searchSectionInput.value)
        .then((res) => {
            console.log(res.articles)
            if (res.articles.length === 0) {
                failedBlock.style.display = 'flex';
                preloaderBlock.classList.add("preloader_style_hidden");
                validateForm.setSubmitButtonState(false);
            } else {

                localStorage.clear();
                dataStorage.putCards(res.articles);
                dataStorageQuery.putCards(searchSectionInput.value);
                validateForm.setSubmitButtonState(false);
                failedBlock.style.display = 'none';
                preloaderBlock.classList.add("preloader_style_hidden");


                curSize = 0;
                showMore();
            }







        })
        .catch((err) => {
            changeErrorText();
            preloaderBlock.classList.add("preloader_style_hidden");
            failedBlock.style.display = 'flex';
            console.log(err);
        });;


}



function showMore() {
    const someArray = dataStorage.getCards();
    if (someArray === null) {
        resultsBlock.style.display = 'none';
    } else {


        resultsBlock.style.display = 'flex';
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
}



searchSectionInput.value = dataStorageQuery.getCards();
showMore();

showMoreButton.addEventListener('click', showMore)



validateForm.setSubmitButtonState(false);