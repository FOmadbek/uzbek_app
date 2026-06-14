if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface About_Params {
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
class InfoRow {
    label: string = '';
    value: string = '';
}
class ContactItem {
    title: string = '';
    phone: string = '';
    note: string = '';
    color: string = '#1565C0';
}
const UNIVERSITY_FACTS: InfoRow[] = [
    { label: 'To\'liq nomi', value: '徐州工程学院  (XZUT)' },
    { label: 'O\'zbek tilida', value: 'Syuzhou Texnalogiyalar universiteti' },
    { label: 'Ingliz tilida', value: 'Xuzhou University of Technology' },
    { label: 'Tashkil etilgan', value: '1959-yil' },
    { label: 'Joylashuvi', value: 'Xuzhou, Jiangsu viloyati, Xitoy' },
    { label: 'Kampus', value: 'Xincheng va Quanshan kampuslari' },
    { label: 'Talabalar soni', value: '~20,000+ talaba' },
    { label: 'Xalqaro talabalar', value: '30+ mamlakatdan' },
    { label: 'Rasmiy veb-sayt', value: 'xzit.edu.cn' },
    { label: 'Talaba veb-sayt', value: 'jwglxt.xzit.edu.cn' }
];
const CONTACTS: ContactItem[] = [
    { title: 'Xalqaro talabalar idorasi', phone: '+86-516-8335-1223', note: 'Du–Ju  08:30–17:00', color: '#1565C0' },
    { title: 'Tezkor yordam (zil)', phone: '110', note: 'Politsiya', color: '#C62828' },
    { title: 'Tez tibbiy yordam', phone: '120', note: 'Ambulance', color: '#C62828' },
    { title: 'Yong\'in xizmati', phone: '119', note: 'O\'t o\'chirish', color: '#E65100' },
    { title: 'Talabalar poliklinikasi', phone: '+86-516-8335-1334', note: 'Kampus shifoxonasi', color: '#2E7D32' },
    { title: 'Yotoqxona ma\'muri', phone: 'Qavat navbatchisiga murojaat', note: '24 soat', color: '#00695C' }
];
const USEFUL_APPS: InfoRow[] = [
    { label: 'WeChat (微信)', value: 'Muloqot va to\'lov' },
    { label: 'Alipay (支付宝)', value: 'To\'lov tizimi' },
    { label: 'Baidu Translate', value: 'Tarjimon' },
    { label: 'DiDi (滴滴)', value: 'Taksi va transport' },
    { label: 'Meituan (美团)', value: 'Taom yetkazib berish' },
    { label: 'WeChat → XZIT', value: 'Rasmiy universitet kanali' }
];
export class About extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: About_Params) {
    }
    updateStateVars(params: About_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/view/AboutComponent", isUserCreateStack: false });
            Navigation.title("Haqida");
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
            Column.create({ space: 14 });
            Column.width(Const.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // University header
            Column.create({ space: 8 });
            // University header
            Column.width(Const.FULL_PERCENT);
            // University header
            Column.backgroundColor('#0D47A1');
            // University header
            Column.padding({ left: 20, right: 20, top: 24, bottom: 24 });
            // University header
            Column.alignItems(HorizontalAlign.Center);
            // University header
            Column.margin({ top: 0 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("XZUT");
            Text.fontSize(36);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Xuzhou University of Technology");
            Text.fontSize(14);
            Text.fontColor('#DDEEFF');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("徐州工程学院");
            Text.fontSize(18);
            Text.fontColor('#CCE8FF');
            Text.fontWeight(FontWeight.Medium);
        }, Text);
        Text.pop();
        // University header
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // University facts
            Column.create({ space: 0 });
            // University facts
            Column.width(Const.FULL_PERCENT);
            // University facts
            Column.backgroundColor(Color.White);
            // University facts
            Column.borderRadius(10);
            // University facts
            Column.shadow({ radius: 3, color: '#10000000', offsetY: 1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Universitet haqida");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#111111');
            Text.padding({ left: 14, top: 12, bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(Const.FULL_PERCENT);
                    Row.padding({ left: 14, right: 14, top: 8, bottom: 8 });
                    Row.border({ width: { top: 0.5 }, color: '#EEEEEE' });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.label);
                    Text.fontSize(12);
                    Text.fontColor('#666666');
                    Text.width(130);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.value);
                    Text.fontSize(13);
                    Text.fontColor('#111111');
                    Text.fontWeight(FontWeight.Medium);
                    Text.layoutWeight(1);
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, UNIVERSITY_FACTS, forEachItemGenFunction, (item: InfoRow) => item.label, false, false);
        }, ForEach);
        ForEach.pop();
        // University facts
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Emergency contacts
            Column.create({ space: 0 });
            // Emergency contacts
            Column.width(Const.FULL_PERCENT);
            // Emergency contacts
            Column.backgroundColor(Color.White);
            // Emergency contacts
            Column.borderRadius(10);
            // Emergency contacts
            Column.shadow({ radius: 3, color: '#10000000', offsetY: 1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Muhim telefon raqamlar");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#111111');
            Text.padding({ left: 14, top: 12, bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(Const.FULL_PERCENT);
                    Row.padding({ left: 14, right: 14, top: 10, bottom: 10 });
                    Row.border({ width: { top: 0.5 }, color: '#EEEEEE' });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 2 });
                    Column.layoutWeight(1);
                    Column.alignItems(HorizontalAlign.Start);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.title);
                    Text.fontSize(13);
                    Text.fontColor('#111111');
                    Text.fontWeight(FontWeight.Medium);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.note);
                    Text.fontSize(11);
                    Text.fontColor('#888888');
                }, Text);
                Text.pop();
                Column.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.phone);
                    Text.fontSize(15);
                    Text.fontColor(item.color);
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, CONTACTS, forEachItemGenFunction, (item: ContactItem) => item.title, false, false);
        }, ForEach);
        ForEach.pop();
        // Emergency contacts
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Useful apps
            Column.create({ space: 0 });
            // Useful apps
            Column.width(Const.FULL_PERCENT);
            // Useful apps
            Column.backgroundColor(Color.White);
            // Useful apps
            Column.borderRadius(10);
            // Useful apps
            Column.shadow({ radius: 3, color: '#10000000', offsetY: 1 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Foydali ilovalar");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#111111');
            Text.padding({ left: 14, top: 12, bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width(Const.FULL_PERCENT);
                    Row.padding({ left: 14, right: 14, top: 9, bottom: 9 });
                    Row.border({ width: { top: 0.5 }, color: '#EEEEEE' });
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.label);
                    Text.fontSize(13);
                    Text.fontColor('#111111');
                    Text.fontWeight(FontWeight.Medium);
                    Text.width(160);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.value);
                    Text.fontSize(12);
                    Text.fontColor('#666666');
                    Text.layoutWeight(1);
                }, Text);
                Text.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, USEFUL_APPS, forEachItemGenFunction, (item: InfoRow) => `app_${item.label}`, false, false);
        }, ForEach);
        ForEach.pop();
        // Useful apps
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Campus address
            Column.create({ space: 6 });
            // Campus address
            Column.width(Const.FULL_PERCENT);
            // Campus address
            Column.backgroundColor('#E8F0FE');
            // Campus address
            Column.padding(14);
            // Campus address
            Column.borderRadius(10);
            // Campus address
            Column.alignItems(HorizontalAlign.Start);
            // Campus address
            Column.margin({ bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Kampus manzili");
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#1565C0');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Xincheng kampus (新城校区)");
            Text.fontSize(13);
            Text.fontColor('#222222');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Xinyuan Dadao, Yunlong tumani, Xuzhou, Jiangsu, 221111");
            Text.fontSize(12);
            Text.fontColor('#555555');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("新园大道, 云龙区, 徐州市, 江苏省");
            Text.fontSize(12);
            Text.fontColor('#888888');
        }, Text);
        Text.pop();
        // Campus address
        Column.pop();
        Column.pop();
        Scroll.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
