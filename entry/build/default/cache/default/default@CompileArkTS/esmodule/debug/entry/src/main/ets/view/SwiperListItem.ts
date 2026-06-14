if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SwiperListItem_Params {
    swiperController?: SwiperController;
    zoneList?: ZonesItem[];
    imageHeight?: number;
    currentZoneId?: number;
    arrowIconOpacity?: number;
    introductionData?: ZonesItem;
}
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import zonesViewModel from "@normalized:N&&&entry/src/main/ets/viewmodel/ZonesViewModel&";
export default class SwiperListItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.swiperController = new SwiperController();
        this.__zoneList = new ObservedPropertyObjectPU(zonesViewModel.getZonesList(), this, "zoneList");
        this.__imageHeight = new SynchedPropertySimpleOneWayPU(params.imageHeight, this, "imageHeight");
        this.__currentZoneId = new SynchedPropertySimpleOneWayPU(params.currentZoneId, this, "currentZoneId");
        this.__arrowIconOpacity = new SynchedPropertySimpleOneWayPU(params.arrowIconOpacity, this, "arrowIconOpacity");
        this.__introductionData = this.initializeConsume('introductionData', "introductionData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SwiperListItem_Params) {
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
        if (params.zoneList !== undefined) {
            this.zoneList = params.zoneList;
        }
        if (params.imageHeight === undefined) {
            this.__imageHeight.set(0);
        }
        if (params.currentZoneId === undefined) {
            this.__currentZoneId.set(0);
        }
        if (params.arrowIconOpacity === undefined) {
            this.__arrowIconOpacity.set(0);
        }
    }
    updateStateVars(params: SwiperListItem_Params) {
        this.__imageHeight.reset(params.imageHeight);
        this.__currentZoneId.reset(params.currentZoneId);
        this.__arrowIconOpacity.reset(params.arrowIconOpacity);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__zoneList.purgeDependencyOnElmtId(rmElmtId);
        this.__imageHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__currentZoneId.purgeDependencyOnElmtId(rmElmtId);
        this.__arrowIconOpacity.purgeDependencyOnElmtId(rmElmtId);
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__zoneList.aboutToBeDeleted();
        this.__imageHeight.aboutToBeDeleted();
        this.__currentZoneId.aboutToBeDeleted();
        this.__arrowIconOpacity.aboutToBeDeleted();
        this.__introductionData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private swiperController: SwiperController;
    private __zoneList: ObservedPropertyObjectPU<ZonesItem[]>;
    get zoneList() {
        return this.__zoneList.get();
    }
    set zoneList(newValue: ZonesItem[]) {
        this.__zoneList.set(newValue);
    }
    private __imageHeight: SynchedPropertySimpleOneWayPU<number>;
    get imageHeight() {
        return this.__imageHeight.get();
    }
    set imageHeight(newValue: number) {
        this.__imageHeight.set(newValue);
    }
    private __currentZoneId: SynchedPropertySimpleOneWayPU<number>;
    get currentZoneId() {
        return this.__currentZoneId.get();
    }
    set currentZoneId(newValue: number) {
        this.__currentZoneId.set(newValue);
    }
    private __arrowIconOpacity: SynchedPropertySimpleOneWayPU<number>;
    get arrowIconOpacity() {
        return this.__arrowIconOpacity.get();
    }
    set arrowIconOpacity(newValue: number) {
        this.__arrowIconOpacity.set(newValue);
    }
    private __introductionData: ObservedPropertyAbstractPU<ZonesItem>;
    get introductionData() {
        return this.__introductionData.get();
    }
    set introductionData(newValue: ZonesItem) {
        this.__introductionData.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create(this.swiperController);
            Swiper.index(this.currentZoneId);
            Swiper.indicator(this.imageHeight < Const.FULL_PERCENT_NUMBER ? false : true);
            Swiper.loop(true);
            Swiper.cachedCount(Const.IMAGE_SWIPER_CACHE_COUNT);
            Swiper.curve(Curve.EaseOut);
            Swiper.disableSwipe(this.imageHeight < Const.FULL_PERCENT_NUMBER ? true : false);
            Swiper.indicatorStyle({
                bottom: { "id": 16777408, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }
            });
            Swiper.onChange((index: number) => {
                this.currentZoneId = index;
                this.getIntroductionData();
            });
            Swiper.index(this.currentZoneId);
            Swiper.indicator(this.imageHeight < Const.FULL_PERCENT_NUMBER ? false : true);
            Swiper.loop(true);
            Swiper.cachedCount(Const.IMAGE_SWIPER_CACHE_COUNT);
            Swiper.curve(Curve.EaseOut);
            Swiper.disableSwipe(this.imageHeight < Const.FULL_PERCENT_NUMBER ? true : false);
            Swiper.indicatorStyle({
                bottom: { "id": 16777408, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }
            });
            Swiper.onChange((index: number) => {
                this.currentZoneId = index;
                this.getIntroductionData();
            });
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.swiperPic);
                    Image.width(Const.FULL_SIZE);
                    Image.height(this.imageHeight + '%');
                    Image.objectFit(ImageFit.Cover);
                    Image.sharedTransition(item.id.toString(), {
                        duration: Const.TRANSITION_DURATION,
                        curve: Curve.Smooth,
                        delay: 0
                    });
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.zoneList, forEachItemGenFunction, (item: ZonesItem) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.introductionData.title);
            Context.animation({
                duration: Const.ANIMATION_DURATION_NORMAL,
                curve: Curve.EaseOut,
            });
            Text.fontSize({ "id": 16777368, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor({ "id": 16777312, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.opacity(this.arrowIconOpacity);
            Text.width(Const.FULL_SIZE);
            Text.textAlign(TextAlign.Center);
            Text.height({ "id": 16777413, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.margin({ bottom: { "id": 16777415, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Context.animation(null);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777514, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Context.animation({
                duration: Const.ANIMATION_DURATION_NORMAL,
                curve: Curve.EaseOut,
            });
            Image.height({ "id": 16777353, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.width({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.margin({ bottom: { "id": 16777354, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Image.opacity(this.arrowIconOpacity);
            Context.animation(null);
        }, Image);
        Stack.pop();
    }
    // Get the introduction by currentZoneId.
    getIntroductionData() {
        this.introductionData = this.zoneList.filter((item) => item.id === this.currentZoneId)[0];
    }
    rerender() {
        this.updateDirtyElements();
    }
}
