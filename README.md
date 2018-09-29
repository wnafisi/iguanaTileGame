# Iguana Tile Game
A take on the classic image tile game. Move the tiles around the board by clicking on tiles directly adjacent to the white space...

here's a link to the current app, (deployed on Heroku): [Iguana Tile Game](https://desolate-beyond-10749.herokuapp.com/)

## Motivation
Playing with images, a form of collage, has always been a stimulating activity for me. Sharing this experience, allowing users to play a game that involves collage so heavily, reorients their sense of recognition. Although the game has a "correct" outcome where the image comes together cohesively, I intend on building this image-tile game out: adding new features depending on various image-tile combinations. For instance, what happens when the iguana's head ends up on the human's body? 

## Contribute
Hi there, I am a beginning developer and am looking to learn and grow as much as I can. Please feel free to submit issues and pull requests that improve the app in any way, and that will teach me how different developers approach features in web-based applications. Thanks and I look forward to engaging with the community!

## Code style
This project uses AirBnB Javascript.

## Tech/framework used
Built with React.

## Code Example
Below is a snippet from './Game.jsx':

```
swapEmptyTileWithTileId(tileId) {
        const random = this.state.randomizedValues
        const index = random.indexOf(tileId);
        const zero = random.indexOf(0);
        const imgTiles = document.querySelectorAll(".board img")
        const indexImg = imgTiles[index]
        const self = this

        indexImg.addEventListener('animationend', function() {
            self.removeClasses(tileId);
        });
        
        if (zero === 0 && index === 1 
            || zero === 1 && index === 2
            || zero === 3 && index === 4
            || zero === 4 && index === 5
            || zero === 6 && index === 7
            || zero === 7 && index === 8) {
            indexImg.className = "move-left";
        }
        
        if (index !== -1) {
            random[index] = 0;
        }
        if (zero !== -1) {
            random[zero] = tileId
        }
```

When a user clicks on an image-tile, a variable, 'index' gets assigned the value of the index of that image-tile's postion within the randomizedValues array. The index position of the zero or empty image-tile gets assigned to variable: zero. Now the tile position, regardless of its image, gets assigned a slide animation that slides the image-tile towards the empty or zero image-tile. The 'if else' statement handles what direction of animation slide should be applied to the index tile position in relation to the zero tile position- either sliding up, down, right, or left. The bottom two 'if else' statements switch the value of the respective image-tile positions. Finally, once the animation ends, a callback function removes the animation class from the clicked tile.

## How to install?
* Fork and/or clone this repo
* Cd into the repo and type 'yarn add' to install any needed dependencies
* Type 'yarn start' to run the server and play the game

## Credits
Thank you to @ontario_iguanas for the image.
