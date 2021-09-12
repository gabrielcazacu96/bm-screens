import React from 'react';
import cx from 'classnames';

import Logo from '../Logo';
import styles from './index.module.scss';

interface Props {
    className?: string;
    headerImageSrc?: string;
    header?: string | React.ReactNode;
    subHeader?: string | React.ReactNode;
    footer?: string | React.ReactNode;
    children?: React.ReactNode;
}

const ScreenLayout: React.FC<Props> = (props) => {
    const { className: classNameProp, headerImageSrc, header, subHeader, footer, children } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <div className={className}>
            <div className={styles.root__content}>
                <div className={styles['root__header-wrapper']}>
                    <Logo/>
                    {
                        headerImageSrc && <img src={headerImageSrc} className={styles['root__header-image']} alt="header" />
                    }
                    <div className={styles.root__header}>
                        {header}
                    </div>
                    <div className={styles['root__sub-header']}>
                        {subHeader}
                    </div>
                </div>
                {children}

                <span className={styles.root__footer}>
                    {footer}
                </span>
            </div>
        </div>
    );
};

export default ScreenLayout;
