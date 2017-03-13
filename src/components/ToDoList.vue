<template>
    <div>
        <p>{{$store.state.user.username}} {{msg}} </p>
        <div class="panel">
            <form>
                <input type="text" class="form-control-static" required v-model="desc" placeholder="请输入todolist item">
                <button type="button" :class="{'disabled':desc === ''}" class="btn btn-default" @click="addItem()">创建todo item</button>
            </form>
        </div>

        <ul class="list-group">
            <li class="list-group-item container" v-for="(item , index) in $store.state.toDoModule.list">
                <div class="btn col-xs-8 disabled customer-btn">{{item.desc}}</div>
                <button type="button" class="btn btn-danger col-xs-2 col-xs-offset-2" @click="delItem(index)">删除
                </button>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .btn.customer-btn {
        cursor: inherit;
    }

</style>
<script>
    import { mapGetters,mapState } from 'vuex'
    export default{
        methods:{
           ...mapGetters([
              'showState2'
           ]),
           addItem(){
               if(this.desc === '') return;
               const item = {
                    desc : this.desc,
               }
               this.$store.dispatch('addItem',item);
           },
           delItem(index){
               this.$store.dispatch('delItem',index);
           },
        },
        data(){
            return {
                msg:'欢迎你',
                desc:'',
             }
        },
        computed:mapState([
           'user'
        ]),
        beforeCreate(){
            console.log('this is beforeCreate');
        },
        created(){
            console.log('this is created');
        },
        beforeMount(){
            console.log('this is beforeMount');
        },
        mounted(){
            console.log('this is mounted')
        },
        beforeUpdate(){
            console.log("this is beforeUpdate")
        },
        updated(){
            console.log("this is update")
        },
        activated(){
            console.log("this is activated")
        },
        deactivated(){
            console.log("this is deactivated");
        },
        beforeDestroy(){
            console.log("this is beforeDestroy")
        },
        destroyed(){
            console.log("this is destroyed")
        }
    }

</script>
