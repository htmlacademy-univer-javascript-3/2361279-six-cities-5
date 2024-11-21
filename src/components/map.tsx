import {MapContainer, TileLayer, Marker} from 'react-leaflet';
import L, {MapOptions} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Place} from '../shared/types/place.ts';

export type MapProps = {
  mapInfo: MapInfo;
  classes?: string;
};

export type MapInfo = {
  points: Place[];
  options: MapOptions;
  activePointIndex?: number | null;
}

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map(props: MapProps) {
  return (
    <MapContainer className={props.classes} {...props.mapInfo.options}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
      />
      {
        props.mapInfo.points.map((p) =>
          (
            <Marker icon={props.mapInfo.activePointIndex === p.id ? currentCustomIcon : defaultCustomIcon}
              position={[p.coordinates.latitude, p.coordinates.longitude]}
              key={p.id}
            />
          )
        )
      }
    </MapContainer>
  );
}
