import React from "react";
import Loader from "react-loader-spinner";
import {LoaderBox} from "./loader.styled";
import {Colors} from "../../constants/UIContstants";

export const LoaderWidget : React.FC = () => {

    return <>
        <LoaderBox>
            <Loader
                type="ThreeDots"
                color={Colors.rose}
                height={100}
                width={100}
            />
        </LoaderBox>

    </>

}