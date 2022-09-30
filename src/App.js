import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Breadcrmb from './components/breadcrumbs/Breadcrmb';
import Rfp from './pages/rfp/Rfp';
function App() {
	return (
		<>
			<Navbar />
			<Breadcrmb />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/rfp" element={<Rfp />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
