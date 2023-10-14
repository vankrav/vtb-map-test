import {YMaps, Map, Placemark, GeolocationControl, Button, Polyline} from '@pbe/react-yandex-maps';


const YandexMap = (props) => (
    <YMaps>
        <div>
            <Map width={window.innerWidth} height={window.innerHeight}//это карта
                 defaultState={{ center: [ 55.75, 37.57 ], zoom: 9 }}>
                <Polyline //эта штука отрисовывает линию
                    geometry={props.coordinates}
                    options={{
                        balloonCloseButton: false,
                        strokeColor: "#000",
                        strokeWidth: 4,
                        strokeOpacity: 0.5,
                    }}
                />
            </Map>
        </div>
    </YMaps>
);

export default YandexMap;
