import React from 'react';
/* Components */
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';

/* Styles */
import '../assets/styles/App.scss';

const App = () => (
    <div className="App">
        <Header/>
        <Search/>

        <Categories>
            <Carousel>
                <CarouselItem />  
                <CarouselItem />  
                <CarouselItem />  
            </Carousel>    
        </Categories>       
    </div>
)

export default App;