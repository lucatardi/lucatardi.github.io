import { Icon } from '@iconify/react';
import { Toaster } from 'react-hot-toast';
import { useMedia } from 'react-use';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

import { colors } from '~/lib';
import { Layout } from '~/layouts';
import { Animate, List, Pill } from '~/components';
import { ListActionType, Theme } from '~/types';

import type { GetStaticProps } from 'next';

import type { Courses } from '~/types';

interface CoursesProps {
	courses?: Courses;
}

export const getStaticProps: GetStaticProps<CoursesProps> = async () => {
	const { default: rawCourses } = await import('~/data/courses.json');

	const courses = (rawCourses as Courses).sort((a, b) => {
		const nameA = a.name.toUpperCase();
		const nameB = b.name.toUpperCase();

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	return {
		props: {
			courses,
		},
	};
};

export default function CoursesPage({ courses }: CoursesProps): JSX.Element {
	const { theme } = useTheme();
	const prefersDarkColorScheme = useMedia('(prefers-color-scheme: dark)', false);

	const isDark = useMemo(() => {
		switch (theme) {
			case Theme.SYSTEM:
				return prefersDarkColorScheme ? true : false;
			case Theme.LIGHT:
				return false;
			case Theme.DARK:
				return true;
		}
	}, [prefersDarkColorScheme, theme]);

	return (
		<Layout.Default seo={{ title: 'tardito.dev ─ courses' }}>
			<Toaster
				toastOptions={{
					position: 'bottom-right',
					style: {
						background: isDark ? colors.gray[900] : colors.gray[50],
						borderColor: isDark ? colors.gray[800] : colors.gray[100],
						borderWidth: '2px',
						color: isDark ? colors?.gray[400] : colors?.gray[700],
					},
				}}
			/>
			<div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
				<div className="relative max-w-xl mx-auto">
					<List.Container>
						{courses.map((course, index) => (
							<Animate
								animation={{ y: [50, 0], opacity: [0, 1] }}
								key={index}
								transition={{
									delay: 0.1 * index,
								}}>
								<List.Item
									actions={[
										{
											type: ListActionType.LINK,
											icon: 'feather:external-link',
											label: 'Referral Link',
											href: course.url
										},
									]}
									description={course.description}
									title={course.name}>
										<div className="m-2 mt-0">
										<div className="flex items-center justify-center w-full mt-5 mb-10">
										<Image
											alt={course.name + 'icon'}
											draggable={false}
											height="50"
											src={isDark ? course.iconDark : course.iconLight}
											width="200"
											loading={"lazy"}
										/>
										</div>
											<Pill.Standard className="flex items-center justify-center w-full md:pb-2 bg-primary-500 bg-opacity-15 saturate-200 text-sm text-primary-500 rounded-lg">
												<Icon
													className="mt-0.5 mr-2"
													icon="feather:globe"
												/>
												{course.language}
											</Pill.Standard>
										</div>
								</List.Item>
							</Animate>
						))}
					</List.Container>
				</div>
			</div>
		</Layout.Default>
	);
}
