const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact';

const CAT_ENPOINT_IMAGE = firtsWord => `https://cataas.com/cat/says/${firtsWord}`;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * 
 * @returns {Promise<String>}
 */
let i = 0
export const getFact = async () => {

    const response = await fetch(CAT_ENDPOINT_FACT)

    const { fact } = await response.json()

    i++
    console.log(i)
    return fact
}


export const getImageFact = async fact => {
    if(i == 2) {
        await sleep(2000)
        throw new Error('Algo salio mal en el fact')
    }
    const response = await fetch(CAT_ENPOINT_IMAGE(fact))

    const data = await response.blob()

    const url = URL.createObjectURL(data)

    return url
}
