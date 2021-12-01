const SongItem = ({song}) => {
    
    return (
        <li>
            <img src={song["im:image"][2].label}/>
            <br/>
            {song.title.label}
        </li>
    )
};

export default SongItem;