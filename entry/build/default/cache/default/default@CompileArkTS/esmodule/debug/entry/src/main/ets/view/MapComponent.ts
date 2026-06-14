if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Map_Params {
    webviewCtrl?: webview.WebviewController;
    isPanelOpen?: boolean;
    searchText?: string;
    displayList?: CampusBuilding[];
    jsHandler?: MapJsHandler;
}
interface BuildingCard_Params {
    building?: CampusBuilding;
    onSelect?: () => void;
}
import webview from "@ohos:web.webview";
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class CampusBuilding {
    id: number = 0;
    uz: string = '';
    zh: string = '';
    info: string = '';
    color: string = '#1565C0';
    icon: string = '';
}
interface MapJsHandler {
    onMarkerClick: (json: string) => void;
}
const XZIT_BUILDINGS: CampusBuilding[] = [
    {
        id: 0, uz: 'Kutubxona', zh: '逸夫图书馆',
        info: '08:00 – 22:00', color: '#1565C0', icon: '📚'
    },
    {
        id: 1, uz: 'Talabalar yotoqxonasi', zh: '留学生公寓',
        info: '24/7 · Wi-Fi · Lift', color: '#6A1B9A', icon: '🏠'
    },
    {
        id: 2, uz: '1-o\'quv binosi', zh: '1号教学楼',
        info: 'Darslar: 08:00 – 21:40', color: '#E65100', icon: '①'
    },
    {
        id: 3, uz: '2-oshxona', zh: '第二餐厅',
        info: '07:00 – 19:30 · Halol', color: '#EF6C00', icon: '🍜'
    },
    {
        id: 4, uz: '3-oshxona', zh: '第三餐厅',
        info: '07:00 – 19:30 · Halol', color: '#F57C00', icon: '🍜'
    },
    {
        id: 5, uz: '4-oshxona', zh: '第四餐厅',
        info: '07:00 – 19:30 · Halol', color: '#FB8C00', icon: '🍜'
    },
    {
        id: 6, uz: '1-oshxona', zh: '1号食堂',
        info: '07:00 – 19:30 · Halol', color: '#2E7D32', icon: '🍜'
    },
    {
        id: 7, uz: 'Sport binosi', zh: '体育馆',
        info: '07:00 – 22:00 · Bepul', color: '#00695C', icon: '🏀'
    },
    {
        id: 8, uz: 'Shifoxona', zh: '校医院',
        info: 'Du–Ju 08:00 – 17:00', color: '#D32F2F', icon: '🏥'
    },
    {
        id: 9, uz: 'Moliya bo\'limi', zh: '财务处',
        info: 'To\'lov va yotoqxona to\'lovi', color: '#5D4037', icon: '💰'
    },
    {
        id: 10, uz: 'Viza idorasi', zh: '出入境管理处',
        info: 'Du–Ju 09:00 – 17:00', color: '#1A237E', icon: '🛂'
    }
];
class BuildingCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.building = new CampusBuilding();
        this.onSelect = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BuildingCard_Params) {
        if (params.building !== undefined) {
            this.building = params.building;
        }
        if (params.onSelect !== undefined) {
            this.onSelect = params.onSelect;
        }
    }
    updateStateVars(params: BuildingCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private building: CampusBuilding;
    private onSelect: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.width(Const.FULL_PERCENT);
            Row.padding({ left: 14, right: 14, top: 10, bottom: 10 });
            Row.border({ width: { bottom: 0.5 }, color: '#F2F2F2' });
            Row.onClick(() => { this.onSelect(); });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.building.icon);
            Text.width(38);
            Text.height(38);
            Text.borderRadius(19);
            Text.backgroundColor(this.building.color);
            Text.fontColor(Color.White);
            Text.fontSize(16);
            Text.textAlign(TextAlign.Center);
            Text.flexShrink(0);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.building.uz);
            Text.fontSize(13);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#111111');
            Text.layoutWeight(1);
            Text.maxLines(1);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.building.zh);
            Text.fontSize(11);
            Text.fontColor('#777777');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('·');
            Text.fontSize(11);
            Text.fontColor('#CCCCCC');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.building.info);
            Text.fontSize(11);
            Text.fontColor('#999999');
            Text.layoutWeight(1);
            Text.maxLines(1);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('›');
            Text.fontSize(20);
            Text.fontColor('#CCCCCC');
            Text.fontWeight(FontWeight.Lighter);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class Map extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.webviewCtrl = new webview.WebviewController();
        this.__isPanelOpen = new ObservedPropertySimplePU(true, this, "isPanelOpen");
        this.__searchText = new ObservedPropertySimplePU('', this, "searchText");
        this.__displayList = new ObservedPropertyObjectPU(XZIT_BUILDINGS, this, "displayList");
        this.jsHandler = {
            onMarkerClick: (json: string): void => {
                try {
                    let info = JSON.parse(json) as Record<string, string | number>;
                    let id = info['id'] as number;
                    console.info(`[XZIT] Marker clicked: id=${id}, uz=${info['uz']}`);
                }
                catch (_) { }
            }
        };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Map_Params) {
        if (params.webviewCtrl !== undefined) {
            this.webviewCtrl = params.webviewCtrl;
        }
        if (params.isPanelOpen !== undefined) {
            this.isPanelOpen = params.isPanelOpen;
        }
        if (params.searchText !== undefined) {
            this.searchText = params.searchText;
        }
        if (params.displayList !== undefined) {
            this.displayList = params.displayList;
        }
        if (params.jsHandler !== undefined) {
            this.jsHandler = params.jsHandler;
        }
    }
    updateStateVars(params: Map_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isPanelOpen.purgeDependencyOnElmtId(rmElmtId);
        this.__searchText.purgeDependencyOnElmtId(rmElmtId);
        this.__displayList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isPanelOpen.aboutToBeDeleted();
        this.__searchText.aboutToBeDeleted();
        this.__displayList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private webviewCtrl: webview.WebviewController;
    private __isPanelOpen: ObservedPropertySimplePU<boolean>;
    get isPanelOpen() {
        return this.__isPanelOpen.get();
    }
    set isPanelOpen(newValue: boolean) {
        this.__isPanelOpen.set(newValue);
    }
    private __searchText: ObservedPropertySimplePU<string>;
    get searchText() {
        return this.__searchText.get();
    }
    set searchText(newValue: string) {
        this.__searchText.set(newValue);
    }
    private __displayList: ObservedPropertyObjectPU<CampusBuilding[]>;
    get displayList() {
        return this.__displayList.get();
    }
    set displayList(newValue: CampusBuilding[]) {
        this.__displayList.set(newValue);
    }
    private readonly jsHandler: MapJsHandler;
    filterList(query: string): void {
        let q = query.trim().toLowerCase();
        if (q === '') {
            this.displayList = XZIT_BUILDINGS;
        }
        else {
            this.displayList = XZIT_BUILDINGS.filter((b: CampusBuilding) => b.uz.toLowerCase().indexOf(q) !== -1 ||
                b.zh.indexOf(query) !== -1);
        }
    }
    focusOnBuilding(id: number): void {
        this.webviewCtrl
            .runJavaScript(`focusBuilding(${id})`)
            .catch(() => { });
        this.isPanelOpen = false;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
            Stack.width(Const.FULL_PERCENT);
            Stack.height(Const.FULL_PERCENT);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({ src: { "id": 0, "type": 30000, params: ['xzit_map.html'], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }, controller: this.webviewCtrl });
            Web.width(Const.FULL_PERCENT);
            Web.height(Const.FULL_PERCENT);
            Web.javaScriptAccess(true);
            Web.javaScriptProxy({
                object: this.jsHandler,
                name: 'xzit',
                methodList: ['onMarkerClick'],
                controller: this.webviewCtrl
            });
            Web.domStorageAccess(true);
            Web.onPageEnd((event: OnPageEndEvent) => {
                console.info(`[XZIT] map page loaded: ${event.url}`);
                this.displayList = XZIT_BUILDINGS;
            });
        }, Web);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.FULL_PERCENT);
            Column.backgroundColor('#FFFFFF');
            Column.shadow({ radius: 14, color: '#20000000', offsetY: -3 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(Const.FULL_PERCENT);
            Row.height(28);
            Row.justifyContent(FlexAlign.Center);
            Row.backgroundColor('#FFFFFF');
            Row.borderRadius({ topLeft: 16, topRight: 16 });
            Row.onClick(() => { this.isPanelOpen = !this.isPanelOpen; });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(36);
            Column.height(4);
            Column.borderRadius(2);
            Column.backgroundColor('#CCCCCC');
        }, Column);
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isPanelOpen) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.padding({ left: 14, right: 14, top: 4, bottom: 4 });
                        Row.backgroundColor('#FFFFFF');
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({
                            placeholder: 'Bino qidirish\u2026 (uz / zh)',
                            text: this.searchText
                        });
                        TextInput.layoutWeight(1);
                        TextInput.height(38);
                        TextInput.fontSize(13);
                        TextInput.placeholderColor('#AAAAAA');
                        TextInput.backgroundColor('#F4F4F4');
                        TextInput.borderRadius(10);
                        TextInput.padding({ left: 10, right: 10 });
                        TextInput.onChange((val: string) => {
                            this.searchText = val;
                            this.filterList(val);
                        });
                    }, TextInput);
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        List.create();
                        List.backgroundColor('#FFFFFF');
                        List.height(230);
                        List.edgeEffect(EdgeEffect.Spring);
                        List.scrollBar(BarState.Off);
                    }, List);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
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
                                    {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            if (isInitialRender) {
                                                let componentCall = new BuildingCard(this, {
                                                    building: item,
                                                    onSelect: () => { this.focusOnBuilding(item.id); }
                                                }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/MapComponent.ets", line: 214, col: 17 });
                                                ViewPU.create(componentCall);
                                                let paramsLambda = () => {
                                                    return {
                                                        building: item,
                                                        onSelect: () => { this.focusOnBuilding(item.id); }
                                                    };
                                                };
                                                componentCall.paramsGenerator_ = paramsLambda;
                                            }
                                            else {
                                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                                            }
                                        }, { name: "BuildingCard" });
                                    }
                                    ListItem.pop();
                                };
                                this.observeComponentCreation2(itemCreation2, ListItem);
                                ListItem.pop();
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.displayList, forEachItemGenFunction, (item: CampusBuilding) => `bldg_${item.id}`, false, false);
                    }, ForEach);
                    ForEach.pop();
                    List.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
