import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!

    /* Use the map() function to render multiple Blocks! */
    const [blocks, setBlocks] = useState([])
    const posts = blocks.map((item) => <Block color={item}/>); // TODO: edit this variable

    return (
        <div>
            <Menu newPost = {(color) => setBlocks((prev) => [color, ...prev])}></Menu>

            {/* Below is where all of your Blocks should render! */}
            {posts}
        </div>
    );
}

export default Feed;