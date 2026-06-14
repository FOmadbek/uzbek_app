if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface MainPage_Params {
    bottomTabIndex?: number;
    controller?: TabsController;
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { Map } from "@normalized:N&&&entry/src/main/ets/view/MapComponent&";
import { VisaGuide } from "@normalized:N&&&entry/src/main/ets/view/VisaGuideComponent&";
import { Timetable } from "@normalized:N&&&entry/src/main/ets/view/TimetableComponent&";
import { About } from "@normalized:N&&&entry/src/main/ets/view/AboutComponent&";
import { BottomTabsList } from "@normalized:N&&&entry/src/main/ets/viewmodel/BottomTabsModel&";
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomTabIndex = new ObservedPropertySimplePU(0, this, "bottomTabIndex");
        this.controller = new TabsController();
        this.setInitiallyProvidedValue(params);
        this.declareWatch("bottomTabIndex", this.onIndexChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MainPage_Params) {
        if (params.bottomTabIndex !== undefined) {
            this.bottomTabIndex = params.bottomTabIndex;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: MainPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomTabIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomTabIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bottomTabIndex: ObservedPropertySimplePU<number>;
    get bottomTabIndex() {
        return this.__bottomTabIndex.get();
    }
    set bottomTabIndex(newValue: number) {
        this.__bottomTabIndex.set(newValue);
    }
    private controller: TabsController;
    TabBuilder(index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.FULL_PERCENT);
            Column.height(Const.FULL_PERCENT);
            Column.justifyContent(FlexAlign.Center);
            Column.border({ width: { top: Const.BORDER_WIDTH }, color: { "id": 16777305, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } });
            Column.backgroundColor({ "id": 16777300, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.bottomTabIndex === index
                ? BottomTabsList[index].iconSelected
                : BottomTabsList[index].icon);
            Image.width(Const.ICON_SIZE);
            Image.height(Const.ICON_SIZE);
            Image.objectFit(ImageFit.Contain);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(BottomTabsList[index].text);
            Text.fontSize({ "id": 16777356, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
            Text.opacity(Const.OPACITY);
            Text.fontColor(this.bottomTabIndex === index
                ? { "id": 16777302, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" } : { "id": 16777301, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
        }, Text);
        Text.pop();
        Column.pop();
    }
    onIndexChange() {
        this.controller.changeIndex(this.bottomTabIndex);
    }
    pageTransition() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransition.create();
        }, null);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransitionEnter.create({ duration: Const.SHARED_DURATION });
            PageTransitionEnter.slide(SlideEffect.Top);
        }, null);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            PageTransitionExit.create({ delay: Const.EXIT_DELAY });
            PageTransitionExit.opacity(0);
        }, null);
        PageTransition.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Flex.create({ direction: FlexDirection.Column, alignItems: ItemAlign.End, justifyContent: FlexAlign.End });
            Flex.width(Const.FULL_PERCENT);
        }, Flex);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End, index: 0, controller: this.controller });
            Tabs.width(Const.FULL_PERCENT);
            Tabs.height(Const.FULL_PERCENT);
            Tabs.vertical(false);
            Tabs.scrollable(false);
            Tabs.barHeight(Const.BAR_HEIGHT);
            Tabs.onChange((index: number) => {
                this.bottomTabIndex = index;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Map(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 52, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Map" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 0);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new VisaGuide(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 56, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "VisaGuide" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 1);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Timetable(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 60, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Timetable" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 2);
                } });
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new About(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/MainPage.ets", line: 64, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "About" });
                }
            });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, 3);
                } });
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Flex.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "MainPage";
    }
}
registerNamedRoute(() => new MainPage(undefined, {}), "", { bundleName: "com.example.xzut.for_uzbeks", moduleName: "entry", pagePath: "pages/MainPage", pageFullPath: "entry/src/main/ets/pages/MainPage", integratedHsp: "false", moduleType: "followWithHap" });
