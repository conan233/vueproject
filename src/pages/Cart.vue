<template>
	<div class="box">
		<header class="product-header  headerfix">
    		<div class="layout">
		    	<a class="back cart-edit" href="javascript:void(0);">
		       	 	编辑全部
				</a>
		   		 <span class="cart">购物车</span>
		    	<a class="main-msgbox01" href="">
		    	</a>
    		</div>
	</header>
	<form action="/Checkout" method="post">    <!-- 头部 end -->
    <!-- 购物车 产品列表 -->
    <section class="cart-list layout layout1" v-if="goods==1">
        <!-- 组合分隔 -->
            <div class="content-shopcart">
                <div class="activity">
                </div>
                <div class="c-msg">
                    <section class="c-msg-img warn"></section>
                    <section class="c-msg-info">
                        <p>购物车快饿瘪了T.T</p>
                        <p class="opt">主人快给我挑点宝贝吧</p>
                        <p class="url"><a href="/">去逛逛</a></p>
                    </section>
                </div>
                <div class="reduceItem">
                </div>
                <div class="mask"></div>
            </div>
    </section>
    <section class="cart-list layout layout1" v-if="goods==2" v-for="info in infos">
        <!-- 组合分隔 -->
        <dl>
            <dt><span class="cart-check"><input type="checkbox" class="check-item" value="-360413"><i></i></span></dt>
            <dd><a href=""><img :src="info.img" class="cart-product-img" alt=""></a></dd>
            <dd class="cart-product-detail">
                <p><a href="">{{info.name}}</a></p>
                <p class="cart-spec">
                    {{info.size}}
                </p>
                <p class="cart-spec">
                    <b class="fr cart-price">{{info.price}}</b>
                </p>

                <span class="cart-num">
                    <a href="javascript:void(0);" class="cart-num-ctrl minus" @click="less" :thisID="info.id">-</a>
                    <div class="loading"></div>
                    <span style="display: none">{{info.id}}</span>
                    <input type="text" :value="infos[info.id-1].mount" class="cart-num-box" style="display: inline-block;">
                    <a href="javascript:void(0);" class="cart-num-ctrl plus" @click="add" :thisID="info.id">+</a>
                </span>
            </dd>
        </dl>
    </section>
    <div class="layout fix cart-bottom" style="padding: 0" v-if="goods==2">
                <dl>
                    <dt><span class="cart-check-all"><input type="checkbox" class="check-item-all"><i>全选</i></span></dt>
                    <dd id="total">
                    <span class="cart-total">
                        <p>合计：<b>{{price}}</b></p>
                        <p>共<b>{{mount}}</b>件商品</p>
                    </span>
                    <input type="submit" value=" 去结算 " style="padding-left:  20px;padding-right:  20px;" class="cart-submit">
                    </dd>
                </dl>
        </div>
	</form>
	<Footercomponent :msg="msg"></Footercomponent>
  
	</div>
</template>

<script>
const Footercomponent = r => require.ensure([], () => r(require('@/components/Footer.vue')), 'Footercomponent')
	export default{
		components:{
			Footercomponent
		},
        created(){
            if(JSON.parse(localStorage.getItem("goodinfo"))!==null){
                var infos=JSON.parse(localStorage.getItem("goodinfo")).goodsinfo
                this.goods=2;
                this.infos=infos;
                var price=this.price-0
                var mount=this.mount-0
                infos.map(function(curr,idx){
                    return {"price":price+=curr.price.slice(1)*curr.mount,
                            "mount":mount+=curr.mount}
                })
                this.price=price;
                this.mount=mount;
            }
        },
        data(){
            return{
                goods:1,
                msg:{
                    showimg:0,
                    showimg1:1,
                    showimg2:1
                },
                price:"",
                mount:"",
                infos:[],
            }
        },
        methods:{
            less(e){
                var goodsinfo=this.infos;
                goodsinfo.forEach(function(curr,idx){
                    var a=e.target.getAttribute("thisID");
                   if(a==(idx+1)&&goodsinfo[idx].mount>0){
                        goodsinfo[idx].mount=goodsinfo[idx].mount-1;
                        var bgs = JSON.stringify({goodsinfo})
                        localStorage.setItem("goodinfo",bgs)
                     }
                })
            },
            add(e){
                var goodsinfo=this.infos;
                goodsinfo.forEach(function(curr,idx){
                    var a=e.target.getAttribute("thisID");
                   if(a==(idx+1)&&goodsinfo[idx].mount>=0){
                        goodsinfo[idx].mount=goodsinfo[idx].mount+1;
                        var bgs = JSON.stringify({goodsinfo})
                        localStorage.setItem("goodinfo",bgs)
                     }
                })
            }
        }
	} 
</script>
<style scoped>
    
	.product-header {
    background-color: #e6e6e6;
    font-size:0.14rem;
    padding: .05rem 0;
    text-align: center;
    overflow: hidden;
    position: relative;
    z-index: 100;
    box-shadow: 0 2px 2px rgba(0,0,0,.3);
	}
	.product-header .layout {
    padding: .06rem 0;
    position: relative;
	}
	.product-header a.cart-edit {
    background-image: none;
    width: auto;
    font-size: .16rem;
    line-height: 0.15rem;
}
.cart{
	font-size: 0.20rem;
	color: #333;
}
.product-header a.back {
    position: absolute;
    left: .1rem;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    width:.8rem;
    height: .15rem;
    -webkit-background-size: 100%;
    background-size: 100%;
    color:#333;
}
.main-msgbox01 {
    background-image: url(../images/cart-info.png);
}
.house01, .main-msgbox01, .delete_msn, .main-msgbox {
    position: absolute;
    right: .1rem;
    top: .12rem;
    width: .25rem;
    height: .3rem;
    -webkit-background-size: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
}
.layout {
    max-width: 720px;
    margin: 0 auto;
}
.c-msg .c-msg-img.warn {
    background-position: center 0;
}
.c-msg .c-msg-img {
    height:1rem;
    background: url(http://m.caichongwang.com/content/images/cart_no.png) no-repeat;
    margin-top: .3rem;
    background-size: auto 100%;
}
.c-msg .c-msg-info {
    margin-top:  0.3rem;
    line-height: 0.22rem;
}
.c-msg .c-msg-info p {
    text-align: center;
}
.content-shopcart .c-msg-info .opt {
    font-size: 12px;
    color: #999;
}
.content-shopcart .c-msg-info .url {
    text-align: center;
    margin-top:0.1rem;
}
.content-shopcart .c-msg-info .url a {
    display: inline-block;
    height: 0.3rem;
    line-height:  0.3rem;
    padding: 0  0.3rem;
    border: 1px solid #3d4245;
    border-radius: 0.04rem;
}
.layout1 {
    padding: .1rem .1rem 0 .05rem;
}
.cart-list dl:last-child {
    border: none;
}
.cart-list dl {
    font-size: 0;
    border-bottom: 1px #ddd solid;
    position: relative;
    margin-top: 10px;
}
.cart-list dt, .cart-list dd {
    display: inline-block;
    vertical-align: top;
    font-size: .1rem;
}
.cart-check, .cart-check-all {
    display: block;
    height: 0.55rem;
    width: 0.2rem;
    padding: 0 .05rem;
    position: relative;
}
.check-item, .check-item-all {
    display: none;
}
.cart-check i, .cart-check-all i {
    position: absolute;
    top: 72%;
    left: 50%;
    width: 0.2rem;
    height: 0.2rem;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    background-repeat: no-repeat;
    background-position: left center;
    -webkit-background-size: 0.2rem;
    background-size: 0.2rem;
}
.cart-check i,.cart-check-all i{
    background-image: url(../images/conformpng.png)
}
.cart-list dd a {
    font-size: .14rem;
    color: #333;
}
.cart-product-img {
    display: block;
    width: 1rem;
    height: 1rem;
}
.cart-product-detail {
    width: 60%;
}
.cart-product-detail {
    padding-left:0.1rem;
    position: absolute;
    width: 75%;
}
.cart-product-detail p {
    padding-bottom: .02rem;
}
.cart-spec {
    color: #999;
    position: relative;
    font-size: .085rem;
}
.cart-spec .fr {
    font-size: .14rem;
    padding-left: .04rem;
}
.cart-price {
    color: #ea3c2f;
    position: absolute;
    float: none;
    left: 0;
    top: 5px;
}
.cart-num {
    display: inline-block;
    font-size: 0;
    float: left;
    margin-left: 1rem;
}
a.minus {
    border-right: 0;
    border-radius: 4px 0 0 4px;
}
.cart-num-ctrl {
    display: inline-block;
    vertical-align: top;
    border: 1px #bbb solid;
    height: 0.2rem;
    line-height: 0.2rem;
    padding: 0 .04rem;
    font-size: 0.15rem;
    font-weight: 700;
    background: #fff;
    width: 12px;
    text-align: center;
    font-size: 0.12rem !important;
    color: #333;
}

.cart-num .loading {
    display: none;
    width: 32px;
    height: 24px;
    border: 1px #bbb solid;
    border-radius: 0;
    width: 0.25rem;
    height: 0.15rem;
    background: url(http://m.caichongwang.com/content/images/loading.gif) center center no-repeat;
}
.cart-num-box {
    vertical-align: top;
    text-align: center;
    border: none;
    background: none;
    border: 1px #bbb solid;
    border-radius: 0;
    width: .2rem;
    height: 0.2rem;
    line-height: 0.2rem;
    margin: 0;
    padding: 0;
    font-size: .085rem;
    outline: none;
}
a.plus {
    border-left: 0;
    border-radius: 0 4px 4px 0;
}
.cart-bottom dl {
    border-top: 1px #bbb solid;
    font-size: 0;
    background: #fff;
    padding: 0 0.12rem 0 .05rem;
    padding-bottom: .02rem;
    /*overflow: hidden;*/
}
.cart-bottom dt, .cart-bottom dd {
    display: inline-block;
    font-size: .1rem;
}
.cart-bottom .cart-check-all {
    height: .4rem;
}
.cart-check, .cart-check-all {
    display: block;
    height: .55rem;
    width: .12rem;
    padding: 0 .05rem;
    position: relative;
}
.cart-bottom dd {
    height: .4rem;
    float: right;
}
.cart-bottom dt, .cart-bottom dd {
    display: inline-block;
    font-size: .1rem;
}
.fix {
    position: fixed;
    width: 100%;
    left: auto;
    bottom: 0.8rem;
}
.cart-total {
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    padding-top: .08rem;
    height: .4rem;
    overflow: hidden;
    font-size: .09rem;
    line-height: .12rem;
}
.cart-total b {
    color: #ea3c2f;
    padding: 0 .1rem;
    font-weight: 700;
}
.cart-submit {
    vertical-align: middle;
    display: inline-block;
    height: .4rem;
    line-height: .4rem;
    border-radius: 4px;
    background: #ea3c2f;
    color: #fff;
    padding: 0 .06rem;
    border: 0;
    font-size: .14rem;
    margin-top: 0.1rem;
}
.cart-bottom .cart-check-all i {
    width: 1rem;
    background-position: center;
    text-indent: .7rem;
    line-height: .15rem;
}
</style>




