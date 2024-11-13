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

const currentCustomIcon = L.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export type MapInfo = {
  points: Coordinates[];
  options?: MapOptions;
  activePointIndex?: number | null;
}

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
    for (let i = 0; i < mapInfo.points.length; ++i) {
      const point = mapInfo.points[i];
      const marker = L.marker({
        lat: point.latitude,
        lng: point.longitude
      });
      marker.setIcon(mapInfo.activePointIndex === i ? currentCustomIcon : defaultCustomIcon).addTo(markerLayer);
    }
    return () => void map.remove();
  }, [mapInfo.activePointIndex]);
}