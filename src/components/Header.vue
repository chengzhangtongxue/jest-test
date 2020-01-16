<template>
    <div class="header">
        <input type="text" test-data="input" v-model="input" @keyup.enter="enterFn">
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: ''
        }
    }   ,
    methods: {
        enterFn() {
            this.$emit('enterCallback');
            this.input = '';
        }
    }
}
</script>

<style lang="scss">
.header {

}
</style>