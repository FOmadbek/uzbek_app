if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface IntroductionPage_Params {
    zoneList?: ZonesItem[];
    introductionData?: ZonesItem;
    currentZoneId?: number;
    isShowReplay?: Array<boolean>;
    isReachStart?: boolean;
    buildingType?: string;
    homeIconOpacity?: number;
    animationItem?: AnimationItem;
}
import router from "@ohos:router";
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { DeviceScreen } from "@normalized:N&&&entry/src/main/ets/common/utils/DeviceScreen&";
import { Animation } from "@normalized:N&&&entry/src/main/ets/common/utils/Animation&";
import SwiperListItem from "@normalized:N&&&entry/src/main/ets/view/SwiperListItem&";
import BuildListItem from "@normalized:N&&&entry/src/main/ets/view/BuildListItem&";
import StyleListItem from "@normalized:N&&&entry/src/main/ets/view/StyleListItem&";
import SubTitleItem from "@normalized:N&&&entry/src/main/ets/view/SubTitleItem&";
import zonesViewModel from "@normalized:N&&&entry/src/main/ets/viewmodel/ZonesViewModel&";
import type { RouteTitle } from '../viewmodel/TrainsMap';
import { AnimationItem } from "@normalized:N&&&entry/src/main/ets/viewmodel/AnimationItem&";
class IntroductionPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__zoneList = new ObservedPropertyObjectPU(zonesViewModel.getZonesList(), this, "zoneList");
        this.__introductionData = new ObservedPropertyObjectPU(zonesViewModel.getZonesList()[0], this, "introductionData");
        this.addProvidedVar("introductionData", this.__introductionData, false);
        this.__currentZoneId = new ObservedPropertySimplePU(0, this, "currentZoneId");
        this.__isShowReplay = new ObservedPropertyObjectPU([], this, "isShowReplay");
        this.__isReachStart = new ObservedPropertySimplePU(false, this, "isReachStart");
        this.__buildingType = new ObservedPropertySimplePU(Const.BUILDING_TEXT, this, "buildingType");
        this.__homeIconOpacity = new ObservedPropertySimplePU(Const.OPACITY_MIN, this, "homeIconOpacity");
        this.__animationItem = new ObservedPropertyObjectPU(new AnimationItem(), this, "animationItem");
        this.addProvidedVar("animationItem", this.__animationItem, false);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: IntroductionPage_Params) {
        if (params.zoneList !== undefined) {
            this.zoneList = params.zoneList;
        }
        if (params.introductionData !== undefined) {
            this.introductionData = params.introductionData;
        }
        if (params.currentZoneId !== undefined) {
            this.currentZoneId = params.currentZoneId;
        }
        if (params.isShowReplay !== undefined) {
            this.isShowReplay = params.isShowReplay;
        }
        if (params.isReachStart !== undefined) {
            this.isReachStart = params.isReachStart;
        }
        if (params.buildingType !== undefined) {
            this.buildingType = params.buildingType;
        }
        if (params.homeIconOpacity !== undefined) {
            this.homeIconOpacity = params.homeIconOpacity;
        }
        if (params.animationItem !== undefined) {
            this.animationItem = params.animationItem;
        }
    }
    updateStateVars(params: IntroductionPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__zoneList.purgeDependencyOnElmtId(rmElmtId);
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
        this.__currentZoneId.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowReplay.purgeDependencyOnElmtId(rmElmtId);
        this.__isReachStart.purgeDependencyOnElmtId(rmElmtId);
        this.__buildingType.purgeDependencyOnElmtId(rmElmtId);
        this.__homeIconOpacity.purgeDependencyOnElmtId(rmElmtId);
        this.__animationItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__zoneList.aboutToBeDeleted();
        this.__introductionData.aboutToBeDeleted();
        this.__currentZoneId.aboutToBeDeleted();
        this.__isShowReplay.aboutToBeDeleted();
        this.__isReachStart.aboutToBeDeleted();
        this.__buildingType.aboutToBeDeleted();
        this.__homeIconOpacity.aboutToBeDeleted();
        this.__animationItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __zoneList: ObservedPropertyObjectPU<ZonesItem[]>;
    get zoneList() {
        return this.__zoneList.get();
    }
    set zoneList(newValue: ZonesItem[]) {
        this.__zoneList.set(newValue);
    }
    private __introductionData: ObservedPropertyObjectPU<ZonesItem>;
    get introductionData() {
        return this.__introductionData.get();
    }
    set introductionData(newValue: ZonesItem) {
        this.__introductionData.set(newValue);
    }
    private __currentZoneId: ObservedPropertySimplePU<number>;
    get currentZoneId() {
        return this.__currentZoneId.get();
    }
    set currentZoneId(newValue: number) {
        this.__currentZoneId.set(newValue);
    }
    private __isShowReplay: ObservedPropertyObjectPU<Array<boolean>>;
    get isShowReplay() {
        return this.__isShowReplay.get();
    }
    set isShowReplay(newValue: Array<boolean>) {
        this.__isShowReplay.set(newValue);
    }
    private __isReachStart: ObservedPropertySimplePU<boolean>;
    get isReachStart() {
        return this.__isReachStart.get();
    }
    set isReachStart(newValue: boolean) {
        this.__isReachStart.set(newValue);
    }
    private __buildingType: ObservedPropertySimplePU<string>;
    get buildingType() {
        return this.__buildingType.get();
    }
    set buildingType(newValue: string) {
        this.__buildingType.set(newValue);
    }
    private __homeIconOpacity: ObservedPropertySimplePU<number>;
    get homeIconOpacity() {
        return this.__homeIconOpacity.get();
    }
    set homeIconOpacity(newValue: number) {
        this.__homeIconOpacity.set(newValue);
    }
    private __animationItem: ObservedPropertyObjectPU<AnimationItem>;
    get animationItem() {
        return this.__animationItem.get();
    }
    set animationItem(newValue: AnimationItem) {
        this.__animationItem.set(newValue);
    }
    TitleIcon($$: RouteTitle, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create($$.src);
            Context.animation({
                duration: Const.TITLE_ICON_ANIMATION_DURATION,
                curve: Curve.EaseOut
            });
            Image.width({ "id": 16777411, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.height({ "id": 16777409, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.scale({ x: $$.scale });
            Image.opacity($$.scale);
            Context.animation(null);
        }, Image);
        Column.pop();
    }
    StickyHeader(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.FULL_SIZE);
            Column.backgroundColor({ "id": 16777322, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Column.height(Const.STICKY_HEIGHT);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.subPicBottom);
            Image.height({ "id": 16777397, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.width(Const.FULL_SIZE);
            Image.backgroundColor(this.introductionData.backgroundColor);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.width(Const.FULL_SIZE);
            Stack.height({ "id": 16777402, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.titleIcon);
            Image.height({ "id": 16777381, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.width({ "id": 16777382, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.margin({ bottom: { "id": 16777410, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
        }, Image);
        this.TitleIcon.bind(this)(makeBuilderParameterProxy("TitleIcon", { src: () => ({ "id": 16777531, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }), scale: () => this.animationItem.scaleIcon[0] }));
        this.TitleIcon.bind(this)(makeBuilderParameterProxy("TitleIcon", { src: () => ({ "id": 16777515, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }), scale: () => this.animationItem.scaleIcon[1] }));
        this.TitleIcon.bind(this)(makeBuilderParameterProxy("TitleIcon", { src: () => ({ "id": 16777548, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }), scale: () => this.animationItem.scaleIcon[2] }));
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.animationItem.iconTitle);
            Text.fontSize({ "id": 16777370, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.height({ "id": 16777364, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.fontColor({ "id": 16777311, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.opacity(Const.FONT_COLOR_OPACITY_NORMAL);
            Text.margin({ bottom: { "id": 16777372, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        Column.pop();
    }
    StickyFooter(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height({ "id": 16777379, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Column);
        Column.pop();
    }
    /**
     * The transition animation from page to page.
     */
    pageTransition() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransition.create();
        }, null);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransitionEnter.create({ duration: Const.SHARED_DURATION });
            PageTransitionEnter.slide(SlideEffect.Bottom);
            PageTransitionEnter.scale({
                x: 0,
                y: 0,
                z: 0,
                centerX: Const.HALF_PERCENT,
                centerY: Const.HALF_PERCENT
            });
        }, null);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransitionExit.create({ delay: Const.SWIPER_DURATION });
            PageTransitionExit.slide(SlideEffect.Bottom);
            PageTransitionExit.scale({
                x: 0,
                y: 0,
                z: 0,
                centerX: Const.HALF_PERCENT,
                centerY: Const.HALF_PERCENT
            });
        }, null);
        PageTransition.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(Const.FULL_SIZE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.backgroundColor({ "id": 16777322, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Stack.height(Const.FULL_SIZE);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(Const.FULL_SIZE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ scroller: this.animationItem.scrollerForList });
            List.width(Const.FULL_SIZE);
            List.height(Const.FULL_SIZE);
            List.edgeEffect(EdgeEffect.None);
            List.scrollBar(BarState.Off);
            List.sticky(StickyStyle.Header);
            List.onReachStart(() => {
                this.resetParameters();
            });
            List.onScrollIndex((start: number) => {
                this.animationItem.currentListIndex = start;
            });
            List.onReachEnd(() => {
                this.animationItem.listPosition = Const.LIST_POSITION_END;
            });
            List.onScroll(() => {
                this.startAnimation();
            });
            List.onScrollFrameBegin((offset: number, state: ScrollState) => {
                let realOffset = Animation.controlImageScale(ObservedObject.GetRawObject(this.animationItem), offset, state);
                return { offsetRemain: realOffset };
            });
        }, List);
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SwiperListItem(this, {
                                imageHeight: this.animationItem.imageHeight,
                                currentZoneId: this.currentZoneId,
                                arrowIconOpacity: this.animationItem.arrowIconOpacity
                            }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IntroductionPage.ets", line: 128, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    imageHeight: this.animationItem.imageHeight,
                                    currentZoneId: this.currentZoneId,
                                    arrowIconOpacity: this.animationItem.arrowIconOpacity
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                imageHeight: this.animationItem.imageHeight,
                                currentZoneId: this.currentZoneId,
                                arrowIconOpacity: this.animationItem.arrowIconOpacity
                            });
                        }
                    }, { name: "SwiperListItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SubTitleItem(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IntroductionPage.ets", line: 136, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "SubTitleItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ListItemGroup.create({ header: this.StickyHeader.bind(this), footer: this.StickyFooter.bind(this) });
        }, ListItemGroup);
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new StyleListItem(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IntroductionPage.ets", line: 141, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "StyleListItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new BuildListItem(this, { type: this.buildingType }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IntroductionPage.ets", line: 145, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    type: this.buildingType
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                type: this.buildingType
                            });
                        }
                    }, { name: "BuildListItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new BuildListItem(this, { type: this.animationItem.geographicPicType }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/IntroductionPage.ets", line: 149, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    type: this.animationItem.geographicPicType
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                type: this.animationItem.geographicPicType
                            });
                        }
                    }, { name: "BuildListItem" });
                }
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        ListItemGroup.pop();
        List.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777639, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.height({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.margin({ bottom: { "id": 16777412, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }, left: { "id": 16777395, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Image.onClick(() => {
                this.scrollToTop();
            });
            Image.opacity(1 - this.animationItem.arrowIconOpacity);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777563, "type": 20000, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.height({ "id": 16777396, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Image.aspectRatio(1);
            Image.margin({
                right: { "id": 16777395, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" },
                bottom: this.animationItem.screenHeight - Const.HOME_ICON_MARGIN_TOP
            });
            Image.onClick(() => {
                router.back();
            });
        }, Image);
        Stack.pop();
        Column.pop();
    }
    aboutToAppear() {
        // 整改后的代码
        let params = router.getParams() as Record<string, Object>;
        this.currentZoneId = params.id as number;
        this.getIntroductionData();
        this.animationItem.screenHeight = DeviceScreen.getDeviceHeight();
    }
    /**
     * Get the introduction by currentZoneId.
     */
    getIntroductionData() {
        this.introductionData = this.zoneList.filter((item) => item.id === this.currentZoneId)[0];
    }
    /**
     * Reset all parameters if the list arrive begin by animation.
     */
    resetParameters() {
        this.animationItem.listPosition = Const.LIST_POSITION_BEGIN;
        if (this.animationItem.listPosition === Const.LIST_POSITION_BEGIN && this.isReachStart) {
            this.animationItem.imageHeight = Const.FULL_PERCENT_NUMBER;
            this.animationItem.arrowIconOpacity = Const.OPACITY_MAX;
        }
        this.isReachStart = false;
    }
    /**
     * Start animation when scroll the list.
     */
    startAnimation() {
        Animation.changeTitleIcon(this.animationItem);
    }
    /**
     * Click the up arrow scroll to the beginning.
     */
    scrollToTop() {
        if (this.animationItem.listPosition !== Const.LIST_POSITION_BEGIN) {
            this.animationItem.scrollerForList.scrollTo({
                xOffset: 0,
                yOffset: Const.SCROLL_UP_TOP_THRESHOLD,
                animation: {
                    duration: this.animationItem.offsetSum / Const.OFFSET_DIVIDE_RATIO,
                    curve: Curve.Linear,
                }
            });
            this.isReachStart = true;
        }
        else {
            this.animationItem.imageHeight = Const.FULL_PERCENT_NUMBER;
            this.animationItem.arrowIconOpacity = Const.OPACITY_MAX;
        }
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "IntroductionPage";
    }
}
registerNamedRoute(() => new IntroductionPage(undefined, {}), "", { bundleName: "com.example.xzut.for_uzbeks", moduleName: "entry", pagePath: "pages/IntroductionPage", pageFullPath: "entry/src/main/ets/pages/IntroductionPage", integratedHsp: "false", moduleType: "followWithHap" });
