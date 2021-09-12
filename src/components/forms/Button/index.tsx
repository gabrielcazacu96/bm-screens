import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface IconProps {
    className?: string;
}

interface Props {
    className?: string;
    type?: "button" | "submit" | "reset" | undefined;
    icon?: React.FC<IconProps>;
    children?: ReactNode | string;
}

const Button: React.FC<Props> = (props) => {
    const { children, type = 'button', className: classNameProp, icon: Icon, ...rest } = props;
    const withIcon = !!Icon;
    const className = cx(
        styles.root,
        classNameProp,
    );

    return (
        <button
            className={className}
            type={type}
            {...rest}
        >
            <>
                {withIcon && <Icon className={styles.root__icon}/>}
                {children}
            </>

        </button>
    );
};

export default Button;
