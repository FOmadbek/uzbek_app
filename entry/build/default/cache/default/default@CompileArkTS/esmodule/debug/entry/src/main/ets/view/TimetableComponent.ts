if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Timetable_Params {
    selectedDay?: number;
    selectedYear?: number;
    selectedSem?: number;
    isEditMode?: boolean;
    showEditDialog?: boolean;
    editDayIdx?: number;
    editPeriodIdx?: number;
}
interface EditDialog_Params {
    showDialog?: boolean;
    editSubject?: string;
    editSubjectZh?: string;
    editTeacher?: string;
    editRoom?: string;
    onSave?: (subject: string, subjectZh: string, teacher: string, room: string) => void;
    onClear?: () => void;
}
import { CommonConstants as Const } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
/* ─── Data model ─── */
@Observed
class CourseSlot {
    subject: string = '';
    subjectZh: string = '';
    teacher: string = '';
    room: string = '';
    color: string = '#F5F5F5';
    textColor: string = '#AAAAAA';
    isEmpty: boolean = true;
}
const EMPTY: CourseSlot = {
    subject: "Bo'sh", subjectZh: '', teacher: '', room: '',
    color: '#F5F5F5', textColor: '#BBBBBB', isEmpty: true
};
const PERIOD_TIMES: string[] = [
    '08:00–09:40', '10:00–11:40', '14:00–15:40', '16:00–17:40', '18:00–19:40'
];
const PERIOD_LABELS: string[] = ['1–2', '3–4', '5–6', '7–8', '9–10'];
const DAYS_SHORT: string[] = ['Du', 'Se', 'Ch', 'Pa', 'Ju'];
const DAYS_FULL: string[] = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'];
const YEAR_LABELS: string[] = ['1-kurs', '2-kurs', '3-kurs', '4-kurs'];
/* ─── Helper to make course slots ─── */
function c(subject: string, subjectZh: string, teacher: string, room: string, color: string, textColor: string): CourseSlot {
    let s = new CourseSlot();
    s.subject = subject;
    s.subjectZh = subjectZh;
    s.teacher = teacher;
    s.room = room;
    s.color = color;
    s.textColor = textColor;
    s.isEmpty = false;
    return s;
}
/* ─── Color palette ─── */
const CLR_LANG: string[] = ['#E3F2FD', '#1565C0'];
const CLR_MATH: string[] = ['#E8F5E9', '#2E7D32'];
const CLR_PROG: string[] = ['#FFF3E0', '#E65100'];
const CLR_PHYS: string[] = ['#F3E5F5', '#6A1B9A'];
const CLR_ENG: string[] = ['#FCE4EC', '#AD1457'];
const CLR_SPORT: string[] = ['#E0F7FA', '#006064'];
const CLR_NET: string[] = ['#FFF8E1', '#F57F17'];
const CLR_DB: string[] = ['#E8EAF6', '#283593'];
const CLR_OS: string[] = ['#EFEBE9', '#4E342E'];
const CLR_AI: string[] = ['#F1F8E9', '#33691E'];
const CLR_WEB: string[] = ['#E0F2F1', '#004D40'];
const CLR_SE: string[] = ['#FBE9E7', '#BF360C'];
const CLR_SEC: string[] = ['#FCE4EC', '#880E4F'];
const CLR_THESIS: string[] = ['#ECEFF1', '#37474F'];
/* ══════════════════════════════════════════════════════════
   YEAR 1 — Foundation
══════════════════════════════════════════════════════════ */
const Y1S1: CourseSlot[][] = [
    [c('Xitoy tili (HSK 2)', '汉语综合', 'Wang Li', '301', CLR_LANG[0], CLR_LANG[1]),
        c('Oliy matematika', '高等数学', 'Zhang Wei', '201', CLR_MATH[0], CLR_MATH[1]),
        c('Dasturlash (C++)', '程序设计基础', 'Li Ming', 'KL-1', CLR_PROG[0], CLR_PROG[1]),
        EMPTY, EMPTY],
    [EMPTY,
        c('Fizika', '大学物理', 'Chen Fang', '205', CLR_PHYS[0], CLR_PHYS[1]),
        c('Xitoy tili (HSK 2)', '汉语综合', 'Wang Li', '301', CLR_LANG[0], CLR_LANG[1]),
        c('Muhandislik grafik', '工程制图', 'Zhao Yan', '401', CLR_ENG[0], CLR_ENG[1]),
        EMPTY],
    [c('Oliy matematika', '高等数学', 'Zhang Wei', '201', CLR_MATH[0], CLR_MATH[1]),
        EMPTY,
        c('Dasturlash lab', '程序设计实验', 'Li Ming', 'KL-1', CLR_PROG[0], CLR_PROG[1]),
        c('Xitoy tili (HSK 2)', '汉语综合', 'Wang Li', '301', CLR_LANG[0], CLR_LANG[1]),
        EMPTY],
    [c('Fizika', '大学物理', 'Chen Fang', '205', CLR_PHYS[0], CLR_PHYS[1]),
        c('Muhandislik grafik', '工程制图', 'Zhao Yan', '401', CLR_ENG[0], CLR_ENG[1]),
        EMPTY,
        c('Jismoniy tarbiya', '体育', 'Liu Peng', 'Gym', CLR_SPORT[0], CLR_SPORT[1]),
        EMPTY],
    [c('Dasturlash (C++)', '程序设计基础', 'Li Ming', 'KL-1', CLR_PROG[0], CLR_PROG[1]),
        c('Xitoy tili (HSK 2)', '汉语综合', 'Wang Li', '301', CLR_LANG[0], CLR_LANG[1]),
        EMPTY, EMPTY, EMPTY]
];
const Y1S2: CourseSlot[][] = [
    [c('Xitoy tili (HSK 3)', '汉语综合', 'Wang Li', '302', CLR_LANG[0], CLR_LANG[1]),
        c('Chiziqli algebra', '线性代数', 'Zhang Wei', '202', CLR_MATH[0], CLR_MATH[1]),
        c('Diskret matematika', '离散数学', 'Sun Qing', '203', CLR_PROG[0], CLR_PROG[1]),
        EMPTY, EMPTY],
    [EMPTY,
        c('Elektrotexnika', '电工学', 'Wu Gang', '206', CLR_PHYS[0], CLR_PHYS[1]),
        c('Xitoy tili (HSK 3)', '汉语综合', 'Wang Li', '302', CLR_LANG[0], CLR_LANG[1]),
        c('Python asoslari', 'Python编程', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        EMPTY],
    [c('Chiziqli algebra', '线性代数', 'Zhang Wei', '202', CLR_MATH[0], CLR_MATH[1]),
        c('Elektrotexnika lab', '电工学实验', 'Wu Gang', '307', CLR_PHYS[0], CLR_PHYS[1]),
        c('Diskret matematika', '离散数学', 'Sun Qing', '203', CLR_PROG[0], CLR_PROG[1]),
        EMPTY, EMPTY],
    [c('Elektrotexnika', '电工学', 'Wu Gang', '206', CLR_PHYS[0], CLR_PHYS[1]),
        EMPTY,
        c('Xitoy tili (HSK 3)', '汉语综合', 'Wang Li', '302', CLR_LANG[0], CLR_LANG[1]),
        c('Jismoniy tarbiya', '体育', 'Liu Peng', 'Gym', CLR_SPORT[0], CLR_SPORT[1]),
        EMPTY],
    [c('Python asoslari', 'Python编程', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        c('Chiziqli algebra', '线性代数', 'Zhang Wei', '202', CLR_MATH[0], CLR_MATH[1]),
        EMPTY, EMPTY, EMPTY]
];
/* ══════════════════════════════════════════════════════════
   YEAR 2 — Core CS
══════════════════════════════════════════════════════════ */
const Y2S1: CourseSlot[][] = [
    [c("Ma'lumotlar tuzilmasi", '数据结构', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        c('Ehtimollar nazariyasi', '概率论', 'Zhang Wei', '204', CLR_MATH[0], CLR_MATH[1]),
        c('OOP (Java)', '面向对象编程', 'Xu Hao', 'KL-3', CLR_DB[0], CLR_DB[1]),
        EMPTY, EMPTY],
    [c('Xitoy tili (HSK 4)', '汉语综合', 'Wang Li', '303', CLR_LANG[0], CLR_LANG[1]),
        EMPTY,
        c("Ma'lumotlar tuzilmasi lab", '数据结构实验', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        c('Kompyuter arxitekturasi', '计算机组成原理', 'Zhou Lin', '208', CLR_OS[0], CLR_OS[1]),
        EMPTY],
    [c('Ehtimollar nazariyasi', '概率论', 'Zhang Wei', '204', CLR_MATH[0], CLR_MATH[1]),
        c('OOP (Java)', '面向对象编程', 'Xu Hao', 'KL-3', CLR_DB[0], CLR_DB[1]),
        EMPTY,
        c('Xitoy tili (HSK 4)', '汉语综合', 'Wang Li', '303', CLR_LANG[0], CLR_LANG[1]),
        EMPTY],
    [c('Kompyuter arxitekturasi', '计算机组成原理', 'Zhou Lin', '208', CLR_OS[0], CLR_OS[1]),
        c("Ma'lumotlar tuzilmasi", '数据结构', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        EMPTY,
        c('Jismoniy tarbiya', '体育', 'Liu Peng', 'Gym', CLR_SPORT[0], CLR_SPORT[1]),
        EMPTY],
    [c('OOP lab', '面向对象实验', 'Xu Hao', 'KL-3', CLR_DB[0], CLR_DB[1]),
        c('Xitoy tili (HSK 4)', '汉语综合', 'Wang Li', '303', CLR_LANG[0], CLR_LANG[1]),
        EMPTY, EMPTY, EMPTY]
];
const Y2S2: CourseSlot[][] = [
    [c('Algoritm dizayni', '算法设计', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        c("Ma'lumotlar bazasi", '数据库原理', 'Yang Fei', 'KL-4', CLR_DB[0], CLR_DB[1]),
        c('Kompyuter tarmoqlari', '计算机网络', 'He Jun', '209', CLR_NET[0], CLR_NET[1]),
        EMPTY, EMPTY],
    [c('Xitoy tili (HSK 4)', '汉语综合', 'Wang Li', '303', CLR_LANG[0], CLR_LANG[1]),
        EMPTY,
        c("Ma'lumotlar bazasi lab", '数据库实验', 'Yang Fei', 'KL-4', CLR_DB[0], CLR_DB[1]),
        c('Algoritm dizayni', '算法设计', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        EMPTY],
    [c('Kompyuter tarmoqlari', '计算机网络', 'He Jun', '209', CLR_NET[0], CLR_NET[1]),
        c('Linux asoslari', 'Linux操作系统', 'Qian Yu', 'KL-5', CLR_OS[0], CLR_OS[1]),
        EMPTY,
        c('Xitoy tili (HSK 4)', '汉语综合', 'Wang Li', '303', CLR_LANG[0], CLR_LANG[1]),
        EMPTY],
    [EMPTY,
        c("Ma'lumotlar bazasi", '数据库原理', 'Yang Fei', 'KL-4', CLR_DB[0], CLR_DB[1]),
        c('Linux lab', 'Linux实验', 'Qian Yu', 'KL-5', CLR_OS[0], CLR_OS[1]),
        c('Jismoniy tarbiya', '体育', 'Liu Peng', 'Gym', CLR_SPORT[0], CLR_SPORT[1]),
        EMPTY],
    [c('Kompyuter tarmoqlari lab', '网络实验', 'He Jun', 'KL-6', CLR_NET[0], CLR_NET[1]),
        c('Algoritm dizayni', '算法设计', 'Li Ming', 'KL-2', CLR_PROG[0], CLR_PROG[1]),
        EMPTY, EMPTY, EMPTY]
];
/* ══════════════════════════════════════════════════════════
   YEAR 3 — Advanced
══════════════════════════════════════════════════════════ */
const Y3S1: CourseSlot[][] = [
    [c('Operatsion tizimlar', '操作系统', 'Zhou Lin', '210', CLR_OS[0], CLR_OS[1]),
        c('Dasturiy injiniring', '软件工程', 'Xu Hao', '305', CLR_SE[0], CLR_SE[1]),
        c('Veb dasturlash', 'Web开发技术', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        EMPTY, EMPTY],
    [EMPTY,
        c('Operatsion tizimlar lab', '操作系统实验', 'Zhou Lin', 'KL-5', CLR_OS[0], CLR_OS[1]),
        c("Sun'iy intellekt", '人工智能', 'Prof. Tan', '306', CLR_AI[0], CLR_AI[1]),
        c('Veb dasturlash lab', 'Web开发实验', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        EMPTY],
    [c('Dasturiy injiniring', '软件工程', 'Xu Hao', '305', CLR_SE[0], CLR_SE[1]),
        EMPTY,
        c('Operatsion tizimlar', '操作系统', 'Zhou Lin', '210', CLR_OS[0], CLR_OS[1]),
        EMPTY, EMPTY],
    [c("Sun'iy intellekt", '人工智能', 'Prof. Tan', '306', CLR_AI[0], CLR_AI[1]),
        c('Veb dasturlash', 'Web开发技术', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        EMPTY,
        c('Jismoniy tarbiya', '体育', 'Liu Peng', 'Gym', CLR_SPORT[0], CLR_SPORT[1]),
        EMPTY],
    [c('Dasturiy injiniring lab', '软件工程实验', 'Xu Hao', 'KL-4', CLR_SE[0], CLR_SE[1]),
        c("Sun'iy intellekt lab", '人工智能实验', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        EMPTY, EMPTY, EMPTY]
];
const Y3S2: CourseSlot[][] = [
    [c('Mashina o\'rganish', '机器学习', 'Prof. Tan', '306', CLR_AI[0], CLR_AI[1]),
        c('Axborot xavfsizligi', '信息安全', 'Liang Bo', '211', CLR_SEC[0], CLR_SEC[1]),
        c('Mobil dasturlash', '移动开发', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        EMPTY, EMPTY],
    [c('Bulutli hisoblash', '云计算', 'He Jun', 'KL-6', CLR_NET[0], CLR_NET[1]),
        EMPTY,
        c('Mashina o\'rganish lab', '机器学习实验', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        c('Axborot xavfsizligi lab', '安全实验', 'Liang Bo', 'KL-8', CLR_SEC[0], CLR_SEC[1]),
        EMPTY],
    [c('Mobil dasturlash', '移动开发', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        c('Bulutli hisoblash', '云计算', 'He Jun', 'KL-6', CLR_NET[0], CLR_NET[1]),
        EMPTY,
        c('Mashina o\'rganish', '机器学习', 'Prof. Tan', '306', CLR_AI[0], CLR_AI[1]),
        EMPTY],
    [c('Axborot xavfsizligi', '信息安全', 'Liang Bo', '211', CLR_SEC[0], CLR_SEC[1]),
        EMPTY, EMPTY,
        c('Amaliyot (stajirovka)', '专业实习', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY],
    [c('Mobil dasturlash lab', '移动开发实验', 'Qian Yu', 'KL-3', CLR_WEB[0], CLR_WEB[1]),
        c('Bulutli hisoblash lab', '云计算实验', 'He Jun', 'KL-6', CLR_NET[0], CLR_NET[1]),
        EMPTY, EMPTY, EMPTY]
];
/* ══════════════════════════════════════════════════════════
   YEAR 4 — Thesis & Electives
══════════════════════════════════════════════════════════ */
const Y4S1: CourseSlot[][] = [
    [c('Katta ma\'lumotlar', '大数据技术', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        c('Bitiruv loyihasi', '毕业设计', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY, EMPTY],
    [c('Chuqur o\'rganish', '深度学习', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        EMPTY, EMPTY,
        c('Bitiruv loyihasi', '毕业设计', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY],
    [EMPTY,
        c('Katta ma\'lumotlar lab', '大数据实验', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        c('Bitiruv loyihasi', '毕业设计', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY],
    [c('Chuqur o\'rganish lab', '深度学习实验', 'Prof. Tan', 'KL-7', CLR_AI[0], CLR_AI[1]),
        EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY,
        c('Bitiruv loyihasi', '毕业设计', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY, EMPTY]
];
const Y4S2: CourseSlot[][] = [
    [c('Bitiruv tezisi', '毕业论文', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY,
        c('Bitiruv tezisi', '毕业论文', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY, EMPTY],
    [c('Bitiruv tezisi', '毕业论文', 'Xu Hao', '—', CLR_THESIS[0], CLR_THESIS[1]),
        EMPTY, EMPTY, EMPTY, EMPTY],
    [EMPTY,
        c('Bitiruv himoyasi', '毕业答辩', 'Xu Hao', 'Hall', CLR_SE[0], CLR_SE[1]),
        EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY]
];
/* All schedules: [year 0..3][sem 0..1] */
const ALL: CourseSlot[][][][] = [
    [Y1S1, Y1S2], [Y2S1, Y2S2], [Y3S1, Y3S2], [Y4S1, Y4S2]
];
class EditDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__showDialog = new SynchedPropertySimpleTwoWayPU(params.showDialog, this, "showDialog");
        this.__editSubject = new ObservedPropertySimplePU('', this, "editSubject");
        this.__editSubjectZh = new ObservedPropertySimplePU('', this, "editSubjectZh");
        this.__editTeacher = new ObservedPropertySimplePU('', this, "editTeacher");
        this.__editRoom = new ObservedPropertySimplePU('', this, "editRoom");
        this.onSave = () => { };
        this.onClear = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EditDialog_Params) {
        if (params.editSubject !== undefined) {
            this.editSubject = params.editSubject;
        }
        if (params.editSubjectZh !== undefined) {
            this.editSubjectZh = params.editSubjectZh;
        }
        if (params.editTeacher !== undefined) {
            this.editTeacher = params.editTeacher;
        }
        if (params.editRoom !== undefined) {
            this.editRoom = params.editRoom;
        }
        if (params.onSave !== undefined) {
            this.onSave = params.onSave;
        }
        if (params.onClear !== undefined) {
            this.onClear = params.onClear;
        }
    }
    updateStateVars(params: EditDialog_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__showDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__editSubject.purgeDependencyOnElmtId(rmElmtId);
        this.__editSubjectZh.purgeDependencyOnElmtId(rmElmtId);
        this.__editTeacher.purgeDependencyOnElmtId(rmElmtId);
        this.__editRoom.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__showDialog.aboutToBeDeleted();
        this.__editSubject.aboutToBeDeleted();
        this.__editSubjectZh.aboutToBeDeleted();
        this.__editTeacher.aboutToBeDeleted();
        this.__editRoom.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __showDialog: SynchedPropertySimpleTwoWayPU<boolean>;
    get showDialog() {
        return this.__showDialog.get();
    }
    set showDialog(newValue: boolean) {
        this.__showDialog.set(newValue);
    }
    private __editSubject: ObservedPropertySimplePU<string>;
    get editSubject() {
        return this.__editSubject.get();
    }
    set editSubject(newValue: string) {
        this.__editSubject.set(newValue);
    }
    private __editSubjectZh: ObservedPropertySimplePU<string>;
    get editSubjectZh() {
        return this.__editSubjectZh.get();
    }
    set editSubjectZh(newValue: string) {
        this.__editSubjectZh.set(newValue);
    }
    private __editTeacher: ObservedPropertySimplePU<string>;
    get editTeacher() {
        return this.__editTeacher.get();
    }
    set editTeacher(newValue: string) {
        this.__editTeacher.set(newValue);
    }
    private __editRoom: ObservedPropertySimplePU<string>;
    get editRoom() {
        return this.__editRoom.get();
    }
    set editRoom(newValue: string) {
        this.__editRoom.set(newValue);
    }
    private onSave: (subject: string, subjectZh: string, teacher: string, room: string) => void;
    private onClear: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showDialog) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width(Const.FULL_PERCENT);
                        Column.height(Const.FULL_PERCENT);
                        Column.backgroundColor('#60000000');
                        Column.justifyContent(FlexAlign.Center);
                        Column.onClick(() => { this.showDialog = false; });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 12 });
                        Column.width('85%');
                        Column.padding(20);
                        Column.backgroundColor(Color.White);
                        Column.borderRadius(16);
                        Column.shadow({ radius: 20, color: '#30000000', offsetY: 4 });
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('Darsni tahrirlash');
                        Text.fontSize(16);
                        Text.fontWeight(FontWeight.Bold);
                        Text.fontColor('#111111');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: 'Fan nomi (uz)', text: this.editSubject });
                        TextInput.height(38);
                        TextInput.fontSize(13);
                        TextInput.backgroundColor('#F4F4F4');
                        TextInput.borderRadius(8);
                        TextInput.onChange((v: string) => { this.editSubject = v; });
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '科目名 (zh)', text: this.editSubjectZh });
                        TextInput.height(38);
                        TextInput.fontSize(13);
                        TextInput.backgroundColor('#F4F4F4');
                        TextInput.borderRadius(8);
                        TextInput.onChange((v: string) => { this.editSubjectZh = v; });
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: "O'qituvchi", text: this.editTeacher });
                        TextInput.height(38);
                        TextInput.fontSize(13);
                        TextInput.backgroundColor('#F4F4F4');
                        TextInput.borderRadius(8);
                        TextInput.onChange((v: string) => { this.editTeacher = v; });
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: 'Xona', text: this.editRoom });
                        TextInput.height(38);
                        TextInput.fontSize(13);
                        TextInput.backgroundColor('#F4F4F4');
                        TextInput.borderRadius(8);
                        TextInput.onChange((v: string) => { this.editRoom = v; });
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 10 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('Tozalash');
                        Button.fontSize(13);
                        Button.fontColor('#D32F2F');
                        Button.backgroundColor('#FFEBEE');
                        Button.borderRadius(8);
                        Button.layoutWeight(1);
                        Button.height(38);
                        Button.onClick(() => { this.onClear(); this.showDialog = false; });
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('Bekor');
                        Button.fontSize(13);
                        Button.fontColor('#666666');
                        Button.backgroundColor('#F5F5F5');
                        Button.borderRadius(8);
                        Button.layoutWeight(1);
                        Button.height(38);
                        Button.onClick(() => { this.showDialog = false; });
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('Saqlash');
                        Button.fontSize(13);
                        Button.fontColor(Color.White);
                        Button.backgroundColor('#1565C0');
                        Button.borderRadius(8);
                        Button.layoutWeight(1);
                        Button.height(38);
                        Button.onClick(() => {
                            this.onSave(this.editSubject, this.editSubjectZh, this.editTeacher, this.editRoom);
                            this.showDialog = false;
                        });
                    }, Button);
                    Button.pop();
                    Row.pop();
                    Column.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class Timetable extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__selectedDay = new ObservedPropertySimplePU(0, this, "selectedDay");
        this.__selectedYear = new ObservedPropertySimplePU(0, this, "selectedYear");
        this.__selectedSem = new ObservedPropertySimplePU(0, this, "selectedSem");
        this.__isEditMode = new ObservedPropertySimplePU(false, this, "isEditMode");
        this.__showEditDialog = new ObservedPropertySimplePU(false, this, "showEditDialog");
        this.__editDayIdx = new ObservedPropertySimplePU(0, this, "editDayIdx");
        this.__editPeriodIdx = new ObservedPropertySimplePU(0, this, "editPeriodIdx");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Timetable_Params) {
        if (params.selectedDay !== undefined) {
            this.selectedDay = params.selectedDay;
        }
        if (params.selectedYear !== undefined) {
            this.selectedYear = params.selectedYear;
        }
        if (params.selectedSem !== undefined) {
            this.selectedSem = params.selectedSem;
        }
        if (params.isEditMode !== undefined) {
            this.isEditMode = params.isEditMode;
        }
        if (params.showEditDialog !== undefined) {
            this.showEditDialog = params.showEditDialog;
        }
        if (params.editDayIdx !== undefined) {
            this.editDayIdx = params.editDayIdx;
        }
        if (params.editPeriodIdx !== undefined) {
            this.editPeriodIdx = params.editPeriodIdx;
        }
    }
    updateStateVars(params: Timetable_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__selectedDay.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedYear.purgeDependencyOnElmtId(rmElmtId);
        this.__selectedSem.purgeDependencyOnElmtId(rmElmtId);
        this.__isEditMode.purgeDependencyOnElmtId(rmElmtId);
        this.__showEditDialog.purgeDependencyOnElmtId(rmElmtId);
        this.__editDayIdx.purgeDependencyOnElmtId(rmElmtId);
        this.__editPeriodIdx.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__selectedDay.aboutToBeDeleted();
        this.__selectedYear.aboutToBeDeleted();
        this.__selectedSem.aboutToBeDeleted();
        this.__isEditMode.aboutToBeDeleted();
        this.__showEditDialog.aboutToBeDeleted();
        this.__editDayIdx.aboutToBeDeleted();
        this.__editPeriodIdx.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __selectedDay: ObservedPropertySimplePU<number>;
    get selectedDay() {
        return this.__selectedDay.get();
    }
    set selectedDay(newValue: number) {
        this.__selectedDay.set(newValue);
    }
    private __selectedYear: ObservedPropertySimplePU<number>;
    get selectedYear() {
        return this.__selectedYear.get();
    }
    set selectedYear(newValue: number) {
        this.__selectedYear.set(newValue);
    }
    private __selectedSem: ObservedPropertySimplePU<number>;
    get selectedSem() {
        return this.__selectedSem.get();
    }
    set selectedSem(newValue: number) {
        this.__selectedSem.set(newValue);
    }
    private __isEditMode: ObservedPropertySimplePU<boolean>;
    get isEditMode() {
        return this.__isEditMode.get();
    }
    set isEditMode(newValue: boolean) {
        this.__isEditMode.set(newValue);
    }
    private __showEditDialog: ObservedPropertySimplePU<boolean>;
    get showEditDialog() {
        return this.__showEditDialog.get();
    }
    set showEditDialog(newValue: boolean) {
        this.__showEditDialog.set(newValue);
    }
    private __editDayIdx: ObservedPropertySimplePU<number>;
    get editDayIdx() {
        return this.__editDayIdx.get();
    }
    set editDayIdx(newValue: number) {
        this.__editDayIdx.set(newValue);
    }
    private __editPeriodIdx: ObservedPropertySimplePU<number>;
    get editPeriodIdx() {
        return this.__editPeriodIdx.get();
    }
    set editPeriodIdx(newValue: number) {
        this.__editPeriodIdx.set(newValue);
    }
    getSlot(dayIdx: number, periodIdx: number): CourseSlot {
        return ALL[this.selectedYear][this.selectedSem][dayIdx][periodIdx];
    }
    openEditor(dayIdx: number, periodIdx: number): void {
        this.editDayIdx = dayIdx;
        this.editPeriodIdx = periodIdx;
        this.showEditDialog = true;
    }
    SlotRow(periodIdx: number, slot: CourseSlot, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width(Const.FULL_PERCENT);
            Row.backgroundColor(this.isEditMode ? (slot.isEmpty ? '#FAFAFA' : slot.color) : slot.color);
            Row.padding({ left: 12, right: 12, top: 10, bottom: 10 });
            Row.borderRadius(8);
            Row.border(this.isEditMode ? { width: 1, color: '#E0E0E0', style: BorderStyle.Dashed } : {});
            Row.onClick(() => {
                if (this.isEditMode) {
                    this.openEditor(this.selectedDay, periodIdx);
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 1 });
            Column.width(68);
            Column.alignItems(HorizontalAlign.Center);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(PERIOD_LABELS[periodIdx]);
            Text.fontSize(11);
            Text.fontColor(slot.isEmpty ? '#CCCCCC' : slot.textColor);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(PERIOD_TIMES[periodIdx]);
            Text.fontSize(9);
            Text.fontColor('#AAAAAA');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.layoutWeight(1);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!slot.isEmpty) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(slot.subject);
                        Text.fontSize(13);
                        Text.fontWeight(FontWeight.Bold);
                        Text.fontColor(slot.textColor);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 4 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(slot.subjectZh);
                        Text.fontSize(10);
                        Text.fontColor('#888888');
                    }, Text);
                    Text.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 6 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(slot.teacher);
                        Text.fontSize(11);
                        Text.fontColor('#999999');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`· ${slot.room}`);
                        Text.fontSize(11);
                        Text.fontColor('#999999');
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.isEditMode ? '+ Qo\'shish' : '—');
                        Text.fontSize(this.isEditMode ? 12 : 14);
                        Text.fontColor(this.isEditMode ? '#1565C0' : '#CCCCCC');
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.isEditMode && !slot.isEmpty) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('✎');
                        Text.fontSize(16);
                        Text.fontColor('#1565C0');
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(Const.FULL_PERCENT);
            Stack.height(Const.FULL_PERCENT);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(new NavPathStack(), { moduleName: "entry", pagePath: "entry/src/main/ets/view/TimetableComponent", isUserCreateStack: false });
            Navigation.title('Dars Jadvali');
            Navigation.titleMode(NavigationTitleMode.Full);
            Navigation.hideBackButton(true);
            Navigation.hideToolBar(true);
            Navigation.backgroundColor('#F2F4F7');
            Navigation.menus([{
                    value: '',
                    icon: this.isEditMode ? '/common/images/ic_line1.png' : '/common/images/ic_line1.png',
                    action: () => { this.isEditMode = !this.isEditMode; }
                }]);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.height(Const.FULL_PERCENT);
            Column.backgroundColor('#F2F4F7');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            /* ── Year selector ── */
            Row.create({ space: 0 });
            /* ── Year selector ── */
            Row.padding({ left: 14, right: 14, top: 8, bottom: 4 });
            /* ── Year selector ── */
            Row.width(Const.FULL_PERCENT);
            /* ── Year selector ── */
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const yr = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(YEAR_LABELS[yr]);
                    Text.fontSize(11);
                    Text.fontColor(this.selectedYear === yr ? Color.White : '#555555');
                    Text.fontWeight(FontWeight.Medium);
                    Text.padding({ left: 10, right: 10, top: 5, bottom: 5 });
                    Text.backgroundColor(this.selectedYear === yr ? '#1565C0' : '#EEEEEE');
                    Text.borderRadius(yr === 0 ? { topLeft: 8, bottomLeft: 8 } :
                        yr === 3 ? { topRight: 8, bottomRight: 8 } : 0);
                    Text.onClick(() => { this.selectedYear = yr; });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2, 3], forEachItemGenFunction, (i: number) => `yr_${i}`, false, false);
        }, ForEach);
        ForEach.pop();
        /* ── Year selector ── */
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            /* ── Semester + Day header ── */
            Row.create();
            /* ── Semester + Day header ── */
            Row.width(Const.FULL_PERCENT);
            /* ── Semester + Day header ── */
            Row.padding({ left: 14, right: 14, top: 6, bottom: 4 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(DAYS_FULL[this.selectedDay]);
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#111111');
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 0 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const semIdx = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`${semIdx + 1}-sem`);
                    Text.fontSize(11);
                    Text.fontColor(this.selectedSem === semIdx ? Color.White : '#666666');
                    Text.fontWeight(FontWeight.Medium);
                    Text.padding({ left: 9, right: 9, top: 4, bottom: 4 });
                    Text.backgroundColor(this.selectedSem === semIdx ? '#1565C0' : '#EEEEEE');
                    Text.borderRadius(semIdx === 0 ?
                        { topLeft: 7, bottomLeft: 7 } : { topRight: 7, bottomRight: 7 });
                    Text.onClick(() => { this.selectedSem = semIdx; });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, [0, 1], forEachItemGenFunction, (i: number) => `sem_${i}`, false, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        /* ── Semester + Day header ── */
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(`${this.selectedYear + 1}-kurs  ${this.selectedSem + 1}-semestr  2025/26`);
            Text.fontSize(11);
            Text.fontColor('#AAAAAA');
            Text.padding({ left: 14, bottom: 6 });
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            /* ── Day tabs ── */
            Row.create({ space: 0 });
            /* ── Day tabs ── */
            Row.width(Const.FULL_PERCENT);
            /* ── Day tabs ── */
            Row.backgroundColor(Color.White);
            /* ── Day tabs ── */
            Row.shadow({ radius: 2, color: '#10000000', offsetY: 1 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 1 });
                    Column.layoutWeight(1);
                    Column.height(42);
                    Column.justifyContent(FlexAlign.Center);
                    Column.onClick(() => { this.selectedDay = i; });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(DAYS_SHORT[i]);
                    Text.fontSize(13);
                    Text.fontWeight(this.selectedDay === i ? FontWeight.Bold : FontWeight.Normal);
                    Text.fontColor(this.selectedDay === i ? '#1565C0' : '#555555');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.width(this.selectedDay === i ? 24 : 0);
                    Column.height(2);
                    Column.backgroundColor('#1565C0');
                    Column.borderRadius(1);
                }, Column);
                Column.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2, 3, 4], forEachItemGenFunction, (i: number) => `d_${i}`, false, false);
        }, ForEach);
        ForEach.pop();
        /* ── Day tabs ── */
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            /* ── Period list ── */
            Scroll.create();
            /* ── Period list ── */
            Scroll.layoutWeight(1);
            /* ── Period list ── */
            Scroll.edgeEffect(EdgeEffect.Fade);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 0 });
            Column.padding({ left: 14, right: 14, top: 10 });
            Column.width(Const.FULL_PERCENT);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.SlotRow.bind(this)(i, this.getSlot(this.selectedDay, i));
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2, 3, 4], forEachItemGenFunction, (i: number) => `slot_${i}_${this.selectedDay}_${this.selectedSem}_${this.selectedYear}_${this.isEditMode}`, false, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.width(Const.FULL_PERCENT);
            Column.backgroundColor('#FAFAFA');
            Column.padding(12);
            Column.borderRadius(8);
            Column.margin({ top: 8, bottom: 24 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('Eslatma (备注)');
            Text.fontSize(11);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#333333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('KL = Kompyuter lab  •  Gym = Sport zali');
            Text.fontSize(11);
            Text.fontColor('#666666');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create("Tahrirlash → yuqoridagi ✎ tugmasini bosing");
            Text.fontSize(10);
            Text.fontColor('#999999');
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
        /* ── Period list ── */
        Scroll.pop();
        Column.pop();
        Navigation.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            /* ── Edit button floating ── */
            Column.create();
            /* ── Edit button floating ── */
            Column.position({ x: '85%', y: 52 });
            /* ── Edit button floating ── */
            Column.position({ x: '88%', y: 52 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.isEditMode ? 'OK' : 'Edit');
            Button.fontSize(11);
            Button.fontColor(Color.White);
            Button.backgroundColor(this.isEditMode ? '#2E7D32' : '#1565C0');
            Button.borderRadius(16);
            Button.width(40);
            Button.height(32);
            Button.shadow({ radius: 6, color: '#30000000', offsetY: 2 });
            Button.onClick(() => { this.isEditMode = !this.isEditMode; });
        }, Button);
        Button.pop();
        /* ── Edit button floating ── */
        Column.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    /* ── Edit Dialog ── */
                    EditDialog(this, {
                        showDialog: this.__showEditDialog,
                        onSave: (subject: string, subjectZh: string, teacher: string, room: string) => {
                            let newSlot = new CourseSlot();
                            newSlot.subject = subject;
                            newSlot.subjectZh = subjectZh;
                            newSlot.teacher = teacher;
                            newSlot.room = room;
                            newSlot.isEmpty = false;
                            newSlot.color = '#E3F2FD';
                            newSlot.textColor = '#1565C0';
                            ALL[this.selectedYear][this.selectedSem][this.editDayIdx][this.editPeriodIdx] = newSlot;
                            this.selectedDay = this.selectedDay;
                        },
                        onClear: () => {
                            let newEmpty = new CourseSlot();
                            newEmpty.subject = "Bo'sh";
                            newEmpty.isEmpty = true;
                            newEmpty.color = '#F5F5F5';
                            newEmpty.textColor = '#BBBBBB';
                            ALL[this.selectedYear][this.selectedSem][this.editDayIdx][this.editPeriodIdx] = newEmpty;
                            this.selectedDay = this.selectedDay;
                        }
                    }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/TimetableComponent.ets", line: 508, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            showDialog: this.showEditDialog,
                            onSave: (subject: string, subjectZh: string, teacher: string, room: string) => {
                                let newSlot = new CourseSlot();
                                newSlot.subject = subject;
                                newSlot.subjectZh = subjectZh;
                                newSlot.teacher = teacher;
                                newSlot.room = room;
                                newSlot.isEmpty = false;
                                newSlot.color = '#E3F2FD';
                                newSlot.textColor = '#1565C0';
                                ALL[this.selectedYear][this.selectedSem][this.editDayIdx][this.editPeriodIdx] = newSlot;
                                this.selectedDay = this.selectedDay;
                            },
                            onClear: () => {
                                let newEmpty = new CourseSlot();
                                newEmpty.subject = "Bo'sh";
                                newEmpty.isEmpty = true;
                                newEmpty.color = '#F5F5F5';
                                newEmpty.textColor = '#BBBBBB';
                                ALL[this.selectedYear][this.selectedSem][this.editDayIdx][this.editPeriodIdx] = newEmpty;
                                this.selectedDay = this.selectedDay;
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "EditDialog" });
        }
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
