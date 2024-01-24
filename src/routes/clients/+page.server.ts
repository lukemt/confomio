import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const clients = [
		{
			name: 'client1'
		},
		{
			name: 'client2 '
		},
		{
			name: String(Math.random())
		}
	];

	if (clients) {
		return { clients };
	}

	error(404, 'Not found');
};
