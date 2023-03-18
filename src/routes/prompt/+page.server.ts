import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }: any) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt') as string;

		const configuration = new Configuration({
			apiKey: OPENAI_API_KEY
		});

		const openai = new OpenAIApi(configuration);

		const DalleResponse = await openai.createImage({
			prompt: prompt,
			n: 1,
			size: '512x512',
			response_format: 'url'
		});

		return {
			success: true,
			url: DalleResponse.data.data[0].url
		};
	}
} satisfies Actions;
