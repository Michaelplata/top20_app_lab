import React, {useState, useEffect} from 'react'; 
import Top20List from '../components/Top20List';


const Top20 = ({genres}) => {
    const [songs, setSongs] = useState([]);

    useEffect(() =>{
        getSongs();

    }, [])

    const getSongs = () => {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
        
    }


    return (
        <>
        <h1>Itunes UK Top20</h1>
        <Top20List songs={songs} />
        </>
    )
}

export default Top20;