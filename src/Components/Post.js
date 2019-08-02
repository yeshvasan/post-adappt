import React, { Component } from 'react';
import Comments from './Comments';

class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            posts :[],
            comments:[]
            
        }
        
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            this.setState({
                posts:posts,
                //displayComments: false,
                displayMore: false,
            })
            fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    comments:comments,
                    displayComments:false
                })
            })
        })
        
        .catch(error => console.log(error))
    }

    displayComments = () => {
        this.setState({
            displayComments:!this.state.displayComments
        })
    }

    displayMore = () => {
        this.setState({
            displayMore:!this.state.displayMore
            
        })
        
    }
    
    renderPost(){
        if(this.state.displayComments){

            

            let commentList=[]
            this.state.comments.map(comment => {
                return commentList.push(
                   
                       <div className="container">
                 <div className="card-deck">
                  <div className="cards">
                      <div className="card-body">
                          <h4 className="card-title">{comment.name}</h4>
                          <p className="card-text">{comment.email}</p>
                          <p className="card-text">{comment.body}</p>
                          
                          <button className="btn-sm btn-danger" onClick={this.displayComments}>Back</button>
                      </div>
                  </div>
                 </div>
  
                 </div>
                )
            
            })
            this.state.posts.map(post => {
                return commentList.push(
                 <div className="container">
                 <div className="card-deck">
                  <div className="cards">
                      <div className="card-body">
                          <h4 className="card-title">{post.title}</h4>
                          <p className="card-text">{post.body}</p>
                          <button className="btn-sm btn-secondary" onClick={this.displayMore} > Back</button>
                          <button className="btn-sm btn-danger" onClick={this.displayComments}>Show Comments</button>
                      </div>
                  </div>
                 </div>
  
                 </div>
                )
            })
            return commentList
        }
        if(this.state.displayMore){
            
           let bodyList=[]
           this.state.posts.map(post => {
               return bodyList.push(
                <div className="container">
                <div className="card-deck">
                 <div className="cards">
                     <div className="card-body">
                         <h4 className="card-title">{post.title}</h4>
                         <p className="card-text">{post.body}</p>
                         <button className="btn-sm btn-secondary" onClick={this.displayMore} > Back</button>
                        
                     </div>
                 </div>
                </div>
 
                </div>
               )
           })
           return bodyList
             
        }
        let postList=[]
        this.state.posts.map(post => {
            return postList.push(
               <div className="container">
               <div className="card-deck">
                <div className="cards">
                    <div className="card-body">
                        <h4 className="card-title">{post.title}</h4>
                        <p className="card-text">{post.body.substring(0,70)}</p>
                        <button className="btn-sm btn-success" onClick={this.displayMore} > More</button>
                        <button className="btn-sm btn-danger" onClick={this.displayComments}>Show Comments</button>
                    </div>
                </div>
               </div>

               </div>
            )
        })
        return postList;
    }
    render() {
        return (
            <div>
                {this.renderPost()}
            </div>
        )
    }
}

export default Post;