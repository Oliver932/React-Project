import React from 'react'

const Book = (props) => {

    const {img, author, title} = props;
    
    return(
    <article className='book'>
        <img src={img} alt='Error'/>
        <h1>{title}</h1>
        <h4>{author.toUpperCase()}</h4>
    </article>
    );
};

export default Book
