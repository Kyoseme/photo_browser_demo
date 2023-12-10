import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InfoPage } from './pages/InfoPage';
import { GalleryPage } from './pages/GalleryPage';
import { UserPage } from './pages/UserPage';
require('./css/GlobalStyles.css');

function App() {



  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<GalleryPage />} />
					<Route path="img/:id" element={<InfoPage />} />
					<Route path="user/:id" element={<UserPage />} />
				</Routes>
			</BrowserRouter>
    </div>

  );
}

export default App;
