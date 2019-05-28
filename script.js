var GalleryItem = React.createClass({
    propTypes: {
      image: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        React.createElement('div', {},
          React.createElement('h2', {}, this.props.image.name),
          React.createElement('img', {src: this.props.image.src})
        )
      )
    },
  });

  var image = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png'
  };

// Movie
  var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
            React.createElement('h2', {}, this.props.movie.name),
            React.createElement('iframe', {src: this.props.movie.src})
          )
      }
  });
  
  var movie = {
    id: 1,
    name: 'Kotek-movie',
    src: 'https://www.pexels.com/video/video-of-funny-cat-855029/'
  };

// MovieTitle
  var MovieTitle = React.createClass({
    propTypes: {
      movietitle: React.PropTypes.object.isRequired,
    },

    render: function() {
      return (
            React.createElement('h3', {}, this.props.movietitle.title)
        )
    },
  });
  
  var movietitle = {
    title: 'test title'
  };

// MovieDescription
var MovieDescription = React.createClass({
  propTypes: {
    moviedescription: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
          React.createElement('p', {}, this.props.moviedescription.description)
      )
  },
});

var moviedescription = {
  description: 'bla bla bla'
};

// MoviesList
var MoviesList = React.createClass({
  propTypes: {
    movieslist: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
          React.createElement('p', {}, this.props.movieslist.list)
      )
  },
});

var movieslist = {
  list: 'test list',
};

// end

var element =
React.createElement('div', {},
  React.createElement(GalleryItem, {image: image}),
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MoviesList, {movieslist:movieslist}),
  React.createElement('li', {},
    React.createElement(MovieTitle, {movietitle:movietitle}),
    React.createElement(Movie, {key: movie.id, movie:movie}),
    React.createElement(MovieDescription, {moviedescription:moviedescription}),
  )
);

ReactDOM.render(element, document.getElementById('app'));

