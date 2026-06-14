if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VisaPage_Params {
}
import { VisaGuide } from "@normalized:N&&&entry/src/main/ets/view/VisaGuideComponent&";
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class VisaPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VisaPage_Params) {
    }
    updateStateVars(params: VisaPage_Params) {
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
                    let componentCall = new VisaGuide(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/VisaPage.ets", line: 13, col: 7 });
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
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "VisaPage";
    }
}
registerNamedRoute(() => new VisaPage(undefined, {}), "", { bundleName: "com.example.xzut.for_uzbeks", moduleName: "entry", pagePath: "pages/VisaPage", pageFullPath: "entry/src/main/ets/pages/VisaPage", integratedHsp: "false", moduleType: "followWithHap" });
