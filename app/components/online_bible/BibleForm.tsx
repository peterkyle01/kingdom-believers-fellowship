"use client";
import { useState } from "react";
import axios from "axios";
import { Passages } from "@/app/types";

const BibleForm = () => {
  const initialPassage: Passages = { passages: [] };
  const [data, setData] = useState(initialPassage);
  const [chapterName, setChapterName] = useState("John");
  const [chapter, setChapter] = useState(3);
  const [verseStart, setVerseStart] = useState(16);
  const [verseEnd, setVerseEnd] = useState(17);

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/online_bible?chapterName=${chapterName}&chapter=${chapter}&verseStart=${verseStart}&verseEnd=${verseEnd}`
      );
      setData(res.data);
    } catch (e:any) {
      alert(e.message)
    }
  };

  return (
    <div className="w-full h-full flex flex-col sm:flex-row">
      <div className="w-full h-1/2 flex flex-col justify-center items-center p-4">
        <label
          htmlFor="chapterName"
          className="text-xl font-roboto tracking-wide">
          ChapterName
        </label>
        <input
          className="bg-yellow-500 rounded-md p-0.5"
          type="text"
          id="chapterName"
          value={chapterName}
          onChange={(e) => setChapterName(e.target.value)}
        />
        <label htmlFor="chapter" className="text-xl font-roboto tracking-wide">
          Chapter
        </label>
        <input
          className="bg-yellow-500 rounded-md p-0.5"
          type="number"
          id="chapter"
          value={chapter}
          onChange={(e) => setChapter(parseInt(e.target.value))}
        />
        <label
          htmlFor="verseStart"
          className="text-xl font-roboto tracking-wide">
          From Verse
        </label>
        <input
          className="bg-yellow-500 rounded-md p-0.5"
          type="number"
          id="chapter"
          value={verseStart}
          onChange={(e) => setVerseStart(parseInt(e.target.value))}
        />
        <label htmlFor="verseEnd" className="text-xl font-roboto tracking-wide">
          To Verse
        </label>
        <input
          className="bg-yellow-500 rounded-md p-0.5"
          type="number"
          id="chapter"
          value={verseEnd}
          onChange={(e) => setVerseEnd(parseInt(e.target.value))}
        />
        <button
          className="w-24 h-8 m-2 bg-gray-500 rounded-md"
          onClick={() => getData()}>
          Search
        </button>
      </div>
      <div className="w-full h-1/2 p-4">
        <h3 className="text-lg">{data && data.passages}</h3>
      </div>
    </div>
  );
};

export default BibleForm;
