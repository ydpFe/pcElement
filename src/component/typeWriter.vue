<template>
    <div>{{data}}</div>
</template>

<script>

export default{
    data(){
        return{
            data:""
        }
    },
    props: {
        // 检测 text
        text:{
            type:null,
            default: "默认演示打字机效果，请设置text属性"
        },
        // 检测 time
        time: {
            type: null,
            default: 150
        }
    },
    mounted(){
        let sl=setInterval(()=>{
            let textLen=this.text.length;
            let dataLen=this.data.length;
            this.data=this.text.substring(0,dataLen+1);
            if(textLen===dataLen){
                clearInterval(sl);
                return;
            };
        },this.time)
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>
