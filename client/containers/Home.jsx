import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
// FIXME: use different way of es6 import to make below code single line
import * as formActions from '../actions/form';
// TODO: uncomment
// import * as checkupActions from '../actions/checkup';

// Components FIXME: use different way of es6 import to make below code single line
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const propTypes = {
  store: PropTypes.object.isRequired,
};

// TODO: for 2nd param: add checkup actions too
const SmartForm = connect(state => state.form, formActions)(Form);

// TODO: remove (added for test purpose)
const log = data => console.log(data);

class Home extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <SmartForm onSubmit={log}>
          <TextInput
            name="owner"
            validate={['required']}
            placeholder="github-username"
            label="Github Username"
          />
          <TextInput
            name="repo"
            validate={['required']}
            placeholder="github-repository"
            label="Github Repository"
          />
          <SubmitButton
            label="Checkup"
          />
        </SmartForm>
      </Provider>
    );
  }
}

Home.propTypes = propTypes;


export default Home;
