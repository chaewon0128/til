import React from "react";

const students = [
    {
        name: "철수"
    },
    {
        name: "채원"
    },
    {
        name : "근주"
    }

]

export default function AttendanceBook() {
    return(
        <ul>
        {students.map((student,index) => {
           return <li key={index}>{student.name}</li>
        })}
        </ul>
    )
}