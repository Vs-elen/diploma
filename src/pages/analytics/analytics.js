import './analytics.css';
import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';
import GraphDiagram from '../../js/utils/GraphDiagram';

import { formatDateForGraph } from '../../js/utils/format-date';



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



function getMonth() {
    statisticsCards.forEach(card => {
        const thisMonth = new Date(card.publishedAt).toLocaleString('ru', { month: 'long' });
        currentMonth.textContent = `(${thisMonth.toUpperCase()})`;
    });
}

getMonth()

let dateArray = {};

function getDate() {
    statisticsCards.forEach((card) => {
        const thisDate = formatDateForGraph(card.publishedAt);
        if (thisDate in dateArray) {
            dateArray[thisDate] = dateArray[thisDate] + 1
        } else {
            dateArray[thisDate] = 1
        }
    });
    for (let percentage in dateArray) {
        dateArray[percentage] = Math.round(dateArray[percentage] / statisticsCards.length * 100)

    }
    return (dateArray)

}


getDate()


function renderBar() {
    for (let key in dateArray) {
        const graphDiagram = new GraphDiagram(graphContainer, key, dateArray[key]);
        graphDiagram.renderGraphBar()
    }
}

renderBar()
