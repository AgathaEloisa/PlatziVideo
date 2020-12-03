import React from 'react';

/* Styles */
import '../assets/styles/App.scss';

/* Components */
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const App = () => (
    <div className="App">
        <Header />
        <Search />

        <Categories title="Seguir viendo">
            <Carousel>
                <CarouselItem />  
                <CarouselItem />  
                <CarouselItem />  
            </Carousel>    
        </Categories> 

        <Categories title="Mi lista">
            <Carousel>
                <CarouselItem />  
                <CarouselItem />  
                <CarouselItem />  
            </Carousel>    
        </Categories> 

        <Categories title="Populares">
            <Carousel>
                <CarouselItem />  
                <CarouselItem />  
                <CarouselItem />  
            </Carousel>    
        </Categories> 

        <Footer />      
    </div>
)

export default App;