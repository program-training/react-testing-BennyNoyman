import {useState} from "react";
import {Qr} from "../QR/QR.tsx";

export function Url() {
    const [url, setUrl] = useState<string>('');
    const [urlForQr, setUrlForQr] = useState<string>(url);
    return (
        <>
            <input placeholder={"insert url here"} onChange={(event) => setUrl(event.target.value)}/>
            <button data-testid="qr" onClick={() => {setUrlForQr(url)}}>click me</button>
            {urlForQr && <Qr url={urlForQr}/>}
        </>
    )
}