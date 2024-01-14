import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { useEffect, useState } from 'react';

const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subTotal + tax + shippingCharges - discount;

const Menu = () => {
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/products')
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetch('http://localhost:3000/categories')
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<div className='flex p-6'>
				<div>
					<Link to='/'>
						<img className='w-24' src={logo} alt='Macdonalds' />
					</Link>
					<h1 className='text-[#ffcd00] text-3xl font-bold'>
						Hey, <br />
						<span className='font-normal tracking-wider text-gray-500'>what`s up?</span>
					</h1>
					<div className='pr-4 mt-6 space-y-2 overflow-y-auto h-[68%]'>
						{categories.map((i, id) => (
							<CategoryCard key={id} category={i} />
						))}
					</div>
				</div>

				<div className='pl-8'>
					<h1 className='mt-2 text-3xl font-bold tracking-wide text-gray-800 '>All Products</h1>

					<div className='grid grid-cols-2 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-5'>
						{products.map((i, id) => (
							<ProductCard key={id} product={i} />
						))}
					</div>
				</div>
			</div>

			<div className='mt-6 p-4 h-fit border-[1px ] flex items-center fixed bottom-0 right-0 left-0 bg-gray-50 justify-between shadow-md rounded-2xl'>
				<h2 className='text-xl font-bold text-gray-900'>My Orders</h2>
				<div className='flex flex-col gap-4 mt-4 text-sm md:mt-0 sm:flex-row'>
					<div className='flex justify-between text-lg font-semibold'>
						<p className='text-gray-600'>Sub Total:</p>
						<span className='text-[#212b36] ml-1'>₹{subTotal}</span>
					</div>
					<div className='flex justify-between text-lg font-semibold'>
						<p className='text-gray-600'>Tax:</p>
						<span className='font-semibold text-[#212b36] ml-1'>₹{tax}</span>
					</div>
					<div className='flex justify-between text-lg font-medium'>
						<p>Total:</p>
						<span className='text-[#ff5630] ml-2'>₹{total}</span>
					</div>
				</div>
				<Link to='/checkout'>
					<button className='px-4 py-3 font-bold tracking-wide text-white bg-[#212b36] hover:bg-[#454f5b] rounded-lg'>
						Check Out
					</button>
				</Link>
			</div>
		</>
	);
};
export default Menu;
