import './App.css';
import ig from "./images/ig.svg"
import kick from "./images/kick.png"
import substack from "./images/substack.png"
import twitch from "./images/twitch.png"
import twitter from "./images/twitter.svg"
import newTwitter from "./images/twitter-x-logo-101C7D2420-seeklogo.com.png"
import youtube from "./images/youtube.svg"

function App() {
    return (
        <div style={{display: "flex", justifyContent: "flex-end", margin: 18}}>
            <div style={{display: "flex", flexDirection:"column", alignItems: "center",}}>
                <div style={{display: "flex", alignItems: "center"}}>
                    <img style={{height: 35, margin: 4}} src={newTwitter}/>
                    <img style={{height: 35, margin: 4}} src={ig}/>
                    <img style={{height: 35, margin: 4}} src={youtube}/>
                    <img style={{height: 35, margin: 4}} src={twitch}/>
                    <img style={{height: 35, margin: 4}} src={kick}/>
                    <img style={{height: 35, margin: 4}} src={substack}/>
                </div>
                <p className="handle">@quixoticodyssey</p>
            </div>
        </div>
    );
}

export default App;
