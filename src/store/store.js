import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// cucjk dàng phải viết api để lấy mớ này giờminhfdefine sẵn ở đây luôn khỏi call api 
// vào hàm ở dưới mình lấy cái này đi xử lí logic thôi
var globalChartData = [{ NguoiBanId: 1, DoanhThu: 10 }, { NguoiBanId: 3, DoanhThu: 40 }, ]
var globalUserData = [{
    Id: 1,
    UserName: 'trang',
    Pwd: '123',
    name: 'Thuy Trang',
    avatar: 'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg'
}, { Id: 3, UserName: 'admin', name: 'Admin', Pwd: '123', avatar: '' }, ]

// B1: tạo state
const thongKeDoanhThuStore = {
    state: () => ({
        month: 1,
        year: 2021,
        chartData: [],
    }),
};

const loginSotre = {
    state: () => ({
        userName: '',
        pwd: '',
        user: null,
    }),
}

const bankStore = {
    state: () => ({
        selectedBank: '',
        qrCode: '',
    }),
}


export const store = new Vuex.Store({
    modules: {
        //B2: import module
        thongKeDoanhThuStore: thongKeDoanhThuStore,
        loginSotre: loginSotre,
        bankStore: bankStore
    },
    state: {
        count: 0
    },
    // B3: Tạo mutation
    mutations: {
        onBankSelected(state, bank) {
            console.log(bank);
            state.bankStore.selectedBank = bank
        },
        onGetQRCode(state, code) {
            state.bankStore.qrCode = code;
        },

        onTKDTMonthSelect(state, month) {
            state.thongKeDoanhThuStore.month = month
        },

        onTKDTYearSelect(state, year) {
            state.thongKeDoanhThuStore.year = year
        },

        onGetTKDT(state, chartData) {
            state.thongKeDoanhThuStore.chartData = chartData
        },
        onLogin(state, user) {
            state.loginSotre.user = user
        },
    },
    // B4: Tạo action (cái này sẽ gọi bên vue)
    actions: {
        onBankSelectedAction({ commit }, bank) {
            console.log(bank);
            commit('onBankSelected', bank)
        },


        onTKDTMonthSelectAction({ commit }, month) {
            commit('onTKDTMonthSelect', month)
        },

        onTKDTYearSelectAction({ commit }, year) {
            commit('onTKDTYearSelect', year)
        },
        onGetTKDTAction({ commit, state }) {

            let chartDataRes = [
                ['NguoiBanId', 'DoanhThu'],
            ];

            for (let i = 0; i < globalChartData.length; ++i) {
                // 
                let item = chartDataJson[i];
                chartDataRes.push([item.NguoiBanId, item.DoanhThu]);
            }

            console.log(chartDataRes);
            commit('onGetTKDT', chartDataRes)
        },
        onLoginAction({ commit, state }, user) {

            console.log(user.userName);
            for (let i = 0; i < globalUserData.length; ++i) {
                var tmpUser = globalUserData[i];
                // tạm thời bỏ qua pwd
                if (tmpUser.UserName === user.userName) {
                    console.log(tmpUser);
                    commit('onLogin', tmpUser);
                    break;
                }
            }

        },
        onGetQRCodeAction({ commit, state }, info) {
            var bank = state.bankStore.selectedBank;

            // CTWebCourse%20${info.courseId}%20${info.accId}
            // cú pháp chuyển tiền
            // %20 là dấu cách
            //chọn ngân hàng rồi  sinh ra mã

            var yourBank = 113366668888
            var accId = 1
            var url = `https://img.vietqr.io/image/${bank}-${yourBank}-compact2.jpg?amount=${info.amount}&addInfo=CTWebCourse%20${info.courseId}%20${accId}`;

            console.log(url);
            commit('onGetQRCode', url);
        }
    },
    // B5: Tạo getter (vue get mấy cái state ra)
    getters: {
        tkdtMonth(state) {
            return state.thongKeDoanhThuStore.month
        },
        tkdtYear(state) {
            return state.thongKeDoanhThuStore.year
        },
        tkdt(state) {
            return state.thongKeDoanhThuStore.chartData
        },
        isLogin(state) {
            return state.loginSotre.user !== null;
        },
        selectBank(state) {
            return state.bankStore.selectedBank;
        },
        qrCode(state) {
            return state.bankStore.qrCode;
        },
        currentUser(state) {
            return state.loginSotre.user;
        }
    }
})