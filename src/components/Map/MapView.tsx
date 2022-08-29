import { useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

export const MapView = () => {
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		new Map({
			container: mapDiv.current!,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: undefined,
			zoom: 4,
		});
	}, []);

	return (
		<div
			ref={mapDiv}
			style={{
				height: '100vh',
			}}
		/>
	);
};
