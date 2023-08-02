const ArticleStatus = ({isNew}) => {
    return isNew && <span>--Baru!!</span>;
}

function Article(props){
    return (
        <>
            <h3>{props.title}</h3>
            <small>tags : {props.tags.join(", ")}{""}, Date : {props.date}</small>
            <ArticleStatus isNew={props.isNew} />
        </>
    )
}

export default Article;
