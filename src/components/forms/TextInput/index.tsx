import { useField } from 'formik';
import React, { useRef } from 'react';
import cx from 'classnames';

import styles from './index.module.scss';

interface Props {
  id?: string;
  className?: string;
  placeholder?: string;
  label: string;
  name: string;
  type: string;
}

const TextInput: React.FC<Props> = (props) => {
  const { label, className: classNameProp, ...rest } = props;
  const [field, meta] = useField(rest);
  const inputRef = useRef<HTMLInputElement>(null);

  const className = cx(styles.root, classNameProp, {
    [styles.root__error]: meta.touched && meta.error,
  });

  const handleClick = () => {
    if (inputRef.current) {
      return inputRef.current.focus();
    }
  };

  return (
    <div onClick={handleClick} className={className}>
      <label htmlFor={rest.id || rest.name}>{label}</label>
      <input ref={inputRef} {...field} {...rest} />
    </div>
  );
};

export default TextInput;
