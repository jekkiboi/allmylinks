import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className='title'>With Love, From Jack</h1>
        <div className='container'>
        <img className="bgme" src={`${process.env.PUBLIC_URL}/photos/videogame.jpg`} alt="vg"/>
        <br />
        <div className="App-link">
        <a
          className="link-style"
          href="https://www.tiktok.com/@withlovefromjack?_t=8Vm5OnSsoGI&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok 
        </a>
        <br />
        <a
          className="link-style"
          href="https://www.youtube.com/channel/UCyAd-4_iUDpUgX3OiGuEbFQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube 
        </a>
        <br />
        <a
          className="link-style"
          href="https://soundcloud.com/jekkiboi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soundcloud 
        </a>
        <br/>
        <a
          className="link-style"
          href="https://open.spotify.com/track/4sVUx7LZGNGAUIH99y0CrI?si=8UD7_DHkTYK5IXfctdkjoA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify 
        </a>
        <br/>
        <a
          className="link-style"
          href="https://www.instagram.com/withlovefromjack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram 
        </a>
        </div>
        </div>
    </div>
  );
}

export default App;
