import { CommonConstants as Const } from '../common/constants/CommonConstants';

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

@Component
export struct VisaGuide {
  build() {
    Navigation() {
      Scroll() {
        Column({ space: 12 }) {
          Column({ space: 6 }) {
            Text("X1 Viza → Yashash Ruxsatnomasi")
              .fontSize(17)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
            Text("O'zbekistonlik talabalar uchun bosqichma-bosqich qo'llanma")
              .fontSize(12)
              .fontColor('#CCDEFF')
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor('#1565C0')
          .padding({ left: 16, right: 16, top: 16, bottom: 16 })
          .borderRadius(12)
          .alignItems(HorizontalAlign.Start)
          .margin({ top: 12 })

          ForEach(VISA_STEPS, (item: VisaStep) => {
            Row({ space: 14 }) {
              Text(`${item.stepNum}`)
                .width(34)
                .height(34)
                .borderRadius(17)
                .backgroundColor(item.color)
                .fontColor(Color.White)
                .fontSize(15)
                .fontWeight(FontWeight.Bold)
                .textAlign(TextAlign.Center)

              Column({ space: 4 }) {
                Text(item.title)
                  .fontSize(14)
                  .fontWeight(FontWeight.Bold)
                  .fontColor('#111111')
                Text(item.timeframe)
                  .fontSize(11)
                  .fontColor(item.color)
                  .fontWeight(FontWeight.Medium)
                Text(item.description)
                  .fontSize(12)
                  .fontColor('#444444')
                  .margin({ top: 2 })
              }
              .layoutWeight(1)
              .alignItems(HorizontalAlign.Start)
            }
            .width(Const.FULL_PERCENT)
            .backgroundColor(Color.White)
            .padding({ left: 14, right: 14, top: 12, bottom: 12 })
            .borderRadius(10)
            .shadow({ radius: 3, color: '#18000000', offsetY: 1 })
            .alignItems(VerticalAlign.Top)
          }, (item: VisaStep) => `step_${item.stepNum}`)

          Column({ space: 8 }) {
            Text("Yordam va Aloqa")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor('#1565C0')
            Text("Xalqaro talabalar idorasi  (留学生管理处)")
              .fontSize(13)
              .fontColor('#222222')
            Text("XZIT Ma'muriyat binosi, 1-qavat")
              .fontSize(12)
              .fontColor('#555555')
            Text("Ish vaqti:  Du–Ju  08:30–17:00")
              .fontSize(12)
              .fontColor('#555555')
            Text("⚠  Muddatlarni kuzatib boring — jarimalarsiz!")
              .fontSize(12)
              .fontColor('#E65100')
              .fontWeight(FontWeight.Medium)
              .margin({ top: 4 })
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor('#E8F0FE')
          .padding({ left: 14, right: 14, top: 14, bottom: 14 })
          .borderRadius(10)
          .alignItems(HorizontalAlign.Start)
          .margin({ bottom: 24 })
        }
        .padding({ left: 14, right: 14 })
        .width(Const.FULL_PERCENT)
      }
      .width(Const.FULL_PERCENT)
      .height(Const.FULL_PERCENT)
    }
    .title("Viza Qo'llanma")
    .titleMode(NavigationTitleMode.Full)
    .hideBackButton(true)
    .hideToolBar(true)
    .backgroundColor('#F2F4F7')
  }
}
