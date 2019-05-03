import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import jsonp from 'jsonp';
import ReactAudioPlayer from 'react-audio-player';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      name: 'React',
      playSong: null
         
    };
  }

  searchHandler = (evt) => { 
    this.searchQuery(evt.target.value);
    
  }

  searchQuery= (query) =>   {
    const queryUrl = 'https://itunes.apple.com/search?media=music&limit=5&term=' + query;  
  jsonp(queryUrl, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({songs: data.results});
        console.log(data.results)   }
    });
  }

selectSong =(song) => {
  this.setState({playSong: song});
  console.log(song)
}

hearSong = () => {
  if (this.state.playSong) {
      console.log("new song");
      console.log(this.state.playSong);
      return ( <div>
                <ReactAudioPlayer
                  src={this.state.playSong.previewUrl}
                  autoPlay
                  controls
                />
          </div>
      );
    }
    // return (<div> Pick a song, singer or album to play! </div>);
}
 

  render() {
    const songs = this.state.songs.map(song => 
    <div onClick={this.selectSong.bind(this,song)} style={{ width: '200px', background: 'yellow', textAlign: "center" }}><p>Song: {song.trackName}</p>
          <img src={song.artworkUrl100}/>
          <p>Artist: {song.artistName}</p>
          <p>Album: {song.collectionName}</p>
    
    </div>);

    return (
      
     
      <div>
      <h1 style={{ textAlign: "center" }}>Sing-a-long</h1>
       <input type="text" onChange={this.searchHandler}
        />
        {this.hearSong()}
       {songs}
      
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
