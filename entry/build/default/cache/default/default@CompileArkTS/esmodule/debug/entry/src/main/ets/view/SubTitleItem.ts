if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SubTitleItem_Params {
    introductionData?: ZonesItem;
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import type ZonesItem from '../viewmodel/ZonesItem';
export default class SubTitleItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__introductionData = this.initializeConsume('introductionData', "introductionData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SubTitleItem_Params) {
    }
    updateStateVars(params: SubTitleItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__introductionData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
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
            Column.create();
            Column.backgroundColor(this.introductionData.backgroundColor);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.FULL_SIZE);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.introductionData.title);
            Text.fontSize({ "id": 16777367, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.fontColor({ "id": 16777312, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.height({ "id": 16777416, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ top: { "id": 16777417, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.introductionData.subTitle);
            Text.fontSize({ "id": 16777369, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.fontColor({ "id": 16777312, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.height({ "id": 16777405, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.opacity(Const.FONT_COLOR_OPACITY_NORMAL);
            Text.margin({
                top: { "id": 16777407, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" },
                bottom: { "id": 16777406, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }
            });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.starLinePic[0]);
            Image.height({ "id": 16777403, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.margin({ bottom: { "id": 16777406, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Image.width({ "id": 16777404, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.introductionData.createTime);
            Text.fontSize({ "id": 16777369, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.height({ "id": 16777405, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.margin({ bottom: { "id": 16777362, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Text.fontColor({ "id": 16777312, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.opacity(Const.FONT_COLOR_OPACITY_NORMAL);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.subPicTop);
            Image.height({ "id": 16777398, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.width(Const.FULL_SIZE);
        }, Image);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
