webpackJsonp([3],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsProvider = (function () {
    function SettingsProvider(http) {
        this.http = http;
        this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    /**
     * 设置整体样式
     *
     * @param {any} val
     * @memberof SettingsProvider
     */
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    /**
     * 获取当前整体样式
     *
     * @returns
     * @memberof SettingsProvider
     */
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = (function () {
    function ChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //在这里也可以直接从你的 API 接口或者其他的方法实现用户列表的定义
        this.userinfo = {
            userid: '123321',
            username: '慕女神',
        };
        this.ChatdetailsPage = __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__["a" /* ChatdetailsPage */];
    }
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\chat\chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>聊天</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item [navPush]="ChatdetailsPage" [navParams]="userinfo">\n      <ion-avatar item-left>\n        <img src="http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?1520177500648">\n      </ion-avatar>\n      <h2>慕女神</h2>\n      <p>给大家演示聊天组件的开发</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scan_scan__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__versions_versions__ = __webpack_require__(234);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MorePage = (function (_super) {
    __extends(MorePage, _super);
    function MorePage(navCtrl, navParams, modalCtrl, storage, loadCtrl, rest, settings) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.settings = settings;
        _this.notLogin = true;
        _this.logined = false;
        _this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        return _this;
    }
    MorePage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    MorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePage');
    };
    MorePage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadUserPage();
        });
        modal.present();
    };
    MorePage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userinfo = userinfo;
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    _this.notLogin = false;
                    _this.logined = true;
                    loading.dismiss();
                });
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
            }
        });
    };
    MorePage.prototype.gotoUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */]);
    };
    /**
     * 跳转到用户相对应 type 的页面
     *
     * @param {any} type
     * @memberof MorePage
     */
    MorePage.prototype.gotoDataList = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__["a" /* UserdatalistPage */], { "dataType": type });
    };
    /**
     * 跳转到扫描二维码,加上 animate = false 的参数是为了
     * 相机能够在整个屏幕中显示，如果不加，相机就出不来。
     * animate 的参数默认为 true
     *
     * @memberof MorePage
     */
    MorePage.prototype.gotoScanQRCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__scan_scan__["a" /* ScanPage */], null, { "animate": false });
    };
    /**
     * 跳转到关于页面
     *
     * @memberof MorePage
     */
    MorePage.prototype.gotoVersions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__versions_versions__["a" /* VersionsPage */]);
    };
    /**
     * 切换夜间模式
     *
     * @memberof MorePage
     */
    MorePage.prototype.toggleChangeTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.settings.setActiveTheme('light-theme');
        }
        else {
            this.settings.setActiveTheme('dark-theme');
        }
    };
    return MorePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));
MorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-more',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\more\more.html"*/'<!--\n  Generated template for the MorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>更多</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="notLogin">\n    <ion-card>\n      <ion-card-header text-center>\n        登录 iMoocQA，体验更多功能\n      </ion-card-header>\n      <ion-card-content text-center>\n        <button ion-button outline small (click)="showModal()">登录/注册</button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="logined">\n    <ion-list class="marginTop">\n      <button ion-item (click)="gotoUserPage()">\n        <ion-avatar item-start>\n          <img src="{{headface}}" alt="">\n        </ion-avatar>\n        <h2>{{userinfo.UserNickName}}</h2>\n        <p>查看个人主页或编辑简介</p>\n      </button>\n    </ion-list>\n\n    <ion-list class="marginTop">\n      <ion-list-header>我的慕课</ion-list-header>\n      <button ion-item (click)="gotoDataList(\'question\')">\n        <ion-icon name="paper" item-start color="primary"></ion-icon>\n        <ion-label>我的提问</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'favourite\')">\n        <ion-icon name="star" item-start color="orange"></ion-icon>\n        <ion-label>我的关注</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'answer\')">\n        <ion-icon name="disc" item-start color="secondary"></ion-icon>\n        <ion-label>我的回答</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list class="marginTop">\n      <ion-list-header>设置</ion-list-header>\n      <ion-item>\n        <ion-icon name="cloudy-night" item-start color="purple"></ion-icon>\n        <ion-label>夜间模式</ion-label>\n        <ion-toggle color="purple" (ionChange)="toggleChangeTheme()"></ion-toggle>\n      </ion-item>\n      <button ion-item (click)="gotoScanQRCode()">\n        <ion-icon name="qr-scanner" item-start color="dark"></ion-icon>\n        <ion-label>扫描二维码</ion-label>\n      </button>\n      <button ion-item (click)="gotoVersions()">\n        <ion-icon name="help-circle" item-start color="dark"></ion-icon>\n        <ion-label>关于</ion-label>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\more\more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */]])
], MorePage);

//# sourceMappingURL=more.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationPage = (function (_super) {
    __extends(NotificationPage, _super);
    function NotificationPage(navCtrl, navParams, rest, storage, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getUserNotification(val)
                    .subscribe(function (n) {
                    _this.notificationList = n;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    NotificationPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return NotificationPage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\notification\notification.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>通知</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let n of notificationList" (click)="gotoDetails(n.QuestionId)">\n      <ion-avatar item-left>\n        <img src="{{n.HeadFace}}">\n      </ion-avatar>\n      <h2>{{n.NotificationTitle}}</h2>\n      <p>{{n.NotificationMessage}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		729,
		2
	],
	"../pages/more/more.module": [
		730,
		1
	],
	"../pages/notification/notification.module": [
		731,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatdetailsPage = (function () {
    function ChatdetailsPage(navCtrl, navParams, chatService, storage, rest, event) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatService = chatService;
        this.storage = storage;
        this.rest = rest;
        this.event = event;
        this.isOpenEmojiPicker = false;
        this.messageList = [];
        this.chatUserName = navParams.get('username');
        this.chatUserId = navParams.get('userid');
    }
    ChatdetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.userId = '140000198202211138';
                    _this.userName = userinfo['UserNickName'];
                    _this.userImgUrl = userinfo['UserHeadface'] + "?" + (new Date()).valueOf();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
        this.getMessages()
            .then(function () {
            _this.scrollToBottom();
        });
        //听取消息的发布，订阅
        this.event.subscribe('chat.received', function (msg, time) {
            _this.messageList.push(msg);
            _this.scrollToBottom();
        });
    };
    //页面将要离开时,不再监听消息
    ChatdetailsPage.prototype.ionViewWillLeave = function () {
        this.event.unsubscribe('chat.received');
    };
    /**
     * 调用 service 里面的方法进行属性的赋值
     *
     * @returns
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.getMessages = function () {
        var _this = this;
        return this.chatService.getMessageList()
            .then(function (res) {
            _this.messageList = res;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    /**
     * 发送信息
     *
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.editorMessage.trim())
            return;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: this.userId,
            username: this.userName,
            userImgUrl: this.userImgUrl,
            toUserId: this.chatUserId,
            time: Date.now(),
            message: this.editorMessage,
            status: 'pending'
        };
        this.messageList.push(messageSend);
        this.scrollToBottom();
        this.editorMessage = '';
        if (!this.isOpenEmojiPicker) {
            this.messageInput.setFocus();
        }
        //发送消息并改变消息的状态
        this.chatService.sendMessage(messageSend)
            .then(function () {
            var index = _this.getMessageIndex(id);
            if (index !== -1) {
                _this.messageList[index].status = 'success';
            }
        });
    };
    /**
     * 文本获取焦点
     *
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.focus = function () {
        this.isOpenEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    /**
     * 切换表情组件
     *
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.switchEmojiPicker = function () {
        this.isOpenEmojiPicker = !this.isOpenEmojiPicker;
    };
    /**
     * 将消息滚动到底部
     *
     * @returns {*}
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    /**
     * 获取消息的id
     *
     * @param {any} id
     * @memberof ChatdetailsPage
     */
    ChatdetailsPage.prototype.getMessageIndex = function (id) {
        return this.messageList.findIndex(function (e) { return e.messageId === id; });
    };
    return ChatdetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChatdetailsPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('chatInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* TextInput */])
], ChatdetailsPage.prototype, "messageInput", void 0);
ChatdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chatdetails',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\chatdetails\chatdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{chatUserName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="message-wrap">\n\n    <div \n    class="message" \n    *ngFor="let m of messageList" \n    [class.left]="m.userId == chatUserId"\n    [class.right]="m.userId == userId">\n      <img [src]="m.userImgUrl" class="user-img">\n      <ion-spinner name="dots" *ngIf="m.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>{{m.username}}&nbsp;{{m.time | relativetime}}</p>\n        </div>\n        <div class="msg-content">\n          <p class="line-breaker">{{m.message}}</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="isOpenEmojiPicker ? \'255px\' : \'55px\' ">\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="switchEmojiPicker()">\n          <ion-icon name="md-happy"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8>\n        <ion-textarea \n        #chatInput \n        [(ngModel)]="editorMessage" \n        (keyup.enter)="sendMessage()" \n        (focus)="focus()" \n        placeholder="输入内容"></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="sendMessage()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <emojipicker *ngIf="isOpenEmojiPicker" [(ngModel)]="editorMessage"></emojipicker>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\chatdetails\chatdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ChatdetailsPage);

//# sourceMappingURL=chatdetails.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//聊天信息的属性
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

//用户信息的属性
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatserviceProvider = (function () {
    function ChatserviceProvider(http, event) {
        this.http = http;
        this.event = event;
    }
    /**
     * 获取消息列表
     * 从 API 获取或者从模拟的 JSON 获取
     * @returns {Promise<ChatMessage[]>}
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.getMessageList = function () {
        var url = '../../assets/mock/msg-list.json';
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().array; })
            .catch(function (error) { return Promise.reject(error || '错误信息'); });
    };
    ChatserviceProvider.prototype.sendMessage = function (message) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () {
            resolve(message);
        }, Math.random() * 1000); })
            .then(function () {
            _this.mockNewMessage(message);
        });
    };
    /**
     * 自动回复消息方法
     * 这里要思考: 前台如何即时的能接收到这个消息
     * 引入 Events 模块
     *
     * @param {*} message 聊天的信息
     * @memberof ChatserviceProvider
     */
    ChatserviceProvider.prototype.mockNewMessage = function (message) {
        var _this = this;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: '123321',
            username: '慕女神',
            userImgUrl: 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg',
            toUserId: message.userId,
            time: Date.now(),
            message: '你是不是刚才给我发送了「' + message.message + '」?',
            status: 'success'
        };
        setTimeout(function () {
            //发布一条消息(大喇叭)
            _this.event.publish('chat.received', messageSend, Date.now());
        }, Math.random() * 1000);
    };
    return ChatserviceProvider;
}());
ChatserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */]])
], ChatserviceProvider);

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        //feed
        this.apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';
        //account
        this.apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
        this.apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
        this.apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
        this.apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
        this.apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";
        //question
        this.apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
        this.apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
        this.apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
        this.apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
        this.apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
        this.apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";
        //notification
        this.apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
        //console.log('Hello RestProvider Provider');
    }
    /**
     * 注意：因为课程是主要讲解 ionic 的技术点
     * 安全性方面你需要自己去做详细设计和处理
     * 密码的传递应该在传递参数之前进行加密，md5...,并且服务器端也应该进行相应的处理
     */
    /**
     * 根据用户的手机号码和密码进行登录
     *
     * @param {any} mobile
     * @param {any} password
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.login = function (mobile, password) {
        return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + mobile + "&password=" + password);
    };
    /**
     * 根据用户id返回用户信息
     *
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserInfo = function (userId) {
        return this.getUrlReturn(this.apiUrlUserInfo + "?userid=" + userId);
    };
    /**
     * 更新用户昵称
     *
     * @param {any} userId
     * @param {any} nickname
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.updateNickName = function (userId, nickname) {
        return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname=" + nickname);
    };
    /**
     * 保存问题--提问
     *
     * @param {any} userId
     * @param {any} title
     * @param {any} content
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.saveQuestion = function (userId, title, content) {
        return this.getUrlReturn(this.apiUrlQuestionSave + "?userId=" + userId + "&title=" + title + "&content=" + content);
    };
    /**
     * 获取问题详情
     *
     * @param {any} id
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestion = function (id) {
        return this.getUrlReturn(this.apiUrlGetQuestion + "?id=" + id);
    };
    /**
     * 获取问题详情,传递 userId 获取到当前用户有没有关注此问题
     *
     * @param {any} questionId
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestionWithUser = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
    };
    /**
     * 修改问题的关注与取消关注 -- 详情页
     *
     * @param {any} questionId
     * @param {any} userId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.saveFavourite = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
    };
    /**
     * 发布问题的回答
     *
     * @param {any} userId
     * @param {any} questionId
     * @param {any} content
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.answer = function (userId, questionId, content) {
        return this.getUrlReturn(this.apiUrlAnswer + "?userid=" + userId + "&questionid=" + questionId + "&content=" + content);
    };
    /**
     * 注册请求
     *
     * @param {any} mobile
     * @param {any} nickname
     * @param {any} password
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.register = function (mobile, nickname, password) {
        return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + mobile + "&nickname=" + nickname + "&password=" + password);
    };
    /**
     * 请求首页的 feeds(信息) 流
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getFeeds = function () {
        return this.getUrlReturn(this.apiUrlFeeds);
    };
    /**
     * 请求发现页面的 关注问题 流
     *
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getQuestions = function () {
        return this.getUrlReturn(this.apiUrlQuestionList);
    };
    /**
     * 通知页面请求方法
     *
     * @param {any} UserId
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserNotification = function (UserId) {
        return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + UserId);
    };
    /**
     * 获取用户的相关问题列表
     *
     * @param {any} UserId
     * @param {any} type question/answer/favourite
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUserQuestionList = function (UserId, type) {
        return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + UserId + "&type=" + type);
    };
    /**
     * 全局获取 HTTP 请求方法
     *
     * @private
     * @param {string} url
     * @returns {Observable<string[]>}
     * @memberof RestProvider
     */
    RestProvider.prototype.getUrlReturn = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    /**
     * 处理接口返回的数据，处理成 json 格式
     *
     * @private
     * @param {Response} res
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    /**
     * 处理请求中的错误，考虑了各种情况的错误处理，并且在 console 中显示 error
     *
     * @private
     * @param {(Response | any)} error
     * @returns
     * @memberof RestProvider
     */
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(223);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "登录中...");
        this.rest.login(this.mobile, this.password)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                //处理登录成功的页面跳转
                _this.storage.set('UserId', f["UserId"]);
                loading.dismiss();
                _this.dismiss();
            }
            else {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * 关闭当前页面的方法
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * 点击弹出注册页面
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.pushRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户登录</ion-title>\n    <ion-buttons (click)="dismiss()">\n      <button ion-button >\n        <span ion-text color="primary" showWhen="ios" >取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="login()">登录</button>\n  </div>\n  <div text-center padding>\n    <button ion-button color="primary" outline (click)="pushRegisterPage()">没有账号? 注册</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, viewCtrl, rest, loadCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.loadCtrl = loadCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        //前台验证表单数据正确性，包括手机号码,昵称的长度,密码的长度
        //验证国内手机号码的格式，考虑当前手机号码的可能性，用正则表达式验证
        if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
            _super.prototype.showToast.call(this, this.toastCtrl, "您的手机号码格式不正确。");
        }
        else if (this.nickname.length < 3 || this.nickname.length > 10) {
            _super.prototype.showToast.call(this, this.toastCtrl, "昵称的长度应该在 3 ~ 10 位之间。");
        }
        else if (this.password.length < 6 || this.password.length > 20 ||
            this.confirmPassword.length < 6 || this.confirmPassword.length > 20) {
            _super.prototype.showToast.call(this, this.toastCtrl, "密码的长度应该在 6 ~ 20 位之间。");
        }
        else if (this.password != this.confirmPassword) {
            _super.prototype.showToast.call(this, this.toastCtrl, "两次输入的密码不一致。");
        }
        else {
            var loading = _super.prototype.showLoading.call(this, this.loadCtrl, "注册中...");
            this.rest.register(this.mobile, this.nickname, this.password)
                .subscribe(function (f) {
                if (f["Status"] == "OK") {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "注册成功");
                    _this.dismiss();
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户注册</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>用户昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="doRegister()">注 册</button>\n  </div>\n  <div text-center padding>\n    <button ion-button color="primary" outline (click)="gotoLogin()">已有账号? 登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headface_headface__ = __webpack_require__(225);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserPage = (function (_super) {
    __extends(UserPage, _super);
    function UserPage(navCtrl, navParams, modalCtrl, loadCtrl, rest, storage, toastCtrl, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.headface = "https://imoocqa.gugujiankong.com/users/5996953615f87ec629cff319.jpg?1519636874027";
        _this.nickname = "加载中...";
        return _this;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        this.loadUserPage();
    };
    /**
     * 加载用户数据
     *
     * @memberof UserPage
     */
    UserPage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.nickname = userinfo["UserNickName"];
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    loading.dismiss();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    /**
     * 保存用户更新的昵称
     *
     * @memberof UserPage
     */
    UserPage.prototype.updateNickName = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "修改中...");
                _this.rest.updateNickName(val, _this.nickname)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, "昵称修改成功。");
                    }
                    else {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                });
            }
        });
    };
    /**
     * 注销按钮
     *
     * @memberof UserPage
     */
    UserPage.prototype.logout = function () {
        this.storage.remove('UserId');
        this.viewCtrl.dismiss();
    };
    /**
     * 跳转到更改头像页面
     *
     * @memberof UserPage
     */
    UserPage.prototype.gotoHeadface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__headface_headface__["a" /* HeadfacePage */]);
    };
    return UserPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="marginTop marginBottom">\n    <button ion-item (click)="gotoHeadface()">\n        <ion-avatar item-start>\n          <img src="{{headface}}">\n        </ion-avatar>\n        <h2>修改头像</h2>\n      </button>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>用户昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n  </ion-list>\n  <div padding text-center>\n    <button ion-button color="primary" block (click)="updateNickName()">保存</button>\n  </div>\n  <div padding text-center class="paddingTop">\n    <button ion-button color="danger" block (click)="logout()">注销</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(230);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeadfacePage = (function (_super) {
    __extends(HeadfacePage, _super);
    function HeadfacePage(navCtrl, navParams, actionSheetCtrl, storage, rest, loadingCtrl, modalCtrl, file, camera, transfer, filePath, platform, toastCtrl, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.storage = storage;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.modalCtrl = modalCtrl;
        _this.file = file;
        _this.camera = camera;
        _this.transfer = transfer;
        _this.filePath = filePath;
        _this.platform = platform;
        _this.toastCtrl = toastCtrl;
        _this.viewCtrl = viewCtrl;
        _this.lastImage = null;
        return _this;
    }
    HeadfacePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
            }
        });
    };
    HeadfacePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeadfacePage');
    };
    /**
     * 选择图片按钮 重点 : ActionSheet
     *
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.showActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片',
            buttons: [
                {
                    text: '从图片库中选择',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: '使用相机',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    /**
     * 获取图片
     *
     * @param {any} sourceType
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        //定义相机的一些参数
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true,
        };
        //获取图片的方法
        this.camera.getPicture(options).then(function (imagePath) {
            //特别处理 Android 平台的文件路径问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    //获取正确的路径
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件名
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    //复制
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件名
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                //复制
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "选择图片出现错误，请在 App 中操作或检查相关权限。");
        });
    };
    /**
     * 将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
     *
     * @param {any} namePath    路径名
     * @param {any} currentName 文件名
     * @param {any} newFileName 新文件名
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dateDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _super.prototype.showToast.call(_this, _this.toastCtrl, "存储图片到本地图库出现错误。");
        });
    };
    /**
     * 为文件生成一个新的文件名
     *
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg"; //拼接文件名
        return newFileName;
    };
    /**
     * 处理图片的路径为可以上传的路径
     *
     * @param {any} img
     * @returns
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(cordova.file.dateDirectory + img);
        }
    };
    /**
     * 上传图片
     *
     * @memberof HeadfacePage
     */
    HeadfacePage.prototype.uploadImage = function () {
        var _this = this;
        var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface';
        var targetPath = this.pathForImage(this.lastImage);
        var filename = this.userId + ".jpg"; //定义上传后的文件名
        //上传的参数
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/from-data",
            params: { 'fileName': filename, 'userId': this.userId }
        };
        var fileTransfer = this.transfer.create();
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "上传中...");
        //开始正式上传
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传成功。");
            //在用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (error) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.toastCtrl, "图片上传发生错误，请重试。");
        });
    };
    return HeadfacePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
HeadfacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-headface',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\headface\headface.html"*/'<!--\n  Generated template for the HeadfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>设置头像</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="{{pathForImage(lastImage)}}" style="width:100%;" [hidden]="lastImage === null">\n  <h3 [hidden]="lastImage !== null">请从图片库中选择一个图片。</h3>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="showActionSheet()">\n        <ion-icon name="camera"></ion-icon> \n        选择...\n      </button>\n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null"><!---->\n        <ion-icon name="cloud-upload"></ion-icon> \n        上传\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\headface\headface.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], HeadfacePage);

//# sourceMappingURL=headface.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdatalistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserdatalistPage = (function () {
    function UserdatalistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataType = navParams.get('dataType');
        switch (this.dataType) {
            case "question":
                this.title = "我的问题";
                break;
            case "answer":
                this.title = "我的回答";
                break;
            case "favourite":
                this.title = "我的关注";
                break;
        }
    }
    return UserdatalistPage;
}());
UserdatalistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userdatalist',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\userdatalist\userdatalist.html"*/'<!--\n  Generated template for the UserdatalistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <question-list datatype="{{dataType}}"></question-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\userdatalist\userdatalist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], UserdatalistPage);

//# sourceMappingURL=userdatalist.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScanPage = (function () {
    function ScanPage(navCtrl, navParams, alertCtrl, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scanQRCode();
    };
    ScanPage.prototype.scanQRCode = function () {
        var _this = this;
        //启动二维码
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var alert = _this.alertCtrl.create({
                        title: '二维码内容',
                        subTitle: text,
                        buttons: ['OK']
                    });
                    alert.present();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                //提醒用户权限没有开
            }
            else {
            }
        }).catch(function (err) { return console.error('Error :', err); });
    };
    return ScanPage;
}());
ScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\scan\scan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n<div class="box">\n  <div class="line"></div>\n</div>\n\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\scan\scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
], ScanPage);

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VersionsPage = (function () {
    function VersionsPage(navCtrl, navParams, appVersion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appVersion = appVersion;
    }
    VersionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.appVersion.getAppName().then(function (v) {
            _this.appName = v;
        });
        this.appVersion.getPackageName().then(function (v) {
            _this.packageName = v;
        });
        this.appVersion.getVersionCode().then(function (v) {
            _this.versionCode = v;
        });
        this.appVersion.getVersionNumber().then(function (v) {
            _this.versionNumber = v;
        });
    };
    return VersionsPage;
}());
VersionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-versions',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\versions\versions.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>版本信息</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>AppName: {{appName}}</ion-item>\n    <ion-item>PackageName: {{packageName}}</ion-item>\n    <ion-item>VersionCode: {{versionCode}}</ion-item>\n    <ion-item>VersionNumber: {{versionNumber}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\versions\versions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]])
], VersionsPage);

//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnswerPage = (function (_super) {
    __extends(AnswerPage, _super);
    function AnswerPage(navCtrl, navParams, viewCtrl, rest, storage, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.id = navParams.get('id');
        return _this;
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnswerPage');
    };
    AnswerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AnswerPage.prototype.submit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "发表中...");
                _this.rest.answer(val, _this.id, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        _this.dismiss();
                    }
                    else {
                        loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登陆后发布回答...");
            }
        });
    };
    return AnswerPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
AnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-answer',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\answer\answer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>回答</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        <span ion-text color="primary" showWhen="ios">发布</span>\n        <ion-icon name="md-add-circle" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>请输入回答内容</ion-label>\n      <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\answer\answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AnswerPage);

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
/**
 * UI 层的所以公用方法的抽象类
 *
 * @export
 * @abstract
 * @class BaseUI
 */
var BaseUI = (function () {
    function BaseUI() {
    }
    /**
     * 通用的展示loading的组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        var loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true // 页面变化的时候自动关闭loading
        });
        loader.present();
        return loader;
    };
    /**
     * 通用的展示toast的组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_notification__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_more__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discovery_discovery__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */];
        this.tabDiscovery = __WEBPACK_IMPORTED_MODULE_4__discovery_discovery__["a" /* DiscoveryPage */];
        this.tabChat = __WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */];
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_1__notification_notification__["a" /* NotificationPage */];
        this.tabMore = __WEBPACK_IMPORTED_MODULE_2__more_more__["a" /* MorePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="0">\n  <ion-tab [root]="tabHome" tabTitle="首页" tabIcon="md-list-box"></ion-tab>\n  <ion-tab [root]="tabDiscovery" tabTitle="发现" tabIcon="ios-navigate"></ion-tab>\n  <ion-tab [root]="tabChat" tabTitle="聊天" tabIcon="ios-chatbubbles"></ion-tab>\n  <ion-tab [root]="tabNotification" tabTitle="通知" tabIcon="ios-notifications"></ion-tab>\n  <ion-tab [root]="tabMore" tabTitle="更多" tabIcon="ios-menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscoveryPage = (function (_super) {
    __extends(DiscoveryPage, _super);
    function DiscoveryPage(navCtrl, navParams, rest, storage, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.storage = storage;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    DiscoveryPage.prototype.ionViewDidLoad = function () {
        this.getQuestions();
    };
    /**
     * 获取用户关注的问题流
     *
     * @memberof DiscoveryPage
     */
    DiscoveryPage.prototype.getQuestions = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "加载中...");
        this.rest.getQuestions()
            .subscribe(function (f) {
            _this.questions = f;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * 下拉刷新事件处理
     *
     * @param {any} refresher
     * @memberof DiscoveryPage
     */
    DiscoveryPage.prototype.doRefresh = function (refresher) {
        this.getQuestions();
        refresher.complete();
    };
    DiscoveryPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return DiscoveryPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
DiscoveryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-discovery',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\discovery\discovery.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>发现</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content \n    pullingIcon="arrow-down" \n    pullingText="下拉刷新" \n    refreshingSpinner="circles" \n    refreshingText="正在刷新..."></ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{q.HeadFace}}">\n      </ion-avatar>\n      <p>{{q.UserNickName}}发布了该问题\n        <ion-icon class="more_button" name="more"></ion-icon>\n      </p>\n    </ion-item>\n    <h2>{{q.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{q.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{q.LikeCount}}&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;{{q.CommentCount}}&nbsp;评论&nbsp;&nbsp;·&nbsp;&nbsp;关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\discovery\discovery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], DiscoveryPage);

//# sourceMappingURL=discovery.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question_question__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCtrl, loadingCtrl, toastCtrl, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCtrl = modalCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.rest = rest;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
    };
    HomePage.prototype.gotoQuestion = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__question_question__["a" /* QuestionPage */]);
        modal.present();
    };
    HomePage.prototype.gotoChat = function () {
        this.selectTap(2);
    };
    /**
     * 选定指定的 Tab
     *
     * @param {number} index
     * @memberof HomePage
     */
    HomePage.prototype.selectTap = function (index) {
        var t = this.navCtrl.parent;
        t.select(index);
    };
    /**
     * 请求首页的 feeds(信息) 流
     *
     * @memberof HomePage
     */
    HomePage.prototype.getFeeds = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "加载中...");
        this.rest.getFeeds()
            .subscribe(function (f) {
            _this.feeds = f;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-searchbar placeholder="搜索: 如何有效的学习 Ionic 开发" class="searchbar"></ion-searchbar>\n    <ion-icon name="text" class="top_header_message_icon" (tap)="gotoChat()"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class="floatMenu">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4 text-center>\n          <div (tap)="gotoQuestion()">\n            <ion-icon name="create"></ion-icon> 提问\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div>\n            <span style="float:left;color:#dddddd;">|</span>\n            <ion-icon name="albums"></ion-icon> 回答\n            <span style="float:right;color:#dddddd;">|</span>\n          </div>\n        </ion-col>\n        <ion-col col-4 text-center>\n          <div (tap)="gotoQuestion()">\n            <ion-icon name="share-alt"></ion-icon> 分享\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-card *ngFor="let f of feeds" (click)="gotoDetails(f.IdentityId)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{f.HeadFace}}">\n      </ion-avatar>\n      <p>{{f.UserNickName}}回答了该问题\n        <ion-icon class="more_button" name="more"></ion-icon>\n      </p>\n    </ion-item>\n    <h2>{{f.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{f.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{f.LikeCount}}&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;{{f.CommentCount}}&nbsp;评论&nbsp;&nbsp;·&nbsp;&nbsp;关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionPage = (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage(navCtrl, navParams, viewCtrl, storage, rest, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * 提问按钮点击事件
     *
     * @memberof QuestionPage
     */
    QuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "发表中...");
                _this.rest.saveQuestion(val, _this.title, _this.content)
                    .subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismissAll();
                        _this.dismiss();
                    }
                    else {
                        loading.dismissAll();
                        _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.toastCtrl, "请登陆后发布提问...");
            }
        });
    };
    return QuestionPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\question\question.html"*/'<!--\n  Generated template for the QuestionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>提问</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>问题标签</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>问题内容</ion-label>\n      <ion-textarea type="text" rows="5" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n    <button ion-button color="primary" block (click)="submitQuestion()">提 问</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\question\question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiProvider = (function () {
    function EmojiProvider(http) {
        this.http = http;
    }
    /**
     * 获取所以表情的数组 (已分组好的)
     *
     * @memberof EmojiProvider
     */
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        //进行分组的操作
        var array = EMOJIS.split(' ');
        var groupNumber = Math.ceil(array.length / 24); //上取整
        var items = [];
        //分组填充表情
        for (var i = 0; i < groupNumber; i++) {
            items.push(array.slice(24 * i, 24 * (i + 1)));
        }
        return items;
    };
    return EmojiProvider;
}());
EmojiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EmojiProvider);

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(410);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_discovery_discovery__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_more_more__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_user__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_question_question__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_details_details__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_qr_scanner__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_version__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_emoji_emoji__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_components_module__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_chatservice_chatservice__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_settings_settings__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pipes_relativetime_relativetime__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//移动设备相机组件引入




//引入二维码组件






//导入的表情 provider




//过滤器

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_discovery_discovery__["a" /* DiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pipes_relativetime_relativetime__["a" /* RelativetimePipe */],
            __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__["a" /* VersionsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '返回',
            }, {
                links: [
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/more/more.module#MorePageModule', name: 'MorePage', segment: 'more', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_33__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_more_more__["a" /* MorePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_discovery_discovery__["a" /* DiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_versions_versions__["a" /* VersionsPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_29__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_30__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_32__providers_emoji_emoji__["a" /* EmojiProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_35__providers_settings_settings__["a" /* SettingsProvider */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_app_version__["a" /* AppVersion */],
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__answer_answer__ = __webpack_require__(236);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DetailsPage = (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage(navCtrl, navParams, rest, loadingCtrl, toastCtrl, storage, modalCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.modalCtrl = modalCtrl;
        return _this;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.loadQuestion(this.id);
    };
    DetailsPage.prototype.loadQuestion = function (id) {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getQuestionWithUser(id, val)
                    .subscribe(function (q) {
                    loading.dismissAll();
                    _this.question = q;
                    _this.answers = q["Answers"];
                    _this.isFavourite = q["IsFavourite"];
                    _this.isMyQuestion = (q["OwnUserId"] == val);
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    /**
     * 关注按钮处理方法
     *
     * @memberof DetailsPage
     */
    DetailsPage.prototype.saveFavourite = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "请求中...");
        this.rest.saveFavourite(this.id, this.userId)
            .subscribe(function (f) {
            if (f["Status"] == "OK") {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, _this.isFavourite ? "取消关注成功" : "关注问题成功");
                _this.isFavourite = !_this.isFavourite;
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    /**
     * 跳转到回答页面
     *
     * @memberof DetailsPage
     */
    DetailsPage.prototype.gotoAnswer = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__answer_answer__["a" /* AnswerPage */], { "id": this.id });
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadQuestion(_this.id);
        });
        modal.present();
    };
    return DetailsPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{question?.ContentTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      {{question?.Content}}\n      <p>{{question?.LikeCount}}&nbsp;个关注&nbsp;&nbsp;&nbsp;&nbsp;{{question?.CommentCount}}&nbsp;个回答</p>\n      <button ion-button small [disabled]="isMyQuestion" (click)="gotoAnswer()">\n        <ion-icon name="add"></ion-icon>\n        &nbsp;回答\n      </button>&nbsp;\n      <button ion-button small color="secondary" (click)="saveFavourite()">\n        {{isFavourite ? \'取消关注\' : \'关注\'}}\n      </button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let a of answers">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{a.HeadFace}}">\n      </ion-avatar>\n      <p>{{a.UserNickName}}</p>\n    </ion-item>\n    <ion-card-content>\n      <p>{{a.Content}}</p>\n      <p class="answer_date">{{a.CreateDateTime}}</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, settings) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        //每次进入app都获取上次关闭时的主题状态 并赋值给 selectedTheme
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\app\app.html"*/'<ion-nav [root]="rootPage" class="{{selectedTheme}}"></ion-nav>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */]),],
        exports: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojipickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojipickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
//实现 EmojipickerComponent 的 providers
var EMOJI_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return EmojipickerComponent; }),
    multi: true
};
var EmojipickerComponent = (function () {
    function EmojipickerComponent(emojiProvider) {
        this.emojiArray = [];
        this.emojiArray = emojiProvider.getEmojis();
    }
    EmojipickerComponent.prototype.writeValue = function (obj) {
        this.content = obj;
    };
    EmojipickerComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
        this.setValue(this.content);
    };
    EmojipickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    //再次处理新的内容赋值以及函数的绑定
    EmojipickerComponent.prototype.setValue = function (val) {
        this.content += val;
        if (this.content) {
            this.onChanged(this.content);
        }
    };
    return EmojipickerComponent;
}());
EmojipickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'emojipicker',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\components\emojipicker\emojipicker.html"*/'<!-- Generated template for the EmojipickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n      <ion-slide *ngFor="let items of emojiArray">\n        <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">{{item}}</span>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"C:\Users\吉烜\04-03\src\components\emojipicker\emojipicker.html"*/,
        providers: [EMOJI_ACCESSOR]
    })
    //实现接口 ControlValueAccessor
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]])
], EmojipickerComponent);

//# sourceMappingURL=emojipicker.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_details_details__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent(navCtrl, navParams, loadingCtrl, toastCtrl, storage, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        _this.rest = rest;
        return _this;
    }
    //component组件这里没有 ionViewDidLoad 生命周期函数
    QuestionListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, "加载中...");
                _this.rest.getUserQuestionList(val, _this.dataSourceType)
                    .subscribe(function (q) {
                    _this.questions = q;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    QuestionListComponent.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return QuestionListComponent;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('datatype'),
    __metadata("design:type", Object)
], QuestionListComponent.prototype, "dataSourceType", void 0);
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'question-list',template:/*ion-inline-start:"C:\Users\吉烜\04-03\src\components\question-list\question-list.html"*/'<ion-list>\n  <ion-item *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <h2>{{q.ContentTitle}}</h2>\n    <p>{{q.ContentSummary}}</p>\n  </ion-item>\n</ion-list>'/*ion-inline-end:"C:\Users\吉烜\04-03\src\components\question-list\question-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], QuestionListComponent);

//# sourceMappingURL=question-list.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//TypeScript 中如何引用 JavaScript 的包

/**
 * Generated class for the RelativetimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativetimePipe = (function () {
    function RelativetimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativetimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    return RelativetimePipe;
}());
RelativetimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'relativetime',
    })
], RelativetimePipe);

//# sourceMappingURL=relativetime.js.map

/***/ }),

/***/ 728:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 283,
	"./af.js": 283,
	"./ar": 284,
	"./ar-dz": 285,
	"./ar-dz.js": 285,
	"./ar-kw": 286,
	"./ar-kw.js": 286,
	"./ar-ly": 287,
	"./ar-ly.js": 287,
	"./ar-ma": 288,
	"./ar-ma.js": 288,
	"./ar-sa": 289,
	"./ar-sa.js": 289,
	"./ar-tn": 290,
	"./ar-tn.js": 290,
	"./ar.js": 284,
	"./az": 291,
	"./az.js": 291,
	"./be": 292,
	"./be.js": 292,
	"./bg": 293,
	"./bg.js": 293,
	"./bm": 294,
	"./bm.js": 294,
	"./bn": 295,
	"./bn.js": 295,
	"./bo": 296,
	"./bo.js": 296,
	"./br": 297,
	"./br.js": 297,
	"./bs": 298,
	"./bs.js": 298,
	"./ca": 299,
	"./ca.js": 299,
	"./cs": 300,
	"./cs.js": 300,
	"./cv": 301,
	"./cv.js": 301,
	"./cy": 302,
	"./cy.js": 302,
	"./da": 303,
	"./da.js": 303,
	"./de": 304,
	"./de-at": 305,
	"./de-at.js": 305,
	"./de-ch": 306,
	"./de-ch.js": 306,
	"./de.js": 304,
	"./dv": 307,
	"./dv.js": 307,
	"./el": 308,
	"./el.js": 308,
	"./en-au": 309,
	"./en-au.js": 309,
	"./en-ca": 310,
	"./en-ca.js": 310,
	"./en-gb": 311,
	"./en-gb.js": 311,
	"./en-ie": 312,
	"./en-ie.js": 312,
	"./en-il": 313,
	"./en-il.js": 313,
	"./en-nz": 314,
	"./en-nz.js": 314,
	"./eo": 315,
	"./eo.js": 315,
	"./es": 316,
	"./es-do": 317,
	"./es-do.js": 317,
	"./es-us": 318,
	"./es-us.js": 318,
	"./es.js": 316,
	"./et": 319,
	"./et.js": 319,
	"./eu": 320,
	"./eu.js": 320,
	"./fa": 321,
	"./fa.js": 321,
	"./fi": 322,
	"./fi.js": 322,
	"./fo": 323,
	"./fo.js": 323,
	"./fr": 324,
	"./fr-ca": 325,
	"./fr-ca.js": 325,
	"./fr-ch": 326,
	"./fr-ch.js": 326,
	"./fr.js": 324,
	"./fy": 327,
	"./fy.js": 327,
	"./gd": 328,
	"./gd.js": 328,
	"./gl": 329,
	"./gl.js": 329,
	"./gom-latn": 330,
	"./gom-latn.js": 330,
	"./gu": 331,
	"./gu.js": 331,
	"./he": 332,
	"./he.js": 332,
	"./hi": 333,
	"./hi.js": 333,
	"./hr": 334,
	"./hr.js": 334,
	"./hu": 335,
	"./hu.js": 335,
	"./hy-am": 336,
	"./hy-am.js": 336,
	"./id": 337,
	"./id.js": 337,
	"./is": 338,
	"./is.js": 338,
	"./it": 339,
	"./it.js": 339,
	"./ja": 340,
	"./ja.js": 340,
	"./jv": 341,
	"./jv.js": 341,
	"./ka": 342,
	"./ka.js": 342,
	"./kk": 343,
	"./kk.js": 343,
	"./km": 344,
	"./km.js": 344,
	"./kn": 345,
	"./kn.js": 345,
	"./ko": 346,
	"./ko.js": 346,
	"./ky": 347,
	"./ky.js": 347,
	"./lb": 348,
	"./lb.js": 348,
	"./lo": 349,
	"./lo.js": 349,
	"./lt": 350,
	"./lt.js": 350,
	"./lv": 351,
	"./lv.js": 351,
	"./me": 352,
	"./me.js": 352,
	"./mi": 353,
	"./mi.js": 353,
	"./mk": 354,
	"./mk.js": 354,
	"./ml": 355,
	"./ml.js": 355,
	"./mr": 356,
	"./mr.js": 356,
	"./ms": 357,
	"./ms-my": 358,
	"./ms-my.js": 358,
	"./ms.js": 357,
	"./mt": 359,
	"./mt.js": 359,
	"./my": 360,
	"./my.js": 360,
	"./nb": 361,
	"./nb.js": 361,
	"./ne": 362,
	"./ne.js": 362,
	"./nl": 363,
	"./nl-be": 364,
	"./nl-be.js": 364,
	"./nl.js": 363,
	"./nn": 365,
	"./nn.js": 365,
	"./pa-in": 366,
	"./pa-in.js": 366,
	"./pl": 367,
	"./pl.js": 367,
	"./pt": 368,
	"./pt-br": 369,
	"./pt-br.js": 369,
	"./pt.js": 368,
	"./ro": 370,
	"./ro.js": 370,
	"./ru": 371,
	"./ru.js": 371,
	"./sd": 372,
	"./sd.js": 372,
	"./se": 373,
	"./se.js": 373,
	"./si": 374,
	"./si.js": 374,
	"./sk": 375,
	"./sk.js": 375,
	"./sl": 376,
	"./sl.js": 376,
	"./sq": 377,
	"./sq.js": 377,
	"./sr": 378,
	"./sr-cyrl": 379,
	"./sr-cyrl.js": 379,
	"./sr.js": 378,
	"./ss": 380,
	"./ss.js": 380,
	"./sv": 381,
	"./sv.js": 381,
	"./sw": 382,
	"./sw.js": 382,
	"./ta": 383,
	"./ta.js": 383,
	"./te": 384,
	"./te.js": 384,
	"./tet": 385,
	"./tet.js": 385,
	"./tg": 386,
	"./tg.js": 386,
	"./th": 387,
	"./th.js": 387,
	"./tl-ph": 388,
	"./tl-ph.js": 388,
	"./tlh": 389,
	"./tlh.js": 389,
	"./tr": 390,
	"./tr.js": 390,
	"./tzl": 391,
	"./tzl.js": 391,
	"./tzm": 392,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 392,
	"./ug-cn": 394,
	"./ug-cn.js": 394,
	"./uk": 395,
	"./uk.js": 395,
	"./ur": 396,
	"./ur.js": 396,
	"./uz": 397,
	"./uz-latn": 398,
	"./uz-latn.js": 398,
	"./uz.js": 397,
	"./vi": 399,
	"./vi.js": 399,
	"./x-pseudo": 400,
	"./x-pseudo.js": 400,
	"./yo": 401,
	"./yo.js": 401,
	"./zh-cn": 402,
	"./zh-cn.js": 402,
	"./zh-hk": 403,
	"./zh-hk.js": 403,
	"./zh-tw": 404,
	"./zh-tw.js": 404
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 728;

/***/ })

},[405]);
//# sourceMappingURL=main.js.map