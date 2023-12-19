import './ContentTableRow.css';

function ContentTableRow( {rowNumber, propertyName, propertyValue} ) {
    return (
        <tr>
            <td>{rowNumber}</td>
            <td>{propertyName}</td>
            <td>{propertyValue}</td>
        </tr>
    )
}

export default ContentTableRow;