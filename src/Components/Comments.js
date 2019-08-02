import React, { Component } from 'react'

class Comments extends Component {
    constructor(props){
        super(props)
        this.state={
            
            comments: []
        }
        this.onButton = this.onButton.bind(this);
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
        .then(response => response.json())
        .then(comments => {
            this.setState({
               comments:comments
              
            })
        })
        
        .catch(error => console.log(error))
    }

    onButton(){
        let body = window.getSelection().toString();
        fetch(body);
    }
    renderComment(){
        let commentList=[]
        this.state.comments.map(comment=> {
            return commentList.push(
               <div>
                   <h3>Comments</h3>
                   <h5>{comment.name}</h5>
                   <p>{comment.email}</p>
                   <p>{comment.body}</p>
               </div>
            )
        })
        return commentList;
    }
    render() {
        return (
            <ul>
                {this.renderComment()}
            </ul>
        )
    }
}

export default Comments;