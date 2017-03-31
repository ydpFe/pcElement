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
                <el-button size="small" @click="addTab(editableTabsValue2)">增加 tab</el-button>
                <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
                    <el-tab-pane v-for="(item, index) in editableTabs2" :label="item.title" :name="item.name">
                        <!-- 
                        <component v-bind:is="item.content">
                        </component>
                        -->
                    </el-tab-pane>
                </el-tabs>
			</div>
			<!-- ibox-center end -->
		</div>
	</div>
</template>

<script>
import others from '../others/others.vue';//导航组件
export default{
    components: {
        "others": others,
    },
	data(){
		return{
            editableTabsValue2: '2',
            editableTabs2: [
                {
                    title: 'Tab 1',
                    name: '1',
                    content: 'others'
                }, 
                {
                    title: 'Tab 2',
                    name: '2',
                    content: 'Tab 2 content'
                }
            ],
            tabIndex: 2
		}
	},
	mounted(){

	},
	methods:{
        addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
