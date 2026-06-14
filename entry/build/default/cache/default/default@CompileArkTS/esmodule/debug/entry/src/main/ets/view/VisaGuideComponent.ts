if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface VisaGuide_Params {
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class VisaStep {
    stepNum: number = 0;
    title: string = '';
    description: string = '';
    timeframe: string = '';
    color: string = '#1565C0';
}
const VISA_STEPS: VisaStep[] = [
    {
        stepNum: 1,
        title: "X1 Viza bilan Xitoyga kelish",
        description: "X1 viza 180 kundan ortiq o'qish uchun beriladi. Universitetning qabul maktubi (录取通知书) va JW202 formasini tekshiring. Pasport muddati kamida o'qish muddatidan 6 oy uzun bo'lishi kerak.",
        timeframe: "Kelishdan oldin",
        color: "#1565C0"
    },
    {
        stepNum: 2,
        title: "24 soat ichida ro'yxatdan o'tish",
        description: "Xitoyga kelganingizdan so'ng 24 soat ichida yotoqxona ma'muriga yoki mahalla politsiyasiga (派出所) murojaat qilib, chet ellik ro'yxat daftarchasini (外国人住宿登记表) to'ldiring.",
        timeframe: "Kelganingizdan so'ng 24 soat",
        color: "#C62828"
    },
    {
        stepNum: 3,
        title: "Tibbiy ko'rik (体检)",
        description: "XZIT ko'rsatgan Xuzhou xalqaro sog'liqni saqlash markazida to'liq tibbiy ko'rikdan o'ting. Natijani xalqaro talabalar idorasiga topshiring. Ko'rik natijasi 6 oy amal qiladi.",
        timeframe: "1-hafta ichida",
        color: "#2E7D32"
    },
    {
        stepNum: 4,
        title: "Yashash Ruxsatnomasi Ariza (居留许可)",
        description: "Xalqaro talabalar idorasidan (留学生管理处) to'liq hujjatlar ro'yxatini oling. So'ngra Xuzhou Jamoat Xavfsizligi Byurosiga (公安局出入境管理处) tashrif buyuring.",
        timeframe: "Kelganingizdan so'ng 30 kun ichida",
        color: "#E65100"
    },
    {
        stepNum: 5,
        title: "PSB uchun kerakli hujjatlar",
        description: "• Pasport (asl nusxa + fotokopiya)\n• JW202 forma (asl nusxa)\n• Talaba guvohnomasi (学生证)\n• Tibbiy ko'rik natijasi\n• Ro'yxat daftarcha (外国人住宿登记表)\n• 2 dona foto (3×4 sm, oq fon)\n• PSB davlat to'lovi kvitansiyasi",
        timeframe: "PSB tashrifi uchun to'plang",
        color: "#6A1B9A"
    },
    {
        stepNum: 6,
        title: "Ruxsatnomani olish",
        description: "PSB ariza qabul qilgandan so'ng 7–15 ish kuni ichida yashash ruxsatnomasini (居留许可) pasportingizga yopishtirib qaytaradi. SMS xabar yoki qo'ng'iroq orqali xabardor qilinasiz.",
        timeframe: "7–15 ish kuni",
        color: "#00695C"
    },
    {
        stepNum: 7,
        title: "Yillik Yangilash (签注 / 年签)",
        description: "Har o'quv yili boshida (odatda sentyabr) ruxsatnomani yangilang. Muddati tugashidan kamida 30 kun oldin xalqaro talabalar idorasiga murojaat qiling. Muddati o'tkazib yuborilsa jarima solinadi.",
        timeframe: "Har yili (sentyabr)",
        color: "#AD1457"
    }
];
export class VisaGuide extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: VisaGuide_Params) {
    }
    updateStateVars(params: VisaGuide_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/view/VisaGuideComponent", isUserCreateStack: false });
            Navigation.title("Viza Qo'llanma");
            Navigation.titleMode(NavigationTitleMode.Full);
            Navigation.hideBackButton(true);
            Navigation.hideToolBar(true);
            Navigation.backgroundColor('#F2F4F7');
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width(Const.FULL_PERCENT);
            Scroll.height(Const.FULL_PERCENT);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding({ left: 14, right: 14 });
            Column.width(Const.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 6 });
            Column.width(Const.FULL_PERCENT);
            Column.backgroundColor('#1565C0');
            Column.padding({ left: 16, right: 16, top: 16, bottom: 16 });
            Column.borderRadius(12);
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ top: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("X1 Viza → Yashash Ruxsatnomasi");
            Text.fontSize(17);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("O'zbekistonlik talabalar uchun bosqichma-bosqich qo'llanma");
            Text.fontSize(12);
            Text.fontColor('#CCDEFF');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create({ space: 14 });
                    Row.width(Const.FULL_PERCENT);
                    Row.backgroundColor(Color.White);
                    Row.padding({ left: 14, right: 14, top: 12, bottom: 12 });
                    Row.borderRadius(10);
                    Row.shadow({ radius: 3, color: '#18000000', offsetY: 1 });
                    Row.alignItems(VerticalAlign.Top);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`${item.stepNum}`);
                    Text.width(34);
                    Text.height(34);
                    Text.borderRadius(17);
                    Text.backgroundColor(item.color);
                    Text.fontColor(Color.White);
                    Text.fontSize(15);
                    Text.fontWeight(FontWeight.Bold);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.layoutWeight(1);
                    Column.alignItems(HorizontalAlign.Start);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.fontSize(14);
                    Text.fontWeight(FontWeight.Bold);
                    Text.fontColor('#111111');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.timeframe);
                    Text.fontSize(11);
                    Text.fontColor(item.color);
                    Text.fontWeight(FontWeight.Medium);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.description);
                    Text.fontSize(12);
                    Text.fontColor('#444444');
                    Text.margin({ top: 2 });
                }, Text);
                Text.pop();
                Column.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, VISA_STEPS, forEachItemGenFunction, (item: VisaStep) => `step_${item.stepNum}`, false, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.width(Const.FULL_PERCENT);
            Column.backgroundColor('#E8F0FE');
            Column.padding({ left: 14, right: 14, top: 14, bottom: 14 });
            Column.borderRadius(10);
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Yordam va Aloqa");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#1565C0');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Xalqaro talabalar idorasi  (留学生管理处)");
            Text.fontSize(13);
            Text.fontColor('#222222');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("XZIT Ma'muriyat binosi, 1-qavat");
            Text.fontSize(12);
            Text.fontColor('#555555');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Ish vaqti:  Du–Ju  08:30–17:00");
            Text.fontSize(12);
            Text.fontColor('#555555');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("⚠  Muddatlarni kuzatib boring — jarimalarsiz!");
            Text.fontSize(12);
            Text.fontColor('#E65100');
            Text.fontWeight(FontWeight.Medium);
            Text.margin({ top: 4 });
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
