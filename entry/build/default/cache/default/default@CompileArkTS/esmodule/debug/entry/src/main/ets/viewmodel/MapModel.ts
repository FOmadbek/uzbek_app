import { AddressItem, Location } from "@normalized:N&&&entry/src/main/ets/viewmodel/AddressItem&";
import type { PositionItem, GeoCoordinates } from './PositionItem';
import { CommonConstants as Const, PositionType } from "@normalized:N&&&entry/src/main/ets/common/constants/CommonConstants&";
import { Geography } from "@normalized:N&&&entry/src/main/ets/common/utils/Geography&";
import MapController from "@normalized:N&&&entry/src/main/ets/controller/MapController&";
/**
 * Initializing Map Data.
 */
export class MapModel {
    private data?: AddressItem;
    private addressArray: Array<AddressItem> = new Array(Const.MAP_LANDMARKS_LENGTH).fill(undefined);
    /**
     * Obtains landmark objects on the map based on the longitude and latitude.
     *
     * @param geoCoordinates Longitude and latitude.
     * @param type Landmark Type.
     * @param mapContext Objects in a map component.
     * @returns Landmark objects in the map.
     */
    calCoordinateByLonAndLat(geoCoordinates: Array<GeoCoordinates>, type: number, mapWidth: number, mapHeight: number): AddressItem {
        this.data = undefined;
        if (!this.addressArray[type - 1]) {
            let addressItem = new AddressItem();
            addressItem.name = mapLandmarksName[type - 1];
            addressItem.icon = mapLandmarksIcon[type - 1];
            addressItem.locations = this.initLocationData(geoCoordinates, mapWidth, mapHeight);
            addressItem.textColor = mapLandmarksTextColor[type - 1];
            this.addressArray[type - 1] = addressItem;
        }
        this.data = this.addressArray[type - 1];
        return this.data;
    }
    /**
     * Initialize the coordinates of landmarks on the map.
     *
     * @param geoCoordinates Longitude and latitude data.
     * @returns Coordinates of landmarks on the map.
     */
    initLocationData(geoCoordinates: Array<GeoCoordinates>, mapWidth: number, mapHeight: number): Array<Location> {
        let locations: Array<Location> = [];
        geoCoordinates.forEach((item: GeoCoordinates) => {
            let pixelCoordinates = Geography.toPixelCoordinates(item.latitude, item.longitude);
            let positionX = pixelCoordinates.coordinateX * mapWidth / MapController.mapMultiples() / Const.MAP_WIDTH;
            let positionY = pixelCoordinates.coordinateY / Const.MAP_HEIGHT * mapHeight / MapController.mapMultiples();
            locations.push(new Location(positionX, positionY));
        });
        return locations;
    }
}
let mapModel = new MapModel();
export default mapModel as MapModel;
export const PositionList: Array<PositionItem> = [
    {
        icon: { "id": 16777638, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777299, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.TRAIN_STATION,
        lngLat: [
            {
                longitude: 113.886514,
                latitude: 22.876813
            }
        ]
    },
    {
        icon: { "id": 16777580, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777292, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.MOTHER_CHILD_ROOM,
        lngLat: [
            {
                longitude: 113.887914,
                latitude: 22.876813
            }
        ]
    },
    {
        icon: { "id": 16777529, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.CAR_ROAD,
        lngLat: [
            {
                longitude: 113.886304,
                latitude: 22.875713
            }
        ]
    },
    {
        icon: { "id": 16777528, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.CAFE,
        lngLat: [
            {
                longitude: 113.886004,
                latitude: 22.878518
            },
            {
                longitude: 113.889137,
                latitude: 22.880663
            }
        ]
    },
    {
        icon: { "id": 16777586, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777297, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.SMOKING_AREA,
        lngLat: [
            {
                longitude: 113.88793,
                latitude: 22.875979
            }
        ]
    },
    {
        icon: { "id": 16777530, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.CONVENIENCE_STORE,
        lngLat: [
            {
                longitude: 113.886104,
                latitude: 22.878618
            }
        ]
    },
    {
        icon: { "id": 16777561, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.GYMNASIUM,
        lngLat: [
            {
                longitude: 113.887592,
                latitude: 22.876602
            }
        ]
    },
    {
        icon: { "id": 16777584, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777294, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.RESTAURANT,
        lngLat: [
            {
                longitude: 113.889261,
                latitude: 22.880244
            }
        ]
    },
    {
        icon: { "id": 16777585, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777295, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.SIDE_WALK,
        lngLat: [
            {
                longitude: 113.886312,
                latitude: 22.876207
            }
        ]
    },
    {
        icon: { "id": 16777565, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        text: { "id": 16777289, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
        type: PositionType.LIBRARY,
        lngLat: [
            {
                longitude: 113.88689,
                latitude: 22.876711
            }
        ]
    }
];
const mapLandmarksName: Array<Resource> = [
    { "id": 16777299, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777292, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777260, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777259, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777297, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777261, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777263, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777294, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777295, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777289, "type": 10003, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" }
];
const mapLandmarksTextColor: Array<Resource> = [
    { "id": 16777341, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777330, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777304, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777303, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777334, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777309, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777313, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777332, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777333, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777329, "type": 10001, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" }
];
const mapLandmarksIcon: Array<Resource> = [
    { "id": 16777576, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777571, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777568, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777567, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777575, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777573, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777569, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777572, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777574, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" },
    { "id": 16777570, "type": 20000, params: [], "bundleName": "com.example.oxhorncampus", "moduleName": "entry" }
];
