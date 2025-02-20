import React from 'react';
import 'styles/App.css';
import { useCatFact, useCatImage } from './hooks/catFactHooks.js';

const App = () => {
    const {fact,refreshFact } = useCatFact()
    const {image, imageLoaded, threeFirstWords} = useCatImage({fact})

    const handleClick = () => refreshFact()


    return (
        <main className='App'>
            <h1>App de Gatitos</h1>
            <p data-testid='fact'>{fact}</p>
            <div>
                {!imageLoaded && <p>Cargando imagen...</p>}
                {image && <img 
                    src={image} 
                    alt={`Cat saying ${threeFirstWords}`} 
                    title={`Cat saying ${threeFirstWords}`}
                    width='300'
                    className={imageLoaded ? '' : 'hide'}  
                />}
                
            </div>
            <button onClick={handleClick}
            >
                Cambiar
            </button>
        </main>
    );
}

export default App;