<template>
    <div>
        <div id="menu">
            <el-menu default-active="active" class="el-menu-vertical-demo borderNone" theme="dark" mode="vertical" :router="router" :unique-opened="open">
                <template v-for="data in menuData">
                    <!--使用elementjs menu组件 渲染一级标题-->
                    <el-submenu :index="data.id">
                        <template slot="title"><i class="el-icon-message"></i>{{data.name}}</template>
                        <!--渲染二级标题-->
                        <template v-for="child in data.children" v-if=" data.children.length!=0 ">
                            <el-submenu :index="child.id">
                                <template slot="title">{{child.name}}</template>
                                    <!--渲染三级级标题-->
                                    <template v-for="son in child.children" v-if="child.children.length!=0">
                                        <el-menu-item :index="son.path" @click="jump(son.path)">{{son.name}}</el-menu-item>
                                    </template>
                            </el-submenu>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            menuIndex:"0",//默认
            router:true,
            open:true,
            active:""
        }
    },
    props:['menuData'],
    methods:{
        jump(data){
            this.active=data;
            this.$emit("closeMenu");
        }
    }
}
</script>
<style lang='sass'>
    .borderNone{
        border-radius:0!important;
    }
</style>