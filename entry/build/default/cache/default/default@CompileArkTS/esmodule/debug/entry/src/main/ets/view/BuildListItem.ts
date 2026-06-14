if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BuildListItem_Params {
    type?: string;
    introductionData?: ZonesItem;
}
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
export default class BuildListItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__type = new SynchedPropertySimpleOneWayPU(params.type, this, "type");
        this.__introductionData = this.initializeConsume('introductionData', "introductionData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BuildListItem_Params) {
        if (params.type === undefined) {
            this.__type.set('');
        }
    }
    updateStateVars(params: BuildListItem_Params) {
        this.__type.reset(params.type);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__type.purgeDependencyOnElmtId(rmElmtId);
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__type.aboutToBeDeleted();
        this.__introductionData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __type: SynchedPropertySimpleOneWayPU<string>;
    get type() {
        return this.__type.get();
    }
    set type(newValue: string) {
        this.__type.set(newValue);
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
            Column.width(Const.FULL_SIZE);
            Column.alignItems(HorizontalAlign.Center);
            Column.height({ "id": 16777363, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.starLinePic[1]);
            Image.height({ "id": 16777403, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.width(Const.CONTENT_WIDTH_PERCENT);
            Image.margin({ bottom: { "id": 16777380, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.type === Const.BUILDING_TEXT) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.introductionData.buildingInformation);
                        Text.width(Const.CONTENT_WIDTH_PERCENT);
                        Text.fontSize({ "id": 16777369, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Text.letterSpacing(0);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.CONTENT_WIDTH_PERCENT);
            Column.height({ "id": 16777377, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Column.margin({ bottom: { "id": 16777375, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Column.justifyContent(FlexAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.type === Const.BUILDING_TEXT) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.introductionData.buildingPic);
                        Image.height({ "id": 16777377, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.width(Const.FULL_SIZE);
                        Image.borderRadius({ "id": 16777376, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.margin({ top: { "id": 16777378, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
                    }, Image);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Image.create(this.type === Const.GEOGRAPHY_LIGHT ?
                            this.introductionData.geographyPicLight : this.introductionData.geographyPic);
                        Image.height({ "id": 16777377, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.width(Const.FULL_SIZE);
                        Image.borderRadius({ "id": 16777376, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                        Image.margin({ top: { "id": 16777378, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
                    }, Image);
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
