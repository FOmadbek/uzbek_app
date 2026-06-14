import { BottomTabsItem } from './BottomTabsItem';

export const BottomTabsList: Array<BottomTabsItem> = [
  {
    icon: $r('app.media.ic_home'),
    iconSelected: $r('app.media.ic_home_selected'),
    text: $r('app.string.bottom_text_map')
  },
  {
    icon: $r('app.media.ic_find'),
    iconSelected: $r('app.media.ic_find_selected'),
    text: $r('app.string.bottom_text_zones')
  },
  {
    icon: $r('app.media.ic_drive'),
    iconSelected: $r('app.media.ic_drive_selected'),
    text: $r('app.string.bottom_text_trains')
  },
  {
    icon: $r('app.media.ic_mine'),
    iconSelected: $r('app.media.ic_mine_selected'),
    text: $r('app.string.bottom_text_about')
  }
]
