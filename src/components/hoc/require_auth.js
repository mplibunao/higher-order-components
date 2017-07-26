import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
  class Authentication extends Component {

    componentWillMount(){
      if (!this.props.authenticated){
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.props.history.push('/');
      }
    }

    render(){
      const { authenticated } = this.props;
      return authenticated ? <ComposedComponent {...this.props} /> : null;
    }
  }

  function mapStateToProps(state){
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}