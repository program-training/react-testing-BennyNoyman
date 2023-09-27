import {Data} from "../QR/QR.tsx";
interface Props {
    data: Data
}

export function MetaData(data: Props) {
    return(
        <>
            <h3>width:{data.data.width}</h3>
            <h3>height:{data.data.height}</h3>
            <h3>url:{data.data.url}</h3>
            <h3 data-testid="date">{data.data.date}</h3>
        </>
    )
}