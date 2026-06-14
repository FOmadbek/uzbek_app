if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ImageAnimation_Params {
    currentIndex?: number;
    introductionData?: ZonesItem;
    dialogController?: CustomDialogController;
}
import type ZonesItem from '../viewmodel/ZonesItem';
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { ImageView } from "@normalized:N&&&entry/src/main/ets/view/ImageViewComponent&";
export default class ImageAnimation extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__currentIndex = new ObservedPropertySimplePU(Const.HALF_COUNT, this, "currentIndex");
        this.__introductionData = this.initializeConsume('introductionData', "introductionData");
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new ImageView(this, { currentImageId: this.currentIndex }, undefined, -1, () => { }, { page: "entry/src/main/ets/view/ImageAnimate.ets", line: 25, col: 14 });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
                let paramsLambda = () => {
                    return {
                        currentImageId: this.currentIndex
                    };
                };
                jsDialog.paramsGenerator_ = paramsLambda;
            },
            customStyle: true,
            alignment: DialogAlignment.Bottom
        }, this);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ImageAnimation_Params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params: ImageAnimation_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__introductionData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        this.__introductionData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __introductionData: ObservedPropertyAbstractPU<ZonesItem>;
    get introductionData() {
        return this.__introductionData.get();
    }
    set introductionData(newValue: ZonesItem) {
        this.__introductionData.set(newValue);
    }
    private dialogController: CustomDialogController;
    /**
     * Get the image offset coefficients.
     *
     * @param index
     * @returns offset coefficients
     */
    getImgCoefficients(index?: number) {
        if (index === undefined) {
            return 0;
        }
        let coefficient = this.currentIndex - index;
        let tempCoefficient = Math.abs(coefficient);
        if (tempCoefficient <= Const.HALF_COUNT) {
            return coefficient;
        }
        let dataLength = this.introductionData.imageList.length;
        let tempOffset = dataLength - tempCoefficient;
        if (tempOffset <= Const.HALF_COUNT) {
            if (coefficient > 0) {
                return -tempOffset;
            }
            return tempOffset;
        }
        return 0;
    }
    /**
     * Get the image offset.
     *
     * @param index
     * @returns offset
     */
    getOffSetX(index?: number) {
        if (index === undefined) {
            return 0;
        }
        let offsetIndex = this.getImgCoefficients(index);
        let tempOffset = Math.abs(offsetIndex);
        let offsetX = 0;
        if (tempOffset === 1) {
            offsetX = -Const.IMAGE_X_OFFSET_MAX * offsetIndex;
        }
        else if (tempOffset === Const.HALF_COUNT) {
            offsetX = -Const.IMAGE_x_OFFSET_MIN * offsetIndex;
        }
        return offsetX;
    }
    startAnimation(isLeft: boolean) {
        Context.animateTo({
            duration: Const.IMAGE_ANIMATION_DURATION,
        }, () => {
            let dataLength = this.introductionData.imageList.length;
            let tempIndex = isLeft ? this.currentIndex + 1 : this.currentIndex - 1 + dataLength;
            this.currentIndex = tempIndex % dataLength;
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(Const.FULL_SIZE);
            Stack.height(Const.FULL_SIZE);
            Stack.alignContent(Alignment.Center);
            Gesture.create(GesturePriority.Low);
            PanGesture.create({ direction: PanDirection.Horizontal });
            PanGesture.onActionStart((event?: GestureEvent) => {
                if (!event) {
                    return;
                }
                this.startAnimation(event.offsetX < 0);
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
                    Row.aspectRatio(Const.IMAGE_ASPECT_RATIO);
                    Row.borderRadius({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                    Row.offset({ x: this.getOffSetX(index), y: 0 });
                    Row.blur(Const.IMAGE_BLUR_REDUCE * Math.abs(this.getImgCoefficients(index)));
                    Row.zIndex(index !== this.currentIndex && this.getImgCoefficients(index) === 0 ?
                        0 : Const.HALF_COUNT - Math.abs(this.getImgCoefficients(index)));
                    Row.height(index !== this.currentIndex && this.getImgCoefficients(index) === 0 ?
                        Const.IMAGE_HEIGHT_MIN : `${Const.FULL_PERCENT_NUMBER -
                        Const.IMAGE_WIDTH_OFFSET * Math.abs(this.getImgCoefficients(index))}%`);
                    Row.onClick(() => {
                        this.dialogController.open();
                    });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(item);
                    Image.objectFit(ImageFit.ScaleDown);
                    Image.borderRadius({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.example.xzut.for_uzbeks", "moduleName": "entry" });
                    Image.opacity(Const.OPACITY_MAX - Const.IMAGE_OPACITY_REDUCE
                        * Math.min(Const.HALF_COUNT, Math.abs(this.getImgCoefficients(index))));
                }, Image);
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.introductionData.imageList, forEachItemGenFunction, (item: ResourceStr) => JSON.stringify(item), true, false);
        }, ForEach);
        ForEach.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
