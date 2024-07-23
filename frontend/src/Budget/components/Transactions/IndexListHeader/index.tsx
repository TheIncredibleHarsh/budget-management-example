import { ReactElement } from "react"
import { HeaderCell, HeaderRow } from "./Styles"

const IndexListHeader = ({columns}:{columns:{name:string, width: number}[]}) => {
    return (
        <>
            <HeaderRow>{generateHeaderCells(columns)}</HeaderRow>
        </>
    )
}

const generateHeaderCells = (columns: {name:string, width: number}[]):ReactElement[]=>{
    let cells = new Array<ReactElement>
    columns.map((column)=>{
        cells.push(<HeaderCell {...{width: `${column.width}`}}>{column.name}</HeaderCell>)
    })

    return cells
}

export default IndexListHeader;