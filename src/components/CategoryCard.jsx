/* eslint-disable react/prop-types */
const CategoryCard = ({ category }) => {
	const { name, image } = category;

	return (
		<div className='flex flex-col items-center px-6 py-3 bg-gray-100 rounded-md hover:shadow-md w-fit'>
			<img className='w-24 h-24' src={image} alt={name} />
			<span className='mt-1 text-xs font-bold text-gray-700'>{name}</span>
		</div>
	);
};
export default CategoryCard;
