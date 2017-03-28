<template>
    <div>
        <h1>打字机-组件</h1>
        <h3>效果展示</h3>
        <type-writer class="fontSize_40"></type-writer>
    </div>
</template>

<script>
import typeWriter from '../component/typeWriter.vue';
export default{
    components: {
        "typeWriter": typeWriter,
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    .fontSize_40{
        font-size:20px;
        color:#1ab394;
    }
</style>
