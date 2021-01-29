// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  // added a super that requires the argument "props"
  constructor (props) {
    super(props);
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables

    // added ${} too all the literals so that it displays the title, author, and text correctly. 
    return (`
      <Article>
        <Title>${this.props.title}</Title>
        <Author>${this.props.author}</Author>
        <Text>${this.props.text}</Text>
      </Article>
    `
    );

  }

}

export default Article;
