import { CommonConstants as Const } from '../common/constants/CommonConstants';

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

@Component
export struct About {
  build() {
    Navigation() {
      Scroll() {
        Column({ space: 14 }) {
          // University header
          Column({ space: 8 }) {
            Text("XZUT")
              .fontSize(36)
              .fontWeight(FontWeight.Bold)
              .fontColor(Color.White)
            Text("Xuzhou University of Technology")
              .fontSize(14)
              .fontColor('#DDEEFF')
            Text("徐州工程学院")
              .fontSize(18)
              .fontColor('#CCE8FF')
              .fontWeight(FontWeight.Medium)
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor('#0D47A1')
          .padding({ left: 20, right: 20, top: 24, bottom: 24 })
          .alignItems(HorizontalAlign.Center)
          .margin({ top: 0 })

          // University facts
          Column({ space: 0 }) {
            Text("Universitet haqida")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor('#111111')
              .padding({ left: 14, top: 12, bottom: 8 })
            ForEach(UNIVERSITY_FACTS, (item: InfoRow) => {
              Row() {
                Text(item.label)
                  .fontSize(12)
                  .fontColor('#666666')
                  .width(130)
                Text(item.value)
                  .fontSize(13)
                  .fontColor('#111111')
                  .fontWeight(FontWeight.Medium)
                  .layoutWeight(1)
              }
              .width(Const.FULL_PERCENT)
              .padding({ left: 14, right: 14, top: 8, bottom: 8 })
              .border({ width: { top: 0.5 }, color: '#EEEEEE' })
            }, (item: InfoRow) => item.label)
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor(Color.White)
          .borderRadius(10)
          .shadow({ radius: 3, color: '#10000000', offsetY: 1 })

          // Emergency contacts
          Column({ space: 0 }) {
            Text("Muhim telefon raqamlar")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor('#111111')
              .padding({ left: 14, top: 12, bottom: 8 })
            ForEach(CONTACTS, (item: ContactItem) => {
              Row() {
                Column({ space: 2 }) {
                  Text(item.title)
                    .fontSize(13)
                    .fontColor('#111111')
                    .fontWeight(FontWeight.Medium)
                  Text(item.note)
                    .fontSize(11)
                    .fontColor('#888888')
                }
                .layoutWeight(1)
                .alignItems(HorizontalAlign.Start)
                Text(item.phone)
                  .fontSize(15)
                  .fontColor(item.color)
                  .fontWeight(FontWeight.Bold)
              }
              .width(Const.FULL_PERCENT)
              .padding({ left: 14, right: 14, top: 10, bottom: 10 })
              .border({ width: { top: 0.5 }, color: '#EEEEEE' })
            }, (item: ContactItem) => item.title)
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor(Color.White)
          .borderRadius(10)
          .shadow({ radius: 3, color: '#10000000', offsetY: 1 })

          // Useful apps
          Column({ space: 0 }) {
            Text("Foydali ilovalar")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor('#111111')
              .padding({ left: 14, top: 12, bottom: 8 })
            ForEach(USEFUL_APPS, (item: InfoRow) => {
              Row() {
                Text(item.label)
                  .fontSize(13)
                  .fontColor('#111111')
                  .fontWeight(FontWeight.Medium)
                  .width(160)
                Text(item.value)
                  .fontSize(12)
                  .fontColor('#666666')
                  .layoutWeight(1)
              }
              .width(Const.FULL_PERCENT)
              .padding({ left: 14, right: 14, top: 9, bottom: 9 })
              .border({ width: { top: 0.5 }, color: '#EEEEEE' })
            }, (item: InfoRow) => `app_${item.label}`)
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor(Color.White)
          .borderRadius(10)
          .shadow({ radius: 3, color: '#10000000', offsetY: 1 })

          // Campus address
          Column({ space: 6 }) {
            Text("Kampus manzili")
              .fontSize(14)
              .fontWeight(FontWeight.Bold)
              .fontColor('#1565C0')
            Text("Xincheng kampus (新城校区)")
              .fontSize(13)
              .fontColor('#222222')
            Text("Xinyuan Dadao, Yunlong tumani, Xuzhou, Jiangsu, 221111")
              .fontSize(12)
              .fontColor('#555555')
            Text("新园大道, 云龙区, 徐州市, 江苏省")
              .fontSize(12)
              .fontColor('#888888')
          }
          .width(Const.FULL_PERCENT)
          .backgroundColor('#E8F0FE')
          .padding(14)
          .borderRadius(10)
          .alignItems(HorizontalAlign.Start)
          .margin({ bottom: 24 })
        }
        .width(Const.FULL_PERCENT)
      }
      .width(Const.FULL_PERCENT)
      .height(Const.FULL_PERCENT)
    }
    .title("Haqida")
    .titleMode(NavigationTitleMode.Full)
    .hideBackButton(true)
    .hideToolBar(true)
    .backgroundColor('#F2F4F7')
  }
}
