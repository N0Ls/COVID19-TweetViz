(this.webpackJsonptweetviz=this.webpackJsonptweetviz||[]).push([[0],{110:function(e,t,o){},113:function(e,t,o){"use strict";o.r(t);var c=o(1),n=o.n(c),d=o(33),s=o.n(d),a=(o(32),o(6)),r=(o(110),o(3)),f=o.p+"static/media/data.0c5f679a.csv",i=function(e){return function(t){return function(e,t){for(var o=[],c=0;c<t.length;c++)e(t[c])&&o.push(t[c]);return o}(e,t)}},l=o(0),u=function(e){var t=e.yScale,o=e.innerWidth;e.innerHeight;return t.ticks().map((function(e){return Object(l.jsxs)("g",{className:"tick",transform:"translate(0,".concat(t(e),")"),children:[Object(l.jsx)("line",{x2:o}),Object(l.jsx)("text",{x:-50,dy:"0.3em",style:{textAnchor:"middle",color:"white"},children:e.toLocaleString([],{month:"short",day:"2-digit"})})]},e)}))},j=function(){return Object(l.jsx)("div",{className:"spinner-box",children:Object(l.jsx)("div",{className:"circle-border",children:Object(l.jsx)("div",{className:"circle-core"})})})},b=o(114),A=Object(c.createContext)(void 0),I=function(){var e=Object(c.useContext)(A);if(void 0===e)throw new Error("useStoreContext must be used within a Store provider");return e},v=Object(c.createContext)(void 0),h=function(){var e=Object(c.useContext)(v);if(void 0===e)throw new Error("useStoreDispatchContext must be used within a Store provider");return e},m=function(e){var t=e.data,o=e.xScale,c=e.xValue,n=e.yScale,d=e.yValue,s=e.veracity,a=I(),r=h(),f={blue:Object(b.b)(118,203,236),rose:Object(b.b)(236,99,147),default:Object(b.b)(155,155,155)},i=function(e){switch(e){case"fake":return f.rose;case"real":return f.blue;default:return f.default}};return t.map((function(e){return Object(l.jsx)("circle",{className:"mark",cx:isNaN(o(c(e)))?0:o(c(e)),cy:n(d(e)),r:.4*e.influenceNumber,style:{fill:a.selected&&e.id===a.selected.id?"transparent":i(s(e)),stroke:a.selected&&e.id===a.selected.id?i(s(e)):""},onClick:function(){return function(e){r({type:"selected/update",data:e})}(e)}},d(e)+e.influenceNumber)}))},x=function(e){var t=e.d;return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)("div",{className:"tweet",children:[Object(l.jsx)("div",{className:"user_infos",children:Object(l.jsxs)("div",{className:"user_name",children:[Object(l.jsxs)("h2",{className:"user_display_name",children:[t.user_name,t.user_verified?Object(l.jsx)("img",{className:"badge",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAMAAAAJixmgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC4lBMVEUAAAAgn+8dofIdofMdovIcofIcofIdofIdofIdofIdofIdoPIhpe8XovMeofIeovMdoPIdofIdovIXougdofMdofIdofIdofMdoPIVquofo/UeofEdofIcovMfovAYnvMcofIdofIdofIdofIenvAameYdovIdofIdofIUnescovEdofIdofIeoPEdofIeovIcnPEbn/EdofIdofEcovMeoPMdofIeofIzmf8dovEdofIrqv8kkv8doPIeofIcofEdovIbofIdofIdofIdovIgn/8A//8doPEcofIdovMcofMeofIdnfUdofIaou4eofIdofIAqv8doPMcofEhpvQcofYapvIbo/QeoPAepPMepfAeofIdofEeoPMdovAeofQbofIbn/QAv/8covMdofMdofIdovIdoPEfovMcofEdovIcofIdofIdofIdofIdoPIdoPIcn/EdoPMdofIcofIdovMdofIdofIeovMeofIdofEdoPEdoPEdoPIcofEdo/Ieo/AdofIao/IAgP8eofIeofEdofIcofIeofIdofEdoPMcovMeovEcofEeoPIco/EdofIdoPMdofIdoPIdofMeofIdovEcofEfo/AdoPAime4dofIfoPEcoPMdofIdovIgn+8dofIdn/Ecn/MfovMdofIanvYdofIdofIdofIcoPEdofIdofIdofMdofIkpO0dofEeofMcovEdoPAeovIeofIdofIdoPMdovEdoPIcofIcovEdofIeovIdovIeovIfoe8cofIeoPEcovIdofMdofIdoPIdoPEbofIdofIdofIbofMeoPIdofMdofIdofMdofIcofIeofMdoPMfo/IdofIdofMcqv8eofEdovMdofIdofIgn/Qdo/IcofMdofEeoPEdofIeofMbpPYdovIcovIeoPQcofQdofIdoPEcofIcofIdovIcn/Qgn/IcofEeofIdofMeovEcoPIdofL////XtYP+AAAA9HRSTlMAIE99ob3X7O7+604fFl+k6OdgC7j7/LlhDBmA8ZEhFYj4/aoiCob2jQ1K3+ZeoKwSONziP2b5dwWWnQYHr768yhPHybcIAaere39MGu8etcEDaW0XGxQvMyoRo6grNEQ5MARSpsvdlCk2c8Xq+tmyjEiP0elr895ViqmEl8LOUEXEJwLyb56im5V8fl1cOyTjPtCfasaDSTJGD+1LU9OOEMM1QELkHdt6Yluu9KW2DoJnWiM8muXNR5xRN4tN8Hgxh26Zk3LVWSb32kGJ4db11OBUujqwVwnPWK2xGD2Qu4GFkhzStEMuwHFks78tKGzYzHB2IBB8ygAAAAFiS0dE9UXSG9sAAAAHdElNRQfkDBcKFRkXdroRAAALF0lEQVR42u2d+UOUxxnHB0RgUQRkQREEWY4VgyIoh1wewHpURKqAoIhZULTRGMU73hCt0ZhEa7C1JqYaTFBKjMZoVYyxhmiM9jDSGKLpYdMzTdv5A8oVWGDeZed95515nzf9/ui+PvN+mGdn53jmeRDiKyfnfi79Xd3cDQZ3D9f+Lv0GDET6lecgL2/cSz5egz31SOs7yOiHJeQ/ZGiAznCHBbphuwoaHqwj3JARobhPmcLCdYIbEWnGDil0ZJQeeEc9gR1W9GjwuFFjMJVixsLmjY3DlBo3HjJvfAKmln8iWNykCViWklNg8qamYZlKBzlaB0zEsjVpMsCp5BSsQBng+jglEytSehYsXstUrFDTLKCAp2PFmgGJ93sm5cAGZzi8M90wA2XPAvMFzsFMNDsXCPD3MSPNgcE7150VcFCe5tb2+eEF8wqDi7pNfudjZlrQbeoWXrywZNGT4SFWEaj5pTPKFgd1rnCWGMvjl7Z/stDADhjHtpm0LvvBmKeWd/7jiqdXPjPYiSNs7qrVFSSqNdNGt8wIhzDkxekIhaw1riN9tD55A5/ZWOHGaOkXNG9KxEz1bI6fnR+uzbGq45ZswZrS1m2qTkG378Ca01Zn1ZBnpmFNastOVXAr46uwRmUOTGLPO2sK1rAymM+7x3tjTcuthO1y4Dk/rHEx3d3N3YUBaDiz0dq6G4PQDytF7y/zVhmTZYU1B4PRLhbAezAgPa+cdy8kXmzYp5T3BQMoYBy6Xxnvi1UYmF5SdKKeuhWDU4wS4NUYoAbJ533ZABE4aJjsGeUBDFIH5QL/CCYvNi2Tx1vkARQYH5K3jHgFg1W1rFMFD7jAE+UAz8GAdVjGEL0EMrAXPfCPIfPi0J9QAyeDBsbUq6akI7CBV9IC/xQ2L04oogSeABwYH6UEfhU68Gt0vMdM0IEz6IBHQefFKyKogAPBA2O6zS0v+MB0F2QOwQcOpAL2hg/sQhXOboAP/DoN8ED4vNiVKhZLB8DjaIB/pgPgIzTAx3UAHEoDXK0DYEwTD3BCB7wJND28TAfA2TTAxToAfoMGuEYHwCep9mgT4ANTzbTQ0xr4WTG++VZt4qnTcv9/HRXwz0XjGvbMbH+T+rfN8ixEUgEPF92927repUDeGcgZKuBawf37ju3LnJV1rHeOCjhYLPC7yv/8lHta6LzQhU59j2B8GWPoe5T70mEiHfpCz7cZQW9kM20EnkDgi73expneyC8ogY+Jm3qM633UeYnaiJnyK4xQpjBgQoDGy9RG0qjPhyNF8SYTXuYdaiuXKQN5YieK4j1POuc8SG8n4wrNFTSBYzQp4mhsgxxLOY4mnbPMCRLHSwzivyzPlvmqQ0kEPEXecSA69Psr5Jqb4kAnHxd6yjKKFLSt4HD+SJ8xeUOFLv2JDn1NiUX/D+zzvi12G+oY6VBA4S3AkfZ+oJ4Vu0jaxtih23VdmvgZsbwuKk2AfinFe0MsbzRphD68goHlq2TeUsGRO6SpUeqHTNabjSTej6o06NAj2Ni++WRv01mCb3REj1XLoVt1q76X7XcF71MOIPBmfcjM/Jietj8WHNWxm+TQt9X7g0bEieX1ITn0JX+GLXwSpakbLKT8d1l3mDZx29Z23l2xvPNJDr2RbRsJtgnKXQQ79GS1HbpVNhc/zvqLBS4lTTl+xboVQ2Gn8YtieesY7nLYU+d+d57Y429vkkPHquB0CXnaCI4+qtocuqf2dhxV/Voobxknh27RE5UauIPmnU/gXaTSKFqigSGLn0O3bn60ebSPSN6pXHdevFt9epFI3jUhHB26RYtazPcTCfwbng7doukt9n8rkHcByaFHqthgJkJWgTs7y0kOfU/NeW5QLloqsIM3qLvLQdJH6Kg43k9JDv2aum1uEzhmeczlO0J3jFoHhQHfJ/A2qR3VugsZ2Ro0Obx3EiPAoVuH6QqG1n73wc4UlHp8T4Jch96v+uHHARTNzJZ747fHdGff6/vpz0jJYW6p/j06j5il7F9iE14QsbKvpx8IceiWXkFmRpZOF9u+esrn9p92Izn0OQ6neWbEqpEeAegpn9p9ulGMQ7cMqiiUkaFmREGcJiwBXyhiFJPVOzw5RTqlrVszgfcLLsfT2azugm9CFMS1JIc+yWW244MYzdWvk/L5nKKYQz/kM717FaWruLJNekD0KlLJmXuc4i0eoTK1vsOSxC+Ic+jWAyZGB6WmZkeJPxd6T+pLtI+Rpd9L3GIsc8Sh93MLIGpE81jNtAolMpHFdH+OlMrMl1/8wfsoldHMA98KkSCeZvsUMZPZH7jxmlMYZqFxbZbw6rquZxr+KNSh2+7Ystvm/5NEH1u7+ni0WIfGG9mepfXZx49Jn5Zz3Fb6c+tGfxUHYi9NODQOaqtmd4qhRUmv3tT66WCSQ/PMkBrW1uQGlibt9XGOaIfuCAfLyuZCPL+hhnSnhGfIo1tHfcbNTK1KejWpgl0A15S/Dzta3cn2ryzVxyRxrYtiOvtts0YsiJhvDG/XTunHjC1LeXUvh17Pkxdf6mq5PxbSx3wT4NputMRiEX3M16FNX9m2XYb597Ev36D07rtuzQ38iTdz5XXLVzvnf19efYLvLYueJWssmZhvH3N26N5bwzXZfPuYr0Ov8ez9BldMPPuYr0P7X+CUU1qS2Jdv2YwbxJeoVCG3g5RX83VoqQJMKUZefczXoR9LFryMOsSnj6O4xuD/xU5aHt9HXPr4Ok/e9AB7v45NaRz6uISnQ29KtT//qYxUnbieo0MbAvtOQnS/QWVijol+3EsdSgDIfuhytSlcP50f7xYHS6nn/nUd66aD1nb8NIydyg23Ya3jGaZrXmLe/LjIUQXjB82/yY33JFWBS6FZHtmogobX6g8f2IcGeBZ8XnyaBviwDoCpcsTroeyB4f9lD3Tewze/a6VL3GiA9VCc5hMaYD2UH7pDA6yHAlOzqXLT6qCEGF3pdB0UidtLBayDMoC1VMAz4ANfogJeBZ43NIsKuB78+nAHZcb0CujAtymBwRdcdqYEhl6P92Y9JXCSG2zgGOqyBxdhA9+nBt4OmvduADVwbhxk4F2IXmsh72cVywCO8IALnIPk6Eu4wCdkARcth8qbjuTpDFBe/69kAlcuhgk8AcnVFyC3ttzzZQOrmq1NNTXK50VJGXrfvOupF6ug8S6pVwSMaoF9je8uRAr1PCheUylSrD2QgG8o50XWHDi85YiFUk9B4b1eyQQYWXcD6V8LYqTcgxB4X0HsZEnU/MZ86N8QUx1fo23eN2IRYwVP0vQKeC5irsr4dVrFbXiuEqmhYKM2ef9eg9TSuX9oD3fHFaSmVj2lLdzZJ5Da+udIO3USzAuusgVKXGAntWr0xkLEQ9bqhxWkVaN32L4oxvkEjAhF7QsjxRSZDqy+kIv4Kb90Rt3izvsvfnHG8jNL2z+5x5DXcLjd5tfx5ca4zqKtDZPq9pbmIxFqmhxeMK/QqSjJ9h8fsAPuVrwvqcipcF5B+OQmpDHVnGa2/+iJQOhNVsDxMHiRldEsdIgFCDBayiRLt8cwBEb/YnFCVI0AKZnBlAMSL2pSfA5XZwEFjEK+Ucb7KBUBU7iiAhKvRyBwKlRwYTM9CgGUk+zAp8dNCKTy/i1zf9mKgCrLRQau3xwEV5b/UGevPrkMgVYBZVmFMVEIuJISKTp5fTXSgb52NN+N+VoE0ofObXHk8D7MCelGlu0r+8jHln1ZR7jtU81AV+mV4KOhAUiHKvhvJuF4yqfurWFIt7IWf3bNa/Y3Hu4Gg/vyOxNd+g0YyPkN/gc++RV3yeka6wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0xMi0yM1QxMDoyMToyNSswMDowMNoHZCMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMTItMjNUMTA6MjE6MjUrMDA6MDCrWtyfAAAAAElFTkSuQmCC",alt:"verified badge"}):Object(l.jsx)(l.Fragment,{})]}),Object(l.jsxs)("h3",{className:"user_handle",children:["@",t.user_screen_name]})]})}),Object(l.jsx)("div",{className:"tweet_content",children:Object(l.jsx)("p",{className:"tweet_text",children:t.text})}),Object(l.jsxs)("div",{className:"tweet_footer",children:[Object(l.jsxs)("div",{className:"tweet_date",children:[t.formatedDate.getHours()<10?"0"+t.formatedDate.getHours():t.formatedDate.getHours(),":",t.formatedDate.getMinutes()<10?"0"+t.formatedDate.getMinutes():t.formatedDate.getMinutes()," "," \xb7 "," ",t.formatedDate.getDate()<10?"0"+t.formatedDate.getDate():t.formatedDate.getDate(),"/",t.formatedDate.getMonth()+1<10?"0"+(t.formatedDate.getMonth()+1):t.formatedDate.getMonth()+1,"/",t.formatedDate.getFullYear()]}),Object(l.jsxs)("div",{className:"tweet_influence",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:parseInt(t.retweet_count).toLocaleString()})," ",Object(l.jsx)("span",{className:"fas fa-retweet"})," "]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:parseInt(t.favorite_count).toLocaleString()})," ",Object(l.jsx)("span",{className:"fas fa-heart"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:parseInt(t.user_followers_count).toLocaleString()})," ",Object(l.jsx)("span",{className:"fas fa-users"})]})]})]})]})})},g=function(){return Object(l.jsxs)("div",{className:"legend",children:[Object(l.jsx)("h2",{className:"lengend_main_title",children:"Legend"}),Object(l.jsxs)("div",{className:"legend_item",children:[Object(l.jsx)("div",{className:"bubble",style:{backgroundColor:"rgb(118,203,236)"}}),Object(l.jsx)("h3",{className:"legend_title",children:"Tweet considered real"})]}),Object(l.jsxs)("div",{className:"legend_item",children:[Object(l.jsx)("div",{className:"bubble",style:{backgroundColor:"rgb(236,99,137)"}}),Object(l.jsx)("h3",{className:"legend_title",children:"Tweet considered fake"})]}),Object(l.jsxs)("div",{className:"legend_item",children:[Object(l.jsx)("div",{className:"bubble",style:{backgroundColor:"rgb(255,255,255)",width:"50px",height:"50px"}}),Object(l.jsx)("h3",{className:"legend_title",children:"Size of the bubble depends on the influence factor"})]})]})},O=150,M=50,p=6e3-M-100,E=1500-O-20,N=function(e){return e.formatedDate},P=function(e){return e.x},y=function(e){return e.veracity},w=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),o=t[0],n=t[1],d=I(),s=h(),b=function(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),o=t[0],n=t[1];return Object(c.useEffect)((function(){Object(r.a)(f,(function(e){return e.formatedDate=new Date(Date.parse(e.created_at)),e})).then((function(e){n(i((function(e){return parseFloat(e.influenceNumber)>30&&e.formatedDate.getFullYear()>2019}))(e))}))}),[]),o}();if(Object(c.useEffect)((function(){!d.tweets&&b&&s({type:"tweets/provide",data:b})}),[b]),Object(c.useEffect)((function(){d.tweets&&n(i((function(e){return e.type===d.type}))(d.tweets))}),[d.tweets,d.type]),Object(c.useEffect)((function(){o&&s({type:"selected/update",data:o[0]})}),[o]),!b||!o)return Object(l.jsx)(j,{});var A=Object(r.g)().domain([Object(r.e)(o,N),Object(r.d)(o,N)]).range([0,p]).nice(),v=Object(r.f)().domain([Object(r.e)(o,P),Object(r.d)(o,P)]).range([0,E]);return o.map((function(e){return e.fy=A(N(e))})),o&&Object(r.c)(o).force("collide",Object(r.b)((function(e){return.4*e.influenceNumber+5}))).stop().tick(240),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"Viz",children:[Object(l.jsxs)("div",{className:"Infos",children:[Object(l.jsx)("button",{className:"switch_button",onClick:function(){s({type:"type/toggle"}),n(i((function(e){return e.type===d.type}))(d.tweets))},children:"Switch"}),Object(l.jsx)(x,{d:d.selected}),Object(l.jsx)(g,{})]}),Object(l.jsxs)("div",{className:"Graph",children:[Object(l.jsxs)("h1",{className:"title",children:["COVID19 - Tweet Viz : ",Object(l.jsx)("span",{className:"data_type",children:"claim"===d.type?d.type+"s":d.type})," "]}),Object(l.jsx)("svg",{width:1500,height:6e3,children:Object(l.jsxs)("g",{transform:"translate(".concat(O,", ").concat(M,")"),children:[Object(l.jsx)(u,{yScale:A,innerWidth:E,innerHeight:p}),Object(l.jsx)(m,{data:o,xScale:v,yScale:A,xValue:P,yValue:N,veracity:y})]})})]})]})})},D=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,115)).then((function(t){var o=t.getCLS,c=t.getFID,n=t.getFCP,d=t.getLCP,s=t.getTTFB;o(e),c(e),n(e),d(e),s(e)}))},S=function(){return c.useReducer}(),F={provide:"tweets/provide"},C={update:"selected/update"},G={toggle:"type/toggle"},H={tweets:null,selected:null,type:"news"},k=function(e,t){switch(t.type){case F.provide:return t.data;default:return e}},B=function(e,t){switch(t.type){case C.update:return t.data;default:return e}},Q=function(e,t){switch(t.type){case G.toggle:return"news"===e?"claim":"news";default:return e}},Y=function(e,t){return{tweets:k(e.tweets,t),selected:B(e.selected,t),type:Q(e.type,t)}},L=function(e){var t=e.children,o=S(Y,H),c=Object(a.a)(o,2),n=c[0],d=c[1];return Object(l.jsx)(v.Provider,{value:d,children:Object(l.jsx)(A.Provider,{value:n,children:t})})};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(L,{children:Object(l.jsx)(w,{})})}),document.getElementById("root")),D()},32:function(e,t,o){}},[[113,1,2]]]);
//# sourceMappingURL=main.e3ff69e5.chunk.js.map