import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
    componentDidMount() {
        // props.match.params is avail bc react-router
        const { id } = this.props.match.params;
        this.props.fetchPost(id);

        // if concernes about network requests(dont fetch data on every pageload)
        // if (!this.props.post) {
        // const { id } = this.props.match.params;
        // this.props.fetchPost(id);
        // }
    }

    onDeleteClick() {
        // props.match.params is avail bc react-router
        const { id } = this.props.match.params;
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                  className="btn btn-danger pull-xs-right"
                  onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categorise}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

// within the component this.props === ownProps, any and all props passesd to the
// component(id) are avail in the obj as a second param to mapStateToProps
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost }) (PostsShow);