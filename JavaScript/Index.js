
// /*-------------TYPING EFFECT---------------*/
var pos = 0;
var turn = 0;
var data = ['Full-Stack Developer','Software Engineer', 'Financial Analyst','Learning Student'];
var speed = 175;

setTimeout(typeWriter, speed);

function typeWriter() {
  if (pos < data[turn].length) {
    document.getElementById("title").innerHTML += data[turn].charAt(pos);
    // console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
	setTimeout(erase, speed+100);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("title").innerHTML = str;
      pos--;
      setTimeout(erase, speed-100);
    } else {
      turn++;
      if(turn>=data.length) 
        turn=0;
      setTimeout(typeWriter, speed);
    }
}


// /*-------------STOP WATCH---------------*/

function stopWatch () {
	this.startingDate = 0;
	this.endingDate = 0;
	this.status = false;
	Object.defineProperty(this, 'duration', {
		get: function () {
			if (this.startingDate === 0|| this.endingDate===0) {
				throw new Error ('The clock never started or never ended.')
			}
			return (this.endingDate-this.startingDate)/1000;
		}
	})
}
stopWatch.prototype.start = function () {
	if (this.status) {
		throw new Error ('The clock is already ticking.');
	}
	this.status = true;
	this.startingDate = new Date ();
}
stopWatch.prototype.stop = function () {
	if (!this.status) {
		throw new Error ('The clock has already stopped.');
	}
	this.status = false;
	this.endingDate = new Date ();
}
stopWatch.prototype.reset = function () {
	this.startingDate = 0;
	this.endingDate = 0;
	this.status = false;
}

let theClock = new stopWatch()
theClock.start();

function updateTime () {
  let currentDate = new Date();
  let time = Math.floor((currentDate-theClock.startingDate)/10);
  
  let min = Math.floor(time/100/60);
  let sec = Math.floor(time/100);
  let mSec = time %100;

  if ( min < 10) {
      min = '0' + min;
  }
  if ( sec >= 60) {
      sec = sec % 60;
  }
  if ( sec < 10) {
      sec = '0' + sec;
  }
  if ( mSec < 10) {
    mSec = '0' + mSec;
  }
  document.getElementById('stopWatchTimeDisplay').innerHTML
  = `${min}:${sec}:${mSec}`;
}

setInterval(updateTime, 50);



// /*TESTING STUFF ------------------*/
