"use client";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Local worker — no CDN, no CSP issues
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

interface PDFViewerProps {
  currentPage: number;
  onLoadSuccess: (numPages: number) => void;
}

export default function PDFViewer({
  currentPage,
  onLoadSuccess,
}: PDFViewerProps) {
  return (
    <div className="flex-1 overflow-y-auto flex justify-center py-6 bg-bg-tertiary">
      <Document
        file="/BROOLYKID_FR.pdf"
        onLoadSuccess={({ numPages }) => onLoadSuccess(numPages)}
        onLoadError={(err) => console.error("PDF error:", err)}
        loading={
          <div className="flex flex-col items-center gap-3 py-20">
            <div className="text-[24px] text-accent animate-pulse">◇</div>
            <p className="text-[11px] text-text-muted tracking-[2px]">
              chargement du livre...
            </p>
          </div>
        }
        className="max-w-[800px] w-full"
      >
        <Page
          pageNumber={currentPage}
          width={760}
          className="shadow-lg mx-auto [&_canvas]:!mx-auto"
          renderTextLayer={true}
          renderAnnotationLayer={true}
        />
      </Document>
    </div>
  );
}
