import webview from '@ohos.web.webview';
import { CommonConstants as Const } from '../common/constants/CommonConstants';

class CampusBuilding {
  id: number = 0;
  uz: string = '';
  zh: string = '';
  info: string = '';
  color: string = '#1565C0';
  icon: string = '';
}

interface MapJsHandler {
  onMarkerClick: (json: string) => void;
}

const XZIT_BUILDINGS: CampusBuilding[] = [
  {
    id: 0, uz: 'Kutubxona', zh: '逸夫图书馆',
    info: '08:00 – 22:00', color: '#1565C0', icon: '📚'
  },
  {
    id: 1, uz: 'Talabalar yotoqxonasi', zh: '留学生公寓',
    info: '24/7 · Wi-Fi · Lift', color: '#6A1B9A', icon: '🏠'
  },
  {
    id: 2, uz: '1-o\'quv binosi', zh: '1号教学楼',
    info: 'Darslar: 08:00 – 21:40', color: '#E65100', icon: '①'
  },
  {
    id: 3, uz: '2-oshxona', zh: '第二餐厅',
    info: '07:00 – 19:30 · Halol', color: '#EF6C00', icon: '🍜'
  },
  {
    id: 4, uz: '3-oshxona', zh: '第三餐厅',
    info: '07:00 – 19:30 · Halol', color: '#F57C00', icon: '🍜'
  },
  {
    id: 5, uz: '4-oshxona', zh: '第四餐厅',
    info: '07:00 – 19:30 · Halol', color: '#FB8C00', icon: '🍜'
  },
  {
    id: 6, uz: '1-oshxona', zh: '1号食堂',
    info: '07:00 – 19:30 · Halol', color: '#2E7D32', icon: '🍜'
  },
  {
    id: 7, uz: 'Sport binosi', zh: '体育馆',
    info: '07:00 – 22:00 · Bepul', color: '#00695C', icon: '🏀'
  },
  {
    id: 8, uz: 'Shifoxona', zh: '校医院',
    info: 'Du–Ju 08:00 – 17:00', color: '#D32F2F', icon: '🏥'
  },
  {
    id: 9, uz: 'Moliya bo\'limi', zh: '财务处',
    info: 'To\'lov va yotoqxona to\'lovi', color: '#5D4037', icon: '💰'
  },
  {
    id: 10, uz: 'Viza idorasi', zh: '出入境管理处',
    info: 'Du–Ju 09:00 – 17:00', color: '#1A237E', icon: '🛂'
  }
];

@Component
struct BuildingCard {
  building: CampusBuilding = new CampusBuilding();
  onSelect: () => void = () => {};

  build() {
    Row({ space: 12 }) {
      Text(this.building.icon)
        .width(38)
        .height(38)
        .borderRadius(19)
        .backgroundColor(this.building.color)
        .fontColor(Color.White)
        .fontSize(16)
        .textAlign(TextAlign.Center)
        .flexShrink(0)

      Column({ space: 2 }) {
        Row({ space: 6 }) {
          Text(this.building.uz)
            .fontSize(13)
            .fontWeight(FontWeight.Bold)
            .fontColor('#111111')
            .layoutWeight(1)
            .maxLines(1)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
        }
        Row({ space: 4 }) {
          Text(this.building.zh)
            .fontSize(11)
            .fontColor('#777777')
          Text('·')
            .fontSize(11)
            .fontColor('#CCCCCC')
          Text(this.building.info)
            .fontSize(11)
            .fontColor('#999999')
            .layoutWeight(1)
            .maxLines(1)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
        }
      }
      .layoutWeight(1)
      .alignItems(HorizontalAlign.Start)

      Text('›')
        .fontSize(20)
        .fontColor('#CCCCCC')
        .fontWeight(FontWeight.Lighter)
    }
    .width(Const.FULL_PERCENT)
    .padding({ left: 14, right: 14, top: 10, bottom: 10 })
    .border({ width: { bottom: 0.5 }, color: '#F2F2F2' })
    .onClick(() => { this.onSelect(); })
  }
}

@Component
export struct Map {
  private webviewCtrl: webview.WebviewController = new webview.WebviewController();
  @State isPanelOpen: boolean = true;
  @State searchText: string = '';
  @State displayList: CampusBuilding[] = XZIT_BUILDINGS;

  private readonly jsHandler: MapJsHandler = {
    onMarkerClick: (json: string): void => {
      try {
        let info = JSON.parse(json) as Record<string, string | number>;
        let id = info['id'] as number;
        console.info(`[XZIT] Marker clicked: id=${id}, uz=${info['uz']}`);
      } catch (_) {}
    }
  };

  filterList(query: string): void {
    let q = query.trim().toLowerCase();
    if (q === '') {
      this.displayList = XZIT_BUILDINGS;
    } else {
      this.displayList = XZIT_BUILDINGS.filter((b: CampusBuilding) =>
        b.uz.toLowerCase().indexOf(q) !== -1 ||
        b.zh.indexOf(query) !== -1
      );
    }
  }

  focusOnBuilding(id: number): void {
    this.webviewCtrl
      .runJavaScript(`focusBuilding(${id})`)
      .catch(() => {});
    this.isPanelOpen = false;
  }

  build() {
    Stack({ alignContent: Alignment.Bottom }) {

      Web({ src: $rawfile('xzit_map.html'), controller: this.webviewCtrl })
        .width(Const.FULL_PERCENT)
        .height(Const.FULL_PERCENT)
        .javaScriptAccess(true)
        .javaScriptProxy({
          object: this.jsHandler,
          name: 'xzit',
          methodList: ['onMarkerClick'],
          controller: this.webviewCtrl
        })
        .domStorageAccess(true)
        .onPageEnd((event: OnPageEndEvent) => {
          console.info(`[XZIT] map page loaded: ${event.url}`);
          this.displayList = XZIT_BUILDINGS;
        })

      Column() {
        Row() {
          Column()
            .width(36).height(4)
            .borderRadius(2)
            .backgroundColor('#CCCCCC')
        }
        .width(Const.FULL_PERCENT)
        .height(28)
        .justifyContent(FlexAlign.Center)
        .backgroundColor('#FFFFFF')
        .borderRadius({ topLeft: 16, topRight: 16 })
        .onClick(() => { this.isPanelOpen = !this.isPanelOpen; })

        if (this.isPanelOpen) {
          Row() {
            TextInput({
              placeholder: 'Bino qidirish\u2026 (uz / zh)',
              text: this.searchText
            })
              .layoutWeight(1)
              .height(38)
              .fontSize(13)
              .placeholderColor('#AAAAAA')
              .backgroundColor('#F4F4F4')
              .borderRadius(10)
              .padding({ left: 10, right: 10 })
              .onChange((val: string) => {
                this.searchText = val;
                this.filterList(val);
              })
          }
          .padding({ left: 14, right: 14, top: 4, bottom: 4 })
          .backgroundColor('#FFFFFF')

          List() {
            ForEach(this.displayList, (item: CampusBuilding) => {
              ListItem() {
                BuildingCard({
                  building: item,
                  onSelect: () => { this.focusOnBuilding(item.id); }
                })
              }
            }, (item: CampusBuilding) => `bldg_${item.id}`)
          }
          .backgroundColor('#FFFFFF')
          .height(230)
          .edgeEffect(EdgeEffect.Spring)
          .scrollBar(BarState.Off)
        }
      }
      .width(Const.FULL_PERCENT)
      .backgroundColor('#FFFFFF')
      .shadow({ radius: 14, color: '#20000000', offsetY: -3 })
    }
    .width(Const.FULL_PERCENT)
    .height(Const.FULL_PERCENT)
  }
}
