import React, {useEffect, useState, useCallback} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './app.css';
import api from '../../api/api';
import Card from '../Card/Card.js'


function App() {
    const [cards, setCards]             = useState([])
    const [searchQuery, setSearchQuery] = useState(`Minsk`)
    const [isLoading, setIsLoading] = useState(false) // false тк по умолч никакая загрузка не идет

    const handleRequest                  = useCallback(() => {
        setIsLoading(true)
        api.search({query: searchQuery})
            .then(response => {
                console.log('response:', response)

                const formattedCards = response.results.map(item=>{
                    return {
                        id: item.id,
                        title: item.user.name,
                        subtitle: item.alt_description,
                        picture: item.urls.regular
                    }
                    }
                )

                setCards(formattedCards)
            })
            .finally(()=> setIsLoading(false))

    
         }, [searchQuery])

    useEffect(() => {
        handleRequest()
}, [searchQuery, handleRequest])

// console.log('cards', cards)

    const handleInputChanged = (event) => {
        console.log(event.target.value)
        setSearchQuery(event.target.value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleRequest();
    }

    return (
        <div className="app">
            <div className="app__content" style={{color: 'red'}}>
                Поисковик фоточек. Написал Агеев Дмитрий на REACT !!!
                <form className={'app__search'}
                        onSubmit={handleFormSubmit}
                    >
                    <Input
                        placeholderText123={'введите название, например: Минск'}
                        handleInput12321 = {handleInputChanged}
                    />
                    <Button text456={'поиск'}/>
                </form>
            </div>
            <div className="app__cards">
                {isLoading && (<p>Loading...</p>)}
                {cards.map((item)=> {
                    return (
                        <Card key={item.id} {...item}/>
                    )
                })
                }
            </div>


        </div>
    );
}

export default App;
