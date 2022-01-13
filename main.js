var body = document.querySelector('html');

var data = `
<head>
    <script>
        var pressedKeys = {};
        setInterval( () => {
            window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
            window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }
        },1)
        function startTimer() {
            
        }
    </script>
</head>

<body style="height: 75%;min-width:500px;">
    <div class = "middle" style="height: 100%; width: 100%; position: relative; display: flex; justify-content: center; align-items: center; text-align: center;">
        <!-- LEFT HAND -->
        <div class="timerHand" style="float: left;">
            <div class = "circle" style="background-color: yellow;margin: 0 auto;border-radius: 100%;text-align:center;position: relative;width: 160px;height:160px;left: -10px;">
                <img src="https://ruwix.com/online-rubiks-stopwatch-timer/images/hand-left.png" alt="left hand" style="position: relative;left: 10px;top: 5px;">
            </div>
        </div>
        <!-- TIMER -->
        <div class="timeWrap">
            <div class="time" style="font-family: Orbitron, sans-serif; display: inline-block;font-size: 50px;margin: 25% 0;">
                <span></span>
                <span>0</span>
                .
                <span>0</span>
                <span>0</span>
            </div>
        </div>
        <!-- RIGHT HAND -->
        <div class="timerHand" style="position:relative; right: 0;">
            <div class = "circle" style="background-color: yellow;margin: 0 auto;border-radius: 100%;text-align:center;position: relative;width: 160px;height:160px;left: 10px;">
                <img src="https://ruwix.com/online-rubiks-stopwatch-timer/images/hand-right.png" alt="left hand" style="position: relative;left: -10px;top: 5px;">
            </div>
        </div>
    </div>
</body>

`;
body.innerHTML = data;
