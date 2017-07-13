<template>
	<div class="lists">
		<ul>
			<li v-for="list in lists">
                <span class="list-details list_cong">  
                    <router-link :to="{name:'/details',params:{id:list.id}}" class="list-img p-l-image"><img class="" :src="list.url" alt=""></router-link>
                    <a href="" style="color:#333"><p class="nowrap pro_tit">{{list.gname}}</p></a>
                    <p class="nowrap"><b>{{list.gprice}}</b></p>
                    <p class="nowrap" style="font-size: .08rem; color: #333;">{{list.deals}}</p>
                    <p class="list-btn">
                        <a href="" class="go-addtocart"></a>
                        <a href="" class=" list-add-fav fr"><i></i>收藏</a>
                    </p>
                </span>
            </li>
		</ul>
	</div>
</template>

<script>
	export default{
		mounted(){
			var _this=this;
			fetch("/goodslist",{
			method:"get"
			}).then(function(response) {
	        return response.text()
	   		 }).then(function(data){
	   		 	_this.lists=JSON.parse(data).lists;
	   		 })
		},
		data(){
			return{
				lists:[]
			}
		}
	} 
</script>
<style scoped>
	/*ul {
	    margin-top: 10px !important;
	    margin-bottom: 30px !important;
	}*/
	.lists > ul > li {
    padding: .05rem .08rem;
    padding-bottom: 0;
    background-color: #fff;
    position: relative;
    border-top: 1px #ddd solid;
}
/*.list_cong {
    padding: 0 0 .35rem 0 !important;
}*/
.list-details {
    display: block;
    position: relative;
    overflow: hidden;
}
.p-l-image {
    width: 35%;
}
.list-img {
    float: left;
    width: 40%;
}
.list-img img {
    width: 100%;
}
img {
    max-width: 100%;
}
.list-details p {
    margin-left: 35%;
    padding-bottom: .04rem;
    text-indent: .08rem;
    font-size: .095rem;
}
.pro_tit {
    font-size: 0.1rem !important;
}
.nowrap {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.list-details p b {
    color: #ea3c2f;
    font-size: .1rem;
}
p.list-btn {
    position: absolute;
    font-size: .08rem;
    bottom:0.31px;
    right: 0;
    margin: 0;
    width: 60%;
    padding: 0;
    text-indent: 0;
}
a.go-addtocart {
    float: right;
    margin-top: -.02rem;
    background-image: url(../images/cart.png);
    color: #fff;
    padding: .02rem .03rem;
    width: .18rem;
    height: 0.18rem;
    background-size: 100% 100%;
    margin-left: .1rem;
    margin-right: .05rem;
}
.list-add-fav i {
    display: inline-block;
    width: .2rem;
    height: .2rem;
    margin: .01rem .03rem -.01rem .03rem;
    -webkit-background-size: .2rem;
    background-size: .2rem;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../images/like.png);
}
.list-add-fav{
	font-size: 0.14rem;
    color: rgb(51, 51, 51);
    margin-left: 0.5rem;
    line-height: 0.3rem;
}
</style>