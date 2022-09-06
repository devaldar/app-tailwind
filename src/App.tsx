import React from 'react';
import { Navbar } from 'components/Navbar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { PricingPage } from 'pages/PricingPage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Navbar />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/pricing" element={<PricingPage />} />
					</Route>
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</BrowserRouter>

			{/* Exams Include */}
			{/* Services */}
			{/* Some Companies */}
			{/* show screenshots */}
			{/* Reviews */}
			{/* Form */}
			{/* Pricing */}
		</>
	);
};

export default App;
