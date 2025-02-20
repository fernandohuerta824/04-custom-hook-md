import { getFact, getImageFact } from './../services/facts.js';
import React, { useEffect, useCallback, useMemo } from 'react'

export function useCatImage ({fact}) {
    const [image, setImage] = React.useState(null);
    const [imageLoaded, setImageLoaded] = React.useState(false)

    
    const threeFirstWords = useMemo(() => fact.split(' ', 3).join(' '), [fact])

    const handleImage = useCallback(async () => {
        if(!fact) 
            return

        console.log('getting image')
        setImageLoaded(false)
        const url = await getImageFact(threeFirstWords)
        setImageLoaded(true)
        setImage(url)
    }, [threeFirstWords])

    
    useEffect(() => {
        handleImage()
    }, [handleImage]);
    
    return {image, imageLoaded, threeFirstWords}
}

export function useCatFact () {
    const [fact, setFact] = React.useState('');

    const refreshFact = async () => {
        const fact = await getFact()
        setFact(fact)
    }

    useEffect(() => { 
        refreshFact()
    }, []);

    return {fact,refreshFact}
}
