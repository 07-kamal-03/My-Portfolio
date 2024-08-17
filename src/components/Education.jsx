import React from 'react'
import '../css/Education.css'

export const Education = ({ theme }) => {
    return (
        <div className={`education-container ${theme}`}>
            <div className='college'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Bachelor's Degree</th>
                    </thead>
                    <tr>
                        <td>College</td>
                        <td>Karpagam college of Engineering</td>
                    </tr>
                    <tr>
                        <td>Degree</td>
                        <td>Bachelor of Engineering</td>
                    </tr>
                    <tr>
                        <td>Field of study</td>
                        <td>Electronis and communication Engineering</td>
                    </tr>
                    <tr>
                        <td>Year of study</td>
                        <td>2020 - 2024</td>
                    </tr>
                    <tr>
                        <td>CGPA</td>
                        <td>8.51</td>
                    </tr>
                </table>

            </div>
            <div className='12th'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Higher Secondary Education</th>
                    </thead>
                    <tr>
                        <td>School</td>
                        <td>Sri Ragavendra matriculation higher secondary school</td>
                    </tr>
                    <tr>
                        <td>Standard</td>
                        <td>12<sup>th</sup></td>
                    </tr>
                    <tr>
                        <td>Field of study</td>
                        <td>Biology/Maths</td>
                    </tr>
                    <tr>
                        <td>Year of study</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <td>Percentage</td>
                        <td>75.16</td>
                    </tr>
                </table>
            </div>
            <div className='10th'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Secondary School Leaving Certificate</th>
                    </thead>
                    <tr>
                        <td>School</td>
                        <td>Sri Ragavendra matriculation higher secondary school</td>
                    </tr>
                    <tr>
                        <td>Standard</td>
                        <td>10<sup>th</sup></td>
                    </tr>
                    <tr>
                        <td>Field of study</td>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>Year of study</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>Percentage</td>
                        <td>85.4</td>
                    </tr>
                </table>
            </div>
            <div className='schooling'>
                <table>
                    <thead>
                        <th colSpan={2} className={`${theme}`}>Schooling</th>
                    </thead>
                    <tr>
                        <td>School</td>
                        <td>Sri Ragavendra matriculation higher secondary school</td>
                    </tr>
                    <tr>
                        <td>Standard</td>
                        <td>upto 9<sup>th</sup></td>
                    </tr>
                    <tr>
                        <td>Field of study</td>
                        <td>English</td>
                    </tr>
                    <tr>
                        <td>Year of study</td>
                        <td>upto 2017</td>
                    </tr>
                    <tr>
                        <td>Percentage</td>
                        <td>90</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
