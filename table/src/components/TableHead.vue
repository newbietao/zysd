<template>
    <thead>
        <tr>
            <td>编号</td>
            <td v-for="itme in tHeadData">{{itme}}</td>
        </tr>
    </thead>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';
    export default{
        data(){
            return {

            }
        },
        computed: mapGetters([
            'tHeadData'

        ]),
    }
</script>
<style>

</style>