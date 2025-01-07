import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, SubmissionPage, CategoryOverviewPage } from './pages/index';
import PageLayout from './layouts/PageLayout';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<PageLayout />}>
					<Route index element={<HomePage />} />
					<Route path='/submission' element={<SubmissionPage />} />
				</Route>
				<Route path='/overview' element={<CategoryOverviewPage />} />
			</Routes>
		</Router>
	);
};

export default App;
