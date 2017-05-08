<template>
    <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="tableCounts"
                :page-size="tableCount"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableTotal">
        </el-pagination>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    export default {
        methods: {
            handleSizeChange(count) {
                this.$store.commit('setOffset', { count })
            },
            handleCurrentChange(val) {
                val--;
                this.$store.commit('setIndex', { val })
            }
        },
        data() {
            return {
                currentPage4:1
            };
        },
        computed: mapGetters([
            'tableTotal',
            'tableCount',
            'tableCounts'

        ])
    }
</script>
<style>
    .block{
        margin:20px 0;
        float: right;

    }
</style>