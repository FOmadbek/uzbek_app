import { Timetable } from '../view/TimetableComponent';
import { CommonConstants as Const } from '../common/constants/CommonConstants';

/**
 * Standalone page for the weekly course timetable.
 * Can be navigated to via router or embedded as a tab.
 */
@Entry
@Component
struct TimetablePage {
  build() {
    Column() {
      Timetable()
    }
    .width(Const.FULL_PERCENT)
    .height(Const.FULL_PERCENT)
  }
}
