import { getFact, getImageFact } from './../services/facts.js';
import React, { useEffect, useCallback, useMemo } from 'react'

export function useCatImage ({fact}) {
    const [image, setImage] = React.useState(null);
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const [error, setError] = React.useState(null)

    const threeFirstWords = useMemo(() => fact.split(' ', 3).join(' '), [fact])

    const handleImage = useCallback(async () => {
        if(!threeFirstWords) 
            return
        
        try {
            setImageLoaded(false)
            const url = await getImageFact(threeFirstWords)
            setImage(url)
        } catch (e) {
            setError(e)
            
        } finally {
            setImageLoaded(true)
        }
    }, [threeFirstWords])

    
    useEffect(() => {
        handleImage()
    }, [handleImage]);
    
    return {image, imageLoaded, threeFirstWords, imgError: error}
}

export function useCatFact () {
    const [fact, setFact] = React.useState('');
    const [error, setError] = React.useState(null)
    const [factLoaded, setFactLoaded] = React.useState(false)
    const refreshFact = async () => {
        try {
            setFactLoaded(false)
            const fact = await getFact()
            setFact(fact)
        } catch (e) {
            setError(e)
        } finally {
            setFactLoaded(true)
        }
    }

    useEffect(() => { 
        refreshFact()
    }, []);

    return {
        fact,
        refreshFact, 
        factError: error,
        factLoaded,
    }
}
