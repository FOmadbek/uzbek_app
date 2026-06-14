import { CommonConstants as Const } from '../common/constants/CommonConstants';
import { Map } from '../view/MapComponent';
import { VisaGuide } from '../view/VisaGuideComponent';
import { Timetable } from '../view/TimetableComponent';
import { About } from '../view/AboutComponent';
import { BottomTabsList } from '../viewmodel/BottomTabsModel';

@Entry
@Component
struct MainPage {
  @State @Watch('onIndexChange') bottomTabIndex: number = 0;
  private controller: TabsController = new TabsController();

  @Builder TabBuilder(index: number) {
    Column() {
      Image(this.bottomTabIndex === index
        ? BottomTabsList[index].iconSelected
        : BottomTabsList[index].icon)
        .width(Const.ICON_SIZE)
        .height(Const.ICON_SIZE)
        .objectFit(ImageFit.Contain)

      Text(BottomTabsList[index].text)
        .fontSize($r('app.float.bottom_font_size'))
        .opacity(Const.OPACITY)
        .fontColor(this.bottomTabIndex === index
          ? $r('app.color.bottom_tabs_font_color_selected')
          : $r('app.color.bottom_tabs_font_color'))
    }
    .width(Const.FULL_PERCENT)
    .height(Const.FULL_PERCENT)
    .justifyContent(FlexAlign.Center)
    .border({ width: { top: Const.BORDER_WIDTH }, color: $r('app.color.color_border') })
    .backgroundColor($r('app.color.bottom_tabs_background_color'))
  }

  onIndexChange() {
    this.controller.changeIndex(this.bottomTabIndex);
  }

  pageTransition() {
    PageTransitionEnter({ duration: Const.SHARED_DURATION })
      .slide(SlideEffect.Top)
    PageTransitionExit({ delay: Const.EXIT_DELAY })
      .opacity(0)
  }

  build() {
    Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.End, justifyContent: FlexAlign.End }) {
      Tabs({ barPosition: BarPosition.End, index: 0, controller: this.controller }) {
        TabContent() {
          Map()
        }.tabBar(this.TabBuilder(0))

        TabContent() {
          VisaGuide()
        }.tabBar(this.TabBuilder(1))

        TabContent() {
          Timetable()
        }.tabBar(this.TabBuilder(2))

        TabContent() {
          About()
        }.tabBar(this.TabBuilder(3))
      }
      .width(Const.FULL_PERCENT)
      .height(Const.FULL_PERCENT)
      .vertical(false)
      .scrollable(false)
      .barHeight(Const.BAR_HEIGHT)
      .onChange((index: number) => {
        this.bottomTabIndex = index;
      })
    }
    .width(Const.FULL_PERCENT)
  }
}
