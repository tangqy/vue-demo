<template>
    <div class="login-body">
        <div class="main">
            <form>
                <header>欢迎进入一起装管理系统</header>
                <div class="row clearfix">
                    <label class="fl"></label>
                    <input type="text" v-model="username" class="fr" placeholder="请输入帐号"/>
                </div>

                <div class="row clearfix">
                    <label class="fl"></label>
                    <input type="password" v-model="password" class="fr" placeholder="请输入密码"/>
                </div>

                <div class="row clearfix code">
                    <input type="password" v-model="code" class="fl" placeholder="验证码"/>
                    <label class="fl code-detail">{{validCode}}</label>
                    <label class="fl tip" @click="changeCode()">换一张</label>
                </div>

                <p class="err-tip">账号不存在，如果您想使用此系统，请联系客服</p>

                <el-button type="primary">登录</el-button>

            </form>
        </div>
        <div class="login-body-logo"></div>
    </div>
</template>
<style lang="scss" scoped>

    .login-body-logo {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: url('/static/login/login-logo.png') no-repeat center;
        background-size: 100%;
        z-index: -1;
    }

    .login-body {
        .main {
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translate(0, -50%);
        }
        form {
            height: 503px;
            width: 520px;
            margin: auto;
            background: rgba(255, 255, 255, .6);
            border-radius: 10px;
            /*border:1px solid;*/
            header {
                opacity: 0.8;
                background: #00bfd1;
                text-align: center;
                height: 75px;
                line-height: 75px;
                font-size: 20px;
                color: #ffffff;
            }

            .el-button--primary {
                display: block;
                background: #7ed321;
                border-radius: 5px;
                width: 420px;
                height: 60px;
                margin: auto;
            }

            .row {
                background: #f4f7fc;
                border: 1px solid #c5cfd7;
                border-radius: 5px;
                width: 418px;
                height: 53px;
                line-height: 53px;
                margin: 30px auto;

                label {
                    display: inline-block;
                    opacity: 0.6;
                    background: #ffffff;
                    /*border: 1px solid #c5cfd7;*/
                    border-radius: 5px 0 0 5px;
                    width: 53px;
                    height: 53px;
                }

                input {
                    display: inline-block;
                    height: 53px;
                    background: #f4f7fc;
                    width: 350px;
                    font-size: 16px;
                    color: #9b9b9b;
                    line-height: 16px;
                    text-align: left;
                    border: none;
                    padding: 0 0 0 10px;
                }

                &.code {
                    background: none;
                    border: none;
                    margin-bottom: 15px;
                    input {
                        background: #f4f7fc;
                        border: 1px solid #c5cfd7;
                        border-radius: 5px;
                        width: 182px;
                        height: 53px;
                    }

                    label.code-detail {
                        margin: 0 10px;
                        border-radius: 5px;
                        width: 150px;
                        height: 55px;
                    }

                    label.tip {
                        font-size: 16px;
                        color: #00bfd1;
                        text-align: center;
                        width: 48px;
                        background: none;
                    }
                }

            }

            .err-tip {
                font-size: 16px;
                color: #ff3e3e;
                text-align: left;
                width: 418px;
                margin: 0 auto 15px;
            }

        }
    }

</style>
<script>
    import Vue from 'vue'
    import {mapState} from 'vuex'
    export default {
        data(){
            return {
                username:'',
                password:'',
                code:'',
                validCode:'222',
            }
        },
        created(){
            console.log('this is beforeCreate');
            //let url = 'https://test02.1qizhuang.com/bingohome-dev/getReservationCode.do?pl_company=1&pl_platform=1&pl_user=worker&pl_personId=9894&pl_company_id=2511&pl_company_role=1&t=1489230664860&personId=9894&telephone=13816404134';
            setTimeout(()=>{
               // this.validCode =  1234;
            },1000)
            //Promise
            //new Promise((resolve,reject) => {
             //   console.log('1')
            //}).then((resolve,reject)=>{
               // reject(1)
           // })
        },
        methods:{
            login(){
                const user = {
                    username:this.username,
                    password:this.password,
                    code    :this.code,
                }
                this.$store.dispatch('login',user);
            },
            changeCode(){
                this.$store.dispatch('changeCode')
            }
        },
        computed: mapState({
            // 箭头函数可使代码更简练
            validCode: state => state.validCode,

            // 传字符串参数 'count' 等同于 `state => state.count`
            //countAlias: 'count',

            // 为了能够使用 `this` 获取局部状态，必须使用常规函数
            //countPlusLocalState (state) {
            //  return state.count + this.localCount
            //}
        })
    }
</script>

