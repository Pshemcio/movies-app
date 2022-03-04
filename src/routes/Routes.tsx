import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from '../pages/Main';
import Movie from '../pages/Movie';

type Props = {};

const Router = (props: Props) => {
	return (
		<BrowserRouter>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/movie/:id' element={<Movie />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
