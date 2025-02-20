const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

const CAT_ENPOINT_IMAGE = firtsWord => `https://cataas.com/cat/says/${firtsWord}`;

/**
 * 
 * @returns {Promise<String>}
 */
export const getFact = async () => {
    const response = await fetch(CAT_ENDPOINT_FACT)

    const { fact } = await response.json()

    return fact
}


export const getImageFact = async fact => {

    const response = await fetch(CAT_ENPOINT_IMAGE(fact))

    const data = await response.blob()

    const url = URL.createObjectURL(data)

    return url
}
