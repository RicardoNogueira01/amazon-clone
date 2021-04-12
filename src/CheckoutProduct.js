import React from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: 'REMOVE_FROM_BASKET',
			id: id,
		});
	};

	return (
		<div className='checkoutProduct'>
			<img className='checkoutProduct__image' src={image}></img>
			<div className='checkoutProduct__info'>
				<p className='checkoutProduct__title'> {title} </p>
				<p className='checkoutProduct__price'>
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className='checkoutProduct__rating'>
					{/* Creates an empty array for rating and fills it with stars */}
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>:star:</p>
						))}
				</div>
				<button onClick={removeFromBasket}> Remove from basket </button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
