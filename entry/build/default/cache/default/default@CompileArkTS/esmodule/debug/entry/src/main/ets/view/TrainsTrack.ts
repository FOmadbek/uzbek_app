if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TrainsTrack_Params {
    settings?: RenderingContextSettings;
    context?: CanvasRenderingContext2D;
    settings1?: RenderingContextSettings;
    contextTrainLine?: CanvasRenderingContext2D;
    imgTrain?: ImageBitmap;
    imgCircle?: ImageBitmap;
    trainLine?: number;
    canvasWidth?: number;
    canvasHeight?: number;
    trainX?: number;
    trainY?: number;
    bgX?: number;
    bgY?: number;
    currentIndex?: number;
    rotateAngle?: number;
    positionStart?: Position;
    positionEnd?: Position;
    sumDistance?: number;
    delay?: number;
    trainsInfo?: TrainsMap;
}
import { Position } from "@normalized:N&&&entry/src/main/ets/viewmodel/TrainsMap&";
import type { TrainsMap } from "@normalized:N&&&entry/src/main/ets/viewmodel/TrainsMap&";
import { CommonConstants as Const, TrainsLine } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import TrainsMapModel from "@normalized:N&&&entry/src/main/ets/viewmodel/TrainsMapModel&";
export default class TrainsTrack extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.settings = new RenderingContextSettings(true);
        this.context = new CanvasRenderingContext2D(this.settings);
        this.settings1 = new RenderingContextSettings(true);
        this.contextTrainLine = new CanvasRenderingContext2D(this.settings1);
        this.imgTrain = new ImageBitmap(Const.TRAIN_URL);
        this.imgCircle = new ImageBitmap(Const.CIRCLE_URL);
        this.trainLine = 0;
        this.__canvasWidth = new ObservedPropertySimplePU(0, this, "canvasWidth");
        this.__canvasHeight = new ObservedPropertySimplePU(0, this, "canvasHeight");
        this.__trainX = new ObservedPropertySimplePU(0, this, "trainX");
        this.__trainY = new ObservedPropertySimplePU(0, this, "trainY");
        this.__bgX = new ObservedPropertySimplePU(0, this, "bgX");
        this.__bgY = new ObservedPropertySimplePU(0, this, "bgY");
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.__rotateAngle = new ObservedPropertySimplePU(Const.INIT_ROTATE_ANGLE, this, "rotateAngle");
        this.__positionStart = new ObservedPropertyObjectPU(new Position(), this, "positionStart");
        this.__positionEnd = new ObservedPropertyObjectPU(new Position(), this, "positionEnd");
        this.__sumDistance = new ObservedPropertySimplePU(0, this, "sumDistance");
        this.__delay = new ObservedPropertySimplePU(10, this, "delay");
        this.__trainsInfo = new SynchedPropertyNesedObjectPU(params.trainsInfo, this, "trainsInfo");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TrainsTrack_Params) {
        if (params.settings !== undefined) {
            this.settings = params.settings;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.settings1 !== undefined) {
            this.settings1 = params.settings1;
        }
        if (params.contextTrainLine !== undefined) {
            this.contextTrainLine = params.contextTrainLine;
        }
        if (params.imgTrain !== undefined) {
            this.imgTrain = params.imgTrain;
        }
        if (params.imgCircle !== undefined) {
            this.imgCircle = params.imgCircle;
        }
        if (params.trainLine !== undefined) {
            this.trainLine = params.trainLine;
        }
        if (params.canvasWidth !== undefined) {
            this.canvasWidth = params.canvasWidth;
        }
        if (params.canvasHeight !== undefined) {
            this.canvasHeight = params.canvasHeight;
        }
        if (params.trainX !== undefined) {
            this.trainX = params.trainX;
        }
        if (params.trainY !== undefined) {
            this.trainY = params.trainY;
        }
        if (params.bgX !== undefined) {
            this.bgX = params.bgX;
        }
        if (params.bgY !== undefined) {
            this.bgY = params.bgY;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.rotateAngle !== undefined) {
            this.rotateAngle = params.rotateAngle;
        }
        if (params.positionStart !== undefined) {
            this.positionStart = params.positionStart;
        }
        if (params.positionEnd !== undefined) {
            this.positionEnd = params.positionEnd;
        }
        if (params.sumDistance !== undefined) {
            this.sumDistance = params.sumDistance;
        }
        if (params.delay !== undefined) {
            this.delay = params.delay;
        }
        this.__trainsInfo.set(params.trainsInfo);
    }
    updateStateVars(params: TrainsTrack_Params) {
        this.__trainsInfo.set(params.trainsInfo);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__canvasWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__canvasHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__trainX.purgeDependencyOnElmtId(rmElmtId);
        this.__trainY.purgeDependencyOnElmtId(rmElmtId);
        this.__bgX.purgeDependencyOnElmtId(rmElmtId);
        this.__bgY.purgeDependencyOnElmtId(rmElmtId);
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__rotateAngle.purgeDependencyOnElmtId(rmElmtId);
        this.__positionStart.purgeDependencyOnElmtId(rmElmtId);
        this.__positionEnd.purgeDependencyOnElmtId(rmElmtId);
        this.__sumDistance.purgeDependencyOnElmtId(rmElmtId);
        this.__delay.purgeDependencyOnElmtId(rmElmtId);
        this.__trainsInfo.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__canvasWidth.aboutToBeDeleted();
        this.__canvasHeight.aboutToBeDeleted();
        this.__trainX.aboutToBeDeleted();
        this.__trainY.aboutToBeDeleted();
        this.__bgX.aboutToBeDeleted();
        this.__bgY.aboutToBeDeleted();
        this.__currentIndex.aboutToBeDeleted();
        this.__rotateAngle.aboutToBeDeleted();
        this.__positionStart.aboutToBeDeleted();
        this.__positionEnd.aboutToBeDeleted();
        this.__sumDistance.aboutToBeDeleted();
        this.__delay.aboutToBeDeleted();
        this.__trainsInfo.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private settings: RenderingContextSettings;
    private context: CanvasRenderingContext2D;
    private settings1: RenderingContextSettings;
    private contextTrainLine: CanvasRenderingContext2D;
    private imgTrain: ImageBitmap;
    private imgCircle: ImageBitmap;
    private trainLine: number;
    private __canvasWidth: ObservedPropertySimplePU<number>;
    get canvasWidth() {
        return this.__canvasWidth.get();
    }
    set canvasWidth(newValue: number) {
        this.__canvasWidth.set(newValue);
    }
    private __canvasHeight: ObservedPropertySimplePU<number>;
    get canvasHeight() {
        return this.__canvasHeight.get();
    }
    set canvasHeight(newValue: number) {
        this.__canvasHeight.set(newValue);
    }
    private __trainX: ObservedPropertySimplePU<number>;
    get trainX() {
        return this.__trainX.get();
    }
    set trainX(newValue: number) {
        this.__trainX.set(newValue);
    }
    private __trainY: ObservedPropertySimplePU<number>;
    get trainY() {
        return this.__trainY.get();
    }
    set trainY(newValue: number) {
        this.__trainY.set(newValue);
    }
    private __bgX: ObservedPropertySimplePU<number>;
    get bgX() {
        return this.__bgX.get();
    }
    set bgX(newValue: number) {
        this.__bgX.set(newValue);
    }
    private __bgY: ObservedPropertySimplePU<number>;
    get bgY() {
        return this.__bgY.get();
    }
    set bgY(newValue: number) {
        this.__bgY.set(newValue);
    }
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    private __rotateAngle: ObservedPropertySimplePU<number>;
    get rotateAngle() {
        return this.__rotateAngle.get();
    }
    set rotateAngle(newValue: number) {
        this.__rotateAngle.set(newValue);
    }
    private __positionStart: ObservedPropertyObjectPU<Position>;
    get positionStart() {
        return this.__positionStart.get();
    }
    set positionStart(newValue: Position) {
        this.__positionStart.set(newValue);
    }
    private __positionEnd: ObservedPropertyObjectPU<Position>;
    get positionEnd() {
        return this.__positionEnd.get();
    }
    set positionEnd(newValue: Position) {
        this.__positionEnd.set(newValue);
    }
    private __sumDistance: ObservedPropertySimplePU<number>;
    get sumDistance() {
        return this.__sumDistance.get();
    }
    set sumDistance(newValue: number) {
        this.__sumDistance.set(newValue);
    }
    private __delay: ObservedPropertySimplePU<number>;
    get delay() {
        return this.__delay.get();
    }
    set delay(newValue: number) {
        this.__delay.set(newValue);
    }
    private __trainsInfo: SynchedPropertyNesedObjectPU<TrainsMap>;
    get trainsInfo() {
        return this.__trainsInfo.get();
    }
    aboutToAppear() {
        this.sumDistance = TrainsMapModel.calcDistance(this.trainsInfo.lineData);
        this.delay = TrainsMapModel.calcDelay(this.sumDistance, this.trainLine);
        this.fetchStartPosition();
    }
    /**
     * Obtain initial position.
     */
    fetchStartPosition() {
        const travelDistance = TrainsMapModel.travelDistance(this.sumDistance, this.fetchStartTime(this.trainLine), this.trainLine);
        this.calcFirstDistance(this.trainsInfo.lineData, travelDistance);
    }
    fetchStartTime(index: number): string {
        let ret = Const.LINE_ONE_START_TIME;
        const date = new Date();
        const weekday = date.getDay();
        if (index === TrainsLine.LINE_THREE && weekday === 6) {
            ret = Const.LINE_THREE_WEEKEND_START_TIME;
        }
        return ret;
    }
    calcFirstDistance(data: Position[], travelDistance: number) {
        let sumDistance: number = 0;
        const length = data.length;
        for (let index = 0; index < length; index++) {
            if (sumDistance > travelDistance) {
                this.currentIndex = index - 1;
                this.trainX = data[index - 1].x;
                this.trainY = data[index - 1].y;
                this.calcPosition(this.trainX, this.trainY, this.canvasWidth, this.canvasHeight);
                break;
            }
            else {
                const startX = data[index].x, startY = data[index].y;
                const endX = index === length - 1 ? data[0].x : data[index + 1].x, endY = index === length - 1 ? data[0].y : data[index + 1].y;
                if (Math.abs(startX - endX) >= Math.abs(startY - endY)) {
                    sumDistance += Math.abs(startX - endX);
                }
                else {
                    sumDistance += Math.abs(startY - endY);
                }
            }
        }
    }
    calcPosition(x: number, y: number, w: number, h: number) {
        if (x + this.bgX > w - Const.HORIZONTAL_THRESHOLD) {
            this.bgX = Math.abs(this.bgX - w / 2) > Const.CANVAS_WIDTH - w ? -Const.CANVAS_WIDTH + w : this.bgX - w / 2;
        }
        if (x + this.bgX < Const.HORIZONTAL_THRESHOLD) {
            this.bgX = Math.abs(this.bgX + w / 2) < 0 ? 0 : this.bgX + w / 2;
        }
        if (y + this.bgY > h - Const.VERTICAL_THRESHOLD) {
            this.bgY = Math.abs(this.bgY - h / 2) > Const.CANVAS_HEIGHT - h ? -Const.CANVAS_HEIGHT + h : this.bgY - h / 2;
        }
        if (y + this.bgY < Const.VERTICAL_THRESHOLD) {
            this.bgY = Math.abs(this.bgY + h / 2) < 0 ? 0 : this.bgY + h / 2;
        }
    }
    /**
     *  Draw the next location of the train.
     */
    drawTrainPosition() {
        if (Math.abs(this.trainX - this.positionEnd.x) <= Const.AVERAGE_ERROR &&
            Math.abs(this.trainY - this.positionEnd.y) <= Const.AVERAGE_ERROR) {
            this.trainX = this.positionEnd.x;
            this.trainY = this.positionEnd.y;
            if (this.currentIndex === this.trainsInfo.lineData.length - 2) {
                this.currentIndex = 0;
            }
            else {
                this.currentIndex += 1;
            }
        }
        this.positionStart = this.trainsInfo.lineData[this.currentIndex];
        this.positionEnd = this.trainsInfo.lineData[this.currentIndex + 1];
        this.rotateAngle = Const.BASIC_ROTATE_ANGLE +
            TrainsMapModel.fetchDirection(this.positionStart.x, this.positionStart.y, this.positionEnd.x, this.positionEnd.y);
        this.contextTrainLine.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.trainX += TrainsMapModel.fetchRatioX(this.positionStart, this.positionEnd);
        this.trainY += TrainsMapModel.fetchRatioY(this.positionStart, this.positionEnd);
        this.calcPosition(this.trainX, this.trainY, this.canvasWidth, this.canvasHeight);
        this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.context.drawImage(this.trainsInfo.imgBg, this.bgX, this.bgY, Const.CANVAS_WIDTH, Const.CANVAS_HEIGHT);
        this.contextTrainLine.drawImage(this.imgTrain, this.trainX + this.bgX - Const.TRAIN_OFFSET_X, this.trainY + this.bgY - Const.TRAIN_OFFSET_Y, Const.TRAIN_WIDTH, Const.TRAIN_HEIGHT);
        this.contextTrainLine.drawImage(this.imgCircle, this.trainX + this.bgX - Const.CIRCLE_OFFSET_X, this.trainY + this.bgY - Const.CIRCLE_OFFSET_Y, Const.CIRCLE_WIDTH, Const.CIRCLE_HEIGHT);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.context);
            Canvas.width(Const.FULL_SIZE);
            Canvas.aspectRatio(Const.CANVAS_ASPECT_RADIO);
            Canvas.borderRadius(Const.CANVAS_BORDER_RADIUS);
            Canvas.onReady(() => {
                this.context.drawImage(this.trainsInfo.imgBg, this.bgX, this.bgY, Const.CANVAS_WIDTH, Const.CANVAS_HEIGHT);
                this.canvasWidth = this.context.width;
                this.canvasHeight = this.context.height;
            });
        }, Canvas);
        Canvas.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(Const.ARROW_URL);
            Image.width(Const.ARROW_WIDTH);
            Image.height(Const.ARROW_HEIGHT);
            Image.position({
                x: this.trainX + this.bgX - Const.ARROW_OFFSET_X,
                y: this.trainY + this.bgY - Const.ARROW_OFFSET_Y
            });
            Image.rotate({
                x: 0,
                y: 0,
                z: 1,
                angle: this.rotateAngle
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Canvas.create(this.contextTrainLine);
            Canvas.width(Const.FULL_SIZE);
            Canvas.aspectRatio(Const.CANVAS_ASPECT_RADIO);
            Canvas.borderRadius(Const.CANVAS_BORDER_RADIUS);
            Canvas.onReady(() => {
                this.contextTrainLine.drawImage(this.imgTrain, this.trainX + this.bgX - Const.TRAIN_OFFSET_X, this.trainY + this.bgY - Const.TRAIN_OFFSET_Y, Const.TRAIN_WIDTH, Const.TRAIN_HEIGHT);
                this.contextTrainLine.drawImage(this.imgCircle, this.trainX + this.bgX - Const.CIRCLE_OFFSET_X, this.trainY + this.bgY - Const.CIRCLE_OFFSET_Y, Const.CIRCLE_WIDTH, Const.CIRCLE_HEIGHT);
                setInterval(() => {
                    this.drawTrainPosition();
                }, this.delay);
            });
        }, Canvas);
        Canvas.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
