<template>
<div>
<form action="/Checkout" method="post">    <!-- 头部 end -->
<!-- 购物车 产品列表 -->
	<section class="cart-list layout layout1">

		<!-- 组合分隔 -->
		<dl>
			<dt><span class="cart-check"><input type="checkbox" class="check-item" value="-360413"><i></i></span></dt>
			<dd><a href="/product/1030"><img src="http://img1.caichongwang.com/thumbs/0034526_96..jpg" class="cart-product-img" alt=""></a></dd>
			<dd class="cart-product-detail">
			<p><a href="/product/1030">广西百香果</a></p>
			<p class="cart-spec">
			28个装
			</p>
			<p class="cart-spec">
			<b class="fr cart-price">¥43.90</b>
			</p>
			<span class="cart-num">
			<a href="javascript:void(0);" class="cart-num-ctrl minus" data-cart-num="-1" data-pvitemid="360413">-</a>
			<div class="loading"></div>
			<input type="text" value="2" class="cart-num-box">
			<a href="javascript:void(0);" class="cart-num-ctrl plus" data-cart-num="1" data-pvitemid="360413">+</a>
			</span>
			</dd>
		</dl>
	</section>
			<div class="footer_height"></div>
	<section class="cart-bottom fix">
			<div class="layout" style="padding: 0">
			<dl>
			<dt><span class="cart-check-all"><input type="checkbox" class="check-item-all"><i>全选</i></span></dt>
			<dd id="total">


			<span class="cart-total">
			<p>合计：<b>¥87.80</b></p>
			<p>共<b>2</b>件商品</p>
			</span>
			<input type="submit" value=" 去结算 " style="padding-left:  20px;padding-right:  20px;" class="cart-submit">

			</dd>
			</dl>
			</div>
			<div class="footer_height" style="height: 48px;"></div>
	</section>
</form>
</div>
</template>
<style scoped>
	.layout1 {
    padding: .1rem .1rem 0.05rem;
}

.cart-list {
    box-sizing: border-box;
    padding: 0.05rem;
}
.cart-list dl:last-child{
    border: none;
}
.cart-list dl{
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
    height: 5.5rem;
    width: 1.2rem;
    padding: 0 .5rem;
    position: relative;
}
</style>