import { FC } from 'react';
import { IPanel } from '../../types';

const Panel: FC<IPanel> = ({children}) => {
  return (
    <div className="border border-2 rounded-3 shadow-sm py-2 px-2">
      {children}
    </div>
  );
};

export default Panel