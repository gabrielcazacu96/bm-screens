import React from 'react';
import cx from 'classnames';

import styles from './index.module.scss'

interface Props {
    className?: string;
}

const Logo: React.FC<Props> = (props) => {
    const { className: classNameProp } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <div className={className}>meteowrite</div>
    );
};

export default Logo;
