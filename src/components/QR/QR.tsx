import {useState} from "react";
import {MetaData} from "../MetaData/MetaData.tsx";

interface props {
    url: string;
}
export interface Data {
    url: string;
    width: number;
    height: number;
    date: string;
}
export function Qr(url: props) {
    const [metaData, setMetaData] = useState<Data>()
    return(
        <>
            <img alt={"QR"} src={`https://api.qrserver.com/v1/create-qr-code/?data=${url.url}&size=[100]x[100]`}/>
            <button onClick={() => {setMetaData(
                {
                    url: url.url,
                    width: 100,
                    height: 100,
                    date: Date().toLocaleString()
                })}}>meta data</button>
            {metaData && <MetaData data={metaData}/>}
        </>
    )
}