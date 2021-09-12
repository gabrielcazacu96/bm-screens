import { useField } from 'formik';
import React, { useRef } from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface Props {
    id?: string;
    className?: string;
    name: string;
}

const Checkbox: React.FC<Props> = (props) => {
    const { children, className: classNameProp, ...rest } = props;
    const className = cx(styles.root, classNameProp);
    const inputRef = useRef(null);
    const [ field, meta ] = useField({ ...rest, type: "checkbox" });
    const valueClassName = cx(styles.root__value, {
        [styles.root__error]: meta.touched && meta.error
    });

    const handleClick = () => {
        // @ts-ignore
        return inputRef.current.click();
    }

    return (
        <div className={className}>
            <input ref={inputRef} {...field} {...rest} type="checkbox"/>
            <label htmlFor={rest.name}>
                <span onClick={handleClick} className={valueClassName}>
                    {field.checked ? "Yes" : "No"}
                </span>
                {children}
            </label>
        </div>
    );
};

export default Checkbox;
