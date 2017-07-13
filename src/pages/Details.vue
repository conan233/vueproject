<template>
	<div id="main">
    <div>
<a href="javascript:window.history.back(-1);" class="back"><i class="icon-back"></i></a>
<a href="#/cart" class="newcart"></a>

<div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide"><a href=""><img :src="detail.img1" class="img"></a></div>
        <div class="swiper-slide"><a href=""><img :src="detail.img2" class="img"></a></div>
        <div class="swiper-slide"><a href=""><img :src="detail.img3" class="img"></a></div>
        <div class="swiper-slide"><a href=""><img :src="detail.img4" class="img"></a></div>
    </div>
    <div class="swiper-pagination"></div>
</div>

<section class="price-info layout bb">
    <span class="product-tit">
        <p class="product-tit-m nowrap">
            {{detail.dname}}         </p>
        <p class="product-tit-note">
            5斤/箱， 5个左右。火龙果果肉为白色，有芝麻大小黑籽。有美白皮肤、养颜的功效能够减肥、降血糖、润肠滑肠、预防大肠癌发生等。有时候个别火龙果会出现花皮现象，这是正常的，请放心，不会影响食用品质。
        </p>
        <p>{{detail.dsize}}</p>

        <!--            <b class="share"><a href="#"><i></i>分享</a></b>-->
    </span>
    <span class="product-price">
            <p> &nbsp;<strong id="sprice" data-default-price="¥59.90">{{detail.dprice}}</strong> 直供价</p>
            <p><span>{{detail.dsize1}}</span>&nbsp;&nbsp;<span>已售 545 件</span>&emsp;<span></span></p>
        <p style="line-height:22px;"><span>配&nbsp;&nbsp;送: 偏远地区不发货(新疆、甘肃、内蒙、宁夏、青海、黑龙江、辽宁、吉林、西藏）</span></p>
                <p><b>优惠：</b><span>猜你喜欢</span></p>
            </span>
</section>


<section class="product-tab layout mt10">
    <ul>
        <li :class="{current:iscurrent==1}"  @click="iscurrent=1">图文详情</li>
        <li :class="{current:iscurrent==2}"  @click="iscurrent=2">产地介绍</li>
        <li :class="{current:iscurrent==3}"  @click="iscurrent=3">累计评价</li>
    </ul>
</section>
<section class="product-tab-box layout">
    <div class="product-box-in" v-if="iscurrent==1">
        <p style="text-align: center"><img alt="pic" src="http://img2.caichongwang.com/thumbs/0038822.jpeg"><img alt="pic" src="http://img2.caichongwang.com/thumbs/0038823.jpeg" style="font-size: 10pt"><img alt="pic" src="http://img2.caichongwang.com/thumbs/0038824.jpeg" style="font-size: 10pt"><img src="http://img2.caichongwang.com/thumbs/0049604.jpeg" alt="pic"><img src="http://img2.caichongwang.com/thumbs/0049605.jpeg" alt="pic"><img src="http://img2.caichongwang.com/thumbs/0049606.jpeg" alt="pic"><img alt="pic" src="http://img2.caichongwang.com/thumbs/0038828.jpeg" style="font-size: 10pt"><img alt="pic" src="http://img2.caichongwang.com/thumbs/0038829.jpeg" style="font-size: 10pt"><img src="http://img2.caichongwang.com/thumbs/0049607.jpeg" alt="pic"></p>
    </div>
    <div class="product-box-in" v-if="iscurrent==2">
        <div><br>
		<img alt="pic" src="http://img2.caichongwang.com/thumbs/0039438.jpeg"></div>
		<div><span style="font-family: 宋体; font-size: 10.5pt">越南，位于中南半岛东部，国土呈</span><span lang="EN-US" style="font-family: calibri; font-size: 10.5pt">S</span><span style="font-family: 宋体; font-size: 10.5pt">形，南北共长两千公里，北与中国接壤，西与老挝、柬埔寨交界，东面和南面临南海，海岸线长</span><span lang="EN-US" style="font-family: calibri; font-size: 10.5pt">3260</span><span style="font-family: 宋体; font-size: 10.5pt">多公里。越南一直以来给人们的印象不太好，这可能是人们听了太多与它有关的战争及难民事件，令游客望而却步</span>。</div>
		<div><img alt="pic" src="http://img2.caichongwang.com/thumbs/0039439.jpeg">
		<br>
		</div>
		<div><span style="font-family: 宋体; font-size: 10.5pt; mso-bidi-font-size: 11.0pt; mso-ascii-font-family: calibri; mso-hansi-font-family: calibri; mso-bidi-font-family: times new roman; mso-font-kerning: 1.0pt; mso-ansi-language: en-us; mso-fareast-language: zh-cn; mso-bidi-language: ar-sa">其实，只要你来到越南，就会发现那里并不像传说中那么可怕，当地的名胜古迹不少，而且融合了东方的神秘色彩和法国的浪漫风情，加上农产品丰富，各种水果非常便宜，物<a name="_GoBack"></a>价指数也低。为人们提供一个物美价廉的农产购物的好去处。</span></div>
		<div><br>
		<br>
		<img alt="pic" src="http://img2.caichongwang.com/thumbs/0039440.jpeg">
		</div>
		<div><span style="font-family: 宋体; font-size: 10.5pt; mso-bidi-font-size: 11.0pt; mso-ascii-font-family: calibri; mso-hansi-font-family: calibri; mso-bidi-font-family: times new roman; mso-font-kerning: 1.0pt; mso-ansi-language: en-us; mso-fareast-language: zh-cn; mso-bidi-language: ar-sa">同时，火龙果代表吉祥，如果是普通朋友直接送是一种美好的祝福。火龙果还象征着贵族式的爱情，如果是男女朋友的话，女生送男生火龙果，是意味着“我不在乎你富贵与否”</span></div>
		<div><br>
		<br>
		<img alt="pic" src="http://img2.caichongwang.com/thumbs/0039441.jpeg"></div>
		<div><span style="font-family: 宋体; font-size: 10.5pt; mso-bidi-font-size: 11.0pt; mso-ascii-font-family: calibri; mso-hansi-font-family: calibri; mso-bidi-font-family: times new roman; mso-font-kerning: 1.0pt; mso-ansi-language: en-us; mso-fareast-language: zh-cn; mso-bidi-language: ar-sa">火龙果为热带、亚热带水果，喜光耐阴、耐热耐旱、喜肥耐瘠。在温暖湿润、光线充足的环境下生长迅速，而越南中年高温多雨，为种植火龙果提供得天独厚的生长环境</span></div>
		    </div>
    <div class="product-box-in" v-if="iscurrent==3">
            <div class="comment-detail">
                <ul class="comment-rank">
                    <li>4</li>
                    <li>5</li>
                    <li>0%好评</li>

                </ul>
                <ul class="comment-stats">
                    <li><a href="">好评：<meter min="0" low="20" high="80" optimum="100" max="100" value="0"></meter><span>4</span></a></li>
                    <li><a href="">中评：<meter min="0" low="10" high="50" optimum="0" max="100" value="0"></meter><span>1</span></a></li>
                    <li><a href="">差评：<meter min="0" low="10" high="30" optimum="0" max="100" value="0"></meter><span>0</span></a></li>
                </ul>
            </div>
            <div class="comment-lists">
                    <dl>
                        <dt><span>林慧凤 </span><span class="stars star@rv.Rating"><i></i><i></i><i></i><i></i><i></i></span></dt>
                        <dd>
                            不甜，没有市场买的好吃
                        </dd>

                    </dl>
                    <dl>
                        <dt><span>菜虫网用户</span><span class="stars star@rv.Rating"><i></i><i></i><i></i><i></i><i></i></span></dt>
                        <dd>
                            水果很新鲜，味道很不错，物流也很快。
                        </dd>

                    </dl>
                    <dl>
                        <dt><span>菜虫网用户</span><span class="stars star@rv.Rating"><i></i><i></i><i></i><i></i><i></i></span></dt>
                        <dd>
                            上次和朋友一起买一箱分，后面有跟客服MM建议上些小份装的，现在好像有了哦！上来赞一下菜虫网！
                        </dd>

                    </dl>
                    <dl>
                        <dt><span>fds </span><span class="stars star@rv.Rating"><i></i><i></i><i></i><i></i><i></i></span></dt>
                        <dd>
                            建议能有小分装...很新鲜..很甜
                        </dd>

                    </dl>
                    <dl>
                        <dt><span>fd </span><span class="stars star@rv.Rating"><i></i><i></i><i></i><i></i><i></i></span></dt>
                        <dd>
                            比次水果市场上拿方便多了，服务好。
                        </dd>

                    </dl>
            </div>
    </div>
</section>


<section class="product-bottom-btn layout">
    <ul>
        <li>
            <a href="">
                <span class="bottom-btns">
                    <i class="services"></i>
                    <p>消息</p>
                </span>
            </a>
            <span class="bottom-btns test2" data-ajax="" data-addtowish="" data-url="/addtowish/430">
                <i class="add-fav"></i>
                <p>收藏</p>
            </span>
        </li>


            <li @click="shows"><a class="addtocart test1" href="javascript:void(0)">加入购物车</a></li>
            <li  @click="buy">
                <a href="#/cart" class="buyitnow">立即购买</a>
            </li>
    </ul>
</section>
</div>
  <div class="joincart"  v-if="show==2">
        <div class="join">
            加入购物车成功
        </div>
    </div>
</div>
</template>

<script>
 import {bus} from '../main.js'
	export default{
		data(){
			return{
				iscurrent:1,
				detail:[],
                buygoods:[],
                show:1,
                mount:1
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			autoplay :2000,
			loop:true,
			autoplayDisableOnInteraction : true,
			//pagination : '#swiper-pagination1',
			})
			var _this=this;
			fetch("/detail",{
			method:"get"
			}).then(function(response) {
	        return response.text()
	   		 }).then(function(data){
	   		 	const id=Number(_this.$route.params.id)-1;
	   		 	_this.detail=JSON.parse(data).detail[id];
	   		 })
		},
        methods:{
            shows(){
                this.show=2;
                var _this=this;
                setTimeout(function(){
                    _this.show=1
                },1000)
                var good=JSON.parse(localStorage.getItem("goodinfo"));
                if(good!==null){
                    this.buygoods=good.goodsinfo
                }
                var goods={
                    "img":this.detail.img1,
                    "name":this.detail.dname,
                    "size":this.detail.dsize,
                    "price":this.detail.dprice,
                    "mount":this.mount,
                    "id":this.detail.id
                }
                var goodsinfo=this.buygoods;
                var idx=goodsinfo.findIndex(function(value,index){
                        return goods.id==value.id
                })
               if(idx!==-1){
               var s= good.goodsinfo[idx].mount+1;
               goods.mount=s;
               goodsinfo.splice(idx,1)
               goodsinfo.push(goods);
                var bgs = JSON.stringify({goodsinfo})
                localStorage.setItem("goodinfo",bgs)
                return
               }
                goodsinfo.push(goods);
                var bgs = JSON.stringify({goodsinfo})
                localStorage.setItem("goodinfo",bgs)
            },
            buy(){
                var good=JSON.parse(localStorage.getItem("goodinfo"));
                if(good!==null){
                    this.buygoods=good.goodsinfo
                }
                var goods={
                    "img":this.detail.img1,
                    "name":this.detail.dname,
                    "size":this.detail.dsize,
                    "price":this.detail.dprice,
                    "mount":this.mount,
                    "id":this.detail.id
                }
                var goodsinfo=this.buygoods;
                var idx=goodsinfo.findIndex(function(value,index){
                        return goods.id==value.id
                })
               if(idx!==-1){
               var s= good.goodsinfo[idx].mount+1;
               goods.mount=s;
               goodsinfo.splice(idx,1)
               goodsinfo.push(goods);
                var bgs = JSON.stringify({goodsinfo})
                localStorage.setItem("goodinfo",bgs)
                return
               }
                goodsinfo.push(goods);
                var bgs = JSON.stringify({goodsinfo})
                localStorage.setItem("goodinfo",bgs)
            }
        }
	} 
    
</script>
<style scoped>
	#main{
		margin-bottom: 0.8rem;
        height: 100%;
        margin:0 auto;
       
	}
    .joincart{
        position:fixed;
        top:0;
        left:0;
        width: 100%;
        height:100%;
        z-index: 100000000;
        background: rgba(0,0,0,0.5)
    }
    .join{
        position: absolute;
        top:50%;
        left:35%;
        width: 30%;
        height:0.5rem;
        margin: 0 auto;
        background:#fff;
        line-height: 0.5rem;
        border-radius: 0.05rem;
        text-align: center;
        color: #333;
    }
    a{
        color: #333;
    }
	.banner{
		width: 100%;
	}
	.banner a{
		display: block;
		overflow: hidden;
		width: 100%;
		height: 3.2rem;
	}
	.img{
		width: 100%;
		height: 100%;
	}
	.swiper-container-horizontal>.swiper-pagination-bullets{
	    width: 100%;
	    text-align: right;
	}
	.back {
	    width: 0.5rem;
	    height: 0.5rem;
	    display: block;
	    position: fixed;
	    left: 0.1rem;
	    top: .065rem;
	    border-radius: 50px;
	    text-align: center;
	    line-height: 0.24rem;
	    z-index: 1000000;
	    background: rgba(119,203,51,.6) url(http://m.caichongwang.com/content/images/back.png) center center no-repeat;
	    background-size: 0.3rem;
	}
	.newcart {
	    position: fixed;
	    right: 0.1rem;
	    top: .065rem;
	    width: .5rem;
	    height: .5rem;
	    background: #c7c7c7;
	    border-radius: 100%;
	    -webkit-background-size: .4rem;
	    background-size: .4rem;
	    background-position: 18%;
	    background-repeat: no-repeat;
	    opacity: .5;
	    z-index: 100000;
	    
	}
	.newcart{
		background-image: url(../images/cart.png);
	}
	.price-info {
	    box-sizing: border-box;
	    padding: .1rem;
	    background-color: #fff;
	}
	.product-tit {
	    display: block;
	    /* margin-right: 4rem; */
	    position: relative;
	    /* border-right: 1px #ddd solid; */
	    line-height: 1.3;
	}
	.product-tit-m {
	    color: #333;
	    font-weight: 700;
	    padding-bottom: .02rem;
	}
	.nowrap {
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
	.product-tit-note {
	    font-size: .08rem;
	    display: none;
	}
	.product-price {
	    display: block;
	    padding: .05rem 0;
	    /* font-size: .8rem; */
	}
	.product-price p {
    padding: .04rem 0;
}
.product-price strong {
    font-size: 0.14rem;
}
.product-price b, .product-price strong {
    color: #ea3c2f;
}
.product-tab {
    background-color: #fff;
}
.product-tab ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border: 1px #ddd solid;
    border-width: 1px 0 0;
    position: relative;
    z-index: 100;
}
.product-tab li.current {
    border-bottom-width: 2px;
    border-bottom-color: #79ce35;
}
.product-tab li {
    position: relative;
    border-color: #ddd;
}
.product-tab li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: .1rem 0;
    font-size: .1rem;
    text-align: center;
    border: 2px #fff solid;
    border-width: 0 0 1px 0;
    color: #3c3c3c;
}
.product-tab-box {
    position: relative;
    background-color: #fff;
}
.product-box-in {
    width: 100%;
    box-sizing: border-box;
    padding: .08rem;
    overflow: hidden;
    line-height: 0.15rem;
}
.product-box-in img {
    padding: 0;
    max-width: 100%;
    vertical-align: top;
    display: block;
}
.comment-detail ul {
    display: inline-block;
}
.comment-rank {
    text-align: center;
    border-radius: 4px;
    border: 1px #ddd solid;
    padding: 10px;
    font-size: 14px;
    line-height: 1.5;
}
.comment-rank li:first-child{
    font-size: 24px;
    color: #fe9600;
    margin: 0 4px 4px 0;
    padding: 0;
    border-bottom: 1px #ddd dashed;
}
.comment-rank li {
    color: #666;
}
.comment-rank li:last-child {
    color: #c00;
}
.comment-stats {
    float: right;
}
.comment-stats LI {
    border-bottom: 1px #eee dashed;
}
.comment-stats LI A {
    display: block;
    color: #005ea7;
}
.comment-stats LI SPAN {
    margin-left: 5px;
}
.comment-lists {
    border: 1px #ddd solid;
    border-width: 1px 0 0;
    margin: 10px 0;
}
.comment-lists DL {
    border-bottom: 1px #ddd solid;
    padding: 10px 0;
}
.comment-lists DT {
    position: relative;
    color: #666;
}
.comment-lists DT SPAN:first-child {
    margin-right: 6px;
}
.stars {
    margin-left: 1rem;
}
.stars i {
    content: "\e600";
    color: #fe9600;
}
.product-bottom-btn {
    position: relative;
    z-index: 2000;
}
.product-bottom-btn ul {
    position: fixed;
    bottom: 0;
    width: 100%;
    /*max-width: 720px;*/
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 0;
    background: #fff;
    box-shadow: 0 -4px 8px rgba(0,0,0,.1);
}
.product-bottom-btn li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 0;
    text-align: center;
}
.bottom-btns {
    display: inline-block;
    /*height: 100%;*/
    width: 49%;
    font-size: .08rem;
    border-right: 1px #ddd solid;
    transform: translateY(3px);
    -webkit-transform: translateY(3px);
}
.bottom-btns i {
    display: block;
    width: 100%;
    height: 0.18rem;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: 0.12rem;
    background-size: 0.2rem;
}
.services {
    background-image: url(../images/mess.png);
}
.bottom-btns:nth-child(2) {
    border: none;
}
.bottom-btns {
    display: inline-block;
    /*height: 100%;*/
    width: 49%;
    font-size: ..8rem;
    border-right: 1px #ddd solid;
    transform: translateY(3px);
    -webkit-transform: translateY(3px);
}
.add-fav{
    background-image: url(../images/like.png);
}
a.addtocart, .buyitnow {
    background-color: #ffba00;
    color: #fff;
    /*height: 100%;*/
    display: block;
    padding: .1rem 0;
    font-size: .1rem;
}
.buyitnow {
    background-color: #ea3c2f;
}
</style>
<style>
	.swiper-pagination-bullets .swiper-pagination-bullet-active{
		background: #7ba23f;
	}
</style>