import React,{useState} from "react"; 


const BookEdit = ({book, onSubmit, onEdit}) => {
    const [title, setTitle] = useState(book.title);
    const handleSubmit = (event) => {
     event.preventDefault();
     onSubmit(title);
    };
    const handleChange= (event) =>{
        setTitle(event.target.value);
    };
    return(
        <form onSubmit={handleSubmit} className="book-edit">
            <input value={title} onChange={handleChange} />
            <button>save</button>
        </form>
    );
};
export default BookEdit;