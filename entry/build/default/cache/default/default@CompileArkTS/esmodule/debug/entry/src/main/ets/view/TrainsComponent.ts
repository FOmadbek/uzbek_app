if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Trains_Params {
    trainsMapData?: TrainsMap[];
    showLineOne?: boolean;
    showLineTwo?: boolean;
    showLineThree?: boolean;
}
import type { TrainsMap } from '../viewmodel/TrainsMap';
import { TrainsLine, CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { PositionList } from "@normalized:N&&&entry/src/main/ets/viewmodel/TrainsMapModel&";
import TrainsTrack from "@normalized:N&&&entry/src/main/ets/view/TrainsTrack&";
export class Trains extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__trainsMapData = new ObservedPropertyObjectPU(PositionList, this, "trainsMapData");
        this.__showLineOne = this.createStorageLink('showLineOne', false, "showLineOne");
        this.__showLineTwo = this.createStorageLink('showLineTwo', false, "showLineTwo");
        this.__showLineThree = this.createStorageLink('showLineThree', false, "showLineThree");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Trains_Params) {
        if (params.trainsMapData !== undefined) {
            this.trainsMapData = params.trainsMapData;
        }
    }
    updateStateVars(params: Trains_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__trainsMapData.purgeDependencyOnElmtId(rmElmtId);
        this.__showLineOne.purgeDependencyOnElmtId(rmElmtId);
        this.__showLineTwo.purgeDependencyOnElmtId(rmElmtId);
        this.__showLineThree.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__trainsMapData.aboutToBeDeleted();
        this.__showLineOne.aboutToBeDeleted();
        this.__showLineTwo.aboutToBeDeleted();
        this.__showLineThree.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __trainsMapData: ObservedPropertyObjectPU<TrainsMap[]>;
    get trainsMapData() {
        return this.__trainsMapData.get();
    }
    set trainsMapData(newValue: TrainsMap[]) {
        this.__trainsMapData.set(newValue);
    }
    private __showLineOne: ObservedPropertyAbstractPU<boolean>;
    get showLineOne() {
        return this.__showLineOne.get();
    }
    set showLineOne(newValue: boolean) {
        this.__showLineOne.set(newValue);
    }
    private __showLineTwo: ObservedPropertyAbstractPU<boolean>;
    get showLineTwo() {
        return this.__showLineTwo.get();
    }
    set showLineTwo(newValue: boolean) {
        this.__showLineTwo.set(newValue);
    }
    private __showLineThree: ObservedPropertyAbstractPU<boolean>;
    get showLineThree() {
        return this.__showLineThree.get();
    }
    set showLineThree(newValue: boolean) {
        this.__showLineThree.set(newValue);
    }
    /**
     * Determine whether the small train is in operation.
     *
     * @param line route.
     * @returns boolean
     */
    isOperating(line?: number): boolean {
        if (line === undefined) {
            return false;
        }
        let ret: boolean;
        switch (line) {
            case TrainsLine.LINE_ONE:
                ret = this.checkTime(Const.LINE_ONE_START_TIME, Const.LINE_ONE_END_TIME);
                break;
            case TrainsLine.LINE_TWO:
                ret = this.checkTime(Const.LINE_TWO_START_TIME, Const.LINE_TWO_END_TIME) && !this.checkWeekend();
                break;
            case TrainsLine.LINE_THREE:
                ret = (this.checkTime(Const.LINE_THREE_START_TIME, Const.LINE_THREE_END_TIME) &&
                    !this.checkWeekend()) ||
                    (this.checkTime(Const.LINE_THREE_WEEKEND_START_TIME, Const.LINE_THREE_WEEKEND_END_TIME) &&
                        this.checkWeekend());
                break;
            default:
                ret = true;
        }
        return ret;
    }
    /**
     * Determine if it is within the time period.
     *
     * @param startTime and endTime.
     * @returns boolean
     */
    checkTime(startTime: string, endTime: string): boolean {
        const date = new Date();
        const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
        const startDate = new Date(dateStr + startTime).getTime();
        const endDate = new Date(dateStr + endTime).getTime();
        const currentDate = date.getTime();
        return currentDate >= startDate && currentDate <= endDate;
    }
    checkWeekend(): boolean {
        const date = new Date();
        const weekday = date.getDay();
        return weekday === 0 || weekday === 6;
    }
    changeShowMap(line?: number) {
        if (line === undefined) {
            return;
        }
        switch (line) {
            case TrainsLine.LINE_ONE:
                this.showLineOne = !this.showLineOne;
                break;
            case TrainsLine.LINE_TWO:
                this.showLineTwo = !this.showLineTwo;
                break;
            case TrainsLine.LINE_THREE:
                this.showLineThree = !this.showLineThree;
                break;
        }
    }
    fetchShowMap(line?: number): boolean {
        if (line === undefined) {
            return false;
        }
        let ret: boolean;
        switch (line) {
            case TrainsLine.LINE_ONE:
                ret = this.showLineOne;
                break;
            case TrainsLine.LINE_TWO:
                ret = this.showLineTwo;
                break;
            case TrainsLine.LINE_THREE:
                ret = this.showLineThree;
                break;
            default:
                ret = false;
        }
        return ret;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/view/TrainsComponent", isUserCreateStack: false });
            Navigation.title(Const.TRAIN_TITLE);
            Navigation.titleMode(NavigationTitleMode.Full);
            Navigation.hideToolBar(true);
            Navigation.hideBackButton(true);
            Navigation.backgroundColor({ "id": 16777338, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: Const.TRAIN_SPACE });
            Column.padding({ left: Const.TRAIN_PADDING_LEFT, right: Const.TRAIN_PADDING_RIGHT });
            Column.height(Const.FULL_SIZE);
            Column.backgroundColor({ "id": 16777338, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777637, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
            Image.aspectRatio(Const.TRAIN_ASPECT_RATIO);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(Const.TRAIN_BORDER_RADIUS);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: Const.TRAIN_SPACE });
            List.layoutWeight(1);
            List.edgeEffect(EdgeEffect.None);
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, true);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create({ space: Const.TRAIN_SPACE });
                            Column.borderRadius(Const.TRAIN_BORDER_RADIUS);
                            Column.padding({
                                top: Const.TRAIN_PADDING_TOP,
                                left: Const.TRAIN_PADDING_LEFT,
                                bottom: Const.TRAIN_PADDING_BOTTOM,
                                right: Const.TRAIN_PADDING_RIGHT
                            });
                            Column.backgroundColor({ "id": 16777340, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Row.create();
                            Row.width(Const.FULL_SIZE);
                            Row.justifyContent(FlexAlign.SpaceBetween);
                            Row.alignItems(VerticalAlign.Center);
                            Row.onClick(() => {
                                this.changeShowMap(index);
                                this.trainsMapData = this.trainsMapData.slice(0);
                            });
                        }, Row);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create();
                            Text.fontSize({ "id": 16777383, "type": 10002, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Text.fontWeight(Const.OPERATION_FONT_WEIGHT);
                        }, Text);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Span.create({ "id": 16777290, "type": 10003, params: [`${index ? index + 1 : 1}`], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                        }, Span);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Span.create(this.isOperating(index) ? { "id": 16777264, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" } : { "id": 16777293, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Span.fontColor(this.isOperating(index) ? { "id": 16777314, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" } : { "id": 16777331, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Span.fontSize({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Span.fontWeight(Const.OPERATION_FONT_WEIGHT);
                        }, Span);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create({ "id": 16777298, "type": 10003, params: [item.interval.toString()], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777339, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Text.fontSize({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                            Text.fontWeight(Const.INTERVAL_FONT_WEIGHT);
                        }, Text);
                        Text.pop();
                        Row.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            If.create();
                            if (this.fetchShowMap(index) && this.isOperating(index)) {
                                this.ifElseBranchUpdateFunction(0, () => {
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new TrainsTrack(this, { trainsInfo: this.trainsMapData[index ? index : 0], trainLine: index }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TrainsComponent.ets", line: 154, col: 19 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        trainsInfo: this.trainsMapData[index ? index : 0],
                                                        trainLine: index
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                                    trainsInfo: this.trainsMapData[index ? index : 0]
                                                });
                                            }
                                        }, { name: "TrainsTrack" });
                                    }
                                });
                            }
                            else {
                                this.ifElseBranchUpdateFunction(1, () => {
                                });
                            }
                        }, If);
                        If.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.trainsMapData, forEachItemGenFunction, (item: TrainsMap) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
