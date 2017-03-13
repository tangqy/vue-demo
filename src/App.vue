<template>
    <!--<div id="wrapper">-->
        <!--<nav class="navbar navbar-default">-->
            <!--<div class="container">-->
                <!--&lt;!&ndash;<a class="navbar-brand" href="#">&ndash;&gt;-->
                <!--&lt;!&ndash;<i class="glyphicon glyphicon-time"></i>&ndash;&gt;-->
                <!--&lt;!&ndash;计划板&ndash;&gt;-->
                <!--&lt;!&ndash;</a>&ndash;&gt;-->
                <!--<ul class="nav navbar-nav">-->
                    <!--<li>-->
                        <!--<router-link to="/home">首页</router-link>-->
                    <!--</li>-->
                    <!--&lt;!&ndash;<li>&ndash;&gt;-->
                    <!--&lt;!&ndash;<router-link to="/time-entries">计划列表</router-link>&ndash;&gt;-->
                    <!--&lt;!&ndash;</li>&ndash;&gt;-->
                    <!--<li>-->
                        <!--<router-link to="/login">登录</router-link>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</nav>-->
        <!--<div class="container">-->
            <!--<div class="col-sm-3">-->
                <!--&lt;!&ndash;<sidebar></sidebar>&ndash;&gt;-->
            <!--</div>-->

        <!--</div>-->
    <!--</div>-->
    <router-view></router-view>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'
  export default {
    components: { 'sidebar': Sidebar },
  }




</script>

<style lang="scss" rel="stylesheet/scss">
    @import './sass/common';
</style>

