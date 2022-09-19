import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">

        <p>
        <h1 className='title'>With Love, From Jack</h1>
        </p>
        <img className='bgme'src={`${process.env.PUBLIC_URL}/photos/videogame.jpg`} alt="vg"/>
        <br />
        <a
          className="App-link"
          href="https://www.tiktok.com/@withlovefromjack?_t=8Vm5OnSsoGI&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok 
        </a>
        <br />
        <a
          className="App-link"
          href="https://www.instagram.com/withlovefromjack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram 
        </a>
        <br />
        <a
          className="App-link"
          href="https://soundcloud.com/jekkiboi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud 
        </a>
        <br/>
        <a
          className="App-link"
          href="https://open.spotify.com/track/4sVUx7LZGNGAUIH99y0CrI?si=8UD7_DHkTYK5IXfctdkjoA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify 
        </a>

    </div>
  );
}

export default App;
