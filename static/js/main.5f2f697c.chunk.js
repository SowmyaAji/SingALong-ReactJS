(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(11)},11:function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(3),r=n(8),o=n(4),c=n(9),s=n(0),i=n.n(s),u=n(5),g=(n(17),n(6)),m=n.n(g),p=n(7),h=n.n(p),d=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(o.a)(t).call(this))).searchHandler=function(t){e.searchQuery(t.target.value)},e.searchQuery=function(t){var n="https://itunes.apple.com/search?media=music&limit=20&term="+t;m()(n,null,function(t,n){t?console.error(t.message):(e.setState({songs:n.results}),console.log(n.results))})},e.selectSong=function(t){e.setState({playSong:t}),console.log(t)},e.hearSong=function(){if(e.state.playSong)return console.log("new song"),console.log(e.state.playSong),i.a.createElement("div",null,i.a.createElement(h.a,{src:e.state.playSong.previewUrl,autoPlay:!0,controls:!0}))},e.state={songs:[],name:"React",playSong:null},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.songs.map(function(t){return i.a.createElement("div",{onClick:e.selectSong.bind(e,t),style:{width:"200px",height:"300px",margin:"10px",background:"#F78DA7",textAlign:"center",display:"inline-block",border:"1px solid black"}},i.a.createElement("p",null,"Song: ",t.trackName),i.a.createElement("img",{src:t.artworkUrl100}),i.a.createElement("p",null,"Artist: ",t.artistName),i.a.createElement("p",null,"Album: ",t.collectionName))});return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("h1",{style:{textAlign:"center",background:"#bf4d69",color:"white"}},"Sing-a-long"),i.a.createElement("input",{style:{width:"200px",height:"30px"},type:"text",onChange:this.searchHandler,placeholder:"Pick a song, singer or album"}),i.a.createElement("div",null,this.hearSong(),t))}}]),t}(s.Component);Object(u.render)(i.a.createElement(d,null),document.getElementById("root"))},17:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.5f2f697c.chunk.js.map