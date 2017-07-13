<template>
	<div class="box">
		<div class="login" v-if="login==1">
			<div class="usern"><span>用户名</span><input type="text" v-model="username"></div>
			<div class="psd"><span>密码</span><input type="password"></div>
			<i class="res" @click="resg">去注册</i>
			<i class="misspsd">忘记密码?</i>
			<button class="loginbtn" @click="logininfo">马上登录</button>
		</div>
		<div class="login" v-if="login==2">
			<div><span>用户名</span><input type="text" placeholder="请输入您的用户名" v-model="username"></div>
			<div><span>密码</span><input type="text" placeholder="6-20个字符" v-model="psd"></div>
			<div><span>确认密码</span><input type="text" placeholder="再次输入密码"></div>
			<div><span>邮箱地址</span><input type="email" placeholder="请输入常用邮箱"></div>
			<div><span>邀请码</span><input type="text" placeholder="如无邀请码，可不填写"></div>
			<div class="che"><input type="checkbox" class="chk"><span>我已阅读并同意菜虫网注册协议</span></div>
			<button class="loginbtn" @click="logins">立即注册</button>
		</div>
		<div class="login2" v-if="login==3">
			<div id="main">
				<header class="ucenter-header layout">
				    <div class="user-infos">
				        <div class="user-avatar">
	           				<a href=""><img src="http://m.caichongwang.com/images/thumbs/noDefaultImage.gif"></a>
	       				</div>
	        			<div class="user-name">
				            <p>欢迎您，{{username}}<span><a href=""></a></span></p>
				            <p>账户余额：<b><a href="">¥0.00</a></b>元</p>
	        			</div>
	        			<div class="goto-userinfo" @click="login=4">
	            			<a href="javascript:void(0)"><i></i></a>
	        			</div>
    				</div>
    <!-- 快捷订单入口 -->
				    <div class="order-shortcuts">
				        <a href="" class="unpay-order">
				            0
				            <span>优惠券</span>
				        </a>
				        <a href="" class="unreceived">
				            0
				            <span>收藏</span>
				        </a>
				        <a href="" class="unrate" style="border-right:none!important;">
				            ¥0.00
				            <span>积分</span>
				        </a>
				    </div>
    <!-- 快捷订单入口end -->
				</header>
<!-- 个人信息 -->
				<section class="order-btns layout bb">
				    <ul>
				        <li>
				            <a href="">
				                <span class="order-btn btn1"><i></i></span>
				                <p>待付款</p>
				            </a>
				        </li>
				        <li>
				            <a href="">
				                <span class="order-btn btn2"><i></i></span>
				                <p>待发货</p>
				            </a>
				        </li>
				        <li>
				            <a href="">
				                <span class="order-btn btn3"><i></i></span>
				                <p>待收货</p>
				            </a>
				        </li>
				        <li>

				            <a href="">
				                <span class="order-btn btn4"><i></i></span>
				                <p>评价</p>
				            </a>
				        </li>

				    </ul>
				</section>
<!-- 订单按钮 end -->
<!-- 快捷入口 -->
				<div class="user-links-box ">
				    <table class="user-links bt">
				        <tbody>
				            <tr>
				                <td><a href=""><i class="user-links-btn btn1"></i>全部订单</a></td>
				                <td><a href=""><i class="user-links-btn btn2"></i>我的预订</a></td>
				                <td><a href=""><i class="user-links-btn btn3"></i>我的团购</a></td>
				            </tr>
				            <tr>
				                <td><a href=""><i class="user-links-btn btn4"></i>我的农场体验</a></td>
				                <td><a href=""><i class="user-links-btn btn5"></i>私人定制</a></td>
				                <td><a href=""><i class="user-links-btn btn6"></i>积分兑换</a></td>
				            </tr>
				        </tbody>
				    </table>
				</div>
			</div>
		</div>
		<div v-if="login==4">
			<section class="info-list layout">
				<ul class="ul">
					<li>
						<label for="">头像 </label>
						<span class="info-avatar fr"><img src="http://m.caichongwang.com/images/thumbs/noDefaultImage.gif" alt="" class="info-img"></span>
					</li>
					<li>
						<label for="">昵称</label>
						<span class="fr"><input type="text" value="" id="firstName"></span>
					</li>
					<li>
						<label for="">性别</label>
						<span class="fr">
						<select id="sex">

						<option value="M">男</option>
						<option value="W">女</option>
					</select>
					</span>
					</li>
					<li>
						<label for="">生日</label>
						<span class="fr"><input type="datetime" value="" id="brithday"></span>
					</li>
				</ul>
			</section>
			<div id="datePlugin"></div>
			<section class="info-list layout">
				<ul>
					<li>
						<a href=""><span for="">管理收货地址</span></a>
					</li>
				</ul>

			</section>
			<section class="info-list layout">
				<ul>
					<li>
						<a href=""><span for="">优惠券</span><span class="fr"><i>0 张</i></span></a>
					</li>
					<li>
						<a href=""><span for="">积分<span class="fr"><i>¥0.00</i></span></span></a>
					</li>
					<li>
						<a href=""><span for="">我要充值<span class="fr"><i>¥0.00</i></span></span></a>
					</li>

				</ul>
			</section>
			<div class="" style="margin-top: .1rem; text-align: center; margin-bottom: .1rem; background: #ff0000;">
			<a href="javascript:void(0)" class="logout" @click="loginout">退出登录</a>
			</div>
		</div>
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
			if(JSON.parse(localStorage.getItem("userinfo"))!==null){
			this.login=3;
			this.username=JSON.parse(localStorage.getItem("userinfo")).infoArr[0].username;
			}
		},
		data(){
			return{
				login:1,
				username:"",
				psd:"",
				msg:{
	                showimg:1,
	                showimg1:1,
	                showimg2:1
           		},
           		d:1,
            	infoArr:[]
			}
		},
		methods:{
			resg(){
				this.login=2;
			},
			logininfo(){
				this.login=3;
				var b=JSON.parse(localStorage.getItem("userinfo"));
				// console.log(b)				
				if(b!==null){
					this.infoArr = b.infoArr
				}
				// console.log(this.infoArr)
				// console.log(JSON.parse(localStorage.getItem("userinfo")))
				var a={
					"username":this.username,
					"psd":this.psd
				}
				var infoArr=this.infoArr;
				function isExist(value,index,arr){
					return value.username == a.username
				}
				var c=infoArr.find(isExist);
				if(c){
					// alert("用户名已存在")
					// this.login=2;
					return;
				}
				infoArr.push(a);
				var info = JSON.stringify({infoArr})
				localStorage.setItem("userinfo",info)
			},
			logins(){
				this.login=3;
				var b=JSON.parse(localStorage.getItem("userinfo"));
				// console.log(b)				
				if(b!==null){
					this.infoArr = b.infoArr
				}
				// console.log(this.infoArr)
				// console.log(JSON.parse(localStorage.getItem("userinfo")))
				var a={
					"username":this.username,
					"psd":this.psd
				}
				var infoArr=this.infoArr;
				function isExist(value,index,arr){
					return value.username == a.username
				}
				var c=infoArr.find(isExist);
				if(c){
					alert("用户名已存在")
					this.login=2;
					return;
				}
				infoArr.push(a);
				var info = JSON.stringify({infoArr})
				localStorage.setItem("userinfo",info)

			},
			loginout(){
				localStorage.removeItem("userinfo");
				this.login=1;
			}
		}
	} 
	
</script>
<style scoped>
	.box{
		background: #f0f0f0;
		width: 100%;
		height: 100%;
	}
	.login{
		padding:0.2rem 0.1rem;
		width: 100%;
	}
	.login div{
		width: 100%;
		color: #555;
		display: flex;
		justify-content: space-between;

	}
	.login div span{
		font-size: 16px;
		line-height:0.48rem;
	}
	.login div input{
		display: block;
	    width: 70%;
	    height: 0.3rem;
	    text-indent: 0.08rem;
	    border: 1px #ddd solid;
	    border-radius: 0.04rem;
	    padding: 0.03rem 0;
	    margin: 0.05rem 0;
	    box-shadow: inset 1px 1px 1px rgba(0,0,0,.1);
	    font-size: 0.1rem;
	    margin-right: 0.2rem;
	    outline: none;
	}
	.res{
		color: #ffa07a;
		font-size: 0.14rem;
		margin-right: 0.1rem;
	}
	.misspsd{
		color:#333;
		font-size: 0.14rem
	}
	.loginbtn{
		display: block;
		width: 94%;
		height: 0.4rem;
		margin-top: 0.2rem;
		border-radius: 0.05rem;
		border:0;
		background: #ffa200;
		font-size: 0.18rem;
		color:#fff;
		font-weight: 600;
	}
	.login .che{
		display: block;
	}
	.login div .chk{
		width: 0.15rem;
		height: 0.15rem;
		vertical-align: -0.02rem;
	    margin-left: 0.2rem;
   	 	margin-right: 0.1rem;
		display: inline;
	}
	/*登录过后的样式*/
.ucenter-header {
	    max-width:7.2rem;
	    margin: 0 auto;
	    background: url(http://m.caichongwang.com/content/images/hmbb.jpg) no-repeat;
	    -webkit-background-size: 100%;
	    background-size: 100%;
	    position: relative;
	    box-shadow: 0 2px 2px rgba(0,0,0,.1);
	    color: #fff;
	}
	.user-infos {
    height: 0.8rem;
    padding: 0.1rem;
    padding-top: 0.1rem;
    display: -moz-box;
    display: -webkit-box;
    display: box;
    display: flex;
}
	.user-avatar img {
	    width: 0.8rem;
	    max-width:0.8rem;
	}
	.user-name {
    padding: 0.1rem;
    text-shadow: 2px 2px 4px rgba(255,255,255,.2);
    position: relative;
    min-height:0.8rem;
}
.user-name A {
    color: #fff;
    font-weight: 700;
}
.user-name P {
    padding-bottom: .1rem;
}
.user-name P:last-child {
    font-size: .09rem;
    color: #fff;
    position: absolute;
    white-space: nowrap;
}
.goto-userinfo {
    position: absolute;
    right: 0;
    top: 0;
    height: 1rem;
    width:1rem;
}
.goto-userinfo A {
    display: block;
    height: 100%;
}
.goto-userinfo A i {
    display: block;
    width: 0.15rem;
    height:  0.15rem;
    border-width: 3px 3px 0 0;
    border-color: #fff;
    border-style: solid;
    content: "";
    position: absolute;
    top: 50%;
    margin-top: - 0.15rem;
    right: 30%;
    -webkit-transform: rotate(45deg);
    opacity: .8;
    box-shadow: 2px 0 2px rgba(0,0,0,.1);
}
.order-shortcuts {
    display: -moz-box;
    display: -webkit-box;
    display: box;
    display: flex;
    margin-top: 0.1rem;
    padding-top: 0.06rem;
    padding-bottom:0.06rem;
    background-color: rgba(0,0,0,.5);
    box-shadow: 0 -2px 2px rgba(0,0,0,.1);
    font-size: .085rem;
}
.order-shortcuts A {
    -moz-box-flex: 1;
    -webkit-box-flex: 1;
    box-flex: 1;
    flex: 1;
    display: block;
    height:0.5rem;
    line-height: 0.3rem;
    position: relative;
    text-align: center;
    color: #fff;
    border-right: 1px rgba(255,255,255,.8) solid;
    width: 33.3333333%;
}
.order-shortcuts A SPAN {
    position: absolute;
    bottom: 0.05rem;
    left: 0;
    width: 100%;
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    text-indent: -2px;
    line-height: 1;
}
.layout {
    max-width: 7.2rem;
    margin: 0 auto;
}
.order-btns ul {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    background: #fff;
    /* padding: .8rem 0; */
}
.order-btns li {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    font-size: .085rem;
    padding: .08rem 0;
}
a {
    color: #333;
    text-decoration: none;
}
.order-btn {
    display: block;
    width: .3rem;
    height: .4rem;
    /*padding: 0 .1rem .5rem;*/
    margin: 0 auto;
}
.order-btn.btn1 i {
    background-image:url(../images/pay.png);
}
.order-btn.btn2 i {
    background-image:url(../images/send.png);
}
.order-btn.btn3 i {
    background-image:url(../images/get.png);
}
.order-btn.btn4 i {
    background-image:url(../images/evaluate.png);
}
.order-btn i {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0.2rem 0.2rem

}
.user-links-box {
    max-width: 7.2rem;
    margin: 0 auto;
}
.user-links {
    margin: 0.1rem 0;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    border-collapse: collapse;
}
.user-links td {
    background-color: #fff;
    width: 33.3%;
    font-size: .085rem;
}
.user-links tr td:nth-child(even) {
    border: 1px #ddd dotted;
    border-width: 0 1px;
}
.user-links td > a {
    margin: .05rem;
    padding: .05rem 0;
    display: block;
    color: #333;
    /* text-shadow: 1px 1px 1px rgba(0,0,0,.2); */
    white-space: nowrap;
}
.user-links tr:nth-child(even) {
    border: 1px #ddd dotted;
    border-width: 1px 0;
}
.user-links-btn {
    display: block;
    margin: 0 auto;
    width:0.3rem;
    height: 0.3rem;
    margin-bottom: .06rem;
    -webkit-background-size: 0.3rem;
    background-size: 0.3rem;
    background-position: center;
    background-repeat: no-repeat;
}
.user-links-btn.btn1 {
    background-image:url(../images/orders.png);
}
.user-links-btn.btn2 {
    background-image:url(../images/book.png);
}
.user-links-btn.btn3 {
    background-image:url(../images/tuan.png);
}
.user-links-btn.btn4 {
    background-image:url(../images/farm.png);
}
.user-links-btn.btn5 {
    background-image:url(../images/person.png);
}
.user-links-btn.btn6 {
    background-image:url(../images/jifen1.png);
}
 .ul {
        border: 1px solid #D8D8D8;
    }

    #datescroll ul {
        border: none;
    }

    .logout {
        display: block;
        background: #fff;
        padding: .1rem;
        color: #000;
        border: 1px solid #d8d8d8;
        border-width: 1px 0;
    }

    label {
        color: #333;
    }

    .info-avatar s {
        border-color: #aaa !important;
    }
    .info-list {
	    background-color: #fff;
	    margin-bottom: .1rem;
	}
	.info-list li {
	    padding: .1rem;
	    border-bottom: 1px #ddd solid;
	    overflow: hidden;
	    min-height: .1rem;
	    position: relative;
	    padding-right: 0;
	    margin: 0 .1rem;
	    padding-left: 0;
	}
	.info-list li label {
	    display: inline-block;
	    vertical-align: middle;
	    position: absolute;
	    left: 0rem;
	    top: 50%;
	    transform: translateY(-50%);
	    -webkit-transform: translateY(-50%);
	}
	.info-img {
    width: 0.36rem;
    max-width: 0.36rem;
    margin-right: .1rem;
}
.fr {
    float: right!important;
    height: auto;

}
.fr input,select {
        border: none;
        text-align: right;
        appearance: none;
        -webkit-appearance: none;
        font-size: 0.1rem;
        font-family: "微软雅黑";
        outline: none;
    }

</style>