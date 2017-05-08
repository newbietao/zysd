<template name="fade">
        <table class="table table-striped table-bordered table-hover">
            <caption>{{title}}</caption>
            <TableHead></TableHead>
            <TableBody></TableBody>
        </table>
</template>
<script>
    import TableHead from "./TableHead.vue";
    import TableBody from "./TableBody.vue";
    export default {
        data(){
            return{
                title:"中冶赛迪XX报表"
            }
        },
        components:{
            TableHead,
            TableBody
        }
    }
</script>
<style scoped>
</style>