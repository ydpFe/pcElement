<template>
	<div class="row">
		<div class="col-lg-12">
			<!--设置面包屑-->
				<el-breadcrumb separator="/" class="ibox">
					<el-breadcrumb-item :to="{ path: '/' }" class="set-color ">tab切换</el-breadcrumb-item>
					<el-breadcrumb-item class="set-color">tab展示</el-breadcrumb-item>
					<el-breadcrumb-item>tab</el-breadcrumb-item>
				</el-breadcrumb>
			<!--设置面包屑 end-->
			<!-- ibox-center -->
			<div class="ibox-center">
                <el-button @click="addTab(editableTabsValue2)" type="primary">增加 tab</el-button>
                <div class="line-style"></div>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane v-for="(item, index) in editableTabs2" :label="item.title" :name="item.id">
                        
                        <component v-bind:is="item.content">
                        </component>
                        
                    </el-tab-pane>
                </el-tabs>
			</div>
			<!-- ibox-center end -->
		</div>
	</div>
</template>

<script>
import formObj  from '../form/form.vue';
import others from '../others/others.vue';
import tableObj from '../tableShow/tableShow.vue';
export default{
    components: {
        'others': others,
        'formObj':formObj,
        'tableObj':tableObj
    },
	data(){
		return{
            editableTabsValue2: '1',//默认开启窗口
            editableTabs2: [
                {
                    title: '其他组件tab',
                    id: '1',
                    content: formObj
                }, 
                {
                    title: '表单组件tab',
                    id: '2',
                    content: others
                }
                ,{
                    title: '表格组件tab',
                    id: '3',
                    content: tableObj
                }
            ],
            tabIndex:4//新建窗口name起始值
		}
	},
	mounted(){

	},
	methods:{
        addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: '新的窗口',
          id: newTabName,
          content: tableObj
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.id === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.id;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.id !== targetName);
      }
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
