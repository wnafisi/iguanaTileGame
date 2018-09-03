import React, { Component } from 'react';
import Board from './Board';
import Popup from "reactjs-popup";

import './App.css';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            tileValues: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            randomizedValues: [],
            clickedTile: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tileId){
        this.setState({ clickedTile: tileId });
        this.basicCheck(tileId);
        this.checkForWinner();
    }

    basicCheck(tileId) {
        const random = this.state.randomizedValues
        // console.log("tile clicked is" + tileId, random)
        if (random[0] === 0) {
            const zeroTile = 0;
            const indexOne = 1;
            const indexTwo = 3;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[1] === 0) {
            const zeroTile = 1;
            const indexOne = 0;
            const indexTwo = 2;
            const indexThree = 4;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[2] === 0) {
            const zeroTile = 2;
            const indexOne = 1;
            const indexTwo = 5;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[3] === 0) {
            const zeroTile = 3;
            const indexOne = 0;
            const indexTwo = 4;
            const indexThree = 6;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[4] === 0) {
            const zeroTile = 4;
            const indexOne = 1;
            const indexTwo = 3;
            const indexThree = 5;
            const indexFour = 7;
            this.checkForFour(zeroTile, tileId, indexOne, indexTwo, indexThree, indexFour);
        } else if (random[5] === 0) {
            const zeroTile = 5;
            const indexOne = 2;
            const indexTwo = 4;
            const indexThree = 8;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[6] === 0) {
            const zeroTile = 6;
            const indexOne = 3;
            const indexTwo = 7;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        } else if (random[7] === 0) {
            const zeroTile = 7;
            const indexOne = 6;
            const indexTwo = 4;
            const indexThree = 8;
            this.checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree);
        } else if (random[8] === 0) {
            const zeroTile = 8;
            const indexOne = 5;
            const indexTwo = 7;
            this.checkForTwo(zeroTile, tileId, indexOne, indexTwo);
        }
    }
    checkForTwo(zeroTile, tileId, indexOne, indexTwo){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        }
    }
    checkForThree(zeroTile, tileId, indexOne, indexTwo, indexThree){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexThree){
            this.swapEmptyTileWithTileId(tileId)
        }
    }
    checkForFour(zeroTile, tileId, indexOne, indexTwo, indexThree, indexFour){
        const random = this.state.randomizedValues
        const clickedTileIndex = random.indexOf(tileId);
        const zeroIndex = random.indexOf(0);
        if (zeroIndex === zeroTile && clickedTileIndex === indexOne) {
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexTwo){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexThree){
            this.swapEmptyTileWithTileId(tileId)
        } else if (zeroIndex === zeroTile && clickedTileIndex === indexFour){
            this.swapEmptyTileWithTileId(tileId)
        }
    }

    swapEmptyTileWithTileId(tileId) {
        const random = this.state.randomizedValues
        const index = random.indexOf(tileId);
        const zero = random.indexOf(0);
        if (index !== -1) {
            random[index] = 0;
        }
        if (zero !== -1) {
            random[zero] = tileId
        }
    }   

    checkForWinner(){
        const random = this.state.randomizedValues
        const correct = this.state.tileValues
        let score = 0;
        random.map(eachNum => {
            if (eachNum === random.indexOf(eachNum)) {
                score += 1;
                if (score === 9) {
                    console.log("winner")
                }
            } 
        })
    }

    
   
    componentDidMount() {
        this.shuffleArray()
    }

    shuffleArray() {
        const shuffle = require('shuffle-array')
        const collection = [1, 2, 3, 4, 5, 6, 7, 8];
        // const newArr = shuffle(collection)
        // newArr.unshift(0)
        const newArr = [0, 5, 1, 8, 7, 6, 3, 4, 2]
        console.log(newArr)
        this.setState({ randomizedValues: newArr})
    }


    render() {
    return(
        <div>
            
        <Board 
            tileValues={this.state.randomizedValues}
            handleClick={this.handleClick}
        />

        </div>
    )
    }
}



export default Game;