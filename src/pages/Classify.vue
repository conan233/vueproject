<template>
	<div class="content">
		<div class="class-search"><input type="text" placeholder="商品查找"></div>
		<ul class="msn_tell assort">
            <li class="li1"><a href=""><span class=""><img src="http://img1.caichongwang.com/thumbs/0036114.png" alt="" width="28px" height="28px"></span><p>海鲜水产</p><p class="ha"> 海鲜的滋味震撼你的味觉</p><i></i></a>
            </li>
            <li><a href=""><span class=""><img src="http://img1.caichongwang.com/thumbs/0035935.png" alt="" width="28px" height="28px"></span><p>特色农产</p><p class="ha">这样的农产，怎么舍得辜负</p><i></i></a></li>
            <li><a href=""><span class=""><img src="http://img1.caichongwang.com/thumbs/0035988.png" alt="" width="28px" height="28px"></span><p>鲜冻肉类</p><p class="ha">快来抱走你的小鲜肉</p><i></i></a></li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%E5%88%86%E7%B1%BB%E9%A1%B5%E9%9D%A2%E5%9B%BE%E6%A0%87/01.png" alt="" width="28px" height="28px">
	                </span>
	                <p>农场热销</p>
	                <p class="ha">带你吃在好源头</p>
	                <i></i>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%e5%88%86%e7%b1%bb%e9%a1%b5%e9%9d%a2%e5%9b%be%e6%a0%87/02.png" alt="" width="28px" height="28px">
	                </span>
	                <p>农场预订</p>
	                <p class="ha">优惠留给有准备的人</p>
	                <i></i>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%e5%88%86%e7%b1%bb%e9%a1%b5%e9%9d%a2%e5%9b%be%e6%a0%87/04.png" alt="" width="28px" height="28px">
	                </span>
	                <p>农场体验</p>
	                <p class="ha">带你遨游带你飞</p>
	                <i></i>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%e5%88%86%e7%b1%bb%e9%a1%b5%e9%9d%a2%e5%9b%be%e6%a0%87/03.png" alt="" width="28px" height="28px">
	                </span>
	                <p>发起团购</p>
	                <p class="ha">发得起，你就赢了</p>
	                <i></i>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%e5%88%86%e7%b1%bb%e9%a1%b5%e9%9d%a2%e5%9b%be%e6%a0%87/11.png" alt="" width="28px" height="28px">
	                </span>
	                <p>积分兑换</p>
	                <p class="ha">积够分，统统都是你的</p>
	                <i></i>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="">
	                    <img src="http://m.caichongwang.com/Content/images/%e5%88%86%e7%b1%bb%e9%a1%b5%e9%9d%a2%e5%9b%be%e6%a0%87/12.png" alt="" width="28px" height="28px">
	                </span><p>秒杀11点</p>
	                <p class="ha">“秒”不可言，错过悔三年</p>
	                <i></i>
	            </a>
	        </li>
        </ul>
        <Footercomponent :msg="msg"></Footercomponent>
	</div>
</template>

<script>
const Footercomponent = r => require.ensure([], () => r(require('@/components/Footer.vue')), 'Footercomponent')
	export default{
		components:{
			Footercomponent
		},
		 data(){
            return{
                msg:{
                showimg:1,
                showimg1:1,
                showimg2:0
            }
            }
        
	} 
}
</script>
<style scoped>
	.content{
		width: 100%;
		margin-bottom: 0.8rem;
	}
	.class-search{
		font-size: 0.12rem;
	}
	input{
		width:94%;
		padding-left: 0.3rem;
	    height:0.4rem;
	    color: #fff;
	    border-radius: 0.05rem;
	    border: 1px solid #ddd;
	    font-size: .08rem;
	    background-color: #f0f0f0;
	    background-repeat: no-repeat;
	    background-position: .08rem 50%;
	    -webkit-background-size: .08rem;
	    background-size: .18rem;
	    outline-style: none;
	    vertical-align: 8px;
	    box-sizing: border-box;
	    background-image: url(../images/search1.png);
	    margin:0.15rem 0.1rem;
	}
	ul li{
		width: 100%;
		height: 0.8rem;
		border-bottom: 1px #ddd solid;
		font-size: 0;
	}
	ul li a{
		display: block;
		width: 100%;
		height: 100%;
		position: relative;

	}
	span{
		float: left;
	    width: .4rem;
	    height: .4rem;
	    vertical-align: middle;
	    margin: 0.1rem 0.2rem
	}
	span img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.li1{
		border-top: 1px #ddd solid
	} 
	.msn_tell li i{ 	
	position: absolute;
    right: .3rem;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    -webkit-transform: translateY(-50%) rotate(45deg);
    width: .1rem;
    height: .1rem;
    border: 2px #aaa solid;
    border-width: 2px 2px 0 0;
    content: "\20";
	}
	p{
		color:#333;
		font-size: 0.16rem;
		margin:0.1rem 0;
	}
	.ha{
		color: #bebebe;
		font-size: 0.12rem;
	}
</style>