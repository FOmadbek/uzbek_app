if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Splash_Params {
    swiperController?: SwiperController;
    data?: Resource[];
    countdown?: number;
    showSwiper?: boolean;
    timer?: number;
}
import router from "@ohos:router";
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { splashImages } from "@normalized:N&&&entry/src/main/ets/viewmodel/SplashModel&";
class Splash extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.swiperController = new SwiperController();
        this.data = [];
        this.__countdown = new ObservedPropertySimplePU(Const.COUNTDOWN, this, "countdown");
        this.__showSwiper = new ObservedPropertySimplePU(false, this, "showSwiper");
        this.timer = -1;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Splash_Params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.data !== undefined) {
            this.data = params.data;
        }
        if (params.countdown !== undefined) {
            this.countdown = params.countdown;
        }
        if (params.showSwiper !== undefined) {
            this.showSwiper = params.showSwiper;
        }
        if (params.timer !== undefined) {
            this.timer = params.timer;
        }
    }
    updateStateVars(params: Splash_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__countdown.purgeDependencyOnElmtId(rmElmtId);
        this.__showSwiper.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__countdown.aboutToBeDeleted();
        this.__showSwiper.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private swiperController: SwiperController;
    private data: Resource[];
    private __countdown: ObservedPropertySimplePU<number>;
    get countdown() {
        return this.__countdown.get();
    }
    set countdown(newValue: number) {
        this.__countdown.set(newValue);
    }
    private __showSwiper: ObservedPropertySimplePU<boolean>;
    get showSwiper() {
        return this.__showSwiper.get();
    }
    set showSwiper(newValue: boolean) {
        this.__showSwiper.set(newValue);
    }
    private timer: number;
    aboutToAppear(): void {
        let hours = new Date().getHours();
        if (hours >= Const.MORNING_TIME && hours < Const.EVENING_TIME) {
            this.data = splashImages.day;
        }
        else if (hours >= Const.EVENING_TIME && hours <= Const.NIGHT_TIME) {
            this.data = splashImages.dusk;
        }
        else {
            this.data = splashImages.night;
        }
        setTimeout(() => {
            this.showSwiper = true;
            this.startTiming();
        }, Const.SPLASH_DURATION);
    }
    startTiming() {
        this.timer = setInterval(() => {
            this.countdown--;
            if (this.countdown === 0) {
                this.clearTiming();
                this.jumpToMainPage();
            }
        }, Const.DURATION);
    }
    clearTiming() {
        if (this.timer !== -1) {
            clearInterval(this.timer);
            this.timer = -1;
        }
    }
    jumpToMainPage() {
        this.clearTiming();
        router.replaceUrl({
            url: 'pages/MainPage'
        });
    }
    aboutToDisappear() {
        this.clearTiming();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(Const.FULL_SIZE);
            Column.width(Const.FULL_SIZE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showSwiper) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Swiper.create(this.swiperController);
                        Swiper.loop(true);
                        Swiper.interval(2 * Const.DURATION);
                        Swiper.duration(Const.DURATION);
                        Swiper.autoPlay(true);
                        Swiper.indicatorStyle({
                            bottom: { "id": 16777344, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" },
                            color: { "id": 16777336, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }
                        });
                        Swiper.curve(Curve.Linear);
                        Swiper.onChange((index: number) => {
                            console.info(index.toString());
                        });
                    }, Swiper);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Image.create(item);
                                Image.width(Const.FULL_SIZE);
                                Image.height(Const.FULL_SIZE);
                                Image.objectFit(ImageFit.Cover);
                            }, Image);
                        };
                        this.forEachUpdateFunction(elmtId, this.data, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Swiper.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create();
                        Text.onClick(() => this.jumpToMainPage());
                        Text.fontColor(Color.White);
                        Text.fontSize({ "id": 16777345, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.backgroundColor({ "id": 16777337, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.width({ "id": 16777351, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.height({ "id": 16777347, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.borderRadius({ "id": 16777343, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.textAlign(TextAlign.Center);
                        Text.position({
                            x: Const.PERCENTAGE_78,
                            y: { "id": 16777349, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }
                        });
                    }, Text);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create({ "id": 16777296, "type": 10003, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                    }, Span);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Span.create(`${this.countdown}`);
                    }, Span);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777650, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.width(Const.FULL_PERCENT);
                        Image.height(Const.FULL_PERCENT);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create({ "id": 16777587, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.width({ "id": 16777346, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.height({ "id": 16777346, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.offset({
                            y: `-${Const.PERCENTAGE_15}`
                        });
                        Image.objectFit(ImageFit.Contain);
                    }, Image);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 4 });
                        Column.alignItems(HorizontalAlign.Center);
                        Column.offset({
                            y: Const.PERCENTAGE_25
                        });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(Const.SPLASH_DES);
                        Text.fontColor(Color.White);
                        Text.fontSize({ "id": 16777366, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.fontWeight(FontWeight.Bold);
                        Text.textAlign(TextAlign.Center);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('徐州工程学院留学生指南');
                        Text.fontSize({ "id": 16777365, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.fontColor('#DDEEFF');
                        Text.textAlign(TextAlign.Center);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(Const.SPLASH_WELCOME);
                        Text.fontSize(13);
                        Text.fontColor('#BBDDFF');
                        Text.textAlign(TextAlign.Center);
                        Text.margin({ top: 2 });
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
        }, If);
        If.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Splash";
    }
}
registerNamedRoute(() => new Splash(undefined, {}), "", { bundleName: "com.example.xzut.for_uzbeks", moduleName: "entry", pagePath: "pages/Splash", pageFullPath: "entry/src/main/ets/pages/Splash", integratedHsp: "false", moduleType: "followWithHap" });
