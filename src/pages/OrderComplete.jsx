import { Link } from 'react-router-dom';
import url from '../assets/thanks2.png';

const OrderComplete = () => {
	return (
		<div className='flex p-6 mt-20'>
			<div className='flex justify-center w-1/2'>
				<img className='w-64' src={url} alt='Thank_You' />
			</div>
			<div className='w-1/2'>
				<h1 className='text-3xl font-bold'>Thanks for your order</h1>
				<p className='mt-6 font-bold'>If you have placed any order you can see in your profile</p>
				<Link to='/'>
					<button className='mt-24 py-3 px-4 font-semibold bg-[#fdd835] rounded-md'>Back to Menu</button>
				</Link>
			</div>
		</div>
	);
};
export default OrderComplete;
