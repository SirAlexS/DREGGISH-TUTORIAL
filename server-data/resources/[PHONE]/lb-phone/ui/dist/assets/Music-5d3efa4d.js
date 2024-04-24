import{r as m,a,j as e}from"./jsx-runtime-f40812bf.js";import{f as M,C as U,L as h,a3 as I,V as G,I as k,b as w,d as R,p as q}from"./Phone-3c5ec2e3.js";import{m as D,a as _,an as L,u as O,T as x,as as y,K as V,c as T,a1 as Y,J as F,L as j,a8 as H,k as B,aI as W,aE as X,x as z,a$ as J,bc as K,ab as Q,A as Z}from"./index.esm-497ba86e.js";import"./number-28525126.js";function ee(){const{Data:A,Playlist:N}=m.useContext(E),[l,t]=N,[C,S]=A,[s,i]=m.useState([]);m.useEffect(()=>{M("Music",{action:"getPlaylists"}).then(r=>{r&&i(r.map(u=>({...u,Songs:u.Songs.map(n=>{var b;let o=C.Songs.find(c=>c.Path===n);return{...o,Cover:((b=C.Albums[o==null?void 0:o.Album])==null?void 0:b.Cover)??(o==null?void 0:o.Cover),Path:n}})})))})},[]);const d=(r,u)=>{!r||!u||M("Music",{action:"addSong",id:r,song:u}).then(n=>{n&&t(null)})};return a(D.div,{className:"add-playlist-container",initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0},exit:{opacity:1,y:"100%"},children:[e("div",{className:"music-header",children:e("div",{className:"left",children:e(_,{onClick:()=>t(null)})})}),e("div",{className:"music-body",children:e("div",{className:"library",children:s.map((r,u)=>a("div",{className:"playlist",onClick:()=>{r.Songs.includes(l.Path)?U.PopUp.set({title:h("APPS.MUSIC.SONG_EXISTS_POPUP.TITLE"),description:h("APPS.MUSIC.SONG_EXISTS_POPUP.DESCRIPTION"),buttons:[{title:h("APPS.MUSIC.SONG_EXISTS_POPUP.CANCEL")}]}):d(r.Id,l.Path)},children:[a("div",{className:"playlist-details",children:[r.Cover?e("img",{src:r.Cover}):r.Songs.length>0?e("div",{className:"playlist-cover","data-grid":r.Songs.filter(n=>n.Cover).length>=4,children:r.Songs.filter(n=>n.Cover).length>=4?r.Songs.filter((n,o)=>o<4).map((n,o)=>e("img",{src:n.Cover})):e("img",{src:r.Songs[0].Cover})}):e("img",{src:"./assets/img/icons/music/unknown.png"}),a("div",{className:"text",children:[e("div",{className:"title",children:r.Title}),a("div",{className:"subtitle",children:[r.Songs.length," ",h("APPS.MUSIC.SONGS").toLowerCase()]})]})]}),e(L,{})]},u))})})]})}function te(){const{View:A,SelectedData:N,Func:l}=m.useContext(E),t=O(I),[C,S]=A,[s]=N;return e("div",{className:"slide left",children:e("div",{className:"music-body",children:a("div",{className:"artist-profile",children:[a("div",{className:"avatar",style:{backgroundImage:`url(${s.Avatar})`},children:[e("div",{className:"top",children:e(_,{onClick:()=>S("search")})}),e("div",{className:"title",children:s.Name})]}),a("div",{className:"category",children:[a("div",{className:"title",children:[h("APPS.MUSIC.SONGS"),e(L,{})]}),e("section",{children:s.songs.map((i,d)=>{var u;let r=((u=t==null?void 0:t.song)==null?void 0:u.Path)===i.Path;return a("div",{className:"song","data-playing":r,onClick:()=>{l.play({song:i,queue:[...s.songs.filter((n,o)=>o>d)]})},children:[a("div",{className:"song-info",children:[e("img",{src:i.Cover??"./assets/img/icons/music/unknown.png",alt:""}),a("div",{className:"text",children:[e("div",{className:"title",children:i.Title}),i.Album&&e("div",{className:"subtitle",children:i.Album})]})]}),e(x,{onClick:n=>{n.stopPropagation(),l.setContext(i)}})]},d)})})]}),a("div",{className:"category",children:[a("div",{className:"title",children:[h("APPS.MUSIC.ALBUMS"),e(L,{})]}),e("section",{className:"albums",children:s.albums.map((i,d)=>a("div",{className:"album",onClick:()=>{l.fetchAndSet(i.Title,"Albums")},children:[e("img",{src:i.Cover,alt:""}),e("div",{className:"title",children:i.Title})]},d))})]})]})})})}function se(){const{Func:A,Data:N}=m.useContext(E),[l,t]=m.useState(""),[C]=N,[S,s]=m.useState(null);return m.useEffect(()=>{M("Music",{action:"getPlaylists"}).then(i=>{i&&s(i.map(d=>({...d,Songs:d.Songs.map(r=>{var n;let u=C.Songs.find(o=>o.Path===r);return{...u,Cover:((n=C.Albums[u==null?void 0:u.Album])==null?void 0:n.Cover)??(u==null?void 0:u.Cover),Path:r}})})))})},[]),a("div",{className:"slide right",children:[e("div",{className:"music-header",children:a("div",{className:"space",children:[e("div",{className:"title",children:h("APPS.MUSIC.LIBRARY")}),e(y,{onClick:()=>{U.PopUp.set({title:h("APPS.MUSIC.NEW_PLAYLIST_POPUP.TITLE"),description:h("APPS.MUSIC.NEW_PLAYLIST_POPUP.DESCRIPTION"),input:{placeholder:h("APPS.MUSIC.NEW_PLAYLIST_POPUP.PLACEHOLDER"),type:"text",minCharacters:1,onChange:i=>t(i)},buttons:[{title:h("APPS.MUSIC.NEW_PLAYLIST_POPUP.CANCEL")},{title:h("APPS.MUSIC.NEW_PLAYLIST_POPUP.PROCEED"),cb:()=>{t(i=>(M("Music",{action:"createPlaylist",name:i}).then(d=>{d&&s(r=>[...r,{id:d,Title:i,Songs:[]}])}),i))}}]})}})]})}),e("div",{className:"music-body",children:e("div",{className:"library",children:S&&S.map((i,d)=>a("div",{className:"playlist",onClick:()=>A.fetchAndSet(i,"playlist",!0),children:[a("div",{className:"playlist-details",children:[i.Cover?e("img",{src:i.Cover}):i.Songs.length>0?e("div",{className:"playlist-cover","data-grid":i.Songs.filter(r=>r.Cover).length>=4,children:i.Songs.filter(r=>r.Cover).length>=4?i.Songs.filter((r,u)=>u<4).map((r,u)=>e("img",{src:r.Cover})):e("img",{src:i.Songs[0].Cover})}):e("img",{src:"./assets/img/icons/music/unknown.png"}),a("div",{className:"text",children:[e("div",{className:"title",children:i.Title}),a("div",{className:"subtitle",children:[i.Songs.length," songs"]})]})]}),e(L,{})]},d))})})]})}function ie(){var d,r,u,n;const{View:A,Player:N}=m.useContext(E),l=O(I),[t,C]=A,[S,s]=N;let i=[{icon:e(T,{}),value:"library",label:h("APPS.MUSIC.LIBRARY")},{icon:e(Y,{}),value:"search",label:h("APPS.MUSIC.SEARCH")}];return a("div",{className:"music-footer",children:[a("div",{className:"music-playing",onClick:()=>{l&&s(!0)},children:[a("div",{className:"song-info",children:[e("img",{src:((d=l==null?void 0:l.song)==null?void 0:d.Cover)??"./assets/img/icons/music/unknown.png",alt:""}),a("div",{className:"text",children:[e("div",{className:"title",children:((r=l==null?void 0:l.song)==null?void 0:r.Title)??h("APPS.MUSIC.NOT_PLAYING")}),((u=l==null?void 0:l.song)==null?void 0:u.Artist)&&e("div",{className:"subtitle",children:(n=l==null?void 0:l.song)==null?void 0:n.Artist})]})]}),e("div",{className:"controls",onClick:o=>{o.stopPropagation(),l&&I.patch({playing:!l.playing})},children:l&&l.playing?e(V,{}):e(T,{})})]}),e("div",{className:"items",children:i.map((o,b)=>a("div",{className:"item","data-active":t===o.value,onClick:()=>C(o.value),children:[o.icon,o.label]},b))})]})}function ne(){var b,c,g,v;const{View:A,Player:N}=m.useContext(E),l=O(w.Settings),t=O(I),[C,S]=N,[s,i]=m.useState(!1),[d,r]=m.useState(null),[u,n]=m.useState("rgb(170, 170, 170)");m.useEffect(()=>{var P;t&&((P=t==null?void 0:t.song)!=null&&P.Cover)&&G(t.song.Cover).then(p=>{p&&n(`
                    linear-gradient(0deg,
                        ${p.dominant} 0%,
                        ${p.average} 50%,
                        ${p.muted} 100%
                    )
                `)})},[(b=t==null?void 0:t.song)==null?void 0:b.Cover]);const o=P=>{if(!P)return"0:00";let p=Math.floor(P/60),f=Math.floor(P-p*60),$=f<10?"0"+f:f;return p+":"+$};return a(D.div,{className:"music-player",style:{background:u},initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{duration:.3},children:[e("div",{className:"music-player-header",onClick:()=>S(!1)}),a("div",{className:"music-player-body",children:[e("img",{className:"cover",src:((c=t==null?void 0:t.song)==null?void 0:c.Cover)??"./assets/img/icons/music/unknown.png"}),a("div",{className:"song-info",children:[e("div",{className:"title",children:((g=t==null?void 0:t.song)==null?void 0:g.Title)??h("APPS.MUSIC.NOT_PLAYING")}),e("div",{className:"subtitle",children:((v=t==null?void 0:t.song)==null?void 0:v.Artist)??""})]}),a("div",{className:"duration",children:[e(k,{type:"range",min:0,max:100,value:t?d||((t==null?void 0:t.current)??0/(t==null?void 0:t.duration)??0)*100:0,style:{background:t!=null&&t.current?`linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${Math.floor(d||t.current/t.duration*100)}%, rgba(255, 255, 255, 0.3) ${Math.floor(d||t.current/t.duration*100)}%, rgba(255, 255, 255, 0.3) 100%)`:"rgba(255, 255, 255, 0.3)"},onMouseDown:()=>i(!0),onMouseUp:P=>{i(!1),d&&t&&(t.goTo(t.duration/100*d),r(null))},onChange:P=>r(P.target.value)}),a("div",{className:"time",children:[e("div",{className:"current",children:o(d?(t==null?void 0:t.duration)/100*d:t==null?void 0:t.current)}),e("div",{className:"total",children:o(t==null?void 0:t.duration)})]})]}),a("div",{className:"controls",children:[e(F,{onClick:()=>t==null?void 0:t.previous()}),e("div",{className:"play",onClick:()=>{t&&I.patch({playing:!t.playing})},children:t!=null&&t.playing?e(V,{}):e(T,{})}),e(j,{onClick:()=>t==null?void 0:t.next()})]}),a("div",{className:"volume",children:[e(H,{}),e(k,{type:"range",min:0,max:1,step:.05,style:{background:`linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) ${l.sound.volume*100}%, rgba(255, 255, 255, 0.3) ${l.sound.volume*100}%, rgba(255, 255, 255, 0.3) 100%)`},value:l.sound.volume,onChange:P=>{w.Settings.patch({sound:{...w.Settings.value.sound,volume:P.target.value}})}}),e(B,{})]})]})]})}function ae(){const{View:A,SelectedData:N,Func:l}=m.useContext(E),t=O(I),[C,S]=A,[s,i]=N,[d]=m.useState(!!s.Artist),[r,u]=m.useState(!1);return a("div",{className:"slide left",children:[e("div",{className:"music-header",children:a("div",{className:"space",children:[e(_,{onClick:()=>s.Artist?S("search"):S("library")}),!d&&(r?e(W,{onClick:()=>{M("Music",{action:"editPlaylist",id:s.Id,title:s.Title,cover:s.Cover}).then(n=>{if(!n)return R("warning","Failed to edit playlist");u(!1)})}}):e(X,{onClick:n=>{n.stopPropagation(),U.ContextMenu.set({buttons:[{title:h("APPS.MUSIC.EDIT_PLAYLIST"),cb:()=>u(!0)},{title:h("APPS.MUSIC.DELETE_PLAYLIST"),color:"red",cb:()=>{M("Music",{action:"deletePlaylist",id:s.Id}).then(o=>{o&&S("library")})}}]})}}))]})}),e("div",{className:"music-body",children:a("div",{className:"playlist-wrapper",children:[a("div",{className:"playlist-details",children:[a("div",{className:"cover-wrapper",style:{cursor:r?"pointer":"default"},onClick:()=>{r&&U.Gallery.set({onSelect(n){i({...s,Cover:n.src})}})},children:[s.Cover?e("img",{src:s.Cover}):s.Songs.length>0?e("div",{className:"playlist-cover","data-grid":s.Songs.filter(n=>n.Cover).length>=4,children:s.Songs.filter(n=>n.Cover).length>=4?s.Songs.filter((n,o)=>o<4).map((n,o)=>e("img",{src:n.Cover})):e("img",{src:s.Songs[0].Cover??"./assets/img/icons/music/unknown.png"})}):e("img",{src:"./assets/img/icons/music/unknown.png"}),a("div",{className:"actions",children:[r&&e(z,{}),r&&s.Cover&&e(J,{onClick:n=>{n.stopPropagation(),i({...s,Cover:null})}})]})]}),a("div",{className:"text",children:[r?e(k,{defaultValue:s.Title,onChange:n=>{if(n.target.value.length>30)return n.target.value=n.target.value.slice(0,30);i({...s,Title:n.target.value})}}):e("div",{className:"title",children:s.Title}),e("div",{className:"subtitle",children:d?s.Artist:`${Object.keys(s.Songs).length} ${h("APPS.MUSIC.SONGS").toLowerCase()}`})]}),a("div",{className:"buttons",children:[a("div",{className:"button",onClick:()=>{l.play({song:s.Songs[0],queue:[...s.Songs.filter((n,o)=>o>0)]})},children:[e(T,{})," ",h("APPS.MUSIC.PLAY")]}),a("div",{className:"button",onClick:()=>{l.play({song:s.Songs[Math.floor(Math.random()*s.Songs.length)],queue:[...s.Songs.filter((n,o)=>o>0)].sort(()=>Math.random()-.5)})},children:[e(K,{}),h("APPS.MUSIC.SHUFFLE")]})]})]}),e("div",{className:"playlist-tracks",children:s.Songs.map((n,o)=>{var c;let b=((c=t==null?void 0:t.song)==null?void 0:c.Path)===n.Path;return a("div",{className:"track","data-album":d,"data-playing":b,onClick:()=>{l.play({song:n,queue:[...s.Songs.filter((g,v)=>v>o)]})},children:[a("div",{className:"track-info",children:[r&&e(Q,{onClick:g=>{g.stopPropagation(),U.PopUp.set({title:h("APPS.MUSIC.REMOVE_SONG_POPUP.TITLE"),description:h("APPS.MUSIC.REMOVE_SONG_POPUP.DESCRIPTION"),buttons:[{title:h("APPS.MUSIC.REMOVE_SONG_POPUP.CANCEL")},{title:h("APPS.MUSIC.REMOVE_SONG_POPUP.PROCEED"),color:"red",cb:()=>{M("Music",{action:"removeSong",id:s.Id,song:n.Path}).then(v=>{v&&i({...s,Songs:s.Songs.filter((P,p)=>p!==o)})})}}]})}}),d?e("div",{className:"index",children:o+1}):e("img",{src:n.Cover??"./assets/img/icons/music/unknown.png"}),a("div",{className:"text",children:[e("div",{className:"title",children:n.Title}),e("div",{className:"subtitle",children:d?s.Artist:n.Artist})]})]}),e(x,{onClick:g=>{g.stopPropagation(),l.setContext(n)}})]},o)})})]})})]})}function le(){const{Func:A,Data:N}=m.useContext(E),l=O(I),[t,C]=m.useState(""),[S]=N;return a("div",{className:"slide right",children:[e("div",{className:"music-header",children:a("div",{className:"search",children:[e("div",{className:"title",children:h("APPS.MUSIC.SEARCH")}),e(q,{placeholder:h("APPS.MUSIC.SEARCH_PLACEHOLDER"),onChange:s=>C(s.target.value)})]})}),e("div",{className:"music-body",children:e("div",{className:"search-results",children:t.length>0&&Object.keys(S).map(s=>Object.keys(S[s]).filter(i=>{switch(s){case"Artists":return i.toLowerCase().includes(t.toLowerCase());case"Albums":return i.toLowerCase().includes(t.toLowerCase());case"Songs":return S[s][i].Title.toLowerCase().includes(t.toLowerCase())}}).map((i,d)=>{var u;let r;return s==="Songs"&&(r=((u=l==null?void 0:l.song)==null?void 0:u.Path)===S[s][i].Path),a("div",{className:"item","data-playing":r,onClick:()=>{s==="Songs"?A.play({song:S[s][i],queue:[...S.Songs.filter((n,o)=>S[s][i].Path!==n.Path&&o>d)]}):A.fetchAndSet(i,s)},children:[a("div",{className:"item-info",children:[e("img",{src:(s==="Artists"?S[s][i].Avatar:S[s][i].Cover)??"./assets/img/icons/music/unknown.png","data-artist":s==="Artists"}),a("div",{className:"text",children:[e("div",{className:"title",children:s==="Songs"?S[s][i].Title:i}),a("div",{className:"subtitle",children:[s==="Artists"&&h("APPS.MUSIC.ARTIST"),s==="Albums"&&`${h("APPS.MUSIC.ALBUM")} • ${S[s][i].Artist}`,s==="Songs"&&`${h("APPS.MUSIC.SONG")} • ${S[s][i].Artist}`]})]})]}),e("div",{className:"item-actions",children:s==="Songs"?e(x,{onClick:n=>{n.stopPropagation(),A.setContext(S[s][i])}}):e(L,{})})]})}))})})]})}const E=m.createContext(null);function ue(){const[A,N]=m.useState("search"),[l,t]=m.useState(null),[C,S]=m.useState(null),[s,i]=m.useState(!1),[d,r]=m.useState(null),u={search:e(le,{}),artist:e(te,{}),library:e(se,{}),playlist:e(ae,{})},n=(c,g,v)=>{if(c&&!(!l[g]&&!v))if(g==="Albums"){let P=Object.keys(l.Songs).filter(p=>l.Songs[p].Album===c).map(p=>l.Songs[p]);S({...l[g][c],Songs:P,Title:c}),N("playlist")}else if(g==="Artists"){let P=Object.keys(l.Songs).filter(f=>l.Songs[f].Artist===c).map(f=>l.Songs[f]),p=Object.keys(l.Albums).filter(f=>l.Albums[f].Artist===c).map(f=>({...l.Albums[f],Title:f}));S({...l[g][c],Name:c,songs:P,albums:p}),N("artist")}else g==="playlist"&&(S(c),N("playlist"))},o=c=>{var g,v;!c||!c.song||(I.value?I.patch({playing:!0,song:c.song,queue:c.queue??((g=I.value)==null?void 0:g.queue)??[]}):I.set({playing:!0,song:c.song,queue:c.queue??((v=I.value)==null?void 0:v.queue)??[]}))},b=c=>{if(!c)return R("warning","No song data found, can't set context menu.");let g=[{title:h("APPS.MUSIC.ADD_QUEUE"),color:null,cb:()=>{I.patch({queue:[...I.value.queue,c]})}},{title:h("APPS.MUSIC.ADD_PLAYLIST"),color:null,cb:()=>{r(c)}}];C&&(C!=null&&C.IsOwner)&&g.push({title:h("APPS.MUSIC.REMOVE_SONG"),color:"red",cb:()=>{M("Music",{action:"removeSong",id:C.Id,song:c.Path}).then(v=>{v&&S(P=>{let p=P.Songs.filter(f=>f.Path!==c.Path);return{...P,Songs:p}})})}}),U.ContextMenu.set({buttons:g})};return m.useEffect(()=>{M("Music",{action:"getConfig"}).then(c=>{if(!c)return;let g=Object.keys(c.Songs).map(v=>({...c.Songs[v],Cover:c.Songs[v].Album&&c.Albums[c.Songs[v].Album]?c.Albums[c.Songs[v].Album].Cover:c.Songs[v].Cover,Path:v}));t({...c,Songs:g})})},[]),e("div",{className:"music-container",children:a(E.Provider,{value:{View:[A,N],Data:[l,t],SelectedData:[C,S],Player:[s,i],Playlist:[d,r],Func:{fetchAndSet:n,play:o,setContext:b}},children:[a(Z,{initial:!1,children:[s&&e(ne,{}),d&&e(ee,{})]}),u[A],e(ie,{})]})})}export{E as MusicContext,ue as default};
