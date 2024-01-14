import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	const { category, name, image } = product;
	const [isTick, setIsTick] = useState(false);

	const addToCartHandler = (product, qty) => {
		if (!isTick) {
			setIsTick(!isTick);
			dispatch(addToCart({ ...product, qty }));
		} else {
			setIsTick(!isTick);
			removeFromCart(product);
		}
	};

	return (
		<div
			className='relative p-4 duration-200 ease-in-out transform bg-gray-100 rounded-lg cursor-pointer w-fit hover:shadow-lg'
			onClick={() => addToCartHandler(product, 1)}
		>
			<TiTick className={`absolute text-4xl text-green-500 right-1 top-1 ${isTick ? 'block' : 'hidden'}`} />

			<img className='w-48' src={image} alt={name} />
			<span className='text-xs font-medium text-gray-400'>{category}</span>
			<h4 className='font-medium text-gray-700'>{name}</h4>
		</div>
	);
};
export default ProductCard;
