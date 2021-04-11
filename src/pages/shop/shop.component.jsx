import { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview.component';
import { CollectionPage } from '../collection/collection.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});
class ShopPage extends Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		// fetch(
		// 	'https://firestore.googleapis.com/v1/projects/react-ecommerce-db-20806/databases/(default)/documents/collections'
		// )
		// 	.then((response) => response.json())
		// 	.then((collections) => console.log(collections))
		// 	.catch((err) => console.error(err));

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionMap = convertCollectionsSnapshotToMap(snapshot);
				updateCollections(collectionMap);
				this.setState({ loading: false });
			})
			.catch((err) => {
				console.error(err);
			});
	}

	render() {
		const { loading } = this.state;
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(ShopPage);
