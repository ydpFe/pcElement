<template>
    <div id="warp">
        <!-- header -->
		<div id="header">
				<div class="barBox fl"><div class="barStyle" @click="control"><i class="fa fa-bars backgroundStyle "></i></div></div>
				<ul class="account fr">
					<li>admin</li>
					<li><i class="fa fa-bell"></i><span class="label label-primary inonStyle">0</span></li>
					<li><i class="fa fa-sign-out"></i></li>
				</ul>
		</div>
		<div id="center">
			<!-- 左侧导航 -->
			<menu-component :menuData="menuData" class="menuStyle" v-show="show==true" v-on:closeMenu="closeShow" ref="menuObj"></menu-component>
			<div class="view" ref="view">
				<div class="viewTop"></div>
				<!-- router-view -->
				<transition name="fade"
		            mode="out-in">
					<router-view class="routerViewStyle"></router-view>
				</transition>
				<div class="viewBottom">vuejs2.0+ElementJS+bootstrap+scss</div>
			</div>
		</div>
    </div>
</template>
<script>
"use strict";
import menuComponent from './component/menuComponent.vue';//导航组件
export default{
    components: {
        "menu-component": menuComponent,
    },
    data(){
        return{
            menuData:[
				{
					"id":"1",
					"name":"element",
					"children":[
						{
							"id":"3",
							"name":"Form展示",
							"children":[
								{
									"id":"4",
									"name":"Form",
									"path":"/"
								}
							]
						},
						{
							"id":"290",
							"name":"Table展示",
							"children":[
								{
									"id":"89",
									"name":"Table",
									"path":"/table"
								}
							]
						},
						{
							"id":"291",
							"name":"Others组件",
							"children":[
								{
									"id":"888",
									"name":"Others",
									"path":"/others"
								}
							]
						}
					]
				},
				{
					"id":"11",
					"name":"tab切换",
					"children":[
						{
							"id":"31",
							"name":"tab展示",
							"children":[
								{
									"id":"411",
									"name":"tab",
									"path":"/tab"
								}
							]
						}
					]
				}
			],
			show:true,//控制导航的显示和隐藏
        }
    },
	mounted(){
		 //根据当前窗口设置导航的显示和隐藏
		 let deviceWidth = document.documentElement.clientWidth;
		 if(Number(deviceWidth)<768){
			this.show=false;
		 }
		 //窗口 resize 事件
		 window.onresize = ()=> {
             let deviceWidth = document.documentElement.clientWidth;
			 this.setHeight();
             if(Number(deviceWidth)<768){
				this.show=false;
			 }else{
				this.show=true;
			 }
        };
		this.setHeight()
	},
    methods:{
		control(){
			if(this.show==true){
				this.show=false;
			}else{
				this.show=true;
			}
		},
		closeShow(){
			let deviceWidth = document.documentElement.clientWidth;
			if(deviceWidth<768){
				this.show=false;
			}
		},
		setHeight(){
			let deviceHeight = parseInt(document.documentElement.clientHeight)-parseInt(60);;
			var obj=this.$refs.view;
			obj.setAttribute("style","min-height:"+deviceHeight+"px");
		}
    }
}
</script>
<style lang='sass'>
    @import './styles/index.scss';
    @media screen and (max-width: 768px){
        #header{
			height:60px;
			line-height:60px;
			background: #337ab7;
			color: #fff;
			.barBox{
				width:135px;
				height:60px;
				font-size:22px;
				padding:0 20px;
				border-color: rgba(255, 255, 255, 0.3);
				border-right-width: 1px;
				border-right-style: solid;
				.barStyle{
					width:40px;
					height:35px;
					background:#fff;
					text-align:center;
					line-height:35px;
					border-radius:5px;
					cursor: pointer;
					font-size:15px;
					margin-top:11.5px;
				}
			}
			.account{
				height:60px;
				padding-right:0;
				li{
					color:#fff;
					float:left;
					padding:0 10px;
				}
			}
		}
		.menuStyle{
			position:fixed;
			left:0;
			top:60px;
			min-width:135px;
			background:#324157;
			overflow:auto;
			z-index:20;
		}
    }
	@media screen and (min-width: 768px){
		.menuStyle{
			min-width:230px;
			background:#324157;
			z-index:20;
		}
		#header{
			height:60px;
			line-height:60px;
			background: #337ab7;
			color: #fff;
			.barBox{
				width:230px;
				height:60px;
				font-size:22px;
				padding:0 20px;
				border-color: rgba(255, 255, 255, 0.3);
				border-right-width: 1px;
				border-right-style: solid;
				.barStyle{
					width:40px;
					height:35px;
					background:#fff;
					text-align:center;
					line-height:35px;
					border-radius:5px;
					cursor: pointer;
					font-size:15px;
					margin-top:11.5px;
				}
			}
			.account{
				height:60px;
				padding-right:20px;
				li{
					color:#fff;
					float:left;
					padding:0 10px;
					cursor: pointer;
				}
			}
		}
    }
	#warp{
		margin:0;
		padding:0;
		overflow:auto;
	}
	.view{
		width:100%;
		background:#f3f3f4;
		overflow-y: scroll;
	}
	.viewTop{
		width:100%;
		background:#fff;
		height:40px;
		border-top: 1px solid #e7eaec !important;
		border-bottom: 1px solid #e7eaec !important;
	}
	.viewBottom{
		width:100%;
		background:#fff;
		height:40px;
		line-height:40px;
		padding-left:20px;
		border-top: 1px solid #e7eaec !important;
		border-bottom: 1px solid #e7eaec !important;
		color:#676a6c;
	}
	.routerViewStyle{
		margin:0 20px;
		padding-top:15px;
		background:#fff;
	}
	#center{
		display:flex;
		overflow:auto;
	}
	.backgroundStyle{
		background:#337ab7;
	}
	.inonStyle{
		background:#888;
	}
</style>