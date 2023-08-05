import React from 'react';
import { getMergeSortAnimations, bubbleSort, heapSort } from '../Algorithms/Algorithms.js';
import './visualizer.css';

const Animation_Speed_ms = 1;
const Number_of_array_bars = 310;
const Primary_color = 'pink';
const Secondary_color = 'pink';

export default class Visualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < Number_of_array_bars; i++) {
      array.push(this.randomIntFromInterval(10, 500));
    }
    this.setState({ array });
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? Secondary_color : Primary_color;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * Animation_Speed_ms);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * Animation_Speed_ms);
      }
    }
  }
  
  
  heapSort() {
    const animations = heapSort(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
  
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, isColorChange] = animations[i];
  
      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
  
        setTimeout(() => {
          const color = i % 3 === 0 ? Secondary_color : Primary_color;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * Animation_Speed_ms);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
  
          if (i === animations.length - 1) {
            for (let j = 0; j < arrayBars.length; j++) {
              arrayBars[j].style.backgroundColor = Primary_color;
            }
          }
        }, i * Animation_Speed_ms);
      }
    }
  }
  
  bubbleSort() {
    const animations = bubbleSort(this.state.array);
    const arrayBars = document.getElementsByClassName('array-bar');
  
    for (let i = 0; i < animations.length; i++) {
      const [barOneIdx, barTwoIdx, isColorChange] = animations[i];
  
      if (isColorChange) {
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
  
        setTimeout(() => {
          const color = i % 3 === 0 ? Secondary_color : Primary_color;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * Animation_Speed_ms);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animations[i];
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
  
          if (i === animations.length - 1) {
            for (let j = 0; j < arrayBars.length; j++) {
              arrayBars[j].style.backgroundColor = Primary_color;
            }
          }
        }, i * Animation_Speed_ms);
      }
    }
  }
  
    arraysAreEqual(arrayOne, arrayTwo) {
        if (arrayOne.length !== arrayTwo.length) return false;
        for (let i = 0; i < arrayOne.length; i++) {
          if (arrayOne[i] !== arrayTwo[i]) {
            console.log(arrayOne[i], arrayTwo[i]);
            return false;
          }
        }
        return true;
      }
  
  render() {
    const { array } = this.state;
  
    return (
      <div id="header">
        <div className="array-container">
          <button className="btn btn2" onClick={() => this.resetArray()}>
            Generate New Array
          </button>
          <button className="btn btn2" onClick={() => this.mergeSort()}>
            Merge Sort
          </button>
          <button className="btn btn2" onClick={() => this.heapSort()}>
            Heap Sort
          </button>
          <button className="btn btn2" onClick={() => this.bubbleSort()}>
            Bubble Sort
          </button>
        </div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    );
  } }