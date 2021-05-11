import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { MenuItem } from '../menu-item/menu-item.component';

import './directory.styles.scss';

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export const Directory = connect(mapStateToProps)(({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
));
