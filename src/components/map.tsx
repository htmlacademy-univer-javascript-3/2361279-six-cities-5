import {MapInfo, useMap} from '../hooks/use-map.tsx';
import {useRef} from 'react';

export type MapProps = {
  mapInfo: MapInfo;
};

export function Map(props: MapProps) {
  const mapElementRef = useRef<HTMLDivElement>(null);
  useMap(mapElementRef, props.mapInfo);

  return (
    <div
      className="cities__map map"
      ref={mapElementRef}
    >
    </div>
  );
}
