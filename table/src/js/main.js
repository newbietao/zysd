import Vue from 'vue';
import App from '../components/App.vue';
import jQuery from "jquery";
const $ = jQuery;
window.$ = jQuery;
window.jQuery = jQuery;
import "../assets/js/bootstrap.min";
import "../assets/css/bootstrap.css";
import store from "./store";
import { Pagination } from 'element-ui';
Vue.use(Pagination);
let vm = new Vue({
    el: '#app',
    store,
    components:{
        App
    },
    created(){
        $.get("/src/data/test.json",function(data){
            this.$store.commit('getData', { data })
        }.bind(this),"json");
    },
    mounted(){
        (function(win,that) {
            let tid;
            function refreshRem() {
                let winHeight =  $(window).height();
                let count = parseInt(winHeight / 38) - 4;
                that.$store.commit('setOffset', { count });
            }
            win.addEventListener('resize',() => {
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 10);
            }, false);
            win.addEventListener('pageshow',(e) => {
                if (e.persisted) {
                    clearTimeout(tid);
                    tid = setTimeout(refreshRem, 10);
                }
            }, false);

            refreshRem();

        })(window,this);
    }

});
