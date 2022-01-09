<template>
    <div>
        <div class="build-list">
            <div :class="['build-item',{'active':$store.state.activeBuild.name==item.name}]" @click="$store.commit('setBuild',item)" v-for="(item,i) in list" :key="i">
                {{item.name}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() {
    },
    computed: {
        list() {
            return this.$store.state.buildList;
        },
    },
    methods: {

    },
}
</script>
<style lang="scss" scoped>
.build-list {
    .build-item {
        padding: 10px;
        cursor: pointer;
        color: #fff;
        transition: all 0.3s;
        user-select: none;
        &.active,
        &:hover {
            background-color: rgb(177, 177, 177);
            color: #000;
        }
    }
}
</style>