import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<img
					className='home__image'
					src='https://images-eu.ssl-images-amazon.com/images/G/30/Tagus/Welcome/Bem-vindo/Amazon/es_tagus_launch_gw_hero_1500x600_pt-pt._CB413577042_.png'
					alt='welcome'></img>

				<div className='home__row'>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={2}></Product>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={1}></Product>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={4}></Product>
				</div>

				<div className='home__row'>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={1}></Product>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={3}></Product>
				</div>

				<div className='home__row'>
					<Product
						title='The lean startup'
						price={29.99}
						image='https://m.media-amazon.com/images/I/416hqVrsp4L._AC_SY240_.jpg'
						rating={4}></Product>
				</div>
			</div>
		</div>
	);
}

export default Home;
