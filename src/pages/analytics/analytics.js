import './analytics.css';
import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';
import GraphDiagram from '../../js/utils/GraphDiagram';

import { formatDateForGraph } from '../../js/utils/format-date';
import { getMonth } from '../../js/utils/get-month';
import { sortArrayByDate } from '../../js/utils/sort-array-by-date';
import {
    SAME_DATE_CARD,
    ONE_HUNDRED_PERCENT
} from '../../js/constants/constants';



const statisticsQuery = document.querySelector('.statistics__query');
const statisticsPerWeek = document.querySelector('.statistics__info_week');
const statisticsPerTitles = document.querySelector('.statistics__info_titles');
const currentMonth = document.querySelector('.graph__heading-month');
const graphContainer = document.querySelector('.graph__diagram');


const statisticsQueryStorage = new DataStorage('queries');
const statisticsCardsStorage = new DataStorage('cards');


const statisticsCards = statisticsCardsStorage.getCards();
const statisticsCardsQueries = statisticsQueryStorage.getCards();

const statistics = new Statistics(statisticsCards, statisticsCardsQueries)

statistics.changeData(statisticsQuery, statisticsPerWeek, statisticsPerTitles);

getMonth(statisticsCards, currentMonth);
sortArrayByDate(statisticsCards);

let datesArray = {};

function getDate() {
    statisticsCards.forEach((card) => {
        const currentDate = formatDateForGraph(card.publishedAt);
        if (currentDate in datesArray) {
            datesArray[currentDate] = datesArray[currentDate] + SAME_DATE_CARD;
        } else {
            datesArray[currentDate] = SAME_DATE_CARD;
        }
    });
    for (let percentage in datesArray) {
        datesArray[percentage] = Math.round(datesArray[percentage] / statisticsCards.length * ONE_HUNDRED_PERCENT);
    }
    return (datesArray)

}

getDate()


function renderBar() {
    for (let key in datesArray) {
        const graphDiagram = new GraphDiagram(graphContainer, key, datesArray[key]);
        graphDiagram.renderGraphBar()
    }
}

renderBar()
