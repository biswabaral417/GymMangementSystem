import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../contexts/mainContext';

export default function Recommendation() {
    const [dietPln, setDietpln] = useState([]);
    const {user}=useContext(MainContext)
    console.log(user)
    useEffect(() => {
        const fetchpln = async () => {
            const res = await fetch('/api/user/recommendations', {
                method: "GET",
                credentials: "include"
            });
            const data = await res.json();
            setDietpln(data);  
        };
        
        fetchpln();  
    }, []);  

    return (
        <>
            {dietPln.map((days, index) => (
                <div key={index}>
                    <h1>{days.day}</h1>
                    {days.meals.map((meal, idx) => (
                        <div key={idx}>
                            <p>Meal: {meal.meal}</p>
                            <p>Protein: {meal.protein}g</p>
                            <p>Carbs: {meal.carbs}g</p>
                            <p>Fat: {meal.fat}g</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
