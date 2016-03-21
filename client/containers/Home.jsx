import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
import merge from 'lodash/merge';
// FIXME: use different way of es6 import to make below code single line
import * as formActions from '../actions/form';
import * as checkupActions from '../actions/checkup';
// Components FIXME: use different way of es6 import to make below code single line
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const propTypes = {
  store: PropTypes.object.isRequired,
};

// TODO: for 2nd param: add checkup actions too
const SmartForm = connect(state => state.form, merge({}, formActions, checkupActions))(Form);

class Home extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <SmartForm >
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
