<template>
    <div id="Scene" @mousedown="down=true" @mouseup="down=false">
        {{down}}
        <div class="info-box">
            <div v-if="$store.state.model=='build'">
                当前选择建造：{{$store.state.activeBuild.name}}
            </div>
            <div v-else>暂无动作</div>
        </div>
        <div class="land-row" v-for="(row,i) in map" :key="i">
            <div class="land-item" @click="trigger(i,j)" @mousemove="down?trigger(i,j):null" :style="style" v-for="(col,j) in row" :key="i+j">
                <div v-if="col.content">
                    <component :is="col.content.component"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Lumbering from "./builds/Lumbering";
import Bonfire from "./builds/Bonfire";
import Sleep from "./builds/Sleep";
import Quarry from "./builds/Quarry";
import Tree from "./terrains/Tree";
import Rock from "./terrains/Rock";
export default {
    components: { Lumbering, Bonfire, Sleep, Tree, Rock, Quarry },
    data() {
        return {
            size: [25, 25],
            landSize: 30,
            down: false,
            map: [],
        }
    },
    computed: {
        style() {
            return {
                width: `${this.landSize}px`,
                height: `${this.landSize}px`,
                maxWeight: `${this.landSize}px`,
                maxHeight: `${this.landSize}px`,
            }
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            let map = new Array(this.size[0])
                .fill('')
                .map((el, i) =>
                    new Array(this.size[1])
                        .fill('')
                        .map((el, j) => ({ index: [i, j], content: null }))
                );
            this.randomMap(map);

            this.map = map;
        },
        /**
         * 随机生成地形和场景
         */
        randomMap(map) {

            this.toMap([5, 5], this.randow([5, 5], () => ({ name: '森林', component: 'Tree' })), map);
            this.toMap([5, 5], this.randow([5, 5], () => ({ name: '森林', component: 'Tree' })), map);
            this.toMap([5, 5], this.randow([5, 5], () => ({ name: '森林', component: 'Tree' })), map);
            this.toMap([3, 3], this.randow([3, 3], () => ({ name: '石头', component: 'Rock' })), map);
            this.toMap([3, 3], this.randow([3, 3], () => ({ name: '石头', component: 'Rock' })), map);
            this.toMap([3, 3], this.randow([3, 3], () => ({ name: '石头', component: 'Rock' })), map);


            // map.forEach(el => {
            //     console.warn(el);
            // })
        },
        randow(size = [5, 5], comp) {
            /**
                     * 地形生成机制：
                     * 1、生成长、宽
                     * 2、根据长宽获取中心点
                     * 3、从上到下生成
                     */
            let center = [parseInt(size[0] / 2), parseInt(size[1] / 2)];
            let map = new Array(size[0]).fill('').map(el => new Array(size[1]).fill(''));
            // 以中心点开始,在x轴开始向右
            for (let i = 0; i < size[1]; i++) {
                let dev = Math.abs(center[1] - i);
                for (let j = dev; j <= size[1] - dev; j++) {
                    map[i][j] = comp();
                }
            }
            return map;
        },
        toMap(size, area, map) {
            let spot = [parseInt(Math.random() * (this.size[0] - size[0])), parseInt(Math.random() * (this.size[0] - size[0]))];
            area.forEach((row, i) => {
                row.forEach((col, j) => {
                    map[spot[0] + i][spot[1] + j].content = col;
                });
            });
        },
        trigger(i, j) {
            console.warn(i, j);
            if (this.$store.state.model == 'build') {
                // 建造模式
                if (!this.map[i][j].content) {
                    this.map[i][j].content = this.$store.state.activeBuild
                }
            }
        },
    },

}
</script>
<style lang="scss" scoped>
#Scene {
    // width: 100%;
    // height: 100%;
    // overflow: auto;
}
.info-box {
    color: #fff;
    padding: 10px 0;
    font-size: 14px;
}
.land-row {
    display: flex;
    .land-item {
        background-color: rgb(194, 194, 194);
        font-size: 11px;
        // border: solid 1px #ddd;
        outline: solid 1px #ddd;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        z-index: 1;
        &:hover {
            background-color: #fff;
            box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.3);
            z-index: 2;
        }
    }
}
</style>