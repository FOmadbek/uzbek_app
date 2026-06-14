if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Zones_Params {
    changedIndex?: boolean;
    zonesList?: ZonesItem[];
    aheadIndex?: number;
    marginBottom?: number;
}
import router from "@ohos:router";
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { ZonesConstants as ZoneConst } from "@normalized:N&&&entry/src/main/ets/common/constants/ZonesConstants&";
import ZonesViewModel from "@normalized:N&&&entry/src/main/ets/viewmodel/ZonesViewModel&";
export class Zones extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.changedIndex = true;
        this.zonesList = ZonesViewModel.getZonesList();
        this.__aheadIndex = new ObservedPropertySimplePU(ZoneConst.HALF_COUNT, this, "aheadIndex");
        this.__marginBottom = new ObservedPropertySimplePU(0, this, "marginBottom");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Zones_Params) {
        if (params.changedIndex !== undefined) {
            this.changedIndex = params.changedIndex;
        }
        if (params.zonesList !== undefined) {
            this.zonesList = params.zonesList;
        }
        if (params.aheadIndex !== undefined) {
            this.aheadIndex = params.aheadIndex;
        }
        if (params.marginBottom !== undefined) {
            this.marginBottom = params.marginBottom;
        }
    }
    updateStateVars(params: Zones_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__aheadIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__marginBottom.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__aheadIndex.aboutToBeDeleted();
        this.__marginBottom.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private changedIndex: boolean;
    private zonesList: ZonesItem[];
    private __aheadIndex: ObservedPropertySimplePU<number>;
    get aheadIndex() {
        return this.__aheadIndex.get();
    }
    set aheadIndex(newValue: number) {
        this.__aheadIndex.set(newValue);
    }
    private __marginBottom: ObservedPropertySimplePU<number>;
    get marginBottom() {
        return this.__marginBottom.get();
    }
    set marginBottom(newValue: number) {
        this.__marginBottom.set(newValue);
    }
    getImgCoefficients(index?: number): number {
        if (index === undefined) {
            return 0;
        }
        let coefficient = this.aheadIndex - index;
        let tempCoefficient = Math.abs(coefficient);
        if (tempCoefficient <= ZoneConst.HALF_COUNT) {
            return coefficient;
        }
        let dataLength = this.zonesList.length;
        let tempOffset = dataLength - tempCoefficient;
        if (tempOffset <= ZoneConst.HALF_COUNT) {
            if (coefficient > 0) {
                return -tempOffset;
            }
            return tempOffset;
        }
        return 0;
    }
    getOffSetY(index?: number): number {
        if (index === undefined) {
            return 0;
        }
        let offsetIndex = this.getImgCoefficients(index);
        let tempOffset = Math.abs(offsetIndex);
        let offsetY = this.marginBottom / (tempOffset + 1);
        if (tempOffset === 1) {
            offsetY += -offsetIndex * ZoneConst.MAX_OFFSET_Y;
        }
        else if (tempOffset === ZoneConst.HALF_COUNT) {
            offsetY += -offsetIndex * (ZoneConst.MAX_OFFSET_Y - ZoneConst.OFFSET_COEFFICIENTS);
        }
        return offsetY;
    }
    startAnimation(isUp: boolean): void {
        Context.animateTo({
            duration: Const.SWIPER_DURATION,
        }, () => {
            let dataLength = this.zonesList.length;
            let tempIndex = isUp ? this.aheadIndex + 1 : dataLength + this.aheadIndex - 1;
            this.aheadIndex = tempIndex % dataLength;
            this.marginBottom = 0;
        });
    }
    handlePanGesture(offsetY: number): void {
        if (Math.abs(offsetY) < ZoneConst.MAX_MOVE_OFFSET) {
            this.marginBottom = offsetY;
        }
        else {
            if (this.changedIndex) {
                return;
            }
            this.changedIndex = true;
            this.startAnimation(offsetY < 0);
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/view/ZonesComponent", isUserCreateStack: false });
            Navigation.backgroundColor({ "id": 16777308, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
            Navigation.title(Const.INTRODUCTION_TITLE);
            Navigation.titleMode(NavigationTitleMode.Full);
            Navigation.hideBackButton(true);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(Const.FULL_PERCENT);
            Stack.height(Const.FULL_PERCENT);
            Stack.margin({ top: Const.SHADOW_RADIUS / Const.DOUBLE_NUM });
            Stack.alignContent(Alignment.Center);
            Stack.onClick(() => {
                router.pushUrl({ url: Const.INTRODUCTION_URL, params: { id: this.zonesList[this.aheadIndex].id } });
            });
            Gesture.create(GesturePriority.Low);
            PanGesture.create({ direction: PanDirection.Vertical });
            PanGesture.onActionStart((event: GestureEvent | undefined) => {
                if (!event) {
                    return;
                }
                this.changedIndex = false;
                this.handlePanGesture(event.offsetY);
            });
            PanGesture.onActionUpdate((event: GestureEvent | undefined) => {
                if (!event) {
                    return;
                }
                this.handlePanGesture(event.offsetY);
            });
            PanGesture.onActionEnd(() => {
                Context.animateTo({
                    duration: Const.SWIPER_DURATION,
                }, () => {
                    this.marginBottom = 0;
                });
            });
            PanGesture.pop();
            Gesture.pop();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index?: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(index !== this.aheadIndex && this.getImgCoefficients(index) === 0
                        ? Const.SWIPER_DEFAULT_WIDTH
                        : `${ZoneConst.ITEM_WIDTH - ZoneConst.OFFSET_COEFFICIENTS * Math.abs(this.getImgCoefficients(index))}%`);
                    Row.aspectRatio(Const.SWIPER_ASPECT_RATIO);
                    Row.borderRadius({ "id": 16777358, "type": 10002, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                    Row.offset({ x: 0, y: this.getOffSetY(index) });
                    Row.zIndex(index !== this.aheadIndex && this.getImgCoefficients(index) === 0
                        ? 0 : ZoneConst.HALF_COUNT - Math.abs(this.getImgCoefficients(index)));
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item.thumbnail);
                    Image.objectFit(ImageFit.Cover);
                    Image.borderRadius({ "id": 16777358, "type": 10002, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" });
                    Image.margin({ bottom: Const.SHADOW_RADIUS });
                    Image.shadow({
                        radius: Const.SHADOW_RADIUS,
                        color: `rgba(0,0,0,0.3)`,
                        offsetY: Const.SHADOW_RADIUS / Const.DOUBLE_NUM
                    });
                    Image.opacity(1 - Math.min(ZoneConst.HALF_COUNT, Math.abs(this.getImgCoefficients(index))) * ZoneConst.OPACITY_COEFFICIENTS);
                    Image.blur(ZoneConst.OFFSET_COEFFICIENTS * Math.abs(this.getImgCoefficients(index)));
                }, Image);
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.zonesList, forEachItemGenFunction, (item: ZonesItem) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Stack.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
