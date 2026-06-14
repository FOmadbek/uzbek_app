if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ImageView_Params {
    controller?: CustomDialogController;
    windowClass?: window.Window | null;
    deviceWidth?: number;
    deviceHeight?: number;
    imgWidth?: number;
    imgHeight?: number;
    displayHeight?: number;
    introductionData?: ZonesItem;
    currentImageId?: number;
    curIndex?: number;
    isGesture?: boolean;
    imgScale?: number;
    curScale?: number;
    imgOffsetX?: number;
    imgOffsetY?: number;
    preOffsetX?: number;
    preOffsetY?: number;
}
import type window from "@ohos:window";
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { DeviceScreen } from "@normalized:N&&&entry/src/main/ets/common/utils/DeviceScreen&";
export class ImageView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.controller = new CustomDialogController({
            builder: () => {
                let jsDialog = new ImageView(this, {}, undefined, -1, () => { }, { page: "entry/src/main/ets/view/ImageViewComponent.ets", line: 24, col: 14 });
                jsDialog.setController(this.controller);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {};
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            }
        }, this);
        this.windowClass = null;
        this.deviceWidth = 0;
        this.deviceHeight = 0;
        this.imgWidth = 0;
        this.imgHeight = 0;
        this.displayHeight = 0;
        this.__introductionData = this.initializeConsume('introductionData', "introductionData");
        this.__currentImageId = new SynchedPropertySimpleOneWayPU(params.currentImageId, this, "currentImageId");
        this.__curIndex = new ObservedPropertySimplePU(this.currentImageId, this, "curIndex");
        this.__isGesture = new ObservedPropertySimplePU(false, this, "isGesture");
        this.__imgScale = new ObservedPropertySimplePU(1, this, "imgScale");
        this.__curScale = new ObservedPropertySimplePU(1, this, "curScale");
        this.__imgOffsetX = new ObservedPropertySimplePU(0, this, "imgOffsetX");
        this.__imgOffsetY = new ObservedPropertySimplePU(0, this, "imgOffsetY");
        this.__preOffsetX = new ObservedPropertySimplePU(0, this, "preOffsetX");
        this.__preOffsetY = new ObservedPropertySimplePU(0, this, "preOffsetY");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImageView_Params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.windowClass !== undefined) {
            this.windowClass = params.windowClass;
        }
        if (params.deviceWidth !== undefined) {
            this.deviceWidth = params.deviceWidth;
        }
        if (params.deviceHeight !== undefined) {
            this.deviceHeight = params.deviceHeight;
        }
        if (params.imgWidth !== undefined) {
            this.imgWidth = params.imgWidth;
        }
        if (params.imgHeight !== undefined) {
            this.imgHeight = params.imgHeight;
        }
        if (params.displayHeight !== undefined) {
            this.displayHeight = params.displayHeight;
        }
        if (params.currentImageId === undefined) {
            this.__currentImageId.set(0);
        }
        if (params.curIndex !== undefined) {
            this.curIndex = params.curIndex;
        }
        if (params.isGesture !== undefined) {
            this.isGesture = params.isGesture;
        }
        if (params.imgScale !== undefined) {
            this.imgScale = params.imgScale;
        }
        if (params.curScale !== undefined) {
            this.curScale = params.curScale;
        }
        if (params.imgOffsetX !== undefined) {
            this.imgOffsetX = params.imgOffsetX;
        }
        if (params.imgOffsetY !== undefined) {
            this.imgOffsetY = params.imgOffsetY;
        }
        if (params.preOffsetX !== undefined) {
            this.preOffsetX = params.preOffsetX;
        }
        if (params.preOffsetY !== undefined) {
            this.preOffsetY = params.preOffsetY;
        }
    }
    updateStateVars(params: ImageView_Params) {
        this.__currentImageId.reset(params.currentImageId);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
        this.__currentImageId.purgeDependencyOnElmtId(rmElmtId);
        this.__curIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isGesture.purgeDependencyOnElmtId(rmElmtId);
        this.__imgScale.purgeDependencyOnElmtId(rmElmtId);
        this.__curScale.purgeDependencyOnElmtId(rmElmtId);
        this.__imgOffsetX.purgeDependencyOnElmtId(rmElmtId);
        this.__imgOffsetY.purgeDependencyOnElmtId(rmElmtId);
        this.__preOffsetX.purgeDependencyOnElmtId(rmElmtId);
        this.__preOffsetY.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__introductionData.aboutToBeDeleted();
        this.__currentImageId.aboutToBeDeleted();
        this.__curIndex.aboutToBeDeleted();
        this.__isGesture.aboutToBeDeleted();
        this.__imgScale.aboutToBeDeleted();
        this.__curScale.aboutToBeDeleted();
        this.__imgOffsetX.aboutToBeDeleted();
        this.__imgOffsetY.aboutToBeDeleted();
        this.__preOffsetX.aboutToBeDeleted();
        this.__preOffsetY.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private controller: CustomDialogController;
    setController(ctr: CustomDialogController) {
        this.controller = ctr;
    }
    private windowClass: window.Window | null;
    private deviceWidth: number;
    private deviceHeight: number;
    private imgWidth: number;
    private imgHeight: number;
    private displayHeight: number;
    private __introductionData: ObservedPropertyAbstractPU<ZonesItem>;
    get introductionData() {
        return this.__introductionData.get();
    }
    set introductionData(newValue: ZonesItem) {
        this.__introductionData.set(newValue);
    }
    private __currentImageId: SynchedPropertySimpleOneWayPU<number>;
    get currentImageId() {
        return this.__currentImageId.get();
    }
    set currentImageId(newValue: number) {
        this.__currentImageId.set(newValue);
    }
    private __curIndex: ObservedPropertySimplePU<number>;
    get curIndex() {
        return this.__curIndex.get();
    }
    set curIndex(newValue: number) {
        this.__curIndex.set(newValue);
    }
    private __isGesture: ObservedPropertySimplePU<boolean>;
    get isGesture() {
        return this.__isGesture.get();
    }
    set isGesture(newValue: boolean) {
        this.__isGesture.set(newValue);
    }
    private __imgScale: ObservedPropertySimplePU<number>;
    get imgScale() {
        return this.__imgScale.get();
    }
    set imgScale(newValue: number) {
        this.__imgScale.set(newValue);
    }
    private __curScale: ObservedPropertySimplePU<number>;
    get curScale() {
        return this.__curScale.get();
    }
    set curScale(newValue: number) {
        this.__curScale.set(newValue);
    }
    private __imgOffsetX: ObservedPropertySimplePU<number>;
    get imgOffsetX() {
        return this.__imgOffsetX.get();
    }
    set imgOffsetX(newValue: number) {
        this.__imgOffsetX.set(newValue);
    }
    private __imgOffsetY: ObservedPropertySimplePU<number>;
    get imgOffsetY() {
        return this.__imgOffsetY.get();
    }
    set imgOffsetY(newValue: number) {
        this.__imgOffsetY.set(newValue);
    }
    private __preOffsetX: ObservedPropertySimplePU<number>;
    get preOffsetX() {
        return this.__preOffsetX.get();
    }
    set preOffsetX(newValue: number) {
        this.__preOffsetX.set(newValue);
    }
    private __preOffsetY: ObservedPropertySimplePU<number>;
    get preOffsetY() {
        return this.__preOffsetY.get();
    }
    set preOffsetY(newValue: number) {
        this.__preOffsetY.set(newValue);
    }
    aboutToAppear() {
        let deviceSize = DeviceScreen.getDeviceSize(getContext(this));
        deviceSize.then((data: window.Window) => {
            this.windowClass = data;
            let properties = this.windowClass.getWindowProperties();
            this.deviceWidth = properties.windowRect.width;
            this.deviceHeight = properties.windowRect.height;
        });
    }
    /**
     * Detect boundary to keep the image in window.
     */
    detectBoundary(): void {
        let maxOffsetX = this.imgScale * this.deviceWidth / 2 - this.deviceWidth / 2;
        if (vp2px(this.imgOffsetX) > (maxOffsetX)) {
            this.imgOffsetX = px2vp(maxOffsetX);
        }
        if (vp2px(this.imgOffsetX) < -(maxOffsetX)) {
            this.imgOffsetX = -px2vp(maxOffsetX);
        }
        let maxOffsetY = this.imgScale * this.displayHeight / 2 - this.deviceHeight / 2;
        if (this.imgScale * this.displayHeight >= this.deviceHeight) {
            if (vp2px(this.imgOffsetY) > (maxOffsetY)) {
                this.imgOffsetY = px2vp(maxOffsetY);
            }
            if (vp2px(this.imgOffsetY) < -(maxOffsetY)) {
                this.imgOffsetY = -px2vp(maxOffsetY);
            }
        }
        else {
            this.imgOffsetY = 0;
        }
    }
    /**
     * Limit scale to keep the image clear.
     */
    limitScale(isReset: boolean): void {
        if (this.imgScale < 1) {
            this.imgScale = 1;
            this.curScale = 1;
            if (isReset) {
                this.imgOffsetX = 0;
                this.imgOffsetY = 0;
            }
            this.isGesture = false;
        }
        else if (this.imgScale > Const.MAX_SCALE) {
            this.imgScale = Const.MAX_SCALE;
            this.curScale = Const.MAX_SCALE;
        }
        else {
            this.curScale = this.imgScale;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(Const.FULL_PERCENT);
            Stack.height(Const.FULL_PERCENT);
            Stack.linearGradient({
                direction: GradientDirection.Top,
                colors: [[{ "id": 16777306, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }, Const.COLOR_SCALE_1], [{ "id": 16777307, "type": 10001, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" }, Const.COLOR_SCALE_2]]
            });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.width(Const.FULL_PERCENT);
            Swiper.height(Const.FULL_PERCENT);
            Swiper.loop(false);
            Swiper.indicatorStyle({
                bottom: { "id": 16777374, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" },
                color: Color.Gray
            });
            Swiper.index(this.curIndex);
            Swiper.onChange((index: number) => {
                this.curIndex = index;
            });
            Swiper.visibility(this.isGesture ? Visibility.Hidden : Visibility.Visible);
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width(Const.FULL_PERCENT);
                    Column.height(Const.FULL_PERCENT);
                    Column.justifyContent(FlexAlign.Center);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.onClick(() => {
                        this.controller.close();
                    });
                }, Blank);
                Blank.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.width(Const.FULL_PERCENT);
                    Image.objectFit(ImageFit.Contain);
                    Gesture.create(GesturePriority.Low);
                    PinchGesture.create();
                    PinchGesture.onActionStart(() => {
                        this.isGesture = true;
                    });
                    PinchGesture.onActionUpdate((event?: GestureEvent) => {
                        if (!event) {
                            return;
                        }
                        this.imgScale = this.curScale * event.scale;
                    });
                    PinchGesture.onActionEnd(() => {
                        this.limitScale(false);
                    });
                    PinchGesture.pop();
                    Gesture.pop();
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Blank.create();
                    Blank.onClick(() => {
                        this.controller.close();
                    });
                }, Blank);
                Blank.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.introductionData.imageList, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Gesture.create(GesturePriority.Low);
            PinchGesture.create();
            PinchGesture.onActionUpdate((event?: GestureEvent) => {
                if (!event) {
                    return;
                }
                this.imgScale = this.curScale * event.scale;
            });
            PinchGesture.onActionEnd(() => {
                this.detectBoundary();
                this.limitScale(true);
            });
            PinchGesture.pop();
            Gesture.pop();
            Gesture.create(GesturePriority.Low);
            PanGesture.create();
            PanGesture.onActionStart(() => {
                this.preOffsetX = this.imgOffsetX;
                this.preOffsetY = this.imgOffsetY;
            });
            PanGesture.onActionUpdate((event?: GestureEvent) => {
                if (!event) {
                    return;
                }
                this.imgOffsetX = this.preOffsetX + event.offsetX;
                this.imgOffsetY = this.preOffsetY + event.offsetY;
            });
            PanGesture.onActionEnd(() => {
                this.detectBoundary();
            });
            PanGesture.pop();
            Gesture.pop();
            Row.visibility(this.isGesture ? Visibility.Visible : Visibility.Hidden);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.introductionData.imageList[this.curIndex]);
            Image.objectFit(ImageFit.Contain);
            Image.scale({ x: this.imgScale, y: this.imgScale });
            Image.translate({ x: this.imgOffsetX, y: this.imgOffsetY });
            Image.onComplete((event) => {
                if (!event) {
                    return;
                }
                this.imgWidth = event.width;
                this.imgHeight = event.height;
                this.displayHeight = this.deviceWidth * this.imgHeight / this.imgWidth;
            });
        }, Image);
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
