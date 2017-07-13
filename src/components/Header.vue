<template>
	<div class="head">
		<a href="/home"><img src="../images/logo.png" class="logo"></a>
		<input type="text" placeholder="商品查找">
		<img src="../images/header.png" class="info">
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	} 
</script>
<style scoped>	
	.head{
		font-size: 0;
	    background: #1e2427;
	    position: fixed;
	    left: 0;
	    top: 0;
	    z-index: 9999;
	    margin: 0 auto;
	    width: 100%;
	    height: .48rem;
	    box-sizing: border-box;
	    padding: 0.1rem 0;
	}
	.logo{
		width:0.55rem;
		margin-left: 0.2rem;
		margin-bottom: 0.05rem;
	}
	input{
		width:55%;
		padding-left: 0.3rem;
		margin-left: 0.1rem;
	    height:0.28rem;
	    color: #fff;
	    border-radius: 0.05rem;
	    border: none;
	    font-size: .08rem;
	    background-color: rgba(96,96,96,0.5);
	    background-repeat: no-repeat;
	    background-position: .08rem 50%;
	    -webkit-background-size: .08rem;
	    background-size: .18rem;
	    outline-style: none;
	    vertical-align: 8px;
	    box-sizing: border-box;
	    background-image: url(../images/search.png);
	}
	.info{
		width:0.28rem;
		margin-left:0.15rem;
		margin-bottom: 0.02rem;
	}
</style>