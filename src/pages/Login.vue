<template>

<section class="contact-form-area pt-30 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
          <div class="container">
              <div class="row justify-content-center align-items-center">
                  <div class="col-lg-6">
                    <div class="contact-form-wrapper text-center mb-30">
                        <h2 class="mb-45">Đăng nhập</h2>
                        <form action="#" class="row gx-3 comments-form contact-form">
                            <div class="col-lg-12 mb-30">
                                <input type="text" placeholder="Tên đăng nhập"  v-model="userName">
                            </div>
                            <div class="col-lg-12 mb-30">
                                <input type="Mật khẩu" placeholder="******" v-model="pwd">
                            </div>
                        </form>
                        <div class="col-lg-3 mb-30">
                        <a href="/#/ForgotPassword" class="waves-effect">  <span> Quên mật khẩu? </span> </a>
                        </div>
                        <!--<div v-if="userName === USERNAME">-->
                        <a href = '/#/' class="theme_btn message_btn mt-20" @click="onLogin">Đăng nhập</a>
                        
                        <div class="col-lg-12 mb-30">
                        <a href="/#/SignUp" class="waves-effect">  <span> Chưa có tài khoản? Đăng ký ngay! </span> </a>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
</template>

<script>
import {
  mapGetters,
    mapActions
} from 'vuex';

export default {
  name: 'Login',
  created() {
    this.USERNAME = 'trang';
    //this.ACTIVE_STATE = 'Dang hoat dong';
  },
  // B2: Mapp getter
  computed: {
            ...mapGetters([
               'isLogin',
            ]),
        },
     data () {
    return {
      userName: '',
      pwd: ''
    }
  },
   methods: {
     // B3: Mapp action
           onLogin() {
           
               this.$store.dispatch('onLoginAction', {userName: this.userName, pwd: this.pwd})
           }
   },
}
</script>




