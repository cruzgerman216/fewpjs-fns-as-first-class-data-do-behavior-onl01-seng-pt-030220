/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(str){
  let time = praseInt(str.split(":")[0]);
  if time == 12 {
    return "Good Morning";
  }else if time > 12 && time < 5{
    return "Good Afternoon";
  }else {
    return "Good Evening";
  }

}
