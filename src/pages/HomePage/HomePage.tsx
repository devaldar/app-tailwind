import React from 'react';
import { Hero } from './components/Hero';
import { Exams } from './components/Exams';
import { Services } from './components/Services';
import { Companies } from './components/Companies';
import { Content } from './components/Content';
import { Interest } from './components/Interest';
import { Footer } from './components/Footer';

export const HomePage = () => {
	return (
		<>
			{/* <Navbar /> */}
			<Hero name="home" />
			<Exams />
			<Services />
			<Companies />
			<Content
				buttonText="Learn More"
				heading="Motivating Dashboard"
				image="/images/dashboard.png"
				onClick={() => {}}
				top={'What sets us apart'}
				paragraphs={[
					'We aim to improve your learning journey by providing you with progress updates. You will be able to see areas you improved on and the ones where you need to put more focus',
					'Create your daily goals, objectives and plan out the journey for your certification',
				]}
			/>
			<Content
				isReverse={true}
				buttonText="Learn More"
				heading="Practice all in one place"
				top={'What you get'}
				image="/images/tests.png"
				onClick={() => {}}
				paragraphs={[
					'We did our best to collect and create the highest quality questions for certification exams. ',
					'You will be able to prepare yourself for a variety of certifications from a single subscription.',
				]}
			/>
			<Interest />

			<Footer />
		</>
	);
};
