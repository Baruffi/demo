import axios from 'axios';
import { REACT_APP_API_URL } from '../configs/env';

export interface ICar {
	id?: string;
	veiculo: string;
	marca:
		| 'Volkswagen'
		| 'Ford'
		| 'Chevrolet'
		| 'Honda'
		| 'Nissan'
		| 'Toyota'
		| 'Hyundai'
		| 'Kia';
	ano: number;
	descricao: string;
	vendido: boolean;
	created?: string;
	updated?: string;
}

const serverAPI = axios.create({ baseURL: `${REACT_APP_API_URL}` });

export default serverAPI;
