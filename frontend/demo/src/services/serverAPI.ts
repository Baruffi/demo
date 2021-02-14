import axios from 'axios';
import { REACT_APP_API_URL } from '../configs/env';

export enum BrandEnum {
	WOLKSWAGEN,
	FORD,
	CHEVROLET,
	HONDA,
	NISSAN,
}

export interface ICar {
	id: string;
	name: string;
	brand: BrandEnum;
	decade: string;
	sold: boolean;
}

const serverAPI = axios.create({ baseURL: `${REACT_APP_API_URL}/api/v1` });

export default serverAPI;
