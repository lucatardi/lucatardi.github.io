import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'tardito.dev ─ developer';
	const description = "Hey 👋 I'm Ben, a developer";

	return {
		title,
		description,
		canonical: `https://tardito.dev/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'tardito.dev',
			url: `https://tardito.dev/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://tardito.dev/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		...props,
	};
}
