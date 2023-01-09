import SomeThingWrong from "./SomeThingWrong";
import React ,{Fragment} from "react";
export default class Fragments extends React.Component<any,any>{

    render(): React.ReactNode {
        return (
            <Fragment>
                <p>你好</p>
                <p>你好</p>

            </Fragment>
        )
    }
}