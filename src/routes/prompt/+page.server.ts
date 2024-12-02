import OpenAI from 'openai';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request }: any) => {
		const formData = await request.formData();
		const prompt = formData.get('prompt') as string;
		const model = formData.get('model') as string;
		const mode = formData.get('mode') as string;

		const openai = new OpenAI({
			apiKey: env.OPENAI_API_KEY
		});

		let DalleResponse:
			| OpenAI.Images.ImagesResponse[]
			| OpenAI.Images.ImagesResponse;

		if (model === 'dall-e-2') {
			DalleResponse = await openai.images.generate({
				model: model,
				prompt: prompt,
				n: mode === '1-for-all' ? 1 : 4,
				size: '1024x1024',
				quality: 'standard',
				response_format: 'url'
			});
		} else if (model === 'dall-e-3' && mode === 'lucky-4') {
			// Make 4 requests to DALL-E 3
			const requests = Array(4)
				.fill(0)
				.map(async () => {
					return await openai.images.generate({
						model: model,
						prompt: prompt,
						n: 1,
						size: '1024x1024',
						quality: 'standard',
						response_format: 'url'
					});
				});

			DalleResponse = await Promise.all(requests);
		} else {
			DalleResponse = await openai.images.generate({
				model: model,
				prompt: prompt,
				n: 1,
				size: '1024x1024',
				quality: 'standard',
				response_format: 'url'
			});
		}

		return {
			success: true,
			data: Array.isArray(DalleResponse)
				? DalleResponse.flatMap((response) =>
						response.data.map((img) => img.url)
				  )
				: DalleResponse.data.map((img) => img.url)
		};
	}
} satisfies Actions;
