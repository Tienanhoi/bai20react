import React from "react";
import BookShow from"./BookShow";

const BookList = ({books,onDelete, onEdit}) => {
    const listItem = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} book={book}/>
    ));
    return <div className="list-book">
        <h2>Reading List</h2>
        {listItem}
        </div> ;
};

export default BookList;
