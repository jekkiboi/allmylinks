import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img className="bgme" src={`${process.env.PUBLIC_URL}/photos/videogame1.jpg`} alt="vg" />
        <br />
        <div className="App-link">
          
          <a
            className="link-style"
            href="https://ecolacefishnets.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="ecolace">Save $$ on EcoLace </div>
            <div className="ecolace2">[Use code "LoveJack"]</div>
          </a>

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
          <br />
          <a
            className="link-style"
            href="https://open.spotify.com/track/4sVUx7LZGNGAUIH99y0CrI?si=8UD7_DHkTYK5IXfctdkjoA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <br />
          <a
            className="link-style"
            href="https://www.amazon.com/hz/wishlist/ls/2JSIYQSU9N5L6?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Amazon Wishlist
          </a>
          <br />
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
      <br />
          <h1 className='title'>PS: With Love, From Jack</h1>

          <h4 className='title1'>
          Jack Mayer is a multi-disciplined fire performer, model, 
          dancer and songwriter. Her work spans multiple genres 
          of art, entertainment, and graphic design. 
          Jack is available for indoor and outdoor fire performances, 
          photography and video endorsements and advertising.
          </h4>
    </div>
  );
}

export default App;
