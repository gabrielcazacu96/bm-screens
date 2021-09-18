import React, { ReactNode } from 'react';
import cx from 'classnames';

import Button from '../Button';
import styles from './index.module.scss';

interface Props {
  children?: ReactNode | string;
  className?: string;
}

const ButtonSubmit: React.FC<Props> = (props) => {
  const { children = 'Submit', className: classNameProp, ...rest } = props;
  const className = cx(styles.root, classNameProp);

  return (
    <Button className={className} type="submit" {...rest}>
      {children}
    </Button>
  );
};

export default ButtonSubmit;
