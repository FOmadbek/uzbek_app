import { CommonConstants as Const } from '../common/constants/CommonConstants';

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
const DAYS_SHORT: string[]  = ['Du', 'Se', 'Ch', 'Pa', 'Ju'];
const DAYS_FULL: string[]   = ['Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma'];
const YEAR_LABELS: string[] = ['1-kurs', '2-kurs', '3-kurs', '4-kurs'];

/* ─── Helper to make course slots ─── */
function c(subject: string, subjectZh: string, teacher: string, room: string, color: string, textColor: string): CourseSlot {
  let s = new CourseSlot();
  s.subject = subject; s.subjectZh = subjectZh; s.teacher = teacher;
  s.room = room; s.color = color; s.textColor = textColor; s.isEmpty = false;
  return s;
}

/* ─── Color palette ─── */
const CLR_LANG: string[]  = ['#E3F2FD', '#1565C0'];
const CLR_MATH: string[]  = ['#E8F5E9', '#2E7D32'];
const CLR_PROG: string[]  = ['#FFF3E0', '#E65100'];
const CLR_PHYS: string[]  = ['#F3E5F5', '#6A1B9A'];
const CLR_ENG: string[]   = ['#FCE4EC', '#AD1457'];
const CLR_SPORT: string[] = ['#E0F7FA', '#006064'];
const CLR_NET: string[]   = ['#FFF8E1', '#F57F17'];
const CLR_DB: string[]    = ['#E8EAF6', '#283593'];
const CLR_OS: string[]    = ['#EFEBE9', '#4E342E'];
const CLR_AI: string[]    = ['#F1F8E9', '#33691E'];
const CLR_WEB: string[]   = ['#E0F2F1', '#004D40'];
const CLR_SE: string[]    = ['#FBE9E7', '#BF360C'];
const CLR_SEC: string[]   = ['#FCE4EC', '#880E4F'];
const CLR_THESIS: string[] = ['#ECEFF1', '#37474F'];

/* ══════════════════════════════════════════════════════════
   YEAR 1 — Foundation
══════════════════════════════════════════════════════════ */
const Y1S1: CourseSlot[][] = [
  [ c('Xitoy tili (HSK 2)','汉语综合','Wang Li','301',CLR_LANG[0],CLR_LANG[1]),
    c('Oliy matematika','高等数学','Zhang Wei','201',CLR_MATH[0],CLR_MATH[1]),
    c('Dasturlash (C++)','程序设计基础','Li Ming','KL-1',CLR_PROG[0],CLR_PROG[1]),
    EMPTY, EMPTY ],
  [ EMPTY,
    c('Fizika','大学物理','Chen Fang','205',CLR_PHYS[0],CLR_PHYS[1]),
    c('Xitoy tili (HSK 2)','汉语综合','Wang Li','301',CLR_LANG[0],CLR_LANG[1]),
    c('Muhandislik grafik','工程制图','Zhao Yan','401',CLR_ENG[0],CLR_ENG[1]),
    EMPTY ],
  [ c('Oliy matematika','高等数学','Zhang Wei','201',CLR_MATH[0],CLR_MATH[1]),
    EMPTY,
    c('Dasturlash lab','程序设计实验','Li Ming','KL-1',CLR_PROG[0],CLR_PROG[1]),
    c('Xitoy tili (HSK 2)','汉语综合','Wang Li','301',CLR_LANG[0],CLR_LANG[1]),
    EMPTY ],
  [ c('Fizika','大学物理','Chen Fang','205',CLR_PHYS[0],CLR_PHYS[1]),
    c('Muhandislik grafik','工程制图','Zhao Yan','401',CLR_ENG[0],CLR_ENG[1]),
    EMPTY,
    c('Jismoniy tarbiya','体育','Liu Peng','Gym',CLR_SPORT[0],CLR_SPORT[1]),
    EMPTY ],
  [ c('Dasturlash (C++)','程序设计基础','Li Ming','KL-1',CLR_PROG[0],CLR_PROG[1]),
    c('Xitoy tili (HSK 2)','汉语综合','Wang Li','301',CLR_LANG[0],CLR_LANG[1]),
    EMPTY, EMPTY, EMPTY ]
];

const Y1S2: CourseSlot[][] = [
  [ c('Xitoy tili (HSK 3)','汉语综合','Wang Li','302',CLR_LANG[0],CLR_LANG[1]),
    c('Chiziqli algebra','线性代数','Zhang Wei','202',CLR_MATH[0],CLR_MATH[1]),
    c('Diskret matematika','离散数学','Sun Qing','203',CLR_PROG[0],CLR_PROG[1]),
    EMPTY, EMPTY ],
  [ EMPTY,
    c('Elektrotexnika','电工学','Wu Gang','206',CLR_PHYS[0],CLR_PHYS[1]),
    c('Xitoy tili (HSK 3)','汉语综合','Wang Li','302',CLR_LANG[0],CLR_LANG[1]),
    c('Python asoslari','Python编程','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    EMPTY ],
  [ c('Chiziqli algebra','线性代数','Zhang Wei','202',CLR_MATH[0],CLR_MATH[1]),
    c('Elektrotexnika lab','电工学实验','Wu Gang','307',CLR_PHYS[0],CLR_PHYS[1]),
    c('Diskret matematika','离散数学','Sun Qing','203',CLR_PROG[0],CLR_PROG[1]),
    EMPTY, EMPTY ],
  [ c('Elektrotexnika','电工学','Wu Gang','206',CLR_PHYS[0],CLR_PHYS[1]),
    EMPTY,
    c('Xitoy tili (HSK 3)','汉语综合','Wang Li','302',CLR_LANG[0],CLR_LANG[1]),
    c('Jismoniy tarbiya','体育','Liu Peng','Gym',CLR_SPORT[0],CLR_SPORT[1]),
    EMPTY ],
  [ c('Python asoslari','Python编程','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    c('Chiziqli algebra','线性代数','Zhang Wei','202',CLR_MATH[0],CLR_MATH[1]),
    EMPTY, EMPTY, EMPTY ]
];

/* ══════════════════════════════════════════════════════════
   YEAR 2 — Core CS
══════════════════════════════════════════════════════════ */
const Y2S1: CourseSlot[][] = [
  [ c("Ma'lumotlar tuzilmasi",'数据结构','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    c('Ehtimollar nazariyasi','概率论','Zhang Wei','204',CLR_MATH[0],CLR_MATH[1]),
    c('OOP (Java)','面向对象编程','Xu Hao','KL-3',CLR_DB[0],CLR_DB[1]),
    EMPTY, EMPTY ],
  [ c('Xitoy tili (HSK 4)','汉语综合','Wang Li','303',CLR_LANG[0],CLR_LANG[1]),
    EMPTY,
    c("Ma'lumotlar tuzilmasi lab",'数据结构实验','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    c('Kompyuter arxitekturasi','计算机组成原理','Zhou Lin','208',CLR_OS[0],CLR_OS[1]),
    EMPTY ],
  [ c('Ehtimollar nazariyasi','概率论','Zhang Wei','204',CLR_MATH[0],CLR_MATH[1]),
    c('OOP (Java)','面向对象编程','Xu Hao','KL-3',CLR_DB[0],CLR_DB[1]),
    EMPTY,
    c('Xitoy tili (HSK 4)','汉语综合','Wang Li','303',CLR_LANG[0],CLR_LANG[1]),
    EMPTY ],
  [ c('Kompyuter arxitekturasi','计算机组成原理','Zhou Lin','208',CLR_OS[0],CLR_OS[1]),
    c("Ma'lumotlar tuzilmasi",'数据结构','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    EMPTY,
    c('Jismoniy tarbiya','体育','Liu Peng','Gym',CLR_SPORT[0],CLR_SPORT[1]),
    EMPTY ],
  [ c('OOP lab','面向对象实验','Xu Hao','KL-3',CLR_DB[0],CLR_DB[1]),
    c('Xitoy tili (HSK 4)','汉语综合','Wang Li','303',CLR_LANG[0],CLR_LANG[1]),
    EMPTY, EMPTY, EMPTY ]
];

const Y2S2: CourseSlot[][] = [
  [ c('Algoritm dizayni','算法设计','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    c("Ma'lumotlar bazasi",'数据库原理','Yang Fei','KL-4',CLR_DB[0],CLR_DB[1]),
    c('Kompyuter tarmoqlari','计算机网络','He Jun','209',CLR_NET[0],CLR_NET[1]),
    EMPTY, EMPTY ],
  [ c('Xitoy tili (HSK 4)','汉语综合','Wang Li','303',CLR_LANG[0],CLR_LANG[1]),
    EMPTY,
    c("Ma'lumotlar bazasi lab",'数据库实验','Yang Fei','KL-4',CLR_DB[0],CLR_DB[1]),
    c('Algoritm dizayni','算法设计','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    EMPTY ],
  [ c('Kompyuter tarmoqlari','计算机网络','He Jun','209',CLR_NET[0],CLR_NET[1]),
    c('Linux asoslari','Linux操作系统','Qian Yu','KL-5',CLR_OS[0],CLR_OS[1]),
    EMPTY,
    c('Xitoy tili (HSK 4)','汉语综合','Wang Li','303',CLR_LANG[0],CLR_LANG[1]),
    EMPTY ],
  [ EMPTY,
    c("Ma'lumotlar bazasi",'数据库原理','Yang Fei','KL-4',CLR_DB[0],CLR_DB[1]),
    c('Linux lab','Linux实验','Qian Yu','KL-5',CLR_OS[0],CLR_OS[1]),
    c('Jismoniy tarbiya','体育','Liu Peng','Gym',CLR_SPORT[0],CLR_SPORT[1]),
    EMPTY ],
  [ c('Kompyuter tarmoqlari lab','网络实验','He Jun','KL-6',CLR_NET[0],CLR_NET[1]),
    c('Algoritm dizayni','算法设计','Li Ming','KL-2',CLR_PROG[0],CLR_PROG[1]),
    EMPTY, EMPTY, EMPTY ]
];

/* ══════════════════════════════════════════════════════════
   YEAR 3 — Advanced
══════════════════════════════════════════════════════════ */
const Y3S1: CourseSlot[][] = [
  [ c('Operatsion tizimlar','操作系统','Zhou Lin','210',CLR_OS[0],CLR_OS[1]),
    c('Dasturiy injiniring','软件工程','Xu Hao','305',CLR_SE[0],CLR_SE[1]),
    c('Veb dasturlash','Web开发技术','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    EMPTY, EMPTY ],
  [ EMPTY,
    c('Operatsion tizimlar lab','操作系统实验','Zhou Lin','KL-5',CLR_OS[0],CLR_OS[1]),
    c("Sun'iy intellekt",'人工智能','Prof. Tan','306',CLR_AI[0],CLR_AI[1]),
    c('Veb dasturlash lab','Web开发实验','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    EMPTY ],
  [ c('Dasturiy injiniring','软件工程','Xu Hao','305',CLR_SE[0],CLR_SE[1]),
    EMPTY,
    c('Operatsion tizimlar','操作系统','Zhou Lin','210',CLR_OS[0],CLR_OS[1]),
    EMPTY, EMPTY ],
  [ c("Sun'iy intellekt",'人工智能','Prof. Tan','306',CLR_AI[0],CLR_AI[1]),
    c('Veb dasturlash','Web开发技术','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    EMPTY,
    c('Jismoniy tarbiya','体育','Liu Peng','Gym',CLR_SPORT[0],CLR_SPORT[1]),
    EMPTY ],
  [ c('Dasturiy injiniring lab','软件工程实验','Xu Hao','KL-4',CLR_SE[0],CLR_SE[1]),
    c("Sun'iy intellekt lab",'人工智能实验','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    EMPTY, EMPTY, EMPTY ]
];

const Y3S2: CourseSlot[][] = [
  [ c('Mashina o\'rganish','机器学习','Prof. Tan','306',CLR_AI[0],CLR_AI[1]),
    c('Axborot xavfsizligi','信息安全','Liang Bo','211',CLR_SEC[0],CLR_SEC[1]),
    c('Mobil dasturlash','移动开发','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    EMPTY, EMPTY ],
  [ c('Bulutli hisoblash','云计算','He Jun','KL-6',CLR_NET[0],CLR_NET[1]),
    EMPTY,
    c('Mashina o\'rganish lab','机器学习实验','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    c('Axborot xavfsizligi lab','安全实验','Liang Bo','KL-8',CLR_SEC[0],CLR_SEC[1]),
    EMPTY ],
  [ c('Mobil dasturlash','移动开发','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    c('Bulutli hisoblash','云计算','He Jun','KL-6',CLR_NET[0],CLR_NET[1]),
    EMPTY,
    c('Mashina o\'rganish','机器学习','Prof. Tan','306',CLR_AI[0],CLR_AI[1]),
    EMPTY ],
  [ c('Axborot xavfsizligi','信息安全','Liang Bo','211',CLR_SEC[0],CLR_SEC[1]),
    EMPTY, EMPTY,
    c('Amaliyot (stajirovka)','专业实习','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY ],
  [ c('Mobil dasturlash lab','移动开发实验','Qian Yu','KL-3',CLR_WEB[0],CLR_WEB[1]),
    c('Bulutli hisoblash lab','云计算实验','He Jun','KL-6',CLR_NET[0],CLR_NET[1]),
    EMPTY, EMPTY, EMPTY ]
];

/* ══════════════════════════════════════════════════════════
   YEAR 4 — Thesis & Electives
══════════════════════════════════════════════════════════ */
const Y4S1: CourseSlot[][] = [
  [ c('Katta ma\'lumotlar','大数据技术','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    c('Bitiruv loyihasi','毕业设计','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY, EMPTY ],
  [ c('Chuqur o\'rganish','深度学习','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    EMPTY, EMPTY,
    c('Bitiruv loyihasi','毕业设计','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY ],
  [ EMPTY,
    c('Katta ma\'lumotlar lab','大数据实验','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    c('Bitiruv loyihasi','毕业设计','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY ],
  [ c('Chuqur o\'rganish lab','深度学习实验','Prof. Tan','KL-7',CLR_AI[0],CLR_AI[1]),
    EMPTY, EMPTY, EMPTY, EMPTY ],
  [ EMPTY,
    c('Bitiruv loyihasi','毕业设计','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY, EMPTY ]
];

const Y4S2: CourseSlot[][] = [
  [ c('Bitiruv tezisi','毕业论文','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY, EMPTY, EMPTY ],
  [ EMPTY,
    c('Bitiruv tezisi','毕业论文','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY, EMPTY ],
  [ c('Bitiruv tezisi','毕业论文','Xu Hao','—',CLR_THESIS[0],CLR_THESIS[1]),
    EMPTY, EMPTY, EMPTY, EMPTY ],
  [ EMPTY,
    c('Bitiruv himoyasi','毕业答辩','Xu Hao','Hall',CLR_SE[0],CLR_SE[1]),
    EMPTY, EMPTY, EMPTY ],
  [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ]
];

/* All schedules: [year 0..3][sem 0..1] */
const ALL: CourseSlot[][][][] = [
  [Y1S1, Y1S2], [Y2S1, Y2S2], [Y3S1, Y3S2], [Y4S1, Y4S2]
];

/* ══════════════════════════════════════════════════════════
   Edit Dialog Data
══════════════════════════════════════════════════════════ */
@Component
struct EditDialog {
  @Link showDialog: boolean;
  @State editSubject: string = '';
  @State editSubjectZh: string = '';
  @State editTeacher: string = '';
  @State editRoom: string = '';
  onSave: (subject: string, subjectZh: string, teacher: string, room: string) => void = () => {};
  onClear: () => void = () => {};

  build() {
    if (this.showDialog) {
      Column() {
        Column({ space: 12 }) {
          Text('Darsni tahrirlash')
            .fontSize(16).fontWeight(FontWeight.Bold).fontColor('#111111')

          TextInput({ placeholder: 'Fan nomi (uz)', text: this.editSubject })
            .height(38).fontSize(13).backgroundColor('#F4F4F4').borderRadius(8)
            .onChange((v: string) => { this.editSubject = v; })

          TextInput({ placeholder: '科目名 (zh)', text: this.editSubjectZh })
            .height(38).fontSize(13).backgroundColor('#F4F4F4').borderRadius(8)
            .onChange((v: string) => { this.editSubjectZh = v; })

          TextInput({ placeholder: "O'qituvchi", text: this.editTeacher })
            .height(38).fontSize(13).backgroundColor('#F4F4F4').borderRadius(8)
            .onChange((v: string) => { this.editTeacher = v; })

          TextInput({ placeholder: 'Xona', text: this.editRoom })
            .height(38).fontSize(13).backgroundColor('#F4F4F4').borderRadius(8)
            .onChange((v: string) => { this.editRoom = v; })

          Row({ space: 10 }) {
            Button('Tozalash')
              .fontSize(13).fontColor('#D32F2F').backgroundColor('#FFEBEE')
              .borderRadius(8).layoutWeight(1).height(38)
              .onClick(() => { this.onClear(); this.showDialog = false; })

            Button('Bekor')
              .fontSize(13).fontColor('#666666').backgroundColor('#F5F5F5')
              .borderRadius(8).layoutWeight(1).height(38)
              .onClick(() => { this.showDialog = false; })

            Button('Saqlash')
              .fontSize(13).fontColor(Color.White).backgroundColor('#1565C0')
              .borderRadius(8).layoutWeight(1).height(38)
              .onClick(() => {
                this.onSave(this.editSubject, this.editSubjectZh, this.editTeacher, this.editRoom);
                this.showDialog = false;
              })
          }
        }
        .width('85%')
        .padding(20)
        .backgroundColor(Color.White)
        .borderRadius(16)
        .shadow({ radius: 20, color: '#30000000', offsetY: 4 })
      }
      .width(Const.FULL_PERCENT)
      .height(Const.FULL_PERCENT)
      .backgroundColor('#60000000')
      .justifyContent(FlexAlign.Center)
      .onClick(() => { this.showDialog = false; })
    }
  }
}

/* ══════════════════════════════════════════════════════════
   Main Timetable Component
══════════════════════════════════════════════════════════ */
@Component
export struct Timetable {
  @State selectedDay: number = 0;
  @State selectedYear: number = 0;
  @State selectedSem: number = 0;
  @State isEditMode: boolean = false;
  @State showEditDialog: boolean = false;
  @State editDayIdx: number = 0;
  @State editPeriodIdx: number = 0;

  getSlot(dayIdx: number, periodIdx: number): CourseSlot {
    return ALL[this.selectedYear][this.selectedSem][dayIdx][periodIdx];
  }

  openEditor(dayIdx: number, periodIdx: number): void {
    this.editDayIdx = dayIdx;
    this.editPeriodIdx = periodIdx;
    this.showEditDialog = true;
  }

  @Builder
  SlotRow(periodIdx: number, slot: CourseSlot) {
    Row({ space: 10 }) {
      Column({ space: 1 }) {
        Text(PERIOD_LABELS[periodIdx])
          .fontSize(11)
          .fontColor(slot.isEmpty ? '#CCCCCC' : slot.textColor)
          .fontWeight(FontWeight.Bold)
        Text(PERIOD_TIMES[periodIdx])
          .fontSize(9)
          .fontColor('#AAAAAA')
      }
      .width(68)
      .alignItems(HorizontalAlign.Center)

      Column({ space: 3 }) {
        if (!slot.isEmpty) {
          Text(slot.subject).fontSize(13).fontWeight(FontWeight.Bold).fontColor(slot.textColor)
          Row({ space: 4 }) {
            Text(slot.subjectZh).fontSize(10).fontColor('#888888')
          }
          Row({ space: 6 }) {
            Text(slot.teacher).fontSize(11).fontColor('#999999')
            Text(`· ${slot.room}`).fontSize(11).fontColor('#999999')
          }
        } else {
          Text(this.isEditMode ? '+ Qo\'shish' : '—')
            .fontSize(this.isEditMode ? 12 : 14)
            .fontColor(this.isEditMode ? '#1565C0' : '#CCCCCC')
        }
      }
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)

      if (this.isEditMode && !slot.isEmpty) {
        Text('✎').fontSize(16).fontColor('#1565C0')
      }
    }
    .width(Const.FULL_PERCENT)
    .backgroundColor(this.isEditMode ? (slot.isEmpty ? '#FAFAFA' : slot.color) : slot.color)
    .padding({ left: 12, right: 12, top: 10, bottom: 10 })
    .borderRadius(8)
    .border(this.isEditMode ? { width: 1, color: '#E0E0E0', style: BorderStyle.Dashed } : {})
    .onClick(() => {
      if (this.isEditMode) { this.openEditor(this.selectedDay, periodIdx); }
    })
  }

  build() {
    Stack() {
      Navigation() {
        Column() {
          /* ── Year selector ── */
          Row({ space: 0 }) {
            ForEach([0, 1, 2, 3], (yr: number) => {
              Text(YEAR_LABELS[yr])
                .fontSize(11)
                .fontColor(this.selectedYear === yr ? Color.White : '#555555')
                .fontWeight(FontWeight.Medium)
                .padding({ left: 10, right: 10, top: 5, bottom: 5 })
                .backgroundColor(this.selectedYear === yr ? '#1565C0' : '#EEEEEE')
                .borderRadius(yr === 0 ? { topLeft: 8, bottomLeft: 8 } :
                  yr === 3 ? { topRight: 8, bottomRight: 8 } : 0)
                .onClick(() => { this.selectedYear = yr; })
            }, (i: number) => `yr_${i}`)
          }
          .padding({ left: 14, right: 14, top: 8, bottom: 4 })
          .width(Const.FULL_PERCENT)
          .justifyContent(FlexAlign.Center)

          /* ── Semester + Day header ── */
          Row() {
            Text(DAYS_FULL[this.selectedDay])
              .fontSize(14).fontWeight(FontWeight.Bold).fontColor('#111111').layoutWeight(1)

            Row({ space: 0 }) {
              ForEach([0, 1], (semIdx: number) => {
                Text(`${semIdx + 1}-sem`)
                  .fontSize(11)
                  .fontColor(this.selectedSem === semIdx ? Color.White : '#666666')
                  .fontWeight(FontWeight.Medium)
                  .padding({ left: 9, right: 9, top: 4, bottom: 4 })
                  .backgroundColor(this.selectedSem === semIdx ? '#1565C0' : '#EEEEEE')
                  .borderRadius(semIdx === 0 ?
                    { topLeft: 7, bottomLeft: 7 } : { topRight: 7, bottomRight: 7 })
                  .onClick(() => { this.selectedSem = semIdx; })
              }, (i: number) => `sem_${i}`)
            }
          }
          .width(Const.FULL_PERCENT)
          .padding({ left: 14, right: 14, top: 6, bottom: 4 })

          Text(`${this.selectedYear + 1}-kurs  ${this.selectedSem + 1}-semestr  2025/26`)
            .fontSize(11).fontColor('#AAAAAA')
            .padding({ left: 14, bottom: 6 }).alignSelf(ItemAlign.Start)

          /* ── Day tabs ── */
          Row({ space: 0 }) {
            ForEach([0, 1, 2, 3, 4], (i: number) => {
              Column({ space: 1 }) {
                Text(DAYS_SHORT[i])
                  .fontSize(13)
                  .fontWeight(this.selectedDay === i ? FontWeight.Bold : FontWeight.Normal)
                  .fontColor(this.selectedDay === i ? '#1565C0' : '#555555')
                Column()
                  .width(this.selectedDay === i ? 24 : 0)
                  .height(2).backgroundColor('#1565C0').borderRadius(1)
              }
              .layoutWeight(1).height(42).justifyContent(FlexAlign.Center)
              .onClick(() => { this.selectedDay = i; })
            }, (i: number) => `d_${i}`)
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor(Color.White)
          .shadow({ radius: 2, color: '#10000000', offsetY: 1 })

          /* ── Period list ── */
          Scroll() {
            Column({ space: 0 }) {
              ForEach([0, 1, 2, 3, 4], (i: number) => {
                this.SlotRow(i, this.getSlot(this.selectedDay, i))
              }, (i: number) => `slot_${i}_${this.selectedDay}_${this.selectedSem}_${this.selectedYear}_${this.isEditMode}`)

              Column({ space: 5 }) {
                Text('Eslatma (备注)').fontSize(11).fontWeight(FontWeight.Bold).fontColor('#333333')
                Text('KL = Kompyuter lab  •  Gym = Sport zali').fontSize(11).fontColor('#666666')
                Text("Tahrirlash → yuqoridagi ✎ tugmasini bosing").fontSize(10).fontColor('#999999')
              }
              .width(Const.FULL_PERCENT).backgroundColor('#FAFAFA')
              .padding(12).borderRadius(8)
              .margin({ top: 8, bottom: 24 }).alignItems(HorizontalAlign.Start)
            }
            .padding({ left: 14, right: 14, top: 10 }).width(Const.FULL_PERCENT)
          }
          .layoutWeight(1).edgeEffect(EdgeEffect.Fade)
        }
        .height(Const.FULL_PERCENT).backgroundColor('#F2F4F7')
      }
      .title('Dars Jadvali')
      .titleMode(NavigationTitleMode.Full)
      .hideBackButton(true)
      .hideToolBar(true)
      .backgroundColor('#F2F4F7')
      .menus([{
        value: '',
        icon: this.isEditMode ? '/common/images/ic_line1.png' : '/common/images/ic_line1.png',
        action: () => { this.isEditMode = !this.isEditMode; }
      }])

      /* ── Edit button floating ── */
      Column() {
        Button(this.isEditMode ? 'OK' : 'Edit')
          .fontSize(11)
          .fontColor(Color.White)
          .backgroundColor(this.isEditMode ? '#2E7D32' : '#1565C0')
          .borderRadius(16)
          .width(40)
          .height(32)
          .shadow({ radius: 6, color: '#30000000', offsetY: 2 })
          .onClick(() => { this.isEditMode = !this.isEditMode; })
      }
      .position({ x: '85%', y: 52 })
      .position({ x: '88%', y: 52 })

      /* ── Edit Dialog ── */
      EditDialog({
        showDialog: $showEditDialog,
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
      })
    }
    .width(Const.FULL_PERCENT)
    .height(Const.FULL_PERCENT)
  }
}
