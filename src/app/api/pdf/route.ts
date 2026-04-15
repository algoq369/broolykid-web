import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "BROOLYKID_FR.pdf");
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=BROOLYKID_FR.pdf",
        "X-Frame-Options": "SAMEORIGIN",
        "Content-Security-Policy": "default-src 'self'",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "PDF not found" },
      { status: 404 }
    );
  }
}
