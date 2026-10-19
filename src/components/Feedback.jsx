import { useState } from "react";

export const Feedback = () => {
    const [yes, setYes] = useState(0);
    const [no, setNo] = useState(0);

    function handleYes() {
    setYes(yes + 1);
    }

    function handleNo() {
    setNo(no + 1);
    }

    function handleClear() {
    setYes(0);
    setNo(0);
    }

    return (
        <div className="mx-20 mt-2 flex items-center justify-between self-start rounded-xl bg-[#5C4F4A] p-6 text-[#EDE9E6]">
            <div className="flex items-center gap-4">
                <p className="text-2xl">Was this helpful?</p>
                <button className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-xl font-bold" onClick={handleYes}>Yes</button>
                <button className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 text-xl font-bold text-[#5C4F4A]" onClick={handleNo}>No</button>
            </div>
            <div className="flex items-center gap-4">
                <p className="text-2xl">Reset</p>
                <button className="cursor-pointer rounded-lg border-2 border-[#EDE9E6] px-6 py-2 text-xl font-bold" onClick={handleClear}>Clear</button>
            </div>
            <p className="text-2xl">
                <span className="font-bold">{yes} out of {no} found this helpful</span>
            </p>
        </div>
    )
}