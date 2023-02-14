

function PDFViewerSelf() {
    return (
        <iframe
            src="http://localhost:8001/DPFjs/web/viewer.html"
            style={{
                width: "100%",
                height: "100%",
                border: 0
            }}
        ></iframe>
    )
}

export default PDFViewerSelf