import React, { ReactNode } from 'react';
import cx from 'classnames';

import { IconLinkedIn } from 'components/icons';
import Button from '../Button';
import styles from './index.module.scss';

interface Props {
    children?: ReactNode | string;
    className?: string;
}

const ButtonLinkedIn: React.FC<Props> = (props) => {
    const { children = "Continue with Linkedin", className: classNameProp, ...rest } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <Button
            className={className}
            icon={IconLinkedIn}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default ButtonLinkedIn;
