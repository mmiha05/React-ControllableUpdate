import React, { ReactNode } from "react";
interface Props {
    locked: boolean;
    children: ReactNode;
}
declare const Memoed: React.NamedExoticComponent<Props>;
export default Memoed;
export { Memoed as ControllableUpdate };
