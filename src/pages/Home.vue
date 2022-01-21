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

     <section class="feature-course pt-150 pb-130 pt-md-95 pb-md-80 pt-xs-95 pb-xs-80">
   <div class="container">
     <div class="row">
       <div class="col-xl-12">
         <div class="section-title text-center mb-30">
           
           <h2>Khám phá các khóa học phổ biến</h2>
         </div>
       </div>
     </div>
     <div class="row justify-content-center">
       <div class="col-xl-12 text-center">
         <div class="portfolio-menu mb-60">
           <a href="/#/" class="gf_btn active" data-filter='*'>Tất cả</a>
           <a href="/#/EnglishCourse" class="gf_btn" data-filter='.cat1'>Ngoại ngữ</a>
           <a href="/#/EconomicCourse" class="gf_btn" data-filter='.cat2'>Kinh tế</a>
           <a href="/#/EnglishCourse" class="gf_btn" data-filter='.cat3'>Lập trình</a>
           <a href="/#/EnglishCourse" class="gf_btn" data-filter='.cat4'>Thiết kế</a>
           <a href="/#/EnglishCourse" class="gf_btn" data-filter='.cat5'>Luật</a>
         </div>
       </div>
     </div>
     <div class="grid row">
       <div class="col-lg-4 col-md-6 grid-item cat2 cat3">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="/#/CourseDetail">
               <img class="img-fluid" src="@/assets/img/course01.jpg" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Lập trình</span>
               
             </div>
             <h4 class="sub-title mb-20">
               <a href="/#/CourseDetail/1">Lập trình Java</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 12 Bài học </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Sắp diễn ra </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>5.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 grid-item cat1 cat3 cat4">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="course-details.html">
               <img class="img-fluid" src="@/assets/img/course03.png" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Lập trình</span>
        
             </div>
             <h4 class="sub-title mb-20">
               <a href="/#/CourseDetail/2">Lập trình C#</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 12 bài học </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Sắp diễn ra </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>5.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 grid-item cat2 cat1 cat5">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="course-details.html">
               <img class="img-fluid" src="@/assets/img/course03.png" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Ngoại ngữ</span>
      
             </div>
             <h4 class="sub-title mb-20">
               <a href="course-details.html">Tiếng Anh giao tiếp</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 12 Bài học </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Hết hạn </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>4.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 grid-item cat2 cat3">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="course-details.html">
               <img class="img-fluid" src="@/assets/img/course04.png" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Ngoại ngữ</span>
              
             </div>
             <h4 class="sub-title mb-20">
               <a href="course-details.html">Tiếng Anh thương mại</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 12 Bài học</span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Đang diễn ra </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>3.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 grid-item cat5 cat4">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="course-details.html">
               <img class="img-fluid" src="@/assets/img/course05.png" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Lập trình</span>
              
             </div>
             <h4 class="sub-title mb-20">
               <a href="course-details.html">Lập trình .NET nâng cao</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 12 Bài học </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Sắp diễn ra </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>4.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-4 col-md-6 grid-item cat3 cat1">
         <div class="z-gallery mb-30">
           <div class="z-gallery__thumb mb-20">
             <a href="course-details.html">
               <img class="img-fluid" src="@/assets/img/course06.png" alt="">
             </a>
             <div class="feedback-tag">4.8(256)</div>
             <div class="heart-icon">
               <i class="fas fa-heart"></i>
             </div>
           </div>
           <div class="z-gallery__content">
             <div class="course__tag mb-15">
               <span>Kinh tế</span>
               
            
             </div>
             <h4 class="sub-title mb-20">
               <a href="course-details.html">Kinh tế đại cương</a>
             </h4>
             <div class="course__meta">
               <span>
                 <img class="icon" src="@/assets/img/icon/time.svg" alt="course-meta"> 10 Bài học </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/bar-chart.svg" alt="course-meta"> Sắp diễn ra </span>
               <span>
                 <img class="icon" src="@/assets/img/icon/user.svg" alt="course-meta"> 6395+ </span>
               <span>5.000.000đ</span>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="row">
       <div class="col-xxl-12 mt-20 text-center mb-20">
         <a href="courses.html" class="theme_btn">Explore More</a>
       </div>
     </div>
   </div>
 </section>

 
  </div>
</template>

<script>
import {
  mapGetters,
    mapActions
} from 'vuex';


export default {
  name: 'Home'
  ,
    computed: {
            ...mapGetters([
               'currentUser',
            ]),
        },
}
</script>
