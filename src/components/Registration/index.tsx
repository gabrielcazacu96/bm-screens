import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { RegistrationForm } from './components';
import { ButtonLinkedIn } from 'components/forms';
import styles from './index.module.scss';

interface Props {
    className?: String;
}

const Registration: React.FC<Props> = ({ className: classNameProp }) => {
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Register'
            className={className}
        >
            <ButtonLinkedIn/>

            <span className={styles.root__or}>or</span>

            <RegistrationForm/>

            <span className={styles.root__footer}>
                Already have an account? <a href="">Login</a>
            </span>
        </ScreenLayout>
    );
};

export default Registration;
