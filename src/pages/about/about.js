import './about.css';
import '../../blocks/swiper/swiper.js';
import CommitCard from '../../js/components/CommitCard';
import CommitCardList from '../../js/components/CommitCardList';
import GithubApi from '../../js/modules/GithubApi';
import { swiper } from '../../blocks/swiper/swiper';

const swiperContainer = document.querySelector('.swiper-wrapper');

function createCommitCard(...args) {
    const commitCard = new CommitCard(...args);
    return commitCard.create();
}

const commitCardList = new CommitCardList(swiperContainer, createCommitCard)
const commitApi = new GithubApi();

commitApi.getCommits()
    .then((res) => {
        res.forEach(item => {
            commitCardList.addCommitCard(item.commit.author.date, item.commit.author.name,
                item.commit.author.email, item.commit.message, item.author.avatar_url);
        });
        swiper.init();
    })
    .catch((err) => {
        console.log(err);
    });