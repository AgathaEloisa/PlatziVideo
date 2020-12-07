import React, { useState, useEffect } from 'react';

/* Styles */
import '../assets/styles/App.scss';

/* Components */
import Header from '../components/Header';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';

const App = () => {
    const[ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch('http://localhost:3000/initalState')
        .then(response => response.json())
        .then(data => setVideos(data));
    }, []);

    return(
        <div className="App">
            <Header />
            <Search />

            {videos.mylist.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />  
                        <CarouselItem />  
                        <CarouselItem />  
                    </Carousel>    
                </Categories> 
            }

            <Categories title="Tendencias">
                <Carousel>
                    {videos.trends.map(item =>
                        <CarouselItem key={item.id} {...item} /> 
                    )} 
                </Carousel>    
            </Categories> 

            <Footer />      
        </div>
    )
};

export default App;