(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2ca87a2"],{"0847":function(t,a,e){"use strict";e("855b")},"2cbe":function(t,a,e){"use strict";e("8e09")},"49bd":function(t,a,e){},"855b":function(t,a,e){},"857a":function(t,a,e){var s=e("e330"),o=e("1d80"),i=e("577e"),n=/"/g,r=s("".replace);t.exports=function(t,a,e,s){var c=i(o(t)),l="<"+a;return""!==e&&(l+=" "+e+'="'+r(i(s),n,"&quot;")+'"'),l+">"+c+"</"+a+">"}},"8e09":function(t,a,e){},9911:function(t,a,e){"use strict";var s=e("23e7"),o=e("857a"),i=e("af03");s({target:"String",proto:!0,forced:i("link")},{link:function(t){return o(this,"a","href",t)}})},a177:function(t,a,e){t.exports=e.p+"img/bsc_right-arrow.b44b1698.svg"},aad6:function(t,a,e){"use strict";e("c364")},abae:function(t,a,e){t.exports=e.p+"img/heco_right-arrow.d68ddddb.svg"},af03:function(t,a,e){var s=e("d039");t.exports=function(t){return s((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},b276:function(t,a,e){"use strict";e("49bd")},c364:function(t,a,e){},c438:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title-banner",class:[t.getLanguage,t.chainName]},[["/buyback","/pastrecord"].includes(t.routerPath)?e("div",{staticClass:"banner-con",style:{backgroundImage:"url("+t.getImg("buyback")+")"}}):t._e(),e("div",{directives:[{name:"show",rawName:"v-show",value:"/liquidity"==t.routerPath,expression:"routerPath == '/liquidity'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("CurrentTransacObtainCurrencytionVolume"))+" ")]),e("div",{staticClass:"ban-center"},[e("p",{staticClass:"liquidity-mdx ban-center"},[t._v(" "+t._s(t.$t("MDXtotal"))+" "),e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}}),t._v(" USDT ")],1),e("p",{staticClass:"liquidity-mdx dig",on:{click:t.jumpHandle}},[e("span",[t._v(t._s(t.$t("VoteDig")))]),e("img",{attrs:{src:"Heco"==t.chainName?t.hecoArrow:t.bscArrow,alt:""}})])])]),e("div",{staticClass:"h5 li-h5title ban-start text Heavy"},[e("div",{staticClass:"act-title"},[e("p",[t._v(t._s(t.$t("LiquidityMining")))]),e("p")]),e("router-link",{staticClass:"li-title",attrs:{to:"/trading",tag:"div",exact:""}},[e("span",{staticClass:"text Heavy"},[t._v(" "+t._s(t.$t("TradePool"))+" ")])])],1),e("div",{staticClass:"h5 li-banner-total"},[e("div",{staticClass:"banner-tit"},[t._v(t._s(t.$t("TotalLockIn"))+" "),t._e()]),e("div",{staticClass:"banner-sum numbers"},[e("CountUp",{attrs:{endVal:t.liquidity_mdex||0}})],1)])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/trading"==t.routerPath,expression:"routerPath == '/trading'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("tradeTitle"))+" ")]),e("div",{staticClass:"new-banner-totals"},[e("div",{staticClass:"new-banner-total-white"},[e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("TotalRewardOfCurrentPool"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])]),e("div",{staticClass:"list-white"},[e("span",{staticClass:"list-white-one"},[t._v(" "+t._s(t.$t("CurrentIndividualWithdrawableBonus"))+" ")]),e("span",{staticClass:"list-white-own numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}})],1),e("span",{staticClass:"list-white-one"},[t._v("MDX")])])]),e("button",{staticClass:"new-list-white-banner",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])]),e("div",{staticClass:"h5 li-h5title ban-start"},[e("router-link",{staticClass:"li-title",attrs:{to:"/liquidity",tag:"div",exact:""}},[e("span",[t._v(" "+t._s(t.$t("LiquidityMining"))+" ")])]),e("div",{staticClass:"act-title act-mining text Heavy"},[e("p",[t._v(t._s(t.$t("TradePool")))]),e("p")])],1),e("div",{staticClass:"h5 trading-banner"},[e("div",{staticClass:"ban-start trading-ban-list"},[e("div",[e("p",[t._v(t._s(t.$t("TotalRewardOfCurrentPool")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_totalReward}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)]),e("div",[e("p",[t._v(t._s(t.$t("CurrentIndividualWithdrawableBonus")))]),e("p",{staticClass:"numbers"},[e("CountUp",{attrs:{endVal:t.trading_userReward,options:t.trading_options}}),e("span",{staticClass:"h5-sum"},[t._v("MDX")])],1)])]),e("div",{staticClass:"ban-center"},[e("button",{staticClass:"new-banner-btn-dra text Bold",attrs:{disabled:!t.trading_userReward},on:{click:t.onWithdrawal}},[t._v(" "+t._s(t.$t("CashWithdrawalReward"))+" ")])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/boardroom"==t.routerPath,expression:"routerPath == '/boardroom'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("text9"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("text8"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("Directors"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/bridge"==t.routerPath,expression:"routerPath == '/bridge'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(128==t.chainId?t.$t("MDEForEcoEurrencyTrading1"):56==t.chainId?t.$t("MDEForEcoEurrencyTrading2"):t.$t("MDEForEcoEurrencyTrading3"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(t.$t("lightText"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("crossChainBridge"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:["BoardroomPool","Lockup"].includes(t.$route.name),expression:"['BoardroomPool', 'Lockup'].includes($route.name)"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("poolTitle"))+" ")]),e("h2",{staticClass:"home__banner-describe"},[t._v(" "+t._s(128==t.chainId?t.$t("poolDescribe1"):56==t.chainId?t.$t("poolDescribe2"):t.$t("poolDescribe3"))+" ")])]),e("div",{staticClass:"h5 boardroom-banner__title"},[t._v(" "+t._s(t.$t("transaction"))+" ")])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/introduce"===t.routerPath,expression:"routerPath === '/introduce'"}],staticClass:"banner-bar text"},[e("div",{staticClass:"pc"},[e("h1",{staticClass:"home__banner-title"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"===t.$store.state.language?t._e():e("div",[e("h1",{staticClass:"introduce_banner"},[t._v(" "+t._s(t.$t("introduce"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("introduceDsc"))+" ")])]),t.isPC||"en"!==t.$store.state.language?t._e():e("div",[e("p",{staticClass:"text-info"},[t._v(t._s(t.$t("introduceComplete")))])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"/priceplan"===t.routerPath,expression:"routerPath === '/priceplan'"}],staticClass:"banner-bar text"},[e("h1",{staticClass:"home__banner-title"},[t._v(" MDEX "+t._s(t.$t("sjrd"))+" ")]),e("h2",{staticClass:"introduceDsc"},[t._v(" "+t._s(t.$t("sjplantitle"))+" ")])])])},o=[],i=(e("a9e3"),e("99af"),{name:"HomeBanner",data:function(){return{hecoArrow:e("abae"),bscArrow:e("a177")}},props:{liquidity_mdex:{type:String|Number,default:0},trading_userReward:{type:String|Number|Boolean,default:0},trading_options:{type:Object|Array,default:function(){}},trading_totalReward:{type:String|Number|Boolean,default:0}},computed:{routerPath:function(){return this.$route.path}},mounted:function(){},$computed:{bnp:"bnp"},methods:{stitchingPic:function(){var t="";return this.isPC?t+="pc_":t+="h5_","zh-CN"===this.getLanguage?t+="zh-CN_":t+="en_",t+=this.chainName,t},getImg:function(t){var a={buyback:{"pc_zh-CN_Heco":"buyback_pc_zh-CN_Heco","pc_zh-CN_Bsc":"buyback_pc_zh-CN_Bsc",pc_en_Heco:"buyback_pc_en_Heco",pc_en_Bsc:"buyback_pc_en_Bsc","h5_zh-CN_Heco":"buyback_h5_zh-CN_Heco","h5_zh-CN_Bsc":"buyback_h5_zh-CN_Bsc",h5_en_Heco:"buyback_h5_en_Heco",h5_en_Bsc:"buyback_h5_en_Bsc"}};return e("e8b59")("./".concat(t,"/").concat(a[t][this.stitchingPic()],".png"))},onWithdrawal:function(){this.$emit("on-withdrawal")},jumpHandle:function(){window.open(this.getUrlList["VoteDig"])}}}),n=i,r=(e("2cbe"),e("2877")),c=Object(r["a"])(n,s,o,!1,null,"003ed3a3",null);a["a"]=c.exports},d07f:function(t,a,e){t.exports=e.p+"img/metamask-fox.c06f3a3e.svg"},e346:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"boardroom-pool",class:[t.chainName,t.getLanguage]},[s("title-banner"),s("div",{staticClass:"boardroom-pool__content text"},[s("div",{staticClass:"boardroom-pool__cards"},[s("div",{staticClass:"boardroom-pool__content-card"},[t.isMobile?s("div",{class:"boardroom"==t.poolData.type?"addToken-bar":"fix_addToken-bar"},[s("p",{directives:[{name:"show",rawName:"v-show",value:"boardroom"==t.poolData.type,expression:"poolData.type == 'boardroom'"}],staticClass:"addToken",on:{click:function(a){return t.addToken(t.poolData)}}},[s("img",{attrs:{src:e("d07f")}}),t._v(" "+t._s(t.$t("addToken.text",{token:t.poolData.earned_token}))+" ")]),s("div",{staticClass:"pool__card-buttons"},[s("button",{staticClass:"claim",attrs:{disabled:!t.earn||t.earn.hasOwnProperty("mdx")&&!t.earn["mdx"]||t.isblack},on:{click:t.handleClaim}},[t._v(" "+t._s(t.$t("Claim"))+" ")])])]):t._e(),t.poolData.earnedToken&&t.poolData.earnedToken.includes("&")?s("div",[s("div",{staticClass:"pool-item"},[s("div",{staticClass:"pool__card-icon"},[s("img",{attrs:{src:t.getImgUrl(t.poolData.earned_token),alt:""}})]),s("div",[s("div",{staticClass:"pool__card-text"},[t._v(" "+t._s(t.poolData.earned_token||"MDX")+" "+t._s(t.$t("Earneds"))+" ")]),s("div",{staticClass:"pool__card-price numbers"},[t._v(" "+t._s(Math.floor(1e4*+t.earn["earn"])/1e4)+" ")])])]),s("div",{staticClass:"pool-item"},[s("div",{staticClass:"pool__card-icon"},[s("img",{attrs:{src:t.getImgUrl(t.poolData.pool_name),alt:""}})]),s("div",[s("div",{staticClass:"pool__card-text"},[t._v(" "+t._s(t.poolData.pool_name||"MDX")+" "+t._s(t.$t("Earneds"))+" ")]),s("div",{staticClass:"pool__card-price numbers"},[t._v(" "+t._s(Math.floor(1e4*+t.earn["mdx"])/1e4)+" ")])])])]):s("div",[s("div",{staticClass:"pool__card-icon"},[s("img",{attrs:{src:t.getImgUrl(t.poolData.earnedToken),alt:""}})]),s("div",{staticClass:"pool__card-text mv15"},[t._v(" "+t._s(t.poolData.earnedToken||"MDX")+" "+t._s(t.$t("Earneds"))+" ")]),s("div",{staticClass:"pool__card-price numbers"},[t._v(" "+t._s(Math.floor(1e4*t.earn)/1e4)+" ")])]),t.isPC?s("div",{staticClass:"pool__card-buttons"},[s("button",{staticClass:"claim",attrs:{disabled:!t.earn||t.earn.hasOwnProperty("mdx")&&!t.earn["mdx"]||t.isblack},on:{click:t.handleClaim}},[t._v(" "+t._s(t.$t("Claim"))+" ")])]):t._e(),t.isPC?s("div",{class:"boardroom"==t.poolData.type?"addToken-bar":"fix_addToken-bar"},[s("p",{directives:[{name:"show",rawName:"v-show",value:"boardroom"==t.poolData.type,expression:"poolData.type == 'boardroom'"}],staticClass:"addToken bo",on:{click:function(a){return t.addToken(t.poolData)}}},[s("img",{attrs:{src:e("d07f")}}),t._v(" "+t._s(t.$t("addToken.text",{token:t.poolData.earned_token}))+" ")])]):t._e()]),s("div",{staticClass:"boardroom-pool__content-card"},[s("img",{attrs:{src:t.getLpImgUrl(t.poolData),alt:"",height:"50"}}),t.isMobile?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isblack,expression:"!isblack"}],staticClass:"pool__card-buttons"},[0==t.allowance&&t.account?s("button",{staticClass:"connect",on:{click:t.handleApprove}},[t._v(" "+t._s(t.$t("Approve"))+" ")]):t._e(),t.account?t._e():s("button",{staticClass:"connect",on:{click:t.handleWallet}},[t._v(" "+t._s(t.$t("UnlockWallet"))+" ")]),t.allowance>0&&t.account?s("div",{staticClass:"pool__card-step-warp line_bg"},[s("div",{staticClass:"pool__card-step",on:{click:function(){return t.operateHandle("withdraw")}}},[t._v(" - ")]),s("div",{staticClass:"line_middel"}),"liquidity"==t.poolData.type&&(t.poolData.pid<8&&128==t.chainId||t.poolData.pid<28&&56==t.chainId)||"OLDHOO"==t.poolData.earned_token||"ZT"==t.poolData.earned_token||t.poolData.name.includes("ZT")?t._e():s("div",{staticClass:"pool__card-step",on:{click:function(){return t.operateHandle("despoit")}}},[t._v(" + ")])]):t._e()]):t._e(),s("div",{staticClass:"filed-bar"},[s("div",[s("div",{staticClass:"pool__card-text mv15"},[t._v(" "+t._s(t.poolData.name)+" "+t._s(t.$t("Stakeds"))+" ")]),s("div",{staticClass:"pool__card-price numbers"},[t._v(" "+t._s(Math.floor(1e4*t.stakedValue)/1e4)+" ")])]),"boardroom"==t.poolData.type&&t.isMobile&&t.allowance>0&&t.poolData.end_block&&t.poolData.end_block>0?s("div",[s("div",{staticClass:"pool__card-text mv15"},[t._v(" "+t._s(t.poolData.name)+" "+t._s(t.$t("EndBlock"))+" ")]),s("div",{staticClass:"pool__card-price numbers",on:{click:function(a){return t._toBlock(t.poolData.end_block,t.chainName)}}},[t._v(" "+t._s(t.poolData.end_block)+" ")])]):t._e()]),t.isPC?s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isblack,expression:"!isblack"}],staticClass:"pool__card-buttons"},[0==t.allowance&&t.account?s("button",{staticClass:"connect",on:{click:t.handleApprove}},[t._v(" "+t._s(t.$t("Approve"))+" ")]):t._e(),t.account?t._e():s("button",{staticClass:"connect",on:{click:t.handleWallet}},[t._v(" "+t._s(t.$t("UnlockWallet"))+" ")]),t.allowance>0&&t.account?s("div",{staticClass:"pool__card-step-warp"},[s("div",{staticClass:"pool__card-step",on:{click:function(){return t.operateHandle("withdraw")}}},[t._v(" - ")]),"liquidity"==t.poolData.type&&(74==t.poolData.pid&&128==t.chainId||t.poolData.pid<8&&128==t.chainId||t.poolData.pid<28&&56==t.chainId)||"OLDHOO"==t.poolData.earned_token||t.poolData.name.includes("ZT")?t._e():s("div",{staticClass:"pool__card-step",on:{click:function(){return t.operateHandle("despoit")}}},[t._v(" + ")])]):t._e()]):t._e(),t.account&&t.isblack?s("p",[t._v(t._s(t.$t("apprveMsg",{address:t.spender})))]):t._e(),t.account&&t.isblack?s("a",{attrs:{target:"_blank",href:"https://debank.com/profile/"+this.account+"/approve"}},[t._v(t._s(t.$t("cancelApprove")))]):t._e()])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isblack,expression:"isblack"}],staticClass:"tips"},[s("img",{attrs:{src:e("ece6"),alt:""}}),s("span",{domProps:{innerHTML:t._s(t.$t("noticeTips"))}}),s("span",{domProps:{innerHTML:t._s(t.$t("investNotice"))}})]),t.isPC?s("div",{staticClass:"pool-settle-provide"},[s("button",{staticClass:"pool-settle",attrs:{disabled:!t.earn||t.earn.hasOwnProperty("mdx")&&!t.earn["mdx"]},on:{click:t.settle}},[t._v(" "+t._s(t.$t("SettleWithdraw"))+" ")]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.link,expression:"link"}],staticClass:"pool-settle provide",attrs:{href:t.link,target:"_blank"}},[t._v(" "+t._s(t.$t("ProvideLiquidity"))+" ")])]):t._e(),t.isMobile?s("div",{staticClass:"pool-settle-provide line_disappear"},[s("div",{staticClass:"pool-settle button",class:[!t.earn||t.earn.hasOwnProperty("mdx")&&!t.earn["mdx"]?" isDisabeld":""],on:{click:t.settle}},[t._v(" "+t._s(t.$t("SettleWithdraw"))+" ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.link,expression:"link"}],staticClass:"middel"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.link,expression:"link"}],staticClass:"right pool-settle provide"},[s("a",{staticClass:"pool-settle provide",attrs:{href:t.link,target:"_blank"}},[t._v(" "+t._s(t.$t("ProvideLiquidity"))+" ")])])]):t._e()]),s("Despoit",{ref:"despoit",attrs:{pid:t.poolData.pid,max:t.lpBalance,data:t.poolData,erc20Utils:t.erc20Utils},on:{updateData:t.updateData}}),s("Withdraw",{ref:"withdraw",attrs:{pid:t.poolData.pid,max:t.stakedValue,data:t.poolData,erc20Utils:t.erc20Utils},on:{updateData:t.updateData}})],1)},o=[],i=e("1da1"),n=e("5530");e("a4d3"),e("e01a"),e("d3b7"),e("d28b"),e("3ca3"),e("ddb0");function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e("96cf"),e("a9e3"),e("ac1f"),e("1276"),e("b0c0"),e("7db0"),e("caad"),e("2532"),e("9911"),e("fb6a"),e("99af");var c=e("4f22"),l=e("c438"),d=e("6a56"),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{class:t.chainName,attrs:{name:"modal"}},[t.modelShow?s("div",{staticClass:"model"},[s("div",{staticClass:"model-wrap"},[s("h3",[t._v(t._s(t.$t("Withdraw"))+" "+t._s(t.data.name))]),s("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:t.hideModel}}),s("div",{staticClass:"input-wrap"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text"},domProps:{value:t.value},on:{input:function(a){a.target.composing||(t.value=a.target.value)}}}),s("div",{staticClass:"button-wrap"},[s("button",{attrs:{disabled:!t.max},on:{click:t.setMax}},[t._v("MAX")])])]),s("p",[t._v(t._s(t.max)+" "+t._s(t.data.name)+" "+t._s(t.$t("Available")))]),s("div",{staticClass:"btn"},[s("div",{staticClass:"cancel",on:{click:this.hideModel}},[t._v(t._s(t.$t("Cancel")))]),s("button",{staticClass:"confirm",attrs:{disabled:!Number(t.value)||Number(t.value)>Number(t.max)},on:{click:t.handelWithdrawl}},[t._v(" "+t._s(t.$t("Confirm"))+" ")])])])]):t._e()])},p=[],_=e("2f62"),v=null,h={name:"Withdraw",props:["max","pid","data","erc20Utils"],data:function(){return{modelShow:!1,value:""}},computed:Object(n["a"])({},Object(_["mapGetters"])(["isPC","isMobile","currentAddress"])),mounted:function(){},methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},handelWithdrawl:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.hideModel(),e="Withdrawl ".concat(t.value," ").concat(t.data.name),s=t.$overalltip({type:"loading",msg:e}),o=t.erc20Utils.unStake,o(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),s.close();var o="".concat(e," Success");v=t.$overalltip({type:"success",msg:o})})).catch((function(a){s.close();var o="".concat(e," Error");v=t.$overalltip({type:"error",msg:o})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){v&&v.close()}},m=h,b=(e("0847"),e("2877")),f=Object(b["a"])(m,u,p,!1,null,"2c4cd4ba",null),C=f.exports,w=e("837b"),g=e("4027"),k=function(){var t=this,a=this,s=a.$createElement,o=a._self._c||s;return o("transition",{class:a.chainName,attrs:{name:"modal"}},[a.modelShow?o("div",{staticClass:"model"},[o("div",{staticClass:"model-wrap text"},[o("img",{staticClass:"close-icon",attrs:{src:e("c2f4")},on:{click:a.hideModel}}),o("h3",[a._v(a._s(a.$t("Deposit"))+" "+a._s(a.data.name))]),o("div",{staticClass:"input-wrap numbers"},[o("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"value"}],attrs:{type:"text"},domProps:{value:a.value},on:{input:function(t){t.target.composing||(a.value=t.target.value)}}}),o("div",{staticClass:"button-wrap"},[o("button",{attrs:{disabled:!a.max},on:{click:function(){return t.setMax()}}},[a._v("MAX")])])]),o("p",{staticClass:"numbers"},[a._v(a._s(a.max)+" "+a._s(a.data.name)+" "+a._s(a.$t("Available")))]),o("div",{staticClass:"btn"},[o("div",{staticClass:"cancel",on:{click:this.hideModel}},[a._v(a._s(a.$t("Cancel")))]),o("button",{staticClass:"confirm",attrs:{disabled:!Number(a.value)||Number(a.value)>Number(a.max)},on:{click:a.despoit}},[a._v(" "+a._s(a.$t("Confirm"))+" ")])])])]):a._e()])},y=[],D=null,$={name:"Despoit",data:function(){return{modelShow:!1,value:""}},props:["max","pid","data","erc20Utils"],computed:Object(n["a"])({},Object(_["mapGetters"])(["isPC","isMobile","currentAddress"])),methods:{showModel:function(){this.modelShow=!0},hideModel:function(){this.modelShow=!1},setMax:function(){this.value=this.max},despoit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,t.hideModel(),s="Deposit ".concat(t.value," ").concat(t.data.name),o=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.value,t.account).then((function(a){t.$emit("updateData"),o.close();var e="".concat(s," Success");D=t.$overalltip({type:"success",msg:e})})).catch((function(a){o.close();var e="".concat(s," Error");D=t.$overalltip({type:"error",msg:e})})).finally((function(){t.value=0}));case 5:case"end":return a.stop()}}),a)})))()}},beforeDestroy:function(){D&&D.close()}},x=$,N=(e("b276"),Object(b["a"])(x,k,y,!1,null,"79faddfd",null)),T=N.exports,M=null,P={name:"BoardroomPool",components:{Despoit:T,Withdraw:C,tipDialog:g["a"],TitleBanner:l["a"]},data:function(){return{stakedOptions:{decimalPlaces:4},link:"",isblack:!1,spender:""}},created:function(){},computed:{coinConfig:function(){return w["a"][this.chainId]},blackData:function(){return this.$store.state.blackData},stakedValue:function(){return this.$store.state.boardRoom.stakedValue},earn:function(){var t=this.$store.state.boardRoom.earn;return"object"==r(t)?t:Number(t)},allowance:function(){return this.$store.state.boardRoom.allowance},lpBalance:function(){return this.$store.state.boardRoom.lpBalance},apylist:function(){return{liquidity:this.$store.state.liquidity.apylist,minpool:this.$store.state.activePool.apylist}},isShowTips:function(){var t=this.poolData.name.split(" ")[0].split("/");return t.find((function(t){return"BLACK"===t}))},poolData:function(){var t=this.$route.params,a=t.type,e=t.earn,s=t.id;if("boardroom"==a){var o=this.$store.getters["boardRoom/currentChainBoardRoomData"][e],i=o.find((function(t){return t.pid==s}))||{};return i.name.includes(" LP")&&(this.link=Object(d["c"])(this.getLanguage,this.chainName,i.token_main,i.token_slave)),Object(n["a"])(Object(n["a"])({},i),{},{earn:e,type:a})}if("liquidity"==a){var r=this.$store.getters["liquidity/poolList"],c=r.find((function(t){return t.pid==s}))||{};if(this.apylist[a][c.pid]){var l=this.apylist[a][c.pid];l.pool_name.includes("/")&&(this.link=Object(d["c"])(this.getLanguage,this.chainName,l.token0,l.token1))}return Object(n["a"])(Object(n["a"])({},c),{},{earn:e,type:a})}if("minpool"==a){var u=this.$store.state.activePool.poolList,p=u.find((function(t){return t.pid==s}))||{};if(this.apylist[a][p.pid]){var _=this.apylist[a][p.pid];_.pool_name.includes("/")&&(this.link=Object(d["c"])(this.getLanguage,this.chainName,_.token0,_.token1))}return Object(n["a"])(Object(n["a"])({},p),{},{earn:e,type:a})}},erc20Utils:function(){var t=this.$route.params,a=t.type,e=t.earn;return Object(c["l"])(this.$store.state.chainId,a,e)}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e=t.$route.params.id,t.pid=e,t.updateData(),s=t.poolData.lpAddress,!t.blackData[s.toLowerCase()]){a.next=9;break}return a.next=7,Object(c["g"])(s,t.account,t.blackData[s.toLowerCase()]);case 7:o=a.sent,o>0&&(t.isblack=!0,t.spender=t.blackData[s.toLowerCase()].slice(0,4)+"..."+t.blackData[s.toLowerCase()].slice(-4));case 9:case"end":return a.stop()}}),a)})))()},watch:{chainId:function(){this.updateData()}},methods:{isDoubleBenefit:function(){var t,a=null!==(t=this.poolData.earnedToken)&&void 0!==t?t:this.poolData.earn;return a.includes("&")},operateHandle:function(t){"withdraw"==t&&this.$refs.withdraw.showModel(),"despoit"==t&&this.$refs.despoit.showModel()},getImgUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"MDX";return this.globalGetImgUrl(this.coinConfig[t.toLowerCase()])},getLpImgUrl:function(t){return this.globalGetImgUrl(t.lpAddress)},updateData:function(){this.$store.dispatch("boardRoom/getWalletData",this.poolData)},addToken:function(t){var a=18;"HOO"!=t.earnedToken&&"ARV"!=t.earnedToken||(a=8),"PID"!=t.earnedToken&&"nPID"!=t.earnedToken&&"RICI"!=t.earnedToken&&"META"!=t.earnedToken||(a=9);var e=this.getImgUrl(t.earned_token),s="boardroom"==t.type?t.earned_token:"MDX";ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:this.coinConfig[s.toLowerCase()],symbol:s,decimals:a,image:e}}})},settle:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.unStake,s="Settle & Withdraw Tokens",o=t.$overalltip({type:"loading",msg:s}),e(t.pid,t.stakedValue,t.account).then((function(a){t.updateData(),o.close();var e="".concat(s," Success");M=t.$overalltip({type:"success",msg:e})})).catch((function(a){o.close();var e="".concat(s," Error");M=t.$overalltip({type:"error",msg:e})}));case 4:case"end":return a.stop()}}),a)})))()},handleWallet:function(){Object(c["p"])(),this.updateData()},warnningTips:function(){M=this.$overalltip({type:"error",msg:this.$i18n.t("DoubleDiggingTips",{url:this.getUrlList["Telegram"]})})},handleClaim:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils.despoitValue,s=function(){return t.isDoubleBenefit()?"Claim ".concat(t.earn["earn"]," ").concat(t.poolData.earned_token," & ").concat(t.earn["mdx"]," ").concat(t.poolData.pool_name):"Claim ".concat(t.earn," ").concat(t.poolData.earn.toUpperCase())}(),o=t.isDoubleBenefit()?"".concat(t.poolData.earned_token," & ").concat(t.poolData.pool_name):t.poolData.earn.toUpperCase(),i=t.$overalltip({type:"loading",msg:s}),e(t.pid,0,t.account).then((function(a){t.updateData(),i.close();var e="Claim ".concat(o," Success");M=t.$overalltip({type:"success",msg:e})})).catch((function(a){i.close();var e="Claim ".concat(o," Error");M=t.$overalltip({type:"error",msg:e})}));case 5:case"end":return a.stop()}}),a)})))()},handleApprove:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,o,i,n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e=t.erc20Utils,s=e.approveToken,o=e.saveLocalAllowance,i=t.poolData.lpAddress,n="Approve ".concat(t.poolData.name),r=t.$overalltip({type:"loading",msg:n}),s(i,t.account).then((function(a){r.close(),o(i,t.account),t.updateData();var e="".concat(n," Success");M=t.$overalltip({type:"success",msg:e})})).catch((function(a){r.close();var e="".concat(n," Error");M=t.$overalltip({type:"error",msg:e})}));case 5:case"end":return a.stop()}}),a)})))()},_toBlock:d["d"]},beforeDestroy:function(){M&&M.close()}},O=P,U=(e("aad6"),Object(b["a"])(O,s,o,!1,null,"d60c9bc0",null));a["default"]=U.exports},e8b59:function(t,a,e){var s={"./buyback/buyback_h5_en_Bsc.png":"2063","./buyback/buyback_h5_en_Heco.png":"4cee","./buyback/buyback_h5_zh-CN_Bsc.png":"e584","./buyback/buyback_h5_zh-CN_Heco.png":"f1b0","./buyback/buyback_pc_en_Bsc.png":"7bdc","./buyback/buyback_pc_en_Heco.png":"5150","./buyback/buyback_pc_zh-CN_Bsc.png":"175c","./buyback/buyback_pc_zh-CN_Heco.png":"c7ec"};function o(t){var a=i(t);return e(a)}function i(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}o.keys=function(){return Object.keys(s)},o.resolve=i,t.exports=o,o.id="e8b59"},ece6:function(t,a,e){t.exports=e.p+"img/notice.93afaa49.svg"}}]);