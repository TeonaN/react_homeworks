    deleteHandler=(i, e)=> {
        e.preventDefault();
        this.props.onDelete(this.props.blogPosts[i].id);
    };