(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},17:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),o=t(8),a=t.n(o),s=(t(13),t(7)),l=t(2),u=t(3),i=t(5),d=t(4),b=(t(14),t(0)),h=function(e){var n=e.totalCounters;return console.log("Navbar-rendered"),Object(b.jsxs)("nav",{className:"navbar navbar-light bg-light",children:[" ",Object(b.jsxs)("a",{className:"navbar-brand",href:"#",children:["Navbar"," ",Object(b.jsxs)("span",{className:"badge badge-pill badge-secondary",children:[n," "]})," "]})," "]})},j=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(){console.log("counter-updated")}},{key:"componentWillUnmount",value:function(){console.log("counter-unmounted")}},{key:"render",value:function(){var e=this;return console.log("Counter-rendered"),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("span",{className:this.getClasses(),style:{fontSize:20},children:this.findCount()})}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("button",{onClick:function(){return e.props.onIncreament(e.props.counter)},className:"btn btn-secondary bt-sm ",children:"+"}),Object(b.jsx)("button",{onClick:function(){return e.props.onDecreament(e.props.counter)},className:"btn btn-secondary bt-sm m-2 ",disabled:0===this.props.counter.value?"disabled":"",children:"-"}),Object(b.jsx)("button",{onClick:function(){return e.props.onDelete(e.props.counter.id)},className:"btn btn-danger bt-sm ",children:"delete"})]})]})}},{key:"getClasses",value:function(){var e="badge m-2 badge";return e+=0===this.props.counter.value?"-warning":"-primary"}},{key:"findCount",value:function(){var e=this.props.counter.value;return 0===e?"zero":e}}]),t}(r.Component),p=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){return Object(l.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){console.log("Counters-rendered");var e=this.props,n=e.onReset,t=e.counters,r=e.onDelete,c=e.onIncreament,o=e.onDecreament;return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:n,className:"btn btn-primary bt-sm m-2",children:"Reset"}),t.map((function(e){return Object(b.jsx)(j,{onIncreament:c,onDecreament:o,onDelete:r,counter:e,children:Object(b.jsxs)("h5",{children:["Counter # ",e.id]})},e.id)}))]})}}]),t}(r.Component),m=function(e){Object(i.a)(t,e);var n=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=n.call(this)).state={counters:[{id:0,value:0},{id:1,value:1},{id:2,value:2}]},e.handleIncreament=function(n){console.log("increamnet event hanleded");var t=Object(s.a)(e.state.counters);console.log(t);var r=t.indexOf(n);t[r].value++,e.setState({counters:t})},e.handleDecreament=function(n){console.log("increamnet event hanleded");var t=Object(s.a)(e.state.counters);console.log(t);var r=t.indexOf(n);t[r].value--,e.setState({counters:t})},e.handleReset=function(){var n=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:n})},e.handleDelete=function(n){var t=e.state.counters.filter((function(e){return e.id!==n}));e.setState({counters:t})},console.log("App-constructor"),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("App-mounted")}},{key:"render",value:function(){return console.log("App-rendered"),Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(h,{totalCounters:this.state.counters.filter((function(e){return e.value>0})).length}),Object(b.jsx)("main",{className:"container",children:Object(b.jsx)(p,{counters:this.state.counters,onReset:this.handleReset,onIncreament:this.handleIncreament,onDecreament:this.handleDecreament,onDelete:this.handleDelete})})]})}}]),t}(r.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),o(e),a(e)}))};t(16);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.0ac3a86e.chunk.js.map