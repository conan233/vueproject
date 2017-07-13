<template>
	<div class="box">
		<Headcomponent></Headcomponent>
		<div class="contbox">
			<section class="sort layout">
			    <ul>
			        <li class="current"><a href="">默认排序</a></li>
			        <li class="down"><a href="">价格<i></i></a></li>
			        <li class="down"><a href="">人气<i></i></a></li>
			    </ul>
			</section>
			<div class="swiper-container banner">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide"><a href=""><img src="http://img1.caichongwang.com/thumbs/0049411.jpeg" alt="" class="img"></a></div>
			        <div class="swiper-slide"><a href=""><img src="http://img1.caichongwang.com/thumbs/0049677.jpeg" alt="" class="img"></a></div>
			        <div class="swiper-slide"><a href=""><img src="http://img1.caichongwang.com/thumbs/0049683.jpeg" alt="" class="img"></a></div>
			    </div>
			    <div class="swiper-pagination"></div>
			</div>
			<Lists></Lists>
		</div>
		<Footercomponent :msg="msg"></Footercomponent>
	</div>
</template>

<script>
const Headcomponent = r => require.ensure([], () => r(require('@/components/Header.vue')), 'Headcomponent')
const Footercomponent = r => require.ensure([], () => r(require('@/components/Footer.vue')), 'Footercomponent')
const Lists = r => require.ensure([], () => r(require('@/components/Lists.vue')), 'Lists')
	export default{
		components:{
			Headcomponent,
			Footercomponent,
			Lists
		},
		data(){
			return{
				msg:{
                showimg:1,
                showimg1:1,
                showimg2:1
            }
			}
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			autoplay :2000,
			loop:true,
			//pagination : '#swiper-pagination1',
			})
		}
	} 
</script>
<style scoped>
.box{
	height: 100%;
	width: 100%;
	background: #f0f0f0;
}
	.contbox{
		margin:0.56rem 0;
		width: 100%;
	}
	.sort {
	    background: #fff;
	    padding: .05rem 0;
	    position: fixed;
	    top: 46px;
	    width: 100%;
	    z-index: 99999;
	        border: 1px #ddd solid;
	    border-width: 1px 0;
	}
	.layout {
	    max-width: 720px;
	    margin: 0 auto;
	}
	.sort ul {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    text-align: center;
	}
	.sort li {
    border-right: 1px #ddd solid;
	}
.sort li, .product-btn li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
	}
	.sort li.current a {
    color: #79ce35;
}
.sort li a {
    display: block;
    padding: .025rem 0;
    position: relative;
    font-size: .09rem;
    color: #333;
}
.sort .down i {
    background: url(../images/jt.png) no-repeat;
    width: 0.1rem;
    display: block;
    height: 0.15rem;
    background-size: 0.1rem;
    margin-left: 0.8rem;
    margin-top: -0.15rem;

}
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
</style>
<style>
	.swiper-pagination-bullets .swiper-pagination-bullet-active{
		background: #7ba23f;
	}
</style>