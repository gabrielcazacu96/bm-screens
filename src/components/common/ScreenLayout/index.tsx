import React from 'react';
import cx from 'classnames';

import Logo from '../Logo';
import styles from './index.module.scss';

interface Props {
    className?: String;
    header?: String | React.ReactNode;
    subHeader?: String | React.ReactNode;
    children?: React.ReactNode;
}

const ScreenLayout: React.FC<Props> = (props) => {
    const { className: classNameProp, header, subHeader, children } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <div className={className}>
            <div className={styles['root__header-wrapper']}>
                <Logo/>
                {header}
                {subHeader}
            </div>
            {children}
        </div>
    );
};

export default ScreenLayout;
