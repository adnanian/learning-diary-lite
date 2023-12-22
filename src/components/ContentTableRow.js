import './ContentTableRow.css';

// Purpose of this component is to make adding tables easier.
function ContentTableRow( {
    rowNumber = 0, 
    propertyName, 
    propertyValue
} ) {
    return (
        <tr>
            {rowNumber > 0 ? <td>{rowNumber}</td> : null}
            <td>{propertyName}</td>
            <td>{propertyValue}</td>
        </tr>
    )
}

export default ContentTableRow;