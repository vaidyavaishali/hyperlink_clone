import React from 'react'
import './processOfInterview.css'
const ProcessOfInterview = () => {
    return (
        <div id='process-of-interview'>

            <div id='process-of-interview-heading'>
                <h1>
                    Process Of Interview
                </h1>
                <p>
                    Selection of any candidate is purely depended on their performance in the interview process. Generally, there are three stages in the interview process which are as follows.
                </p>

            </div>
            <div id='process-of-interview-HR-interview' className='cursor'>
                <div id='process-of-interview-HR-interview-first-div' className='all-css'>
                    <h1 className='sr-no'>O1</h1>
                    <h1 className='int-round-heading'>HR Interview</h1>
                </div>
                <div id='process-of-interview-HR-interview-second-div' className='all-css all-second'>
                    <h3>HR Interview</h3>
                    <p>During the initial phase, candidates undergo HR screening with questions focused on adaptability, leadership, and growth potential. This process evaluates alignment with company culture and future prospects.</p>
                </div>
            </div>
            <div id='process-of-interview-personal-interview' className='cursor'>
                <div id='process-of-interview-personal-interview-first-div' className='all-css middle'>
                    <h1 className='sr-no'>O2</h1>
                    <h1 className='int-round-heading'>Personal Interview</h1>
                </div>
                <div id='process-of-interview-personal-interview-second-div' className='all-css all-second'>
                    <h3>Personal Interview</h3>
                    <p>
                        <p>
                            During a candidate's personal interview, it's common to ask technical questions related to their area of expertise. This helps evaluate their knowledge, problem-solving skills, and practical abilities, providing valuable insights into their suitability for the role.</p>
                    </p>
                </div>
            </div>
            <div id='process-of-interview-Practical-round' className='cursor'>
                <div id='process-of-interview-Practical-round-first-div' className='all-css'>
                    <h1 className='sr-no'>O3</h1>
                    <h1 className='int-round-heading'>Practical Round</h1>

                </div>
                <div id='process-of-interview-Practical-round-second-div' className='all-css all-second'>
                    <h3>Practical Round</h3>
                    <p>
                        <p>This interview segment constitutes the final stage, requiring candidates to practically execute a program and showcase its output as part of their evaluation.</p>
                    </p>
                </div>
            </div>


        </div>
    )
}

export default ProcessOfInterview
