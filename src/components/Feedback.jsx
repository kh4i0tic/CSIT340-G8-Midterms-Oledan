import { useState } from "react";
import { StatCard } from "./StatCard";

export const Feedback = () => {
    const [read, setRead] = useState(0);
    const [bookmarks, setBookmarks] = useState(0);

    function handleRead() {
    setRead(read + 1);
    }

    function handleBookmark() {
    setBookmarks(bookmarks + 1);
    }

    function handleReset() {
    setRead(0);
    setBookmarks(0);
    }

    return (
        <div className="flex items-end justify-between px-20 pt-10">
            <div className="mt-6 flex gap-4">
                <header>Was this helpful?</header>
                <button
                className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
                onClick={handleRead}
                >
                Yes
                </button>
                <button
                className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
                onClick={handleBookmark}
                >
                No
                </button>
                <button
                className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
                onClick={handleReset}
                >
                Reset
                </button>
            </div>

            <div className="flex gap-6">
                <StatCard value={read} label="Yes" />
                <StatCard value={bookmarks} label="No" />
            </div>
        </div>

    )
}