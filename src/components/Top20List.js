import SongItem from "./SongItem";

const Top20List = ({songs}) => {

    const songsList = songs.map((song, i) => {
        return <SongItem song={song} key={i} />
    });

    return (
        <>
        <h2>Top20 List</h2>
        <ul>
            {songsList}
        </ul>
        </>
    )
}

export default Top20List;