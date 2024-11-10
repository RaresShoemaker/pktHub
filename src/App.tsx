import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, SubmissionPage } from './pages/index';
import PageLayout from './layouts/PageLayout';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
					<Route path='/' element={<PageLayout />}>
						<Route index element={<HomePage />} />
						<Route path='/submission' element={<SubmissionPage />} />
					</Route>
			</Routes>
		</Router>
	);
};

export default App;
