import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import SignUp from '@/pages/SignUp'
import TeacherSignUp from '@/pages/TeacherSignUp'
import StudentSignUp from '@/pages/StudentSignUp'
import ForgotPassword from '@/pages/ForgotPassword'
import AuthenticatePassword from '@/pages/AuthenticatePassword'
import CourseDetail_1 from '@/pages/CourseDetail_1'
import CourseDetail_2 from '@/pages/CourseDetail_2'
import CheckOut from '@/pages/CheckOut'
import EnglishCourse from '@/pages/EnglishCourse'
import AuthenticateHome from '@/pages/AuthenticateHome'
import EconomicCourse from '@/pages/EconomicCourse'
import EnrollCourse from '@/pages/EnrollCourse'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Login',
            name: 'Login',
            component: Login
        }, {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/SignUp',
            name: 'SignUp',
            component: SignUp
        }, {
            path: '/TeacherSignUp',
            name: 'TeacherSignUp',
            component: TeacherSignUp
        }, {
            path: '/StudentSignUp',
            name: 'StudentSignUp',
            component: StudentSignUp
        }, {
            path: '/ForgotPassword',
            name: 'ForgotPassword',
            component: ForgotPassword
        }, {
            path: '/AuthenticatePassword',
            name: 'AuthenticatePassword',
            component: AuthenticatePassword
        }, {
            path: '/CourseDetail/1',
            name: 'CourseDetail_1',
            component: CourseDetail_1
        },
        {
            path: '/CourseDetail/2',
            name: 'CourseDetail_2',
            component: CourseDetail_2
        },
        {
            path: '/EnglishCourse',
            name: 'EnglishCourse',
            component: EnglishCourse
        }, {
            path: '/AuthenticateHome',
            name: 'AuthenticateHome',
            component: AuthenticateHome
        }, {
            path: '/EconomicCourse',
            name: 'EconomicCourse',
            component: EconomicCourse
        }, {
            path: '/EnrollCourse',
            name: 'EnrollCourse',
            component: EnrollCourse
        },
        {
            path: '/CheckOut',
            name: 'CheckOut',
            component: CheckOut
        },
    ]
})