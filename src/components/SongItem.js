const SongItem = ({song}) => {
    
    return (
        <li className="song">
            <img src={song["im:image"][2].label}/>
            <br/>
            {song.title.label}
            <audio controls
                source src={song.link[1].attributes.href} 
            />
        </li>
    )
};

export default SongItem;