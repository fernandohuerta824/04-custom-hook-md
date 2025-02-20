import React, { use, useState } from 'react';
import 'styles/App.css';
import { useCatFact, useCatImage } from './hooks/catFactHooks.js';

const App = () => {
    const {fact,refreshFact, factError, factLoaded } = useCatFact()
    const {image, imageLoaded, threeFirstWords, imgError} = useCatImage({fact})
    const hasError = factError || imgError

    const handleClick = () => refreshFact()

    return (
        <main className='App'>
            <h1>App de Gatitos</h1>
            {hasError && <p>{hasError.message}</p>}
            {!hasError && (
            <>
                {factLoaded && <p>{fact}</p>}
                {!factLoaded && <p>Cargando texto...</p>}
                <div>
                    {!imageLoaded && <p>Cargando imagen...</p>}
                    {imageLoaded && <img 
                        src={image} 
                        alt={`Cat saying ${threeFirstWords}`} 
                        title={`Cat saying ${threeFirstWords}`}
                        width='300'
                    />}
                    
                </div>
                <button onClick={handleClick}
                >
                    Cambiar
                </button>
            </>
            )}
        </main>
    );
}

export default App;