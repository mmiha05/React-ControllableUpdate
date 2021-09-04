import React, { useState, useEffect, useMemo } from "react";

const ControllableUpdate: React.FC = (props: any) => {
  const [shouldUpdateState, setShouldUpdateState] = useState(
    props.shouldUpdate
  );
  useEffect(() => {
    if (props.shouldUpdate === true) {
      setShouldUpdateState(!shouldUpdateState);
    }
  }, [props.children]);

  const Component = useMemo(
    () => props.children,
    [shouldUpdateState, props.shouldUpdate]
  );
  return Component;
};

export default ControllableUpdate;
export { ControllableUpdate };
