import './index.css';
import SearchInput from '../../js/components/SearchInput';
import NewsCard from '../../js/components/NewsCard';
import NewsCardList from '../../js/components/NewsCardList';
import NewsApi from '../../js/modules/NewsApi';
import DataStorage from '../../js/modules/DataStorage';
import ValidateForm from '../../js/utils/ValidateForm';
import { changeErrorText } from '../../js/utils/change-error-text'
import {
    INITIAL_CONTAINER,
    CURRENT_SIZE
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


const searchInput = new SearchInput([
    {
        element: searchForm,
        event: 'submit',
        callback: sendQueryCallback
    }
]);

searchInput.setHandlers();


const dataStorage = new DataStorage('cards');
const dataStorageQuery = new DataStorage('queries');

function createNewsCard(...args) {
    const newsCard = new NewsCard(...args);
    return newsCard.createNewsCard();
}

const newsCardList = new NewsCardList(newsCardContainer, createNewsCard);

function showNewsCards(item) {
    newsCardList.addNewsCard(item.urlToImage, item.publishedAt, item.title, item.description, item.source.name, item.url);
}



let CURRENT_CONTAINER_SIZE = CURRENT_SIZE;
failedBlock.style.display = 'none';

function sendQueryCallback(event) {
    event.preventDefault();
    newsCardContainer.innerHTML = '';
    preloaderBlock.classList.remove("preloader_style_hidden");
    failedBlock.style.display = 'none';

    newsApi.getNews(searchSectionInput.value)
        .then((res) => {
            if (res.articles.length === 0) {
                failedBlock.style.display = 'flex';
                resultsBlock.style.display = 'none';
                preloaderBlock.classList.add("preloader_style_hidden");
                validateForm.setSubmitButtonState(false);
            }
            else {
                dataStorage.clearStorage();
                dataStorage.putCards(res.articles);
                dataStorageQuery.putCards(searchSectionInput.value);
                validateForm.setSubmitButtonState(false);
                failedBlock.style.display = 'none';
                preloaderBlock.classList.add("preloader_style_hidden");
                CURRENT_CONTAINER_SIZE = CURRENT_SIZE;
                showMore();
            }
        })
        .catch((err) => {
            changeErrorText();
            preloaderBlock.classList.add("preloader_style_hidden");
            failedBlock.style.display = 'flex';
            console.log(err);
        });
}



function showMore() {
    const cardsFromStorage = dataStorage.getCards();
    if (cardsFromStorage === null) {
        resultsBlock.style.display = 'none';
    } else {
        resultsBlock.style.display = 'flex';
        const list = cardsFromStorage.slice(CURRENT_CONTAINER_SIZE, CURRENT_CONTAINER_SIZE + INITIAL_CONTAINER);
        list.map((item) => {
            showNewsCards(item)
        });
        CURRENT_CONTAINER_SIZE += INITIAL_CONTAINER;
        if (cardsFromStorage.length <= CURRENT_CONTAINER_SIZE) {
            showMoreButton.hidden = true;
        } else {
            showMoreButton.hidden = false;
        }
    }
}



searchSectionInput.value = dataStorageQuery.getCards();
showMore();
showMoreButton.addEventListener('click', showMore);
validateForm.setSubmitButtonState(false);