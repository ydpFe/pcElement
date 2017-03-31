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
				<h3>按钮</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 col-xs-12">
					<div class="col-sm-2 form-group">
						<el-button>默认按钮</el-button>
					</div>
					<div class="col-sm-2 form-group">
						<el-button type="primary">主要按钮</el-button>
					</div>
					<div class="col-sm-2 form-group">
						<el-button type="text">文字按钮</el-button>
					</div>
				</div>

				<h3>radio 单选框</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 form-group">
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
					</div>
				</div>

				<h3>radio 禁用状态 设置disabled属性</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 form-group">
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio disabled v-model="radio1" label="name">备选项</el-radio>
					</div>
					 <div class="col-sm-2 col-xs-6 form-group">
						<el-radio disabled v-model="radio1" label="name2">备选项</el-radio>
					</div>
				</div>

				<h3>单选框组</h3>
				<div class="line-style"></div>
				<el-radio-group v-model="radio2" class="form-group col-sm-12 col-xs-12">
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio :label="3">备选项</el-radio>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio :label="6">备选项</el-radio>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-radio :label="9">备选项</el-radio>
					</div>
				</el-radio-group>

				<h3>多选择框</h3>
				<div class="line-style"></div>
				<el-checkbox-group v-model="checkList" class="form-group col-sm-12 col-xs-12">
					<div class="col-sm-2 col-xs-6 form-group">
						<el-checkbox label="复选框 A"></el-checkbox>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-checkbox label="复选框 B"></el-checkbox>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-checkbox label="复选框 C"></el-checkbox>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-checkbox label="禁用" disabled></el-checkbox>
					</div>
					<div class="col-sm-2 col-xs-6 form-group">
						<el-checkbox label="选中且禁用" disabled></el-checkbox>
					</div>
				</el-checkbox-group>
				
				<h3>文本框</h3>
				<div class="line-style"></div>
				<div class="col-sm-12">
					<div class="col-sm-4 col-xs-12 form-group">
						<el-input v-model="input" placeholder="请输入内容"></el-input>
					</div>
					<div class="col-sm-4 col-xs-12 form-group">
						<el-input
							placeholder="请输入内容"
							icon="search"
							v-model="input2"
							:on-icon-click="handleIconClick">
						</el-input>
					</div>
				</div>

				<h3>计数器</h3>
				<div class="line-style"></div>
				<div class="col-sm-12">
					<div class="col-sm-6 col-xs-12 form-group">
						<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
					</div>
				</div>

				<h3>日期选择器</h3>
				<div class="line-style"></div>
				<div class="col-sm-12">
					<div class="col-sm-6 col-xs-12 form-group">
						<el-date-picker
							v-model="value1"
							type="date"
							placeholder="选择日期"
							:picker-options="pickerOptions0">
						</el-date-picker>
					</div>
				</div>

				<h3>时间选择器</h3>
				<div class="line-style"></div>
				<div class="col-sm-12">
					<div class="col-sm-6 col-xs-12 form-group">
						<el-time-picker
							v-model="value2"
							:picker-options="{
							selectableRange: '18:30:00 - 20:30:00'
							}"
							placeholder="任意时间点">
						</el-time-picker>
					</div>
				</div>
				<h3>日期时间选择器</h3>
				<div class="line-style"></div>
				<div class="col-sm-12">
				<div class="col-sm-12 col-xs-12 form-group">
					 <el-date-picker
						v-model="value3"
						type="datetime"
						placeholder="选择日期时间">
					</el-date-picker>
				</div>
				</div>
				
				<h3>select选择器</h3>
				<div class="line-style"></div>
				<div class="col-sm-12 col-xs-12">
					<div class="col-sm-6 col-xs-12 form-group">
							<el-select v-model="vals" placeholder="请选择">
								<el-option
									v-for="item in options"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
					</div>
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
			radio:"1",
			radio1:"name",
			radio2:6,
			checkList: ['选中且禁用','复选框 A'],
			input2:"",
			num1:1,
			input:"",
			vals:"",
			options:[{
				value: "选项1",
				label: "黄金糕"
			}, {
				value: '选项2',
				label: '双皮奶'
			}, {
				value: '选项3',
				label: '蚵仔煎'
			}, {
				value: '选项4',
				label: '龙须面'
			}, {
				value: '选项5',
				label: '北京烤鸭'
			}],
			pickerOptions0: {
				disabledDate(time) {
					return time.getTime() < Date.now() - 8.64e7;
				}
			},
			value1:"",
			value2: new Date(2016, 9, 10, 18, 40),
			value3:""
		}
	},
	methods:{
		handleIconClick(e){
			console.log(e)
		},
		handleChange(value) {
        console.log(value);
      }
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .fontSize_40{
        font-size:20px;
        color:#1ab394;
    }
</style>
