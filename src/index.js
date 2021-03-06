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
    if (evt.target.value === '') {
      this.setState({ songs: [] })
    };
  }

  searchQuery = (query) => {
    const queryUrl = 'https://itunes.apple.com/search?media=music&limit=5&term=' + query;
    jsonp(queryUrl, null, (err, data) => {
      if (err) {
        console.log("error");
      } else {
        this.setState({ songs: data.results });
        console.log(data.results);
      }

    });
  }

  selectSong = (song) => {

    this.setState({ playSong: song });
  }

  hearSong = () => {
    if (this.state.playSong) {
      return (<div>
        <ReactAudioPlayer
          src={this.state.playSong.previewUrl}
          autoPlay
          controls
        />
      </div>
      );
    }
    return (<div style={{ fontSize: "20px" }}><p>If music be the food of love, play on..</p></div>)
  }
  render() {
    const songs = this.state.songs.map(song =>
      <div onClick={this.selectSong.bind(this, song)} key={song.trackId} style={{ width: '300px', height: '350px', margin: '10px', background: '#F78DA7', textAlign: "center", display: "inline-block", border: "1px solid black" }}><p>Song: {song.trackName}</p>
        <img src={song.artworkUrl100} alt="Album cover" />
        <p>Artist: {song.artistName}</p>
        <p>Album: {song.collectionName}</p>
      </div>);
    return (

      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", background: "#bf4d69", color: "white" }}>Sing-a-long</h1>

        {this.hearSong()}

        <div>
          <input style={{ width: "400px", height: "80px", borderRadius: "20px", border: "1px solid black", fontSize: " 24px", textAlign: "center" }} type="text" onChange={this.searchHandler} placeholder="Pick a song, singer or album"
          />
        </div>

        <div>
          <p style={{ fontSize: "20px" }}>Click on any block to hear a short bit</p>
        </div>
        {songs}
      </div>


    );
  }
}

render(<App />, document.getElementById('root'));
