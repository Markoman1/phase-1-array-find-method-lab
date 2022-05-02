// code your solution here
function superbowlWin(arrayOfSb) {
    let found = arrayOfSb.find((element) => element.result === "W");
    console.log(found)
    if(found){
    return(found.year)
}
    console.log(found)
}


