<template>
    <div id="game">
        <div class="panel top-panel">top</div>
        <div class="middle-panel">
            <div class="panel left-panel">left</div>
            <div class="panel scene-panel">
                <Scene></Scene>
            </div>
            <div class="panel right-panel">
                <BuildList></BuildList>
            </div>
        </div>
        <div class="panel footer-panel">
        </div>
    </div>
</template>
<script>
import Scene from '@/components/Scene.vue';
import BuildList from '@/components/BuildList.vue';
export default {
    components: { Scene, BuildList },

}
</script>
<style lang="scss" scoped>
#game {
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #000;
    flex-direction: column;
    overflow: hidden;
    .panel {
        background-color: #313131;
        margin: 1px;
    }
    .top-panel {
        height: 40px;
    }
    .middle-panel {
        flex: 1;
        display: flex;
        align-items: stretch;
        overflow: hidden;
        .left-panel {
            width: 100px;
        }
        .scene-panel {
            flex: 1;
            overflow: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .right-panel {
            width: 200px;
            overflow: auto;
        }
    }
    .footer-panel {
        height: 30px;
    }
}
</style>