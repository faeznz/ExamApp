import React from "react";
import useExamStore from "../../stores/useExamStore";

export default function ExamQuestionGrid() {
  const { soal, currentIndex, setCurrentIndex, jawabanSiswa } = useExamStore();
  // console.log("soal di ExamQuestionGrid:", soal);
  // console.log("jawabanSiswa:", jawabanSiswa);

  return (
    <div>
      <h3 className="text-md font-semibold mb-2">Daftar Soal</h3>
      <div className="grid grid-cols-5 gap-2">
        {soal.map((s, i) => {
          const sudahDijawab = jawabanSiswa[s.id] !== undefined && jawabanSiswa[s.id] !== null;

          let btnClass = "bg-gray-100 hover:bg-gray-200"; // default
          if (currentIndex === i) {
            btnClass = "bg-blue-500 text-white"; // soal aktif
          } else if (sudahDijawab) {
            btnClass = "bg-green-400 text-white hover:bg-green-500"; // sudah dijawab
          }

          return (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(i)}
              className={`w-10 h-10 flex items-center justify-center rounded border ${btnClass}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
