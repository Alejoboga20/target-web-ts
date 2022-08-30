import { useContext, useLayoutEffect, useRef } from 'react';
import { Map } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { PlacesContext } from 'context';

export const MapView = () => {
	const { isLoading, userLocation } = useContext(PlacesContext);
	const mapDiv = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (!isLoading) {
			new Map({
				container: mapDiv.current!,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: userLocation,
				zoom: 13,
			});
		}
	}, [isLoading, userLocation]);

	if (isLoading) return <p>Loading...</p>;

	return (
		<div
			ref={mapDiv}
			style={{
				height: '100vh',
			}}
		/>
	);
};
