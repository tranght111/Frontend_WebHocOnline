<template>
       <div>
        <section class="contact-form-area pt-30 pb-120 pt-md-100 pt-xs-100 pb-md-70 pb-xs-70">
  <div class="container">
    <div>
       <h2 class="row mb-45 justify-content-center">TẠO MÃ THANH TOÁN</h2>

            <div class="row">
                      <div class="col-xl-6 col-lg-7">
                          <div class="project-details mb-65">
                            <div class="single-contact-box mb-30" style="color: #FFF4F4">
                                               <h5 style="color: #FF723A; font-weight: 700" class="courses-title mb-30">Tóm tắt</h5>
                                   <div class="row">

                                    <h6 style="font-weight: 600;font-size: 20px" class="col-5 mb-30">Giá tiền:</h6>
                                     <h6 style="color: #FF723A; font-weight: 600; font-size: 20px" class="ml-20 col-6 mb-30">5.000.000đ</h6>
                                     <hr/>
                                     <p class="mt-10 mb-30">By completing your purchase you aggree to their Terms of Service</p>
                                  
                                  <button @click="getQRCode()" class="theme_btn comment_btn">Hoàn tất thanh toán</button>
                                   </div>
                                  
                          </div>
                          </div>
                      </div>
					  
					  
                      <div class="col-xl-6 col-lg-5">
					 
					  
                          <div class="courses-ingredients">
                              <h5 class="corses-title mb-30">Ngân hàng</h5>
                              <p>Chọn ngân hàng cần chuyển khoản đến</p>


                          <div class="mt-30 row justify-content-center">

                                        <button @click="bankChange(970436)"  class="col-6 btn default-btn">
                                            <img style="object-fit: cover;" src="https://portal.vietcombank.com.vn/Resources/no-image-news.jpg?RenditionID=3" width="200"  height="100" />
                                        </button>

                                         <button  @click="bankChange(970415)" class="col-6  btn default-btn">
                                            <img style="object-fit: cover;" src="https://img.timviec.com.vn/2020/12/ngan-hang-vietinbank-2.jpg" width="200" height="100" />
                                        </button>

                          </div>

<hr/>
                          <div class="mt-60 row justify-content-center">
                              <img width="200" v-bind:src="qrCode"/>
                          </div>
                          </div> 



                      </div>
                     
                

				 </div>

    </div>
  </div>
        </section>
    </div>
</template>

<script>
import {
  mapGetters,
} from 'vuex';

export default {
  name: 'CheckOut', 
    computed: {
            ...mapGetters([
               'selectBank',
               'qrCode'
            ]),
        },
    methods: {
        bankChange(bank) {
           
                        this.$store.dispatch('onBankSelectedAction', bank)
        },
     
           getQRCode() {
               var courseId = 1;
               var amount = 5000000;

            this.$store.dispatch('onGetQRCodeAction', {courseId, amount,})

           }
   },
}
</script>