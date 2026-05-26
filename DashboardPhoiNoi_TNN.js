/*
 * Dashboard Nội Trú – BV Phổi Thái Nguyên
 * API: TNN.DASHBOARD.PHOI.1
 * 5 khoa: 120621, 120603, 120604, 120605, 120606
 */
function DashboardNoiTru2(opt) {
    this.load = doLoad;

    var KHOA_IDS = '120621, 120603, 120604, 120605, 120606';
    var data_default = [
                        {
                            "KHOAID": "120621",
                            "MAKHOA": "K02",
                            "TENKHOA": "Khoa Hồi sức cấp cứu",
                            "SL_DAUKY": "25",
                            "SL_NHAPVIEN": "5",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "6",
                            "SL_KHOI": "2",
                            "SL_DO": "2",
                            "SL_KHONGDO": "2",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "4",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "2",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "24",
                            "SL_SOHIENDIEN_BHYT": "24",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "30"
                        },
                        {
                            "KHOAID": "120603",
                            "MAKHOA": "K50.1",
                            "TENKHOA": "Khoa Nội 1",
                            "SL_DAUKY": "82",
                            "SL_NHAPVIEN": "3",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "8",
                            "SL_KHOI": "4",
                            "SL_DO": "3",
                            "SL_KHONGDO": "1",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "7",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "77",
                            "SL_SOHIENDIEN_BHYT": "76",
                            "SL_SOHIENDIEN_VP": "1",
                            "SL_SONGAYDIEUTRI": "85"
                        },
                        {
                            "KHOAID": "120604",
                            "MAKHOA": "K50.2",
                            "TENKHOA": "Khoa Nội 2",
                            "SL_DAUKY": "81",
                            "SL_NHAPVIEN": "5",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "5",
                            "SL_KHOI": "2",
                            "SL_DO": "3",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "5",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "81",
                            "SL_SOHIENDIEN_BHYT": "81",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "86"
                        },
                        {
                            "KHOAID": "120605",
                            "MAKHOA": "K50.3",
                            "TENKHOA": "Khoa Nội 3",
                            "SL_DAUKY": "109",
                            "SL_NHAPVIEN": "15",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "16",
                            "SL_KHOI": "5",
                            "SL_DO": "11",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "16",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "108",
                            "SL_SOHIENDIEN_BHYT": "108",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "124"
                        },
                        {
                            "KHOAID": "120606",
                            "MAKHOA": "K5031",
                            "TENKHOA": "Khoa Nội 4 - Phục hồi chức năng - Vật lý trị liệu",
                            "SL_DAUKY": "76",
                            "SL_NHAPVIEN": "11",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "7",
                            "SL_KHOI": "2",
                            "SL_DO": "5",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "6",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "80",
                            "SL_SOHIENDIEN_BHYT": "80",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "87"
                        }
    ]

    var data_1 = [
                        {
                            "KHOAID": "120621",
                            "MAKHOA": "K02",
                            "TENKHOA": "Khoa Hồi sức cấp cứu",
                            "SL_DAUKY": "25",
                            "SL_NHAPVIEN": "15",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "60",
                            "SL_KHOI": "2",
                            "SL_DO": "2",
                            "SL_KHONGDO": "12",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "14",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "21",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "2",
                            "SL_SOHIENDIEN_BHYT": "4",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "10"
                        },
                        {
                            "KHOAID": "120603",
                            "MAKHOA": "K50.1",
                            "TENKHOA": "Khoa Nội 1",
                            "SL_DAUKY": "82",
                            "SL_NHAPVIEN": "3",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "8",
                            "SL_KHOI": "4",
                            "SL_DO": "8",
                            "SL_KHONGDO": "54",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "1",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "71",
                            "SL_SOHIENDIEN_BHYT": "16",
                            "SL_SOHIENDIEN_VP": "1",
                            "SL_SONGAYDIEUTRI": "10"
                        },
                        {
                            "KHOAID": "120604",
                            "MAKHOA": "K50.2",
                            "TENKHOA": "Khoa Nội 2",
                            "SL_DAUKY": "81",
                            "SL_NHAPVIEN": "5",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "5",
                            "SL_KHOI": "2",
                            "SL_DO": "3",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "5",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "81",
                            "SL_SOHIENDIEN_BHYT": "51",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "16"
                        },
                        {
                            "KHOAID": "120605",
                            "MAKHOA": "K50.3",
                            "TENKHOA": "Khoa Nội 3",
                            "SL_DAUKY": "9",
                            "SL_NHAPVIEN": "15",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "16",
                            "SL_KHOI": "5",
                            "SL_DO": "11",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "26",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "12",
                            "SL_SOHIENDIEN_BHYT": "12",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "124"
                        },
                        {
                            "KHOAID": "120606",
                            "MAKHOA": "K5031",
                            "TENKHOA": "Khoa Nội 4 - Phục hồi chức năng - Vật lý trị liệu",
                            "SL_DAUKY": "76",
                            "SL_NHAPVIEN": "11",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "27",
                            "SL_KHOI": "2",
                            "SL_DO": "5",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "6",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "20",
                            "SL_SOHIENDIEN_BHYT": "20",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "81"
                        }
    ]

    var data_2 = [
                        {
                            "KHOAID": "120621",
                            "MAKHOA": "K02",
                            "TENKHOA": "Khoa Hồi sức cấp cứu",
                            "SL_DAUKY": "2",
                            "SL_NHAPVIEN": "51",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "16",
                            "SL_KHOI": "2",
                            "SL_DO": "22",
                            "SL_KHONGDO": "2",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "4",
                            "SL_TRONVIEN": "02",
                            "SL_CHUYENVIEN": "2",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "24",
                            "SL_SOHIENDIEN_BHYT": "24",
                            "SL_SOHIENDIEN_VP": "20",
                            "SL_SONGAYDIEUTRI": "30"
                        },
                        {
                            "KHOAID": "120603",
                            "MAKHOA": "K50.1",
                            "TENKHOA": "Khoa Nội 1",
                            "SL_DAUKY": "82",
                            "SL_NHAPVIEN": "3",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "8",
                            "SL_KHOI": "4",
                            "SL_DO": "43",
                            "SL_KHONGDO": "41",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "7",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "7",
                            "SL_SOHIENDIEN_BHYT": "6",
                            "SL_SOHIENDIEN_VP": "1",
                            "SL_SONGAYDIEUTRI": "8"
                        },
                        {
                            "KHOAID": "120604",
                            "MAKHOA": "K50.2",
                            "TENKHOA": "Khoa Nội 2",
                            "SL_DAUKY": "81",
                            "SL_NHAPVIEN": "5",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "5",
                            "SL_KHOI": "2",
                            "SL_DO": "30",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "5",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "10",
                            "SL_SOHIENDIEN_BHYT": "81",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "8"
                        },
                        {
                            "KHOAID": "120605",
                            "MAKHOA": "K50.3",
                            "TENKHOA": "Khoa Nội 3",
                            "SL_DAUKY": "109",
                            "SL_NHAPVIEN": "15",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "16",
                            "SL_KHOI": "8",
                            "SL_DO": "10",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "16",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "18",
                            "SL_SOHIENDIEN_BHYT": "18",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "12"
                        },
                        {
                            "KHOAID": "120606",
                            "MAKHOA": "K5031",
                            "TENKHOA": "Khoa Nội 4 - Phục hồi chức năng - Vật lý trị liệu",
                            "SL_DAUKY": "76",
                            "SL_NHAPVIEN": "11",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "7",
                            "SL_KHOI": "2",
                            "SL_DO": "5",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "8",
                            "SL_KHAC": "6",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "80",
                            "SL_SOHIENDIEN_BHYT": "0",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "7"
                        }
    ]

    var data_3 = [
                        {
                            "KHOAID": "120621",
                            "MAKHOA": "K02",
                            "TENKHOA": "Khoa Hồi sức cấp cứu",
                            "SL_DAUKY": "2",
                            "SL_NHAPVIEN": "51",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "6",
                            "SL_KHOI": "2",
                            "SL_DO": "2",
                            "SL_KHONGDO": "2",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "4",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "2",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "212",
                            "SL_SOHIENDIEN_BHYT": "24",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "3"
                        },
                        {
                            "KHOAID": "120603",
                            "MAKHOA": "K50.1",
                            "TENKHOA": "Khoa Nội 1",
                            "SL_DAUKY": "8",
                            "SL_NHAPVIEN": "31",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "85",
                            "SL_KHOI": "54",
                            "SL_DO": "34",
                            "SL_KHONGDO": "1",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "9",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "1",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "7",
                            "SL_SOHIENDIEN_BHYT": "6",
                            "SL_SOHIENDIEN_VP": "1",
                            "SL_SONGAYDIEUTRI": "5"
                        },
                        {
                            "KHOAID": "120604",
                            "MAKHOA": "K50.2",
                            "TENKHOA": "Khoa Nội 2",
                            "SL_DAUKY": "1",
                            "SL_NHAPVIEN": "51",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "5",
                            "SL_KHOI": "12",
                            "SL_DO": "31",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "9",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "1",
                            "SL_SOHIENDIEN_BHYT": "12",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "12"
                        },
                        {
                            "KHOAID": "120605",
                            "MAKHOA": "K50.3",
                            "TENKHOA": "Khoa Nội 3",
                            "SL_DAUKY": "110",
                            "SL_NHAPVIEN": "12",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "85",
                            "SL_KHOI": "8",
                            "SL_DO": "12",
                            "SL_KHONGDO": "0",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "0",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "11",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "0",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "10",
                            "SL_SOHIENDIEN_BHYT": "8",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "4"
                        },
                        {
                            "KHOAID": "120606",
                            "MAKHOA": "K5031",
                            "TENKHOA": "Khoa Nội 4 - Phục hồi chức năng - Vật lý trị liệu",
                            "SL_DAUKY": "6",
                            "SL_NHAPVIEN": "8",
                            "SL_CHUYENKHOADEN": "0",
                            "SL_XUATVIEN": "9",
                            "SL_KHOI": "5",
                            "SL_DO": "41",
                            "SL_KHONGDO": "22",
                            "SL_NANGHON": "0",
                            "SL_HAPHOI_NANGXINVE": "1",
                            "SL_TUVONG": "0",
                            "SL_KHAC": "9",
                            "SL_TRONVIEN": "0",
                            "SL_CHUYENVIEN": "8",
                            "SL_CHUYENKHOADI": "0",
                            "SL_SOHIENDIEN": "120",
                            "SL_SOHIENDIEN_BHYT": "120",
                            "SL_SOHIENDIEN_VP": "0",
                            "SL_SONGAYDIEUTRI": "99"
                        }
    ]

    function doLoad() {
        _initClock();
        _initToolbar();
        var ds = _today();
        _setVal('txtNgay', ds);
        _loadData(ds, 0); // default load danh sách khám bệnh
        _setupReload();
    }

    var _reloadTimer = null;
    function _setupReload() {
        if (_reloadTimer) clearInterval(_reloadTimer);
        // Tự động load mới lại mỗi 5 phút (300000ms)
        _reloadTimer = setInterval(function () {
            _loadData(_getVal('txtNgay') || _today(), 0);
        }, 300000);
    }

    function _initClock() {
        (function tick() {
            var n = new Date();
            _setTxt('txtClock', _p(n.getHours()) + ':' + _p(n.getMinutes()) + ':' + _p(n.getSeconds()));
            var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
            _setTxt('txtDate', days[n.getDay()] + ', ngày ' + n.getDate() + ' tháng ' + (n.getMonth() + 1) + ' năm ' + n.getFullYear());
            setTimeout(tick, 1000);
        })();
    }

    function _initToolbar() {
        document.getElementById('btnSearch').addEventListener('click', function () {
            _loadData(_getVal('txtNgay') || _today(), 0);
        });
        document.getElementById('btnToday').addEventListener('click', function () {
            _setVal('txtNgay', _today()); _setActive('btnToday'); _loadData(_today(),0);
        });
        document.getElementById('btnYesterday').addEventListener('click', function () {
            var d = new Date(); d.setDate(d.getDate() - 1);
            var s = _p(d.getDate()) + '/' + _p(d.getMonth() + 1) + '/' + d.getFullYear();
            _setVal('txtNgay', s); _setActive('btnYesterday'); _loadData(s,0);
        });
    }

    /**
     * ds: ngày xuất
     * loaiDashboard = 0 : load Dashboard khám bệnh
     * loaiDashboard = 1 : load Dashboard nội trú
     * loaiDashboard = 2 : load Dashboard Dịch vụ
     * loaiDashboard = 3 : load Dashboard Tai nạn, thương tích
     */
    function _loadData(ds, loaiDashboard) {
        _setTxt('sDate', ds);
        try {
            var pt = ds.split('/');
            var from = pt[0] + '/' + pt[1] + '/' + pt[2] + ' 00:00:00';
            var to = pt[0] + '/' + pt[1] + '/' + pt[2] + ' 23:59:59';
            // var data = jsonrpc.AjaxJson.ajaxCALL_SP_O("TNN.DASHBOARD.PHOI.1", from + '$' + to + '$' + KHOA_IDS);
            
            // -----------
            let data = data_default;
            if(loaiDashboard == '1') {
                data = data_1
            }
            if(loaiDashboard == '2') {
                data = data_2
            }
            if(loaiDashboard == '3') {
                data = data_3
            }
            // -----------
    
            _render(data);
        } catch (e) { console.error('Dashboard error:', e); }
    }

    function _render(data) {
        var grid = document.getElementById('tblNoiTru');
        if (!data || data.length === 0) {
            grid.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:50px;color:#64748b">Không có dữ liệu</td></tr>';
            ['sHD', 'sBH', 'sVP', 'sNV', 'sXV', 'sCV', 'sTV'].forEach(function (id) { _setTxt(id, '0'); });
            return;
        }

        var hd = 0, bh = 0, vp = 0, nv = 0, xv = 0, cv = 0, tv = 0, thd = 0, tbh = 0, tvp = 0, tnv = 0, txv = 0;
        data.forEach(function (d) {
            hd += +(d.SL_SOHIENDIEN || 0); bh += +(d.SL_SOHIENDIEN_BHYT || 0);
            vp += +(d.SL_SOHIENDIEN_VP || 0); nv += +(d.SL_NHAPVIEN || 0);
            xv += +(d.SL_XUATVIEN || 0); cv += +(d.SL_CHUYENVIEN || 0); tv += +(d.SL_TUVONG || 0);
        });
        _setTxt('sHD', hd); _setTxt('sBH', bh); _setTxt('sVP', vp); _setTxt('sNV', nv);
        _setTxt('sXV', xv); _setTxt('sCV', cv); _setTxt('sTV', tv);

        function num(cls, v) { return '<span class="num ' + cls + '">' + v + '</span>'; }
        var html = '';
        data.forEach(function (d) {
            var hdv = +(d.SL_SOHIENDIEN || 0), bhv = +(d.SL_SOHIENDIEN_BHYT || 0), vpv = +(d.SL_SOHIENDIEN_VP || 0),
                nvv = +(d.SL_NHAPVIEN || 0), xvv = +(d.SL_XUATVIEN || 0);
            thd += hdv; tbh += bhv; tvp += vpv; tnv += nvv; txv += xvv;
            html += '<tr class="dr">'
                + '<td class="td-k"><span class="ma">' + (d.MAKHOA || '') + '</span><span class="tn">' + (d.TENKHOA || '') + '</span></td>'
                + '<td class="g-hd">' + num('n-hd', hdv) + '</td>'
                + '<td>' + num('n-bh', bhv) + '</td>'
                + '<td>' + num('n-vp', vpv) + '</td>'
                + '<td class="g-nv">' + num('n-nv', nvv) + '</td>'
                + '<td class="g-xv">' + num('n-xv', xvv) + '</td>'
                + '</tr>';
        });
        html += '<tr class="tr-tot">'
            + '<td class="td-k"><span class="tn">Tổng cộng</span></td>'
            + '<td class="g-hd">' + num('', thd) + '</td>'
            + '<td>' + num('n-bh', tbh) + '</td>'
            + '<td>' + num('n-vp', tvp) + '</td>'
            + '<td class="g-nv">' + num('n-nv', tnv) + '</td>'
            + '<td class="g-xv">' + num('n-xv', txv) + '</td>'
            + '</tr>';
        grid.innerHTML = html;

        var n = new Date();
        _setTxt('lastUpd', 'Cập nhật ' + _p(n.getHours()) + ':' + _p(n.getMinutes()) + ':' + _p(n.getSeconds()));
    }

    function _p(n) { return n < 10 ? '0' + n : '' + n; }
    function _today() { var d = new Date(); return _p(d.getDate()) + '/' + _p(d.getMonth() + 1) + '/' + d.getFullYear(); }
    function _setTxt(id, v) { var e = document.getElementById(id); if (e) e.textContent = v; }
    function _setVal(id, v) { var e = document.getElementById(id); if (e) e.value = v; }
    function _getVal(id) { var e = document.getElementById(id); return e ? e.value : ''; }
    function _setActive(aid) {
        ['btnToday', 'btnYesterday'].forEach(function (id) {
            var b = document.getElementById(id); if (b) b.classList.toggle('on', id === aid);
        });
    }

    // binding click event
    // khám bệnh
    document.querySelector('.t-bar .t-bar-kb').addEventListener("click", function(e) {
        onClickCommon(e);
    });
    // nội trú
    document.querySelector('.t-bar .t-bar-ntu').addEventListener("click", function(e) {
        onClickCommon(e);
    });
    // dịch vụ
    document.querySelector('.t-bar .t-bar-dv').addEventListener("click", function(e) {
        onClickCommon(e);
    });
    // tai nạn, thương tích
    document.querySelector('.t-bar .t-bar-tntt').addEventListener("click", function(e) {
        onClickCommon(e);
    });

    // common click
    function onClickCommon(e) {
        let taskBarChildren = document.querySelectorAll('body .t-bar-child');
        taskBarChildren.forEach(function(child) {
            if(child.classList.contains('t-selected')) {
                child.classList.remove('t-selected');
            }
        });
        
        e.target.classList.add('t-selected');
        let loaiDashboard = e.target.getAttribute('t-value');
        _loadData(_getVal('txtNgay') || _today(), loaiDashboard);
    }

}
