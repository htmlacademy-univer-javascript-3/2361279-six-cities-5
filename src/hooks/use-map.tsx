import L, {MapOptions} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MutableRefObject, useEffect} from 'react';
import {Coordinates} from '../shared/types/place.ts';

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const defaultCustomIcon = L.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export type MapInfo = { points: Coordinates[]; options?: MapOptions}
export function useMap(mapRef: MutableRefObject<HTMLElement | null>, mapInfo: MapInfo) {
  useEffect(() => {
    const map = L.map(mapRef.current as HTMLElement, mapInfo.options);

    const layer = L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }
    );
    map.addLayer(layer);

    const markerLayer = L.layerGroup().addTo(map);
    for (const p of mapInfo.points) {
      const marker = L.marker({
        lat: p.latitude,
        lng: p.longitude
      });
      marker.setIcon(defaultCustomIcon).addTo(markerLayer);
    }
    return () => void map.remove();
  }, []);
}
