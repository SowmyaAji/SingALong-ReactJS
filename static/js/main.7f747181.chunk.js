(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(3),r=n(8),i=n(4),o=n(9),c=n(0),s=n.n(c),u=n(5),m=(n(17),n(6)),p=n.n(m),h=n(7),g=n.n(h),d=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).searchHandler=function(t){e.searchQuery(t.target.value)},e.searchQuery=function(t){var n="https://itunes.apple.com/search?media=music&limit=20&term="+t;return p()(n,null,function(t,n){if(t)return s.a.createElement("div",null,"Sorry something went wrong! Please try something else");e.setState({songs:n.results})}),s.a.createElement("div",null,s.a.createElement("p",null,"Like Hamlet says: Do you think I am easier to be played on than a pipe? Call me what instrument you will.."))},e.selectSong=function(t){e.setState({playSong:t})},e.hearSong=function(){if(e.state.playSong)return s.a.createElement("div",null,s.a.createElement(g.a,{src:e.state.playSong.previewUrl,autoPlay:!0,controls:!0}))},e.state={songs:[],name:"React",playSong:null},e}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.songs.map(function(t){return s.a.createElement("div",{onClick:e.selectSong.bind(e,t),style:{width:"250px",height:"350px",margin:"10px",background:"#F78DA7",textAlign:"center",display:"inline-block",border:"1px solid black"}},s.a.createElement("p",null,"Song: ",t.trackName),s.a.createElement("img",{src:t.artworkUrl100,alt:"Album cover"}),s.a.createElement("p",null,"Artist: ",t.artistName),s.a.createElement("p",null,"Album: ",t.collectionName))});return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("h1",{style:{textAlign:"center",background:"#bf4d69",color:"white"}},"Sing-a-long"),this.hearSong(),s.a.createElement("div",null,s.a.createElement("input",{style:{width:"400px",height:"80px",borderRadius:"20px",border:"1px solid black",fontSize:" 24px",textAlign:"center"},type:"text",onChange:this.searchHandler,placeholder:"Pick a song, singer or album"})),s.a.createElement("div",null,s.a.createElement("p",{style:{fontSize:"20px"}},"Click on any to hear a short bit!")),t)}}]),t}(c.Component);Object(u.render)(s.a.createElement(d,null),document.getElementById("root"))},17:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.7f747181.chunk.js.map