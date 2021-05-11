import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { CollectionPreview } from '../collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const mapStateToProps = createStructuredSelector({
	shopCollections: selectCollectionsForPreview,
});

export const CollectionsOverview = connect(mapStateToProps)(({ shopCollections }) => (
	<div className="collections-overview">
		{shopCollections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview key={id} {...otherCollectionProps} />
		))}
	</div>
));
