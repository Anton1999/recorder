import React, {useEffect, useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useParams } from 'react-router-dom';
import {Header} from "../../core-ui/Header/header";
import { LoaderWidget} from "../../core-ui/Loader/loader";
import {getAudio, Audio} from "../../repository/audios";
import {AudioBox, AudioBoxAudio, AudioBoxPic, AudiosContainer} from "./audios.styled";
import CSS from 'csstype';
import {Banners} from "../../core-ui/Banners/banners";

const h1Styles: CSS.Properties = {
    width : "100%",
    marginTop : "2vh"
};

export const Audios : React.FC = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [FetchedAudio, setAudio] = useState<Audio>({})

    let audio: string, token: string;
    ({audio, token} = useParams());

    useEffect(()=>{
        var delayInMilliseconds = 2000; //1 second


            getAudio(token,audio ).then((audio) => {
                setAudio(audio);
                setTimeout(function() {
                    setLoading(false);
                    console.log(20000)
                }, delayInMilliseconds);


            })


    },[])

    return <>
        <Header title={"Аудиозапись"}/>
        {loading ? <LoaderWidget/> : <AudiosContainer>
            <AudioBox disabled={loading}>
                <AudioBoxPic src={FetchedAudio.picture}/>
               <AudioBoxAudio >
                   <ReactAudioPlayer
                    src={FetchedAudio.audio}
                    style={h1Styles}
                    autoPlay
                    controls
                    />
               </AudioBoxAudio>
            </AudioBox>
            <Banners/>
        </AudiosContainer>}
    </>
}