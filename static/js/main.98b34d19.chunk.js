(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),i=a.n(c),o=(a(28),a(29),a(15)),u=a(1),s=a(2),l=a.n(s),m=a(9),d=a(16),p=a(4),h=a(5),v=a(7),f=a(6);function b(){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.id,n=e.searchFunction,c=e.selectedCat;return r.a.createElement("label",{htmlFor:a},t,r.a.createElement("input",{type:"radio",id:a,value:a,"data-testid":"category",onChange:n,name:"category",checked:a===c}))}}]),a}(r.a.Component),y=a(13);function O(e){var t=JSON.parse(localStorage.getItem("cartItems")||"[]"),a={product:e,title:e.title};t=[].concat(Object(y.a)(t),[a]),localStorage.setItem("cartItems",JSON.stringify(t))}var j=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).addToCartFunc=Object(m.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:O(e.props.produto);case 2:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.produto,n="/details/".concat(t),c=a.title,i=a.price,u=a.thumbnail,s=a.id;return r.a.createElement("div",{"data-testid":"product"},r.a.createElement("p",null,a.title),r.a.createElement("img",{src:a.thumbnail,alt:""}),r.a.createElement(o.b,{"data-testid":"product-detail-link",to:{pathname:n,state:{item:t,title:c,price:i,thumbnail:u}}},"Detalhes"),r.a.createElement("button",{type:"button",id:s,"data-testid":"product-add-to-cart",onClick:this.addToCartFunc},"Adicionar ao carrinho"))}}]),a}(n.Component),C=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.searchValue,a=e.arrProdutos,n=e.pegaValorDaPesquisa,c=e.pesquisar;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"searchValue"},r.a.createElement("input",{name:"searchValue",type:"text",value:t,onChange:n,"data-testid":"query-input"})),r.a.createElement("button",{type:"button",onClick:c,"data-testid":"query-button"},"Pesquisar"),r.a.createElement("div",null,a.map((function(e){return r.a.createElement(j,{item:e.id,key:e.id,produto:e})}))))}}]),a}(n.Component),k=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).pegaValorDaPesquisa=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.categories=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,b();case 3:e.t1=e.sent,e.t2={categories:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}}),e)}))),n.handleClick=Object(m.a)(l.a.mark((function e(){var t,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.selectedCat,e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/search?category=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,c=r.results,n.setState({arrProdutos:c});case 9:case"end":return e.stop()}}),e)}))),n.handleChange=function(e){var t=e.target.value;n.setState({selectedCat:t},(function(){n.handleClick()}))},n.state={categories:[],searchValue:"",arrProdutos:[],selectedCat:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.categories()}},{key:"render",value:function(){var e=this,t=this.state,a=t.categories,n=t.searchValue,c=t.arrProdutos,i=t.selectedCat;return r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria."),r.a.createElement(C,{searchValue:n,arrProdutos:c,pegaValorDaPesquisa:this.pegaValorDaPesquisa,pesquisar:this.handleClick}),r.a.createElement("section",null,a.map((function(t){return r.a.createElement(E,{key:t.id,id:t.id,name:t.name,selectedCat:i,searchFunction:e.handleChange})}))))}}]),a}(r.a.Component),S=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(p.a)(this,a),(n=t.call(this,e)).modifyQuantity=function(e){var t=e.target.name,a=n.state.quantity;if("decrease"===t){if(1===a)return;n.setState((function(e){return{quantity:e.quantity-1}}))}"increase"===t&&n.setState((function(e){return{quantity:e.quantity+1}}))};var r=n.props.product;return n.state={product:r,quantity:1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.product,a=e.quantity;return r.a.createElement("div",null,t?r.a.createElement("div",null,r.a.createElement("p",{"data-testid":"shopping-cart-product-name"},t.title),r.a.createElement("p",{"data-testid":"shopping-cart-product-quantity"},a),r.a.createElement("button",{"data-testid":"product-increase-quantity",name:"increase",id:t.id,onClick:this.modifyQuantity,type:"submit"},"+"),r.a.createElement("button",{"data-testid":"product-decrease-quantity",name:"decrease",id:t.id,onClick:this.modifyQuantity,type:"submit"},"-")):r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"))}}]),a}(n.Component),x=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).prodList=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(JSON.parse(localStorage.getItem("cartItems"))||[]).forEach((function(e){n.setState((function(t){return{products:[].concat(Object(y.a)(t.products),[e])}}))}));case 2:case"end":return e.stop()}}),e)}))),n.state={products:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.prodList()}},{key:"render",value:function(){var e=this.state.products;return 0===e.length?r.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"):r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(S,{key:t,product:e})})))}}]),a}(r.a.Component),q=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.evaluations;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,"".concat(e.rateStorage.email)),r.a.createElement("p",null,e.rateStorage.rate),r.a.createElement("p",null,e.rateStorage.comment))})))}}]),a}(n.Component),w=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){n.getRatings()},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.getRatings=function(){var e=n.props.id,t=JSON.parse(localStorage.getItem("evaluations")||"[]").filter((function(t){return t.id===e}));n.setState({evaluations:t})},n.saveRating=function(e){e.preventDefault();var t=n.props.id,a=n.state,r={id:t,rateStorage:{email:a.email,rate:a.rate,comment:a.comment}},c=JSON.parse(localStorage.getItem("evaluations")||"[]");c=[].concat(Object(y.a)(c),[r]),localStorage.setItem("evaluations",JSON.stringify(c))},n.state={email:"",rate:0,comment:"",evaluations:[]},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.email,n=t.rate,c=t.comment,i=t.evaluations;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"email"},"Email:",r.a.createElement("input",{"data-testid":"product-detail-email",id:"email",name:"email",type:"email",value:a,placeholder:"E-mail",onChange:this.handleChange})),r.a.createElement("label",{htmlFor:"rate"},["1","2","3","4","5"].map((function(t){return r.a.createElement("input",{key:t,"data-testid":"".concat(t,"-rating"),name:"rate",type:"checkbox",value:t,checked:n>=t,onChange:e.handleChange})}))),r.a.createElement("label",{htmlFor:"comment"},"Avalie o produto:",r.a.createElement("textarea",{"data-testid":"product-detail-evaluation",name:"comment",id:"comment",value:c,placeholder:"Deixe seu coment\xe1rio...",onChange:this.handleChange,cols:"20",rows:"10",maxLength:"30"})),r.a.createElement("button",{type:"submit","data-testid":"submit-review-btn",onClick:this.saveRating},"Avaliar")),i&&r.a.createElement("div",null,r.a.createElement("p",null,a),r.a.createElement("p",null,n)),r.a.createElement(q,{evaluations:i}))}}]),a}(n.Component),D=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).getInfo=Object(m.a)(l.a.mark((function e(){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.id,e.next=3,fetch("https://api.mercadolibre.com/items/".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,n.setState({title:r.title,price:r.price,thumbnail:r.thumbnail,products:r});case 8:case"end":return e.stop()}}),e)}))),n.addToCartFunc=Object(m.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(n.state.products);case 2:case"end":return e.stop()}}),e)}))),n.state={title:"",price:"",thumbnail:"",products:[]},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.price,n=e.thumbnail,c=this.props.match.params.id;return r.a.createElement("div",null,r.a.createElement("div",{"data-testid":"product-detail-name"},r.a.createElement("h1",null,t),r.a.createElement("p",null,a),r.a.createElement("img",{src:n,alt:t})),r.a.createElement("button",{type:"button",id:c,"data-testid":"product-detail-add-to-cart",onClick:this.addToCartFunc},"Adicionar ao carrinho"),r.a.createElement(w,{id:c}))}}]),a}(r.a.Component);var I=function(){return r.a.createElement(o.a,null,r.a.createElement(o.b,{to:"/carrinho","data-testid":"shopping-cart-button"},"Carrinho"),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:k}),r.a.createElement(u.a,{exact:!0,path:"/carrinho",component:x}),r.a.createElement(u.a,{exact:!0,path:"/details/:id",component:D})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.98b34d19.chunk.js.map