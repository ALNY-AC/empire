<template>
    <div class="lumbering">
        🪓
    </div>
</template>
<script>
export default {
    props: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
    },
    computed: {
        map() {
            return this.$store.state.map;
        }
    },
    data() {
        return {
            interval: null
        }
    },
    mounted() {
        this.start();
    },
    methods: {
        start() {
            this.clear();
            this.interval = setInterval(() => {
                console.warn('伐木');
            }, 1000);
        },
        clear() {
            clearInterval(this.interval);
        },
    },
    deactivated() {
        this.clear();
    },
}
</script>
<style lang="scss" scoped>
.lumbering {
}
</style>