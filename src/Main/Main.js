import React, { useState } from 'react'
import './Main.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import deleteIMG from '../images/delete.png'
import deleteIMG2 from '../images/delete2.png'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Modal from 'react-modal';
import ModalScreen from './ModalScreen';
import engineering from '../images/students.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GaugeChart from 'react-gauge-chart'

var number_of_buttons = 0;
let subtitle;
const Main = () => {

    const notify = () => toast.error("Please Provide Credit And Grade For All Courses");

    const [num, setNum] = useState(0);
    const [cgpa, setCgpa] = useState(0);

    //This is a 2D array, every item is a map that contains key, value, and credit_amount
    const [inputArr, setInputArr] = useState([[
        { key: number_of_buttons, value: 'Grade', credit_amount: '' },
        { key: number_of_buttons, value: 'Grade', credit_amount: '' },
        { key: number_of_buttons, value: 'Grade', credit_amount: '' },
        { key: number_of_buttons, value: 'Grade', credit_amount: '' }
    ]
    ]);

    //Options for the Dropdown menu
    const options = [
        'AA', 'BA', 'BB', 'CB', 'CC', 'DC', 'DD', 'F'
    ];


    function gradeToPoint(grade) {
        switch (grade) {
            case 'AA':
                return 4;
            case 'BA':
                return 3.5;
            case 'BB':
                return 3.0;
            case 'CB':
                return 2.5;
            case 'CC':
                return 2.0;
            case 'DC':
                return 1.5;
            case 'DD':
                return 1.0;
            case 'F':
                return 0.0;

        }
    }

    function addCourse(index) {
        let temp = { key: number_of_buttons, value: 'Grade', credit_amount: '' }
        let temp3 = inputArr[index];
        let temp2 = inputArr;
        temp3.push(temp);
        temp2[index] = temp3;
        setInputArr([...temp2]);
    }

    function delete_course(index, index2) {

        setNum(num + 1);
        var temp = inputArr[index];
        temp.splice(index2, 1);
        var temp2 = inputArr;
        temp2[index] = temp;
        setInputArr([...temp2]);

    }

    function calculate() {
        var total_score = 0;
        var total_credit = 0;
        var is_valid = true;
        if(inputArr.length != 0){
        for (let i = 0; i < inputArr.length; i++) {
            for (let j = 0; j < inputArr[i].length; j++) {
                let curr_item = inputArr[i][j]
                if (curr_item.value == 'Grade' || curr_item.credit_amount == '' || isNaN(curr_item.credit_amount)) {
                    is_valid = false;
                }
                var curr_gpa = gradeToPoint(curr_item.value);
                var curr_credit = curr_item.credit_amount;
                total_score += curr_gpa * curr_credit;
                total_credit += curr_credit;
            }
        
            if (is_valid == false)
                break;
        }
    }
    else{
        is_valid = false;
    }
        return [total_score, total_credit, is_valid];
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='Main'>
            <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', paddingLeft: '32px' }}>
                <div>
                    <p style={{
                        marginTop: '8px', fontSize: '32px', textAlign: 'left', marginBottom: '24px', fontWeight: '600', padding: '0px', color: '#0D2451',
                        fontFamily: "Barlow, Helvetica Neue, Helvetica"
                    }}> College GPA Calculator</p>
                    <p style={{ textAlign: 'left', marginRight: '100px', marginTop: '0px', lineHeight: '24px', paddingTop: '0px', color: '#4c4c4c', fontWeight: '500', maxWidth: '700px' }}>Calculate your high school, college and cumulative GPA, check your grades and understand how the GPA scale works.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flexGrow: '1' }}></div>
                    <img src={engineering} style={{ backgroundColor: 'transparent', width: '100%', maxWidth: '420px', height: 'auto', marginRight: '32px' }} />
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    inputArr.map((value, index) => {
                        return (
                            <div style={{ backgroundColor: 'white', padding: '32px', borderBottomColor: '#969595', borderBottomStyle: 'solid', borderBottomWidth: '1px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <label style={{ fontWeight: '600', color: '#4E4E4E', fontSize: '24px', textAlign: 'left' }}> Semester {index + 1}</label>
                                    <button
                                        onClick={() => {
                                            let temp = inputArr;
                                            temp.splice(index, 1);
                                            setInputArr([...inputArr]);
                                        }}
                                        className='deleteImage' style={{ backgroundColor: 'transparent', borderWidth: '0px' }}><img src={deleteIMG2} style={{ width: '20px' }} /></button>
                                </div>
                                {/*,*/}
                                {inputArr[index].map((value2, index2) => {
                                    return (<div style={{ display: 'flex', alignItems: 'center', paddingTop: '24px', }}>
                                        {/*   <label style={{fontSize:'16px'}}>Grade</label>*/}

                                        <input
                                            style={{
                                                borderLeftWidth: '1px', borderTopWidth: '1px', borderBottomWidth: '1px',
                                                borderRightWidth: '0.0px', borderColor: '#CCC', borderStyle: 'solid', height: '30px',
                                                borderRadius: '2px 0px 0px 2px', paddingLeft: '4px'
                                            }}
                                            className="input2"
                                            placeholder="Course Name" />
                                        <input
                                            style={{
                                                borderLeftWidth: '1px', borderTopWidth: '1px', borderBottomWidth: '1px',
                                                borderRightWidth: '0.0px', borderColor: '#CCC', borderStyle: 'solid', height: '30px',
                                                borderRadius: '2px 0px 0px 2px', paddingLeft: '4px'
                                            }}
                                            onChange={(e) => {
                                                let temp = inputArr[index];
                                                temp[index2].credit_amount = parseInt(e.target.value);
                                                let temp2 = inputArr;
                                                temp2[index] = temp;
                                                setInputArr([...temp2]);
                                                console.log(inputArr);
                                            }}

                                            type="number"
                                            placeholder="Credit Amount"
                                            className='creditInput'
                                        ></input>


                                        <Dropdown
                                            value={inputArr[index][index2].value}

                                            onChange={(e) => {
                                                let temp = inputArr[index];
                                                temp[index2].value = e.value;
                                                let temp2 = inputArr;
                                                temp2[index] = temp;
                                                setInputArr([...temp2]);
                                            }}
                                            style={{ borderWidth: '0px' }}
                                            className='Dropdown'
                                            menuClassName='Menu'
                                            placeholderClassName='Placeholder'
                                            controlClassName='Dropdown1'
                                            options={options}
                                            place />
                                        <div style={{ display: 'inline-block' }}>
                                        </div>
                                        {
                                            inputArr[index].length <= 1 ?
                                                <Popup
                                                    trigger={
                                                        <button
                                                            style={{ borderWidth: '0px', borderColor: 'white' }}>
                                                            <img src={deleteIMG} className='logo' style={{ width: '24px', height: '24px', marginLeft: '12px' }} />
                                                        </button>} position="right center">
                                                    <div>Every semester must have at least one course!</div>
                                                </Popup>
                                                :
                                                <button style={{ borderWidth: '0px', backgroundColor: 'white' }} onClick={() => { delete_course(index, index2) }}>
                                                    <img src={deleteIMG} className='logo' style={{ width: '24px', height: '24px', marginLeft: '12px' }} />
                                                </button>
                                        }              </div>
                                    )
                                })} {/*,*/}
                                <div>
                                    <button
                                        className='AddCourseButton'
                                        onClick={() => {
                                            addCourse(index);
                                        }}>
                                        <label className='AddCourseLabel' style={{ color: 'white' }}>Add a course</label>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <div style={{ width: '100%' }}>
                <button onClick={() => {
                    let [total_score, total_credit, is_valid] = calculate();
                    if (is_valid) {
                        let GPA = total_score / total_credit;

                        openModal();
                        setCgpa(GPA.toFixed(2));
                    }
                    else {
                        notify();
                    }
                }}
                    style={{ color: 'white' }}
                    className="AddCourseButton"
                >
                    Calculate
                </button>
                <button
                    style={{ marginTop: '40px', color: 'white', marginLeft: '32px' }}
                    className='AddCourseButton'
                    onClick={() => {
                        let new_item = [
                            { key: number_of_buttons, value: 'Grade', credit_amount: 4 },
                            { key: number_of_buttons, value: 'Grade', credit_amount: 4 },
                            { key: number_of_buttons, value: 'Grade', credit_amount: 4 },
                            { key: number_of_buttons, value: 'Grade', credit_amount: 4 }
                        ]
                        let old_arr = inputArr.slice();
                        old_arr.push(new_item);
                        setInputArr([...old_arr]);

                        console.log(inputArr)
                    }}>Add Semester</button>

            </div>
            <ModalScreen gpa={cgpa} modalIsOpen={modalIsOpen} closeModal={closeModal} afterOpenModal={afterOpenModal} />

            <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={true}
                rtle={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
            />
        </div>

    )


}

export default Main