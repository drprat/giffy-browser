(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(93)},49:function(e,t,a){},50:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=a(16),l=a(14),s={FETCH_EXCITED:"FETCH_EXCITED",FETCH_HAPPY:"FETCH_HAPPY",FETCH_KEYWORD:"FETCH_KEYWORD",FETCH_SEARCH:"FETCH_SEARCH",CLEAR_SEARCH_RESULT:"CLEAR_SEARCH_RESULT",FETCH_GIPHY_ERROR:"FETCH_GIPHY_ERROR"},u={excited:[],happy:[],keyword:[]},f={error:""},d=Object(o.c)({gifListsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case s.FETCH_EXCITED:return a.excited=t.payload,a;case s.FETCH_HAPPY:return a.happy=t.payload,a;case s.FETCH_KEYWORD:return a.keyword=t.payload,a;default:return e}},errorReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case s.FETCH_TMDBAPI_ERROR:return a.error=t.payload,console.log(t.payload),a;default:return e}}}),h=a(37),m=(a(49),a(2)),p=a(3),E=a(6),y=a(4),g=a(5),v=a(9),b=(a(50),a(17)),O=function(e){var t=e.header;return r.a.createElement("div",{className:"list-title"},r.a.createElement("h3",null,t))},w=a(30),j=a.n(w),R=a(13),C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).renderPic=function(e){if(null!==e.images.downsized.url)return r.a.createElement("img",{className:"tile-img",alt:e.images,"data-src":"",src:e.images.downsized.url})},a.renderPic=a.renderPic.bind(Object(R.a)(a)),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.gif;return r.a.createElement(v.b,{className:"tile",to:"#"},r.a.createElement("div",{className:"tile-img"},this.renderPic(e)),r.a.createElement("div",{className:" photo-overlay"},r.a.createElement("div",{className:"tile-text-container"})))}}]),t}(r.a.Component),k=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(i)))).state={margin:0},a.renderGifList=function(e){return e.map(function(e){return r.a.createElement(C,{key:e.id,gif:e})})},a.handleLeftClick=function(e){e.preventDefault(),a.setState({margin:a.state.margin+50});var t=a.props.gifList.pop();a.props.gifList.unshift(t);var n=Object(c.findDOMNode)(a.refs.content);j()(n).animate({marginLeft:"=10px"},"fast")},a.handleRightClick=function(e){e.preventDefault(),a.setState({margin:a.state.margin-50});var t=a.props.gifList.shift();a.props.gifList.push(t);var n=Object(c.findDOMNode)(a.refs.content);j()(n).animate({marginLeft:"=10px"},"fast")},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.gifList,t=void 0===e?[]:e;return r.a.createElement("div",{className:"list-container"},r.a.createElement("span",{onClick:this.handleLeftClick,className:"left-controls",role:"button"}),r.a.createElement("div",{className:"module-section clearfix"},r.a.createElement("ul",{id:"content",ref:"content"},r.a.createElement("div",{className:"listRow"},this.renderGifList(t),console.log("this is the value"+t)))),r.a.createElement("span",{onClick:this.handleRightClick,className:"right-controls",role:"button"}))}}]),t}(r.a.Component),H=a(19),N=a.n(H),T=a(25),_=a(26),L=a.n(_),S=function(){return function(){var e=Object(T.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{L()("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc").search("gifs",{q:"excited"}).then(function(e){console.log(e.data),t({type:s.FETCH_EXCITED,payload:e.data})})}catch(a){t({type:s.FETCH_GIPHY_ERROR,payload:"Error occured while fetching from Giphy API"})}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},x=function(){return function(){var e=Object(T.a)(N.a.mark(function e(t){return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{L()("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc").search("gifs",{q:"happy"}).then(function(e){console.log(e.data),t({type:s.FETCH_HAPPY,payload:e.data})})}catch(a){t({type:s.FETCH_GIPHY_ERROR,payload:"Error occured while fetching from Giphy API"})}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},P=function(e){return function(){var t=Object(T.a)(N.a.mark(function t(a){return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{L()("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc").search("gifs",{q:e}).then(function(e){console.log(e.data),a({type:s.FETCH_KEYWORD,payload:e.data})})}catch(n){a({type:s.FETCH_GIPHY_ERROR,payload:"Error occured while fetching from Giphy API"})}case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},D=function(){return function(e){e({type:s.CLEAR_SEARCH_RESULT})}},F=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchExcited,a=e.fetchHappy,n=e.fetchKeyword;t(),a(),n("Confident")}},{key:"render",value:function(){var e=this.props,t=e.excited,a=e.happy,n=e.keyword;return r.a.createElement("div",null,r.a.createElement(O,{header:"Excited"}),r.a.createElement(k,{gifList:t}),r.a.createElement(O,{header:"Happy"}),r.a.createElement(k,{gifList:a}),r.a.createElement(O,{header:"Confident"}),r.a.createElement(k,{gifList:n}))}}]),t}(r.a.Component),I=Object(l.b)(function(e){return{excited:e.gifListsReducer.excited,happy:e.gifListsReducer.happy,keyword:e.gifListsReducer.keyword}},function(e){return{fetchExcited:function(){e(S())},fetchHappy:function(){e(x())},fetchKeyword:function(t){e(P(t))}}})(F),A=(a(73),a(74),a(75),a(39)),G=a.n(A),Y=(a(91),{speed:300,slidesToShow:4,lazyLoad:!0,infinite:!0,slidesToScroll:2,initialSlide:0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:2,infinite:!0}}]}),K=function(e){var t=e.gifList;return r.a.createElement(G.a,Y,t.map(function(e){return r.a.createElement(C,{key:e.id,gif:e})}))},W=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fetchExcited,a=e.fetchHappy,n=e.fetchKeyword;t(),a(),n("Confident")}},{key:"render",value:function(){var e=this.props,t=e.excited;e.happy,e.keyword;return r.a.createElement("div",null,r.a.createElement(O,{header:"Carousel"}),r.a.createElement(K,{gifList:t}))}}]),t}(r.a.Component),X=(Object(l.b)(function(e){return{excited:e.gifListsReducer.excited,happy:e.gifListsReducer.happy,keyword:e.gifListsReducer.keyword}},function(e){return{fetchExcited:function(){e(S())},fetchHappy:function(){e(x())},fetchKeyword:function(t){e(P(t))}}})(W),function(){return r.a.createElement("p",{style:{fontSize:26,color:"Orange"}},r.a.createElement("b",null,"NOT FOUND :("))}),q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).renderPic=function(e){return null!==e.images.downsized.url?r.a.createElement("img",{className:"tile-img",alt:e.images,src:e.images.downsized.url}):null!==e.poster_path?r.a.createElement("img",{className:"tile-img ",alt:"img"}):r.a.createElement("img",{alt:"img",className:"tile-img",src:"http://via.placeholder.com/280x160"})},a.renderPic=a.renderPic.bind(Object(R.a)(a)),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.gif;return r.a.createElement(v.b,{className:"search-tile",to:"#"},r.a.createElement("div",{className:"tile-img"},this.renderPic(e)),r.a.createElement("div",{className:" photo-overlay"},r.a.createElement("div",{className:"tile-text-container"})))}}]),t}(r.a.Component),z=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(E.a)(this,Object(y.a)(t).call(this,e))).fetchSearch=function(){var e=a.props,t=e.fetchKeyword,n=e.match.params.keyword;t(n),a.setState({currentParam:n})},a.state={currentParam:""},a.fetchSearch=a.fetchSearch.bind(Object(R.a)(a)),a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchSearch()}},{key:"componentDidUpdate",value:function(){var e=this.props.match.params.keyword;this.state.currentParam!==e&&this.fetchSearch()}},{key:"componentWillUnmount",value:function(){(0,this.props.clearSearchResult)(),this.setState({currentParam:""})}},{key:"render",value:function(){var e=this.props.keyword;return r.a.createElement("div",{id:"result-container"},r.a.createElement("ul",null,e.map(function(e){return r.a.createElement(q,{key:e.id,gif:e})})))}}]),t}(r.a.Component),M=Object(b.e)(Object(l.b)(function(e){return{keyword:e.gifListsReducer.keyword}},function(e){return{fetchKeyword:function(t){e(P(t))},clearSearchResult:function(){return e(D())}}})(z)),U=function(){return r.a.createElement("div",null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/giffy-browser/",component:I}),r.a.createElement(b.a,{path:"/giffy-browser/search/:keyword",exact:!0,component:M}),r.a.createElement(b.a,{component:X})," "))},B=function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("nav",{className:"navbar navbar-light bg-faded"},r.a.createElement("a",{className:"navbar-brand text-danger font-weight-bold",href:"https://github.com/drprat/giffy-browser/"},"Giffy-browser @drprat"),r.a.createElement("p",{className:"text-muted lead",href:"#"},"\xa92019. All Rights Reserved by Prat."),r.a.createElement("a",{className:"navbar-brand text-muted",href:"https://github.com/drprat/giffy-browser"},"github")))},Q=(a(92),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",ENTER_KEY:13},a.handleChange=function(e){a.setState({input:e.target.value})},a.handleSubmit=function(){var e=a.state.input,t=a.props.history;0!==e.length&&(t.push("/search/".concat(e)),a.setState({input:""}))},a}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=(t.input,t.ENTER_KEY);return r.a.createElement("li",null,r.a.createElement("input",{className:"searchInput",type:"text",value:this.state.input,placeholder:"Search gif...",onChange:this.handleChange,onKeyDown:function(t){t.keyCode===a&&e.handleSubmit()}}),r.a.createElement("span",{className:"navItem search-icon "},r.a.createElement("i",{className:"fas fa-search",onClick:this.handleSubmit})))}}]),t}(r.a.Component)),J=Object(b.e)(Q),$=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.c,{to:"/giffy-browser/",className:"logo navItem"},r.a.createElement("h1",null,"Giffy-browser")))),r.a.createElement("ul",null,r.a.createElement(J,null))))},V=function(e){return r.a.createElement("div",{className:"homepage-container"},r.a.createElement($,null),e.children,r.a.createElement(B,null))},Z=function(e){function t(){return Object(m.a)(this,t),Object(E.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(V,null,r.a.createElement(U,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=Object(o.d)(d,Object(o.a)(h.a)),te=r.a.createElement(l.a,{store:ee},r.a.createElement(Z,null));i.a.render(te,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.5a24987e.chunk.js.map