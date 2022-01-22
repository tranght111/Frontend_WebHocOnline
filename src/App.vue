<template>
<div>

        <!-- preloader end  -->
    <header>
        <div id="theme-menu-two" class="main-header-area main-head-three pl-100 pr-100 pt-20 pb-15">
            <div class="container-fluid">
                <div class="row align-items-center">
        
                        <div class="mt-30 col-xl-4">
                             <row style="height: 56px" class="search__area d-md-inline-flex align-items-center mb-30">
                                   <div class="col-sm-6 mr-35">
                                       <div class="widget__search">
                                            <form class="input-form" action="#">
                                                <input type="text" placeholder="Find Courses">
                                            </form>
                                            <button class="search-icon"><i class="far fa-search"></i></button>
                                        </div>
                                   </div>

                                   <div class="col-sm-6">
                                        <button style="height: 56px; border: none"  class="theme_btn">Search Now</button>
                                    </div>
                                </row>
                        </div>

                        

                        <div class="col-xl-5">
                            <nav class="main-menu navbar navbar-expand-lg justify-content-center">
                                <div class="nav-container">
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav">
                                            <li class="nav-item dropdown mega-menu">
                                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Danh mục
                                                </a>
                                                <ul class="dropdown-menu submenu mega-menu__sub-menu-box" aria-labelledby="navbarDropdown">
                                                <li><a href="index.html"><span><img src="@/assets/img/icon/icon7.svg" alt=""></span> Lập trình</a></li>
                                                <li><a href="index-2.html"><span><img src="@/assets/img/icon/icon8.svg" alt=""></span> Kinh tế</a></li>
                                                <li><a href="index.html"><span><img src="@/assets/img/icon/icon9.svg" alt=""></span> Ngoại ngữ</a></li>
                                                <li><a href="index-2.html"><span><img src="@/assets/img/icon/icon10.svg" alt=""></span> Thiết kế</a></li>
                                                <li><a href="index.html"><span><img src="@/assets/img/icon/icon11.svg" alt=""></span> Luật</a></li>
                                                <li><a href="index-2.html"><span><img src="@/assets/img/icon/icon12.svg" alt=""></span> Đồ họa</a></li>
                                                <li><a href="index.html"><span><img src="@/assets/img/icon/icon14.svg" alt=""></span> Thời trang</a></li>
                                            </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="/#/" id="navbarDropdown5" role="button"  aria-expanded="false">Trang chủ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div class="col-xl-3 col-lg-2 col-7">
                            <div class="right-nav d-flex align-items-center justify-content-end">
                                <div class="right-btn mr-25 mr-xs-15">
                                    <ul class="d-flex align-items-center">
                                       <div v-if="currentUser === null">
                                        <li><a href="/#/Signup" class="theme_btn free_btn">Đăng ký ngay</a></li>
                                      </div>
                                        <div v-else>
                                          <h6>{{currentUser.name}}</h6>
                                        </div>

                                        <li><a class="sign-in ml-20" href="/#/Login">

                                        <div v-if="currentUser === null">
                                        <img src="@/assets/img/icon/user.svg">
                                        </div>
                                        <div v-else>
                                           <img v-bind:src="currentUser.avatar" style="object-fit: cover; border-radius: 50%;" width="50" height="50">
                                        </div>

                                        </a></li>
                                    </ul>
                                </div>
                                <div class="hamburger-menu d-md-inline-block d-lg-none text-right">
                                    <a href="javascript:void(0);">
                                        <i class="far fa-bars"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div> <!-- /.theme-main-menu -->
    </header>
    
    <!-- slide-bar start -->
    <aside class="slide-bar">
        <div class="close-mobile-menu">
            <a href="javascript:void(0);"><i class="fas fa-times"></i></a>
        </div>

        <!-- offset-sidebar start -->
        <div class="offset-sidebar">
            <div class="offset-widget offset-logo mb-30">
                <a href="index.html">
                    <img src="assets/img/logo/header_logo_one.svg" alt="logo">
                </a>
            </div>
            <div class="offset-widget mb-40">
                <div class="info-widget">
                    <h4 class="offset-title mb-20">About Us</h4>
                    <p class="mb-30">
                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain
                        was born and will give you a complete account of the system and expound the actual teachings of
                        the great explore
                    </p>
                    <a class="theme_btn theme_btn_bg" href="contact.html">Contact Us</a>
                </div>
            </div>
            <div class="offset-widget mb-30 pr-10">
                <div class="info-widget info-widget2">
                    <h4 class="offset-title mb-20">Contact Info</h4>
                    <p> <i class="fal fa-address-book"></i> 23/A, Miranda City Likaoli Prikano, Dope</p>
                    <p> <i class="fal fa-phone"></i> +0989 7876 9865 9 </p>
                    <p> <i class="fal fa-envelope-open"></i> info@example.com </p>
                </div>
            </div>
        </div>
        <!-- offset-sidebar end -->

        <!-- side-mobile-menu start -->
         <nav class="side-mobile-menu">
            <ul id="mobile-menu-active">
                <li class="has-dropdown">
                    <a href="index.html">Home</a>
                    <ul class="sub-menu">
                        <li><a href="index.html">Home Style 1</a></li>
                        <li><a href="index-2.html">Home Style 2</a></li>
                        <li><a href="index-3.html">Home Style 3</a></li>
                    </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li class="has-dropdown">
                    <a href="#">Pages</a>
                    <ul class="sub-menu">
                        <li><a href="courses.html">Course One</a></li>
                        <li><a href="courses-2.html">Course Two</a></li>
                        <li><a href="course-details.html">Courses Details</a></li>
                        <li><a href="price.html">Price</a></li>
                        <li><a href="instructor.html">Instructor</a></li>
                        <li><a href="instructor-profile.html">Instructor Profile</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                    </ul>
                </li>
                <li class="has-dropdown"><a href="#">Blogs</a>
                    <ul class="sub-menu">
                        <li><a href="blog.html">Blog Grid</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contacts Us</a></li>
            </ul>
        </nav>
        <!-- side-mobile-menu end -->
    </aside>
    <div class="body-overlay"></div>
    <!-- slide-bar end -->
    

    <main>
     <router-view />
    </main>
    <!--footer-area start-->
    <footer class="footer-area footer-bg pb-25 pt-70">
        <div class="container">
            <div class="row mb-15">
                <div class="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.1s'>
                    <div class="footer__widget mb-30">
                        <div class="footer-log mb-20">
                            <a href="index.html" class="logo">
                                <img src="assets/img/logo/header_logo_one.svg" alt="">
                            </a>
                        </div>
                        <p>Hệ thống học trực tuyến E-Learn</p>
                        <div class="social-media footer__social mt-30">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-google-plus-g"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp2 animated" data-wow-delay='.3s'>
                    <div class="footer__widget mb-30 pl-40 pl-md-0 pl-xs-0">
                        <h6 class="widget-title mb-35">Liên hệ với chúng tôi</h6>
                        <ul class="fot-list">
                            <li><a href="#">info@example.com</a></li>
                            <li><a href="#">+00 235 695 58</a></li>
                            <li><a href="#">Điều khoản và điều kiện</a></li>
                            <li><a href="#">Chính sách bảo mật</a></li>
                            <li><a href="#">Liên hệ</a></li>
                          
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6  wow fadeInUp2 animated" data-wow-delay='.5s'>
                    <div class="footer__widget mb-25 pl-65 pl-md-0 pl-xs-0">
                        <h6 class="widget-title mb-35">Links</h6>
                        <ul class="fot-list">
                            <li><a href="#">Về chúng tôi</a></li>
                            <li><a href="#">Khám phá </a></li>
                            <li><a href="#">Dịch vụ</a></li>
                            <li><a href="#">Mục tiêu</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6  wow fadeInUp2 animated" data-wow-delay='.7s'>
                    <div class="footer__widget mb-30">
                        <h6 class="widget-title mb-35">Tính năng</h6>
                        <ul class="fot-list mb-30">
                            <li><a href="#">Trang chủ</a> </li>
                            <li><a href="#">Điều khoản</a></li>
                            <li><a href="blog.html">Thông báo mới nhất</a></li>
                            <li><a href="#">Trung tâm trợ giúp</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copy-right-area border-bot pt-60">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12">
                        <div class="copyright mb-35 text-center">
                            <h5>Copyright@ 2022 <a href="#">E-Learn</a>. All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!--footer-area end-->
</div>
</template>

<script>
import {
  mapGetters,
    mapActions
} from 'vuex';


export default {
  name: 'App'
   ,
    computed: {
            ...mapGetters([
               'currentUser',
            ]),
        },
}
</script>

<style>
  @import './assets/css/bootstrap.min.css';
  @import './assets/css/owl.carousel.min.css';
  @import './assets/css/animate.css';
  @import './assets/css/magnific-popup.css';
  @import './assets/css/all.min.css';
  @import './assets/css/flaticon.css';
  @import './assets/css/font.css';
  @import './assets/css/metisMenu.css';
  @import './assets/css/nice-select.css';
  @import './assets/css/slick.css';
  @import './assets/css/spacing.css';
  @import './assets/css/main.css';
    /* @import './assets/js/vendor/modernizr-3.5.0.min.js';
    @import './assets/js/vendor/jquery-2.2.4.min.js';
    @import './assets/js/popper.min.js';
    @import './assets/js/bootstrap.min.js';
    @import './assets/js/owl.carousel.min.js';
    @import './assets/js/isotope.pkgd.min.js';
    @import './assets/js/slick.min.js';
    @import './assets/js/metisMenu.min.js';
    @import './assets/js/jquery.nice-select.js';
    @import './assets/js/ajax-form.js';
    @import './assets/js/wow.min.js';
    @import './assets/js/jquery.counterup.min.js';
    @import './assets/js/waypoints.min.js';
    @import './assets/js/jquery.scrollUp.min.js';
    @import './assets/js/imagesloaded.pkgd.min.js';
    @import './assets/js/jquery.magnific-popup.min.js';
    @import './assets/js/jquery.easypiechart.js';
    @import './assets/js/plugins.js';
    @import './assets/js/main.js'; */
</style>


