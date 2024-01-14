import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import dineIn from '../assets/eat-in.png';
import takeOut from '../assets/take-out.png';

const Home = () => {
	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen overflow-hidden max-w-screen'>
			<Link to='/'>
				<img className='w-56' src={logo} alt='Macdonalds' />
			</Link>
			<h1 className='text-[#ffcd00] text-3xl mt-5 font-bold'>Where will you be eating today?</h1>
			<div className='flex justify-center mt-10'>
				<div className='block w-[1990px] h-[480px] bg-[#ffcd00] rounded-[50%] absolute top-2/3'></div>
				<Link
					to='menu'
					className='w-36 bg-gray-50 h-32 flex items-center justify-center flex-col space-y-1 shadow-lg rounded-lg border-[1px] hover:scale-110 transform duration-700 hover:bg-white ease-in-out'
				>
					<img className='w-16' src={dineIn} alt='' />
					<span className='text-sm font-bold'>Dine In</span>
				</Link>
				<Link
					to='menu'
					className='w-36 bg-gray-50 h-32 flex items-center justify-center flex-col space-y-1 shadow-lg rounded-lg border-[1px] hover:scale-110 transform duration-700 hover:bg-white ease-in-out ml-10'
				>
					<img className='w-16' src={takeOut} alt='' />
					<span className='text-sm font-bold'>Take Out</span>
				</Link>
			</div>
		</div>
	);
};
export default Home;
