import { ReactElement } from "react"
import { ColorIndicator, HeaderCell, HeaderRow, ListRow, RowCell } from "./Styles"
import { IndexItemColumn } from "../../../../shared/types"
import { Transaction } from "../../../../shared/interfaces/Transaction"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const currencySymbols = {
    'INR': '₹'
}

const IndexListHeader = ({columns, data, isLoading}:{columns:IndexItemColumn[], data:Transaction[], isLoading: boolean}) => {
    return (
        <>
            <HeaderRow key={1}>{generateHeaderCells(columns)}</HeaderRow>
            {isLoading ? <Skeleton height={65} count={3}/> : generateRows(data, columns)}
            {/* {generateRows(data, columns)} */}
        </>
    )
}

const generateHeaderCells = (columns: IndexItemColumn[]):ReactElement[]=>{
    let cells = new Array<ReactElement>
    cells.push(<input type="checkbox"  key={1}/>)
    cells.push(<ColorIndicator key={2}></ColorIndicator>)
    columns.map((column)=>{
        cells.push(<HeaderCell {...{width: `${column.width}`}} key={column.key}>{column.name}</HeaderCell>)
    })

    return cells
}

const generateRowCells = (row: Transaction, columns: IndexItemColumn[]) => {
    let cells = new Array<ReactElement>
    cells.push(<input type="checkbox" key={1}/>)
    const color = row.transactionTypeId == 1 ? '#4ade80' : '#f87171'
    cells.push(<ColorIndicator color={color} key={2}></ColorIndicator>)
    let rowPresenter:{[key:string]: any} = {
        id: row.id,
        transactionAmount: `${currencySymbols['INR']}${row.transactionAmount}`,
        paymentMethodId: row.paymentMethod.name,
        transactionDate: new Date(row.transactionDate).toDateString(),
        transactionTypeId: row.transactionType.name,
        transactionVendor: row.transactionVendor,
        transactionCategoryId: row.transactionCategory ? row.transactionCategory.name : "",
        comments: row.comments
    }
    for(let i=0; i < columns.length; i++){
        cells.push(<RowCell key={columns[i].key}>{rowPresenter[columns[i].key]}</RowCell>)
    }
    return cells
}

const generateRows = (data: Transaction[], columns: IndexItemColumn[]) => {
    let rows = new Array<ReactElement>
    data.map((row) => {
        rows.push(<ListRow key={row.id}>{generateRowCells(row, columns)}</ListRow>)
    })
    return rows
}

export default IndexListHeader;