import logo from './logo.svg';
import './App.css';
import Top20 from './containers/Top20';

function App() {

  const genres = [
    {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
    {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
    {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
    {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
  ]

  return (
    <div>
      <Top20 genres={genres} />
    </div>
  );
}

export default App;
