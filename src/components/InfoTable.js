import ContentTableRow from "./ContentTableRow";

function InfoTable({ notebook }) {
    return (
        <div id="info-tab">
            <h1>Notebook #{!notebook ? "" : notebook.id}</h1>
            <table id="info-table">
                <tbody>
                    <ContentTableRow
                        propertyName="Title"
                        propertyValue={!notebook ? "" : notebook.title}
                    />
                    <ContentTableRow
                        propertyName="Author"
                        propertyValue={!notebook ? "" : notebook.author}
                    />
                    <ContentTableRow
                        propertyName="Year"
                        propertyValue={!notebook ? "" : notebook.year}
                    />
                    <ContentTableRow
                        propertyName="Content Type"
                        propertyValue={!notebook ? "" : notebook.type}
                    />
                    <ContentTableRow
                        propertyName="Length"
                        propertyValue={!notebook ? "" : notebook.length}
                    />
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;