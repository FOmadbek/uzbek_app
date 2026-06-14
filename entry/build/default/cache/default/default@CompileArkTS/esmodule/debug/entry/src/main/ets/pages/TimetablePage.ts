if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface TimetablePage_Params {
}
import { Timetable } from "@normalized:N&&&entry/src/main/ets/view/TimetableComponent&";
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class TimetablePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TimetablePage_Params) {
    }
    updateStateVars(params: TimetablePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width(Const.FULL_PERCENT);
            Column.height(Const.FULL_PERCENT);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Timetable(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/TimetablePage.ets", line: 13, col: 7 });
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
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "TimetablePage";
    }
}
registerNamedRoute(() => new TimetablePage(undefined, {}), "", { bundleName: "com.example.xzut.for_uzbeks", moduleName: "entry", pagePath: "pages/TimetablePage", pageFullPath: "entry/src/main/ets/pages/TimetablePage", integratedHsp: "false", moduleType: "followWithHap" });
