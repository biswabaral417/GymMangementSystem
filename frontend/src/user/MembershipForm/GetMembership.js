import React, { useState } from 'react'

export default function GetMembership() {
  const [memberDetails,setMemberDetails]=useState([])

  const getMembership=()=>{



  }



  return (
    <form>
        <input type="text" id='memberHeight' placeholder='height in cms' value={memberDetails.memberHeight}/>
        <input type="text" id='memberWeight' placeholder='weight in kg'/>
        <input type="text" id='memberTargetWeight' placeholder='target Weight in kgs'/>
        <input type="text" id='memberAge' placeholder='age'/>
        <input type="text" id='memberGender' placeholder='gender'/>
        <select name="activityLevel" id="activityLevel">
            <option value="low"> low </option>
            <option value="mid"> mid </option>
            <option value="high"> high </option>
            <option value="veryhigh">very high</option>
        </select>
        <select name="membership type" id="membership">
            <option value="premium"> premium </option>
            <option value="Standard"> Standard </option>
            <option value="90Days"> 90 Days </option>
            <option value="180Days">180 Days</option>
            <option value="30Daysyoga">30Days yoga</option>
            <option value="freeTrail">3 day free trail</option>
        </select>
        <button onClick={getMembership}>get Membership</button>
    </form>
  )
}
