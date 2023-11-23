import { FC } from 'react';
import { IPanel } from '../../types';

const Panel: FC<IPanel> = ({ children, vhMaxHeight }) => {
  const styleString = 'my-3 border border-2 rounded-3 shadow-sm py-2 px-2';
  const vhMax = ' vh-100 overflow-scroll';
  return (
    <div className={vhMaxHeight ? styleString + vhMax : styleString}>
      {children}
    </div>
  );
};

export default Panel;
