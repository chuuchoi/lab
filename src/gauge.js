import $ from "jquery";
import { css } from "@emotion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
const gaugeStyle = css(`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: blue;
  text-align: center;
  color: white;

  
.circle {
  position: relative;
  top: 4.5%;
  left: 4.5%;
  text-align: center;
  width: 91%;
  height: 91%;
  border-radius: 100%;
  background-color: #e6f4f7;
}

.active-border {
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
  background-color: #39b4cc;
  background-image: linear-gradient(91deg, transparent 50%, #a2ecfb 50%),
    linear-gradient(90deg, #a2ecfb 50%, transparent 50%);
}


.prec {
  top: 30px;
  color: black;
  position: relative;
  font-size: 500%;
}
`);

export const Gauge = () => {
  const [deg, setDeg] = useState(20);
  useEffect(() => {
    $(function drawSector() {
      var activeBorder = $("#activeBorder");
      var rotateObj = $("#rotate-me");
      var deg = activeBorder.children().children().text();

      deg = Number(deg.slice(0, -1));

      if (deg <= 180) {
        console.log(deg);
        rotateObj.css("transform", "rotate(" + deg + "deg)");
        activeBorder.css(
          "background-image",
          "linear-gradient(" +
            (90 + deg) +
            "deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)"
        );
      } else {
        activeBorder.css(
          "background-image",
          "linear-gradient(" +
            (deg - 90) +
            "deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)"
        );
        rotateObj.css("transform", `rotate(${deg}deg)`);
      }

      var startDeg = $("#startDeg").attr("class");
      activeBorder.css("transform", "rotate(" + startDeg + "deg)");

      $("#circle").css("transform", "rotate(" + -startDeg + "deg)");
    });

    document.querySelector("body").addEventListener("mousemove", (e) => {
      setDeg(Math.round((e.clientX / visualViewport.width) * 180));
    });
  }, [deg]);

  console.log("===========render=============");

  return (
    <div className="gauge-container" css={gaugeStyle}>
      <div id="activeBorder" className="active-border">
        <div id="circle" className="circle">
          <span className="prec">{deg}&#176;</span>
          <p id="startDeg" className="-90"></p>
        </div>
      </div>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Image
          id="rotate-me"
          className="rotate-me"
          alt="Mountains"
          src="/vercel.svg"
          fill={1}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
