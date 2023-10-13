import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }: any) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt') as string;

		const openai = new OpenAI({
			apiKey: OPENAI_API_KEY
		});

		const DalleResponse = await openai.images.generate({
			prompt: prompt,
			n: 1,
			size: '1024x1024',
			response_format: 'url'
		});

		return {
			success: true,
			url: DalleResponse.data[0]
		};
	}
} satisfies Actions;
