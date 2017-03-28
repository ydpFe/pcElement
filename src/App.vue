<template>
    <div>
        <div id="header" class="marginBottom_15">
            <span class="fontSize_20" id="indexTitle">CLEARCOMPONENT</span>
            <span class="fontSize_20" id="indexTitleMenu" @click="showMenu">Menu</span>
            <span class="fr fontColor_fff">-by麦浪XPEKI</span>
        </div>
        <div id="center" class="fx">
            <el-menu mode="vertical" class="el-menu-vertical-demo menuWidth" theme="dark" ref="menu">
                <el-menu-item-group title="组件">
                    <template v-for="(data,index) in menu">
                        <el-menu-item :index="JSON.stringify(index)" :class="{'fontColor_1ab394':index==menuIndex}" @click="menuIndex=index">{{data}}</el-menu-item>
                    </template>
                </el-menu-item-group>
            </el-menu>
            <router-view class="routerViewStyle"></router-view>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            menu:["打字机效果","下拉菜单","menutest","menutest","menutest","menutest","menutest","menutest","menutest"],
            menuIndex:"0",//默认
        }
    },
    methods:{
        showMenu(){
            let menu=this.$refs.menu;
            console.log(menu)
        }
    }
}
</script>
<style lang='sass'>
    @import 'styles/index.scss';
    #header {
        height:40px;
        background:#48576a;
        padding:10px 60px;
        line-height:40px;
        box-shadow: 0 0 4px rgba(0,0,0,.5);
    }
    .menuWidth{
        width:210px;
        display:line-block;
    }
    .marginBottom_15{
        margin-bottom:15px;
    }
    @media screen and (max-width: 768px){
        #indexTitle{
            display:none;
        }
        #indexTitleMenu{
            display:line-block;
        }
        #center{
            background:#fff;
            width:100%;
            margin:0 auto;
            height:200px;
        }
        .menuWidth{
            width:210px;
            display:none;
        }
        .routerViewStyle{
            padding:10px 20px;
            width:100%;
        }
    }
    @media screen and (min-width: 768px){
        #indexTitle{
            display:line-block;
        }
        #indexTitleMenu{
            display:none;
        }
        #center{
            background:#fff;
            width:92%;
            margin:0 auto;
        }
        .menuWidth{
            width:210px;
            display:line-block;
        }
        .routerViewStyle{
            padding:10px 50px;
            width:100%;
        }
    }
    .fontColor_1ab394{
        color:#1ab394!important;
    }
    .fontColor_fff{
        color:#fff;
    }
    .fontSize_20{
        font-size:25px;
        color:#fff;
        font-family:"Times New Roman",Georgia,Serif;
    }
    .el-col {
        border-radius: 4px;
    }
    
    .bg-purple-dark {
        background: #99a9bf;
    }
    
    .bg-purple {
        background: #d3dce6;
    }
    
    .bg-purple-light {
        background: #e5e9f2;
    }
    
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>