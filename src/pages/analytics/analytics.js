import './analytics.css';
import DataStorage from '../../js/modules/DataStorage';
import Statistics from '../../js/components/Statistics';


const statisticsQuery = document.querySelector('.statistics__query');
const statisticsPerWeek = document.querySelector('.statistics__info_week');
const statisticsPerTitles = document.querySelector('.statistics__info_titles');
const currentMonth = document.querySelector('.graph__heading-month');

const statisticsQueryStorage = new DataStorage('queries');
const statisticsCardsStorage = new DataStorage('cards');


const statisticsCards = statisticsCardsStorage.getCards();
const statisticsCardsQueries = statisticsQueryStorage.getCards();

const statistics = new Statistics(statisticsCards, statisticsCardsQueries)


statistics.changeData(statisticsQuery, statisticsPerWeek, statisticsPerTitles);



function getMonth () {
    statisticsCards.forEach(card => {
          const thisMonth = new Date(card.publishedAt).toLocaleString('ru', { month: 'long' });
          currentMonth.textContent = `(${thisMonth.toUpperCase()})`;
      });
  }

  getMonth ()



