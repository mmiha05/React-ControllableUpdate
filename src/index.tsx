import React, { FC, ReactNode } from "react";

interface Props {
  locked: boolean;
  children: ReactNode;
}

const ControllableUpdate: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

const Memoed = React.memo(ControllableUpdate, (prev, next) => {
  if (next.locked) {
    return true;
  }

  return next.locked !== prev.locked;
});

export default Memoed;
export { Memoed as ControllableUpdate };
