import React from "react";
import Google from '../../assets/play.png'
import Apple from '../../assets/store.png'
import {Banner, BannersContainer} from "./banners.styled";

export const Banners : React.FC = () => {
    return <>
        <BannersContainer>
                <Banner src={Google}/>
        </BannersContainer>
    </>
}