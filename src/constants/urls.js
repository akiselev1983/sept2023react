
const baseURL = 'https://rickandmortyapi.com/api'

const characters = '/character'
const episodes = '/episode'

const urls = {
    characters:{
        byIds:(ids)=>`${characters}/${ids}`
    },
    episodes
}
export {baseURL,urls}