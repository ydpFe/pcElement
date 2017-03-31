<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item :to="{ path: '/' }" class="set-color ">element</el-breadcrumb-item>
					<el-breadcrumb-item class="set-color">Form展示</el-breadcrumb-item>
					<el-breadcrumb-item>Form</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">

                <h3>弹窗</h3>
				<div class="line-style"></div>
				<!-- 触发弹窗的按钮 -->
				<el-button type="primary" @click="dialogVisible = true">打开弹窗</el-button>
				<!-- 弹窗 -->
				<div class="col-sm-12 form-group col-xs-12">
					<el-dialog title="提示" v-model="dialogVisible" :size="dialogSize" class="col-xs-12">
					<span>这是一段信息</span>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取 消</el-button>
						<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
					</span>
					</el-dialog>
				</div>

				<h3>轮播</h3>
				<div class="line-style"></div>
				<el-carousel height="250px">
					<template v-for="data in imgObj">
						<el-carousel-item>
							<img :src="data" style="height:250px"/>
						</el-carousel-item>
					</template>
				</el-carousel>

			</div>
			<!-- ibox-center end -->
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
            dialogVisible:false,
			dialogSize:"",
			imgObj:[
				'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1490944255&di=94908be4ec2f0bbaaa3981d5086362db&src=http://pic.qiantucdn.com/58pic/17/86/17/559f42e68d5f0_1024.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490954659391&di=9c21d7eb8822d76386926d697742711c&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F13%2F58%2F87%2F63bOOOPICb3_1024.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490954851410&di=79cec3b8908679b2d9bd10c2501e8cf4&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F18%2F00%2F79%2F55bf1bf969a7b_1024.jpg'
			]
		}
	},
	mounted(){
		//设置弹窗组件 size 大小
		let deviceWidth = document.documentElement.clientWidth;
		 if(Number(deviceWidth)<768){
			this.dialogSize="large";
		 }else{
			this.dialogSize="small";
		 }
	},
	methods:{

	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
  	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
  
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
