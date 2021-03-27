import React from "react";
import styles from "../styles/Pokedex.module.css";
import { useSpring, animated } from "react-spring";

export default function Pokedex(props) {
  return (
    <div className={styles.container}>
      <svg height={props.height} width={props.width} className={styles.pokedex}>
        <g className={styles.pokedexBody}>
          <rect
            className="mainBodyLeft"
            x="0"
            y="0"
            rx="20"
            ry="20"
            height="800"
            width="550"
            fill="rgb(246,0,0)"
            stroke="black"
          />
          <rect
            className="mainBodyRight"
            x="550"
            y="150"
            rx="20"
            ry="20"
            height="650"
            width="530"
            fill="rgb(246,0,0)"
            stroke="black"
          />
          <rect
            className="hingeMain"
            height="670"
            width="20"
            x="530"
            y="130"
            fill="red"
            stroke="black"
          />
          <rect
            className="hingeSmall"
            x="530"
            y="200"
            height="40"
            width="20"
            fill="red"
            stroke="black"
          />
          <rect
            className="hingeSmall"
            x="530"
            y="700"
            height="40"
            width="20"
            fill="red"
            stroke="black"
          />
          <rect
            className="leftHeader"
            x="0"
            y="0"
            height="150"
            stroke="black"
            width="550"
            rx="20"
            ry="20"
            fill="red"
          />
          <rect
            className="leftBodyOutline"
            x="20"
            y="170"
            rx="20"
            ry="20"
            height="590"
            width="490"
            fill="red"
            stroke="black"
          />
          <rect
            className="rightBodyOutline"
            x="570"
            y="170"
            rx="20"
            ry="20"
            height="590"
            width="490"
            fill="red"
            stroke="black"
          />
        </g>
        <g className={styles.pokedexEye}>
          <g stroke="black">
            <circle r="50" cx="60" cy="60" fill="white" />
            <circle r="40" cx="60" cy="60" fill="rgb(178, 220, 235)" />
          </g>
          <circle r="10" cx="50" cy="40" fill="rgb(185, 224, 245)" />
        </g>
        <g className={styles.pokedexSmallEyes}>
          <circle
            r="20"
            cx="160"
            cy="40"
            fill="orange"
            stroke="black"
            stroke-width="2"
          />
          <circle r="5" cx="155" cy="32" fill="rgb(255, 187, 60)" />
          <circle
            r="20"
            cx="210"
            cy="40"
            fill="yellow"
            stroke="black"
            stroke-width="2"
          />
          <circle r="5" cx="205" cy="32" fill="rgb(255, 255, 200)" />
          <circle
            r="20"
            cx="260"
            cy="40"
            fill="limegreen"
            stroke="black"
            stroke-width="2"
          />
          <circle r="5" cx="255" cy="32" fill="rgb(217, 255, 160)" />
        </g>
        <g className="pokedexLeftDisplay">
          <g className="pokedexDisplay">
            <path
              className="whiteBackground"
              d="M40 190 L 490 190 L 490 500 L 100 500 L 40 460 Z"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
            <path
              className={styles.mainDisplay}
              d="M60 220 L 470 220 L 470 440 L 60 440 Z"
              fill="rgb(129, 200, 126)"
              stroke="black"
              stroke-width="2"
            />
            <image
              className={styles.image}
              href={props.imageUrl}
              alt=""
              x="60"
              y="220"
              height="220"
              width="410"
              preserveAspectRatio="xMidYMid meet"
            />
            <circle r="5" cx="265" cy="205" fill="red" stroke="black" />
            <circle r="5" cx="285" cy="205" fill="red" stroke="black" />
            <circle r="15" cx="135" cy="470" fill="red" stroke="black" />
            <circle r="5" cx="132" cy="465" fill="rgb(255, 123, 123)" />
            <path d="M440 460 h 30 h -30 z" stroke="black" stroke-width="2" />
            <path d="M440 465 h 30 h -30 z" stroke="black" stroke-width="2" />
            <path d="M440 470 h 30 h -30 z" stroke="black" stroke-width="2" />
            <path d="M440 475 h 30 h -30 z" stroke="black" stroke-width="2" />
          </g>

          <g className="pokedexLeftButtons">
            <path
              className="dPad"
              d="M350 650 h 40 v 40 h 30 v -40 h 40 v -30 h -40 v -40 h -30 v 40 h -40 v 30 z"
              fill="rgb(80,80,80)"
              stroke="black"
              stroke-width="2"
            />
            <circle
              className="joyStick"
              r="30"
              cx="115"
              cy="550"
              fill="rgb(80,80,80)"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M180 550 h 80 v -5 h -80 v 5 z"
              fill="cornflowerblue"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M280 550 h 80 v -5 h -80 v 5 z"
              fill="orange"
              stroke="black"
              stroke-width="2"
            />
            <path
              className="lowerDisplay"
              d="M80 600 h 220 v 100 h -220 v -100 z"
              fill="#239423"
              stroke="black"
              stroke-width="2"
            />
            <foreignObject x="80" y="600" height="100" width="220">
              <div className={styles.pokemonDetails}>
                <div>
                  Name: <u>{props.name}</u>
                </div>
                <br />
                <div>
                  Type: <u>{props.type}</u>
                </div>
              </div>
            </foreignObject>
          </g>
        </g>
        <g className="pokedexRightDisplay">
          <path
            className="blackDisplay"
            d="M 590 190 h 450 v 200 h -450 z"
            fill="rgb(80,80,80)"
            stroke="black"
            stroke-width="2"
          />
          <path
            className="smallBlackDisplay"
            d="M 590 670 h 200 v 50 h -200 z"
            fill="rgb(80,80,80)"
            stroke="black"
            stroke-width="2"
          />
          <path
            className="smallBlackDisplay"
            d="M 840 670 h 200 v 50 h -200 z"
            fill="rgb(80,80,80)"
            stroke="black"
            stroke-width="2"
          />
          <foreignObject x="840" y="670" width="200" height="50">
            <button className={styles.button} onClick={() => props.submit()}>
              Click to Search
            </button>
          </foreignObject>
          <foreignObject x="590" y="670" width="200" height="50">
            <input
              className={styles.input}
              type="text"
              onChange={(e) => props.setSearchTerm(e)}
              value={props.searchTerm}
              placeholder="PokeSearch"
            />
          </foreignObject>
          <path
            d="M590 420 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M680 420 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M770 420 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M860 420 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M950 420 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M590 480 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M680 480 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M770 480 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M860 480 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M950 480 h 90 v 60 h -90 z"
            fill="lightblue"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M590 580 h 90 v 60 h -90 z"
            fill="whitesmoke"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M680 580 h 90 v 60 h -90 z"
            fill="whitesmoke"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M865 560 h 80 v -10 h -80 z"
            fill="rgb(80,80,80)"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M955 560 h 80 v -10 h -80 z"
            fill="rgb(80,80,80)"
            stroke="black"
            stroke-width="2"
          />
          <circle
            r="10"
            cx="615"
            cy="560"
            fill="rgb(255,100,100)"
            stroke="black"
          />
          <circle
            r="10"
            cx="655"
            cy="560"
            fill="rgb(255,100,100)"
            stroke="black"
          />
          <circle
            r="25"
            cx="995"
            cy="605"
            fill="yellow"
            stroke="black"
            stroke-width="2"
          />
          <circle r="8" cx="990" cy="595" fill="rgb(255,255,255,0.7)" />
        </g>
        <path
          className="pokedexSecondDisplayHighlight"
          d="M660 190 h 40 L 640 390 h -40 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexSecondDisplayHighlight"
          d="M710 190 h 10 L 660 390 h -10 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexSecondDisplayHighlight"
          d="M810 190 h 10 L 760 390 h -10 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexSecondDisplayHighlight"
          d="M890 190 h 40 L 870 390 h -40 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexMainDisplayHighlight"
          d="M160 220 h 40 L 120 440 h -40 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexMainDisplayHighlight"
          d="M210 220 h 10 L 140 440 h -10 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
        <path
          className="pokedexMainDisplayHighlight"
          d="M360 220 h 60 L 340 440 h -60 z"
          fill="rgb(255, 255, 255, 0.2)"
        />
      </svg>
    </div>
  );
}
