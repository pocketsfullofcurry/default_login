import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error:''
    };
  }

  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 5 ) {
      return this.setState({error:'Password must be MORE THAN 5 characters.'})
    }

    Accounts.createUser({email, password}, (err)=>{
      if (err){
        this.setState({error:err.reason});
      } else {
        this.setState({error:''});
      }
    })
    // this.setState({
    //   error:'onSubmit error.'
    // });
  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Default_Sigup</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined  }
          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)} noValidate>
            <input type="email" ref="email" name="email" placeholder="name@email.com"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>
          <Link to="/">
            Already have an account?
          </Link>
        </div>
      </div>
    )
  };
};
