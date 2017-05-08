<template>
    <div id="app" class="container">
        <Mytable></Mytable>
        <Mypagintion></Mypagintion>
    </div>
</template>

<script>
    import Mytable from "./Mytable.vue";
    import Mypagintion from "./MyPagination.vue";
    export default {
        name: 'app',
        components:{
            Mytable,
            Mypagintion
        },

    }
</script>

<style>

</style>
