import React, { Component } from "react";
import axios from 'axios';

import "./Task2.scss";

class Task2 extends Component{
    state = {
        posts: [],
        loading: false,
        error: false        
      }

    getPosts = () =>{
        this.setState({ loading: true });
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response) => {
          this.setState({posts: response.data, loading: false, error: false});
        })
        .catch((error) => {
          this.setState({ error: true, loading: false});
        })
    };

    render(){
        return(
            <div className="Task">
                <div className="button-holder">
                    <button className="btn" onClick={this.getPosts}>Get Post</button>
                    {this.state.error ? <div><p>Post Failed to load</p></div> : null}
                    {this.state.loading ? <div><p>Post loading</p></div> : null}
                </div>
                <div className="card-holder">
                {
                    this.state.posts.map ((el, index) => {
                    return( 
                        <div className="card" key={index}>
                        <img src={el.thumbnailUrl} alt="thumbnailUrl" className="card-img-top"/>
                            <div className="card-body">
                                <div className="text-holder">
                                    <h5>{el.id}</h5>
                                    <p className="card-text">{el.title}</p>
                                </div>
                                <div className="link-holder">
                                    <a href={el.url} className="link" target="_blank" rel="noopener noreferrer">Submit</a>
                                </div>
                            </div>
                        </div>
                    )
                    })
                }
                </div>
            </div>
        );
    };
};

export default Task2;