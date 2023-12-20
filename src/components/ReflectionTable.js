import ContentTableRow from "./ContentTableRow";

function ReflectionTable({ reflectionQuestions }) {
    const tableRows = reflectionQuestions.map((reflection, index) => {
        return (
            <ContentTableRow
                key={reflection.id}
                rowNumber={index + 1}
                propertyName={reflection.prompt}
                propertyValue={reflection.type}
            />
        )
    });


    return (
        <div id="reflection-tab">
            <h1>Reflection Questions</h1>
            <table id="reflection-table">
                <thead>
                    <tr>
                        <th className="reflection-table-header">#</th>
                        <th className="reflection-table-header">Prompt</th>
                        <th className="reflection-table-header">Type</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

export default ReflectionTable;