<template>
    <transition-group name='list' tag="tbody" mode="out-in">
        <tr v-for="(itmes ,index) in tBodyData" :key="index">
            <td>{{index+1}}</td>
            <td v-for="(itme ,index) in itmes" :key="index">{{itme}}</td>
        </tr>
    </transition-group>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default{
        data(){
            return {

            }
        },
        computed: mapGetters([
            'tBodyData'
        ]),
    }
</script>
<style>
    .itme{
        transition: all 1s;
    }
    .list-leave-active,.list-enter-active{
        transition: all 1s;
    }
    .list-enter, .list-leave-active {
        opacity: 0;
        transform: translateX(30px);

    }
</style>