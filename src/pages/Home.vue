<template>
	<div>
		<Headcomponent></Headcomponent>
		<div class="swiper-container banner">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide"><a href=""><img src="../images/banner1.jpg" alt="" class="img"></a></div>
	        <div class="swiper-slide"><a href=""><img src="../images/banner2.jpeg" alt="" class="img"></a></div>
	    </div>
	    <div class="swiper-pagination"></div>
		</div>
		<ul class="ul">
	        <li>
	            <a href="">
	                <span class="nav-btn btn1"><i class="list list1"></i></span>
	                <p class="ta-c">预约提货</p>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="nav-btn btn2"><i class="list list2"></i></span>
	                <p class="ta-c">限量秒杀</p>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="nav-btn btn3"><i class="list list3"></i></span>
	                <p class="ta-c">积分兑换</p>
	            </a>
	        </li>
	        <li>
	            <a href="">
	                <span class="nav-btn btn4"><i class="list list4"></i></span>
	                <p class="ta-c">充值有礼</p>
	            </a>
	        </li>
    	</ul>
    	<div class="ad">
	    	<ul class="ad-col2">
		        <li><router-link to="/goodslist"><img src="http://m.caichongwang.com/Content/images/main-ad1.jpg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://m.caichongwang.com/Content/images/main-ad2.jpg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://m.caichongwang.com/Content/images/main-ad3.jpg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://m.caichongwang.com/Content/images/tth.jpg" alt=""></router-link></li>
	        </ul>
	        <ul class="ad-col1">
		        <li><router-link to="/goodslist"><img src="http://img1.caichongwang.com/thumbs/0050357.jpeg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://img1.caichongwang.com/thumbs/0050345.jpeg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://img1.caichongwang.com/thumbs/0050389.jpeg" alt=""></router-link></li>
		        <li><router-link to="/goodslist"><img src="http://img1.caichongwang.com/thumbs/0050344.jpeg" alt=""></router-link></li>
	    	</ul>
    	</div>
	<Footercomponent :msg="msg"></Footercomponent>
	</div>
</template>

<script>
const Headcomponent = r => require.ensure([], () => r(require('@/components/Header.vue')), 'Headcomponent')
const Footercomponent = r => require.ensure([], () => r(require('@/components/Footer.vue')), 'Footercomponent')
	export default{
		components:{
			Headcomponent,
			Footercomponent
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			autoplay :2000,
			loop:true,
			//pagination : '#swiper-pagination1',
			})
		},
		 data(){
            return{
                msg:{
                showimg:1,
                showimg1:0,
                showimg2:1
            }
            }
        }
	}

</script>
<style scoped>	
	.banner{
		width: 100%;
		margin-top: 48px;
	}
	.banner a{
		display: block;
		overflow: hidden;
		width: 100%;
		height:1.55rem;
	}
	.img{
		width: 100%;
		height: 100%
	}
	.swiper-container-horizontal>.swiper-pagination-bullets{
	    width: 100%;
	    text-align: right;
	}

	.ul{
		display: flex;
	}
	.ul li{
		flex: 1;
	    text-align: center;
	    padding: .05rem 0;
	}
	.nav-btn{
	    display: block;
	    width: 0.5rem;
	    height: 0.5rem;
	    margin: 0 auto .05rem auto;
	    border-radius: 0.5rem;
	}
	.btn1{
		 background-color: #d297ff;
	}
	.btn2{
		 background-color: #87e75c;
	}
	.btn3{
		 background-color: #93dee3;
	}
	.btn4{
		 background-color: #ff6767;
	}
	.ta-c{
		font-size: 0.12rem;
		color:#727272;
	}
	.list{
		display: block;
		width:1rem;
		height:1rem;
	}
	.list1{
		background: url(../images/yy.png) no-repeat 0.1rem 0.1rem;
		background-size: 0.3rem 0.3rem;
	}
	.list2{
		background: url(../images/miaosha.png) no-repeat 0.1rem 0.1rem;
		background-size: 0.3rem 0.3rem;
	}
	.list3{
		background: url(../images/jifen.png) no-repeat 0.1rem 0.1rem;
		background-size: 0.3rem 0.3rem;
	}
	.list4{
		background: url(../images/chongzhi.png) no-repeat 0.1rem 0.1rem;
		background-size: 0.3rem 0.3rem;
	}
	.ad{
		background: #f0f0f0;
		margin-bottom: 0.8rem;
	}
	.ad-col2{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-around;
		font-size: 0.12rem;
	}
	.ad-col2 li{
		width:45%;
		margin: 0.1rem 0;
	}
	.ad-col2 li a{
		width: 100%;
		height: 1.3rem;
	}
	.ad-col2 li img,.ad-col1 li img{
		width: 100%;
		height: 1.3rem;
	}
	.ad-col1 li{
		padding:0 0.1rem;
		margin-bottom: 0.1rem;
	}
</style>
<style>
	.swiper-pagination-bullets .swiper-pagination-bullet-active{
		background: #7ba23f;
	}
</style>