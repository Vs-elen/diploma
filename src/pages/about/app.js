this.commitCard.querySelector('.swiper-slide__content-date').textContent = this.date;
this.commitCard.querySelector('.swiper-slide__content-name').textContent = this.name;
this.commitCard.querySelector('.swiper-slide__content-mail').textContent = this.mail;
this.commitCard.querySelector('.swiper-slide__content-info').textContent = this.info;

https://newsapi.org/v2/everything?q=${this.query}&from=${lastSevenDays}&to=${today}&language=ru&pageSize=100&apiKey=${this.apiKey}

render = (array) => {
    array.forEach(item => {   
        const instance = this.callbackCard(item.publishedAt, item.title, item.description, item.source.name);
        this.container.append(instance);   
        
        
    })  
  }

  addNewsCard = (picture, date, headline, extract, sourceName) => {
    const instance = this.callbackCard(picture, date, headline, extract, sourceName);
    this.container.append(instance);
}

if (fullArray.length !== 0) {
  alert(fullArray.length);
  console.log(fullArray)

              // console.log(dataStorage.putCards(res.articles))
            // function renderCards() {
            //     const fullArray = res.articles;
            //     const removedCards = getThreeCards(fullArray)


            //     if (fullArray.length !== 0) {

            //         removedCards.forEach(item => {
            //             showNewsCards(item)
            //         });
            //     } else {
            //         showMoreButton.hidden = true;
            //     }
            //     return fullArray;
            // }
            import './index.css';
            import SearchInput from '../../js/components/SearchInput';
            import NewsCard from '../../js/components/NewsCard';
            import NewsCardList from '../../js/components/NewsCardList';
            import NewsApi from '../../js/modules/NewsApi';
            import DataStorage from '../../js/modules/DataStorage';
            import ValidateForm from '../../js/utils/validate-form';
            
            const searchButton = document.querySelector('.search__section-button');
            const newsCardContainer = document.querySelector('.results__cards');
            const searchSectionInput = document.querySelector('.search__section-input');
            const searchForm = document.querySelector('.search__section-form');
            const showMoreButton = document.querySelector('.results__button');
            
            
            
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
            
            function getThreeCards(array) {
                const newArray = array.splice(0, 3)
                return newArray;
            }
            
            
            
            
            
            
            function sendQueryCallback(event) {
                event.preventDefault();
                newsCardContainer.innerHTML = '';
                //let storedCards = [];
                newsApi.getNews(searchSectionInput.value)
                    .then((res) => {
                      
                      dataStorage.putCards(res.articles);
            const newArr = dataStorage.getCards();
            let copyArr = [];
            copyArr = newArr.slice();
                      //  console.log(copyArr)
                        // storedCards = res.articles;
                        // console.log(storedCards)
                        let threeToShow = getThreeCards(copyArr);
                        threeToShow.forEach((item) => {
                            showNewsCards(item);
                        })
                        // console.log(storedCards)
            // storedCards = dataStorage.getCards();
            // getThreeCards(storedCards)
            //             //renderCards(storedCards)
            //             // console.log(cutArray)
            //             console.log(storedCards)
                        showMoreButton.addEventListener('click', function () {
                            
                            renderCards(copyArr)
                            // console.log(storedCards)
                        });
            
                        // storedCards = []
            
                        // if (fullArray.length > 3) {
                        //     alert('Больше')
                        //     alert(fullArray.length)
                        //     showMoreButton.hidden = false;
                        // } else {
                        //     alert('кефир')
                        //     alert(fullArray.length)
                        //     showMoreButton.hidden = true;
                        // }
                        // console.log(renderCards(fullArray))
            
                    })
                .then (() => {
                    localStorage.clear();
                })   
            //     storedCards = dataStorage.getCards();
            // getThreeCards(storedCards)
            //             //renderCards(storedCards)
            //             // console.log(cutArray)
            //             console.log(storedCards)
            //             showMoreButton.addEventListener('click', function () {
                            
            //                 renderCards(storedCards)
            //                 console.log(storedCards)
            //             });
            
            
            }
            
            
            // function pressed () {
            // if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
            //     alert('reload')
            // }}
            
            // pressed()
            
            // function storageCallback (event) {
            //     event.preventDefault();
            //     let storedCards = dataStorage.getCards()
            //     console.log(storedCards)
            // }
            
            // let storedCards = dataStorage.getCards()
            // console.log(storedCards)
            // let threeToShow = getThreeCards(storedCards);
            //              console.log(threeToShow)
            //             threeToShow.forEach((item) => {
            //                 showNewsCards(item); })
            // const showC = renderCards(storedCards);
            // console.log(showC)
            
            // showMoreButton.addEventListener('click', function () {
            // renderCards(storedCards)
            // // console.log(storedCards)
            // });
            
            
            // function renderCards(array) {
            
            
            //     //console.log(array)
            
            
            //     // console.log(array)
            
            //     const removedCards = getThreeCards(array)
            //     removedCards.forEach(item => {
            //         showNewsCards(item)
            //     });
            
            //     // if (array.length < 3) {
            //     //     showMoreButton.hidden = true;
            //     // }
            //     console.log(array); 
            //     // return array
            // }
            
            // function showMore () {    
            //         renderCards(fullArray)
            // }
            
            //showMore();
            