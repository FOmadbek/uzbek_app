import { PositionType } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
/**
 * Landmark location data.
 */
export class PositionItem {
    icon: Resource = { "id": 16777638, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" };
    text: Resource = { "id": 16777299, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" };
    /**
     * Facility Category.
     */
    type: PositionType = PositionType.TRAIN_STATION;
    /**
     * Facility Point Coordinates.
     */
    lngLat: Array<GeoCoordinates> = [];
}
/**
 * Geographical coordinates, longitude and latitude.
 */
export class GeoCoordinates {
    longitude: number = 0;
    latitude: number = 0;
}
/**
 * PixelCoordinates.
 */
export class PixelCoordinates {
    coordinateX: number = 0;
    coordinateY: number = 0;
}
