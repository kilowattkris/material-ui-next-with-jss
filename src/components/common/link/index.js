import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import styles from './styles';
import injectSheet from 'react-jss';

const YodaLink = ({classes, children, to}) => {
  return (
    <Link className={classes.link} to={to}>{children}</Link>
  );
};

YodaLink.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.object,
  to: PropTypes.string.isRequired
};

export default injectSheet(styles)(YodaLink);
