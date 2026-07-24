import React, { Component } from 'react';

// Child component that can trigger a simulated rendering error
class PostItem extends Component {
  render() {
    const { title, body, shouldCrash } = this.props;
    if (shouldCrash) {
      throw new Error("Simulated rendering crash in PostItem!");
    }
    return (
      <div className="post-card animate-fade-in">
        <div className="post-header">
          <span className="post-id-badge"># {this.props.id}</span>
          <h3>{title}</h3>
        </div>
        <div className="post-body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: null,
      searchTerm: '',
      simulateErrorId: null
    };
  }

  // Method responsible for using Fetch API
  loadPosts() {
    this.setState({ loading: true });
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assigning to component state
        this.setState({ posts: data.slice(0, 10), loading: false }); // Take first 10 for clean UI
      })
      .catch(error => {
        this.setState({ error: error.message, loading: false });
      });
  }

  // Implement componentDidMount hook to make calls to loadPosts
  componentDidMount() {
    this.loadPosts();
  }

  // Define componentDidCatch to display errors as alert messages
  componentDidCatch(error, errorInfo) {
    alert("componentDidCatch Hook Triggered!\nError message: " + error.message);
    this.setState({ error: error.message });
  }

  render() {
    const { posts, loading, error, searchTerm, simulateErrorId } = this.state;

    if (error) {
      return (
        <div className="error-fallback-panel animate-fade-in">
          <div className="error-icon">⚠️</div>
          <h2>Something went wrong.</h2>
          <p className="error-msg">{error}</p>
          <button className="retry-btn" onClick={() => this.setState({ error: null, simulateErrorId: null }, () => this.loadPosts())}>
            Reload Posts
          </button>
        </div>
      );
    }

    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="posts-container">
        <div className="posts-header-bar">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search posts..." 
              value={searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </div>
          
          <button 
            className="sim-error-btn"
            onClick={() => this.setState({ simulateErrorId: posts[0]?.id })}
          >
            Simulate Render Error
          </button>
        </div>

        {loading ? (
          <div className="loading-container">
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
            <div className="skeleton-card"></div>
          </div>
        ) : (
          <div className="posts-grid">
            {filteredPosts.map(post => (
              <PostItem 
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                shouldCrash={simulateErrorId === post.id}
              />
            ))}
            {filteredPosts.length === 0 && (
              <div className="no-results">No posts matching "{searchTerm}"</div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
