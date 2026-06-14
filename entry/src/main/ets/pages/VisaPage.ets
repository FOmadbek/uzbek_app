import { VisaGuide } from '../view/VisaGuideComponent';
import { CommonConstants as Const } from '../common/constants/CommonConstants';

/**
 * Standalone page for X1 Visa → Residence Permit guide.
 * Can be navigated to directly or embedded as a tab.
 */
@Entry
@Component
struct VisaPage {
  build() {
    Column() {
      VisaGuide()
    }
    .width(Const.FULL_PERCENT)
    .height(Const.FULL_PERCENT)
  }
}
