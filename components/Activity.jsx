"use client";

import { useEffect, useState } from "react";

export default function Activity(activity) {
  const { subject, content, location, date, participants, teacher } = activity;
  const [representative, setRepresentative] = useState({
    name: "",
    studentId: "",
  });
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((flag) => !flag);
  useEffect(() => {
    participants.forEach((userActivity) => {
      if (userActivity.representative) setRepresentative(userActivity.user);
    });
  }, []);

  return (
    <>
      <tr
        className="border-b-2 transition-colors cursor-pointer"
        onClick={handleClick}
      >
        <td className="p-4 text-center align-middle">▼</td>
        <td className="p-4 text-center align-middle font-semibold">
          {subject}
        </td>
        <td className="p-4 text-center align-middle">{location}</td>
        <td className="p-4 text-center align-middle">{date}</td>
        <td className="p-4 text-center align-middle">
          {representative?.studentId} {representative?.name}
        </td>
        <td className="p-4 text-center align-middle">{teacher.name}</td>
      </tr>
      <tr className={toggle ? "border-b-2" : "hidden"}>
        <td colSpan="6" className="bg-gray-100 py-[20px] px-[30px] font-medium">
          <h4 className="text-lg mb-1">활동내용</h4>
          <p className="font-normal">
            {content}
            불확실한 현상을 모형화하기 위해 이산형 및 연속형 확률 변수들의
            특성을 다루며 실험데이터를 이용한 모형의 분석을 위해 기초적인
            통계기법과 가설의 검증 및 단순 회귀분석 기법 등을 다룬다.
          </p>
          <h4 className="text-lg mt-4">참가학생</h4>
          <span className="font-normal">
            {participants
              ?.map(
                (userActivity, index) =>
                  userActivity.user.studentId + " " + userActivity.user.name
              )
              .join(", ")}
          </span>
        </td>
      </tr>
    </>
  );
}
