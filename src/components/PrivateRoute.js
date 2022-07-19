import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isEmpty,isLoaded} from 'react-redux-firebase'
import {connect} from 'react-redux'

function PrivateRoute({auth,component:Component,...restProps}) {
  return (
    <Route
        {...restProps} render={(props)=>
            {
                return isLoaded(auth) && !isEmpty(auth)? 
                <Component {...props}/>:
                <Redirect to="/" />
            }
        }
    />
  )
}

const mapStateToProps = (state)=>{
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)