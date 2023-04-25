import { BibleData } from "@/app/types";
import { NextRequest,NextResponse } from "next/server";

const bibleApiKey = process.env.ESV_API_KEY;

export async function GET(request:NextRequest) {
  const {searchParams } = new URL(request.url)
  const chapterName = searchParams.get("chapterName")
  const chapter = searchParams.get("chapter")
  const verseStart = searchParams.get("verseStart")
  const verseEnd = searchParams.get("verseEnd")


  const res = await fetch(
    `https://api.esv.org/v3/passage/text/?q=${chapterName}+${chapter}:${verseStart}-${verseEnd}`,
    {
      headers: {
        Authorization: `${bibleApiKey}`,
      },
    }
  ); 

  const data:BibleData = await res.json()

  const passages = data.passages

  return NextResponse.json({passages})
}
