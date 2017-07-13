<template>
	<div class="footer">
		<ul class="footnav">
	      <li  @click="change">
	        <router-link to="/" class="lin">
	        <img src="../images/home.png" v-if="display&&msg.showimg1">
	        <img src="../images/home-active.png" v-else>
	        首页</router-link>
	      </li>
	      <li @click="change1">
	        <router-link to="/classify" class="lin">
	        <img src="../images/sele.png" v-if="display1&&msg.showimg2">
	        <img src="../images/sele-active.png" v-else>
	        分类</router-link>
	      </li>
	      <li @click="change3">
	        <router-link to="/mine" class="lin">
	        <img src="../images/mine.png">
	        我的菜虫</router-link>
	      </li>
	      <li @click="change2">
	        <router-link to="/cart" class="lin">
	        <img src="../images/cart.png" v-if="display2&&msg.showimg">
	        <img src="../images/cart-hover.png" v-else>
	        购物车</router-link>
	      </li>
	    </ul>
	</div>
</template>
<script>
	export default {
      data(){
      return{
        display:1,
        display1:1,
        display2:1
        
      }
    },
    props:["msg","username"],
    methods:{
        change(){
          this.display=0;
          this.display1=1;
          this.display2=1;
        },
        change1(){
          this.display=1;
          this.display1=0;
          this.display2=1;
        },
        change2(){
          this.display=1;
          this.display1=1;
          this.display2=0;
        },
        change3(){
          this.display=1;
          this.display1=1;
          this.display2=1;
        }
    }
}
</script>

<style scoped>
.footnav{
  width: 100%;
  display: flex;
  height: 0.5rem;
  position: fixed;
  bottom:0;
  left: 0;
  justify-content: space-around;
  background-color: #e6e6e6;
  box-shadow: 0 -2px 2px rgba(0,0,0,.2);
  padding-top: 0.064rem;
}
.lin{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footnav li img{
  width:0.224rem;
  height:0.224rem;
}
.footnav li a{
  color:#555;
  font-size: 0.12rem;
}

</style>