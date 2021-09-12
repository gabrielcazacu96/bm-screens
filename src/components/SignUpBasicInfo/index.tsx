import React from 'react';
import cx from 'classnames';

import { ScreenLayout } from 'components/common';
import { BasicInfoForm } from './components';
import styles from './index.module.scss';

interface Props {
    className?: string;
    onSignUp?: (values: { firstName: string, lastName: string, company: string, companyRole: string }) => any;
    onLinkedInLogIn?: () => any;
}

const SignUpBasicInfo: React.FC<Props> = (props) => {
    const {
        className: classNameProp,
        onSignUp = (values) => {
            return alert(JSON.stringify(values))
        },
    } = props;
    const className = cx(styles.root, classNameProp);

    return (
        <ScreenLayout
            header='Basic information'
            subHeader='This is a placeholder description of why we need to know this type of information'
            className={className}
        >
            <BasicInfoForm onSubmit={onSignUp}/>
        </ScreenLayout>
    );
};

export default SignUpBasicInfo;
