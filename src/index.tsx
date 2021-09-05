import React, { useRef, FC, ReactNode } from "react";

interface Props {
  locked: boolean;
}

const ControllableUpdate: FC<Props> = ({ locked, children }) => {
  const childrenRef = useRef<ReactNode>(children);
  const lockedRef = useRef<boolean>(locked);

  if (locked !== lockedRef.current) {
    childrenRef.current = children;
    lockedRef.current = locked;
  } else if (!lockedRef.current) {
    childrenRef.current = children;
  }

  return <>{childrenRef.current}</>;
};

export default ControllableUpdate;
export { ControllableUpdate };
