import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    tableData:"",
    offset:0,
    index:0
}
const mutations = {
    getData (state,{data}) {
        state.tableData = data;
    },
    setOffset (state,{count}) {
        state.offset = count;
    },
    setIndex (state,{ val }) {
        state.index = val;
    }
}

const getters = {
    tHeadData:()=>state.tableData[0],
    tBodyData:()=>{
        let data = [];
        let count = 0;
        for(let i=(state.index*state.offset+1); i<(state.offset+state.index*state.offset+1); i++){
            if(i>=state.tableData.length){
                break;
            }
            data[count] = state.tableData[i];
            count++;
        }
        return data
    },
    tableTotal:()=>{
        return state.tableData.length-1;
    },
    tableCount:()=>{
        return state.offset;
    },
    tableCounts:()=>{
        let pageSize = [5,10,15,20];
        return pageSize;
    },
}
export default new Vuex.Store({
    state,
    getters,
    mutations
})
