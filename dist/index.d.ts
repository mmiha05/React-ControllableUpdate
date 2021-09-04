/// <reference types="react" />
declare module "index" {
    import { FC } from "react";
    interface Props {
        locked: boolean;
    }
    const ControllableUpdate: FC<Props>;
    export default ControllableUpdate;
    export { ControllableUpdate };
}
