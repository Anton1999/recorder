import {BASEURL} from "../constants/ApiConstants";

export interface Audio{
    picture ?: string,
    audio ?: string
}

export const getAudio  = async (token : string, id : string ) : Promise<Audio> => {
    let res = await fetch(BASEURL+"audio?id="+id, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+token
        },
    })

    let json = await res.json()



    return {
        audio: json.url,
        picture : json.picture
    }


}