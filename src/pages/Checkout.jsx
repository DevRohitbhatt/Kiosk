import CartItems from '../components/CartItems';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges - discount;

const Checkout = () => {
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	return (
		<div className='p-6'>
			<Link to='/'>
				<img className='w-24' src={logo} alt='Macdonalds' />
			</Link>
			<h1 className='mt-4 text-2xl font-bold text-gray-900 lg:text-3xl'>My Orders</h1>

			<div className='flex flex-col mt-4 md:mt-6 lg:flex-row lg:space-x-6'>
				<main className='lg:w-2/3 divide-y-[1px]'>
					{cartItems.length > 0 ? (
						cartItems.map((i, id) => <CartItems key={id} cartItem={i} />)
					) : (
						<h1>No Items Added</h1>
					)}
				</main>

				<aside className='mt-6 lg:mt-0 lg:w-1/3 p-6 lg:p-10 h-fit border-[1px] shadow-md rounded-2xl'>
					<h2 className='text-xl font-bold text-gray-900'>Summary</h2>
					<div className='mt-6 space-y-3 text-sm '>
						<div className='flex justify-between'>
							<p className='text-gray-600'>Sub Total</p>
							<span className='font-semibold text-[#212b36]'>₹{subTotal}</span>
						</div>
						<div className='flex justify-between'>
							<p className='text-gray-600'>Tax</p>
							<span className='font-semibold text-[#212b36]'>₹{tax}</span>
						</div>
					</div>
					<div className='flex justify-between border-t-[1px] mt-5 pt-4'>
						<p className='text-lg font-medium'>Total</p>
						<span className='font-medium text-lg text-[#ff5630]'>₹{total}</span>
					</div>

					{cartItems.length > 0 && (
						<Link to='/thanks'>
							<button className='w-full py-3 font-bold tracking-wide text-white bg-[#212b36] hover:bg-[#454f5b] rounded-lg mt-10 '>
								Check Out
							</button>
						</Link>
					)}
				</aside>
			</div>
		</div>
	);
};
export default Checkout;
