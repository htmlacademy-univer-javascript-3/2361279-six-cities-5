import {MapInfo, useMap} from '../hooks/use-map.tsx';
import {useRef} from 'react';
import {clsx} from 'clsx';

export type MapProps = {
  mapInfo: MapInfo;
  classes?: string;
};

export function Map(props: MapProps) {
  const mapElementRef = useRef<HTMLDivElement>(null);
  useMap(mapElementRef, props.mapInfo);

  return (
    <div
      className={clsx('map', props.classes)}
      ref={mapElementRef}
    >
    </div>
  );
}
