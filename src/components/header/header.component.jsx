import React from 'react';
import './collection-preview.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
	<div className='collection-item'>

		<div className='image'
			styke={{
				backgroundImage: `url(${imageUrl})`
			}}>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>

		</div>
	</div>
);

export default CollectionItem;