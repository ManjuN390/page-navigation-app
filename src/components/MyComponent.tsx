import * as React from 'react';
import RadioButton from './RadioButton';

interface State {
  selectedOption: string;
}

class MyComponent extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedOption: 'option1'
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({selectedOption: event.target.value});
  }

  render() {
    return (
      <form>
        <RadioButton
          value="option1"
          label="Option 1"
          name="options"
          checked={this.state.selectedOption === 'option1'}
          onChange={this.handleChange}
        />
        <RadioButton
          value="option2"
          label="Option 2"
          name="options"
          checked={this.state.selectedOption === 'option2'}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
