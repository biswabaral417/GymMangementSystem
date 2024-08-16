let rotationdeg = 0;
const viewHideTodolinks=()=>{
    const todoNav=document.getElementById("todoNav")
    const cvdBtnImg=document.getElementById("todoNavCvd")
    if(todoNav.classList.contains("hidden")){
        rotationdeg += 180;
        cvdBtnImg.style.transform = `rotate(${rotationdeg}deg)`;
        todoNav.classList.remove('hidden')
        todoNav.classList.add('visible')        
    }else{
        rotationdeg +=180;
        cvdBtnImg.style.transform = `rotate(${rotationdeg}deg)`;
        todoNav.classList.remove('visible')
        todoNav.classList.add('hidden')
    }
}
export default viewHideTodolinks