import { createContext } from 'react';
import { PlacesState } from './PlacesProvider';

export interface PlacesContextProps extends PlacesState {}

export const PlacesContext = createContext({} as PlacesContextProps);
