import { useEffect, useRef, FC, ReactNode } from "react";

interface Props {
  locked: boolean;
}

const ControllableUpdate: FC<Props> = ({ locked, children }) => {
  const childrenRef = useRef<ReactNode>(children);
  const lockedRef = useRef<boolean>(locked);

  useEffect(() => {
    if (locked !== lockedRef.current) {
      childrenRef.current = children;
      lockedRef.current = locked;
    }
  }, [children, locked]);

  return <>{childrenRef}</>;
};

export default ControllableUpdate;
export { ControllableUpdate };
