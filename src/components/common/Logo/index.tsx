import React from 'react';
import cx from 'classnames';

import logoSvg from 'assets/logo.svg';
import styles from './index.module.scss';

interface Props {
  className?: string;
}

const Logo: React.FC<Props> = (props) => {
  const { className: classNameProp } = props;
  const className = cx(styles.root, classNameProp);

  return <img src={logoSvg} className={className} alt="logo" />;
};

export default Logo;
