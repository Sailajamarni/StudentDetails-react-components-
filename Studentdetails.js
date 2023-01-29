import React from 'react';
import ReactDOM from 'react-dom/client';

function StudentDetails() {
    const data=[
    {
        "id":"501",
        "name":"Harika",
        "marks":"99"
    },
    {
        "id":"502",
        "name":"Pranathi",
        "marks":"98"
    },
    {
        "id":"503",
        "name":"Bhanu",
        "marks":"97"
    },
    {
        "id":"504",
        "name":"Bindu",
        "marks":"96"
    },
    {
        "id":"505",
        "name":"Bhuvana",
        "marks":"95"
    },
    ]
    const studentList = data.map(
        (element)=>{
            return(
                <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.marks}</td>
                </tr>
            )
        }
    )
    return (
        <div>
            <table border={5}>
                <thead>
                    <tr>
                        <th>StuId</th>
                        <th>StuName</th>
                        <th>StuMarks</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList}
                </tbody>
            </table>
        </div>
    );
}
function App() {
    return(
        <div>
            <h1>Details of Students</h1>
            <div></div>
            <StudentDetails />
        </div>
    );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<StudentDetails/>);
export default StudentDetails;