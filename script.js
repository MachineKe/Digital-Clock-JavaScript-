// This function 'showTime'displays the current time in the digital clock.
const showTime = () => {
  let date = new Date(); // Create a new Date object using inbuilt date function.
  let h = date.getHours(); //Get the current hour using inbuilt 'getHours()' function : 0 - 23
  let m = date.getMinutes(); //Get the current minute using inbuilt 'getMinutes' function 0 - 59
  let s = date.getSeconds(); //Get the current second using inbuilt 'getSeconds' function 0 - 59
  let session = "AM"; //Set the session to AM by default

  if (h == 0) {
    h = 12;
  }

  //Convert the hour to 12-hour format if it is greater than 12
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  //Append the hour, minute, and second with zeros if they are less than 10
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Creates the time string
  let time = h + ":" + m + ":" + s + " " + session;

  //// Update the text of the digital clock with the current time
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  // Set a timeout to call the showTime function again after 1 second
  setTimeout(showTime, 1000);
};

showTime();
