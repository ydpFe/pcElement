<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item :to="{ path: '/' }" class="set-color ">element</el-breadcrumb-item>
					<el-breadcrumb-item class="set-color">Table展示</el-breadcrumb-item>
					<el-breadcrumb-item>Table</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">
				<h3>表格</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 col-xs-12 form-group">
					<el-table :data="tableData" stripe  highlight-current-row style="overflow:auto">
						<el-table-column prop="date" label="日期" width="180" sortable></el-table-column>
						<el-table-column prop="name" label="姓名" width="180"></el-table-column>
						<el-table-column prop="address" label="地址" min-width="280"></el-table-column>
						<el-table-column prop="address" label="操作" width="140">
							<template scope="scope">
								<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
								<el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				 </div>

				<h3>分页组件</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 col-xs-10 form-group" style="overflow:auto">
					<el-pagination
						layout="prev, pager, next"
						:total="100">
					</el-pagination>
				</div>

			</div>
			<!-- ibox-center end -->
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return{
			border:true,//是否显示边框
			tableData: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
				}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄'
				}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄'
				}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄'
			}]
		}
	},
	methods:{
		 handleEdit(index, row) {
        	console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
		}
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
