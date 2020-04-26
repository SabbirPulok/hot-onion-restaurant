import React, { useState, useEffect, createContext, useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { Route, Redirect} from "react-router-dom";

firebase.initializeApp(firebaseConfig)
const AuthContext = createContext();

export const AuthContextProvider = (props) =>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);


export const PrivateRoute = ({ children, ...rest }) => {
    const auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }


const Auth = ()=>{
    const [user,setUser] = useState(null);
    const getUser = (usr) => {
        const {displayName,email} = usr;
            return {
                name:displayName,
                email,
                error:""
            }
    }
    const signUp = async (name, email, password) =>{
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        await firebase.auth().currentUser.updateProfile(
            {
                displayName: name,
            }
        );
        const currUser = firebase.auth().currentUser;
        setUser({
            name: currUser.displayName,
            email: currUser.email,
            error:''
        });    
        }catch(error) {
            setUser({error: error.message})
        }
    }

    const logIn = (email,password) =>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response=>{
            setUser({
                name: response.user.displayName,
                email: response.user.email,
                error: ''
            });
        })
        .catch(error => setUser({error:error.message}))

    }
    const signOut = () => {
        return firebase.auth().signOut()
        .then(res => {
            setUser(null);
        })
        .catch(error=>{
            alert(error.message);
        })
    }
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(
            function (user)
            {
                if(user)
                {
                    const currentUser = getUser(user);
                    setUser(currentUser);
                }
            }
        )
    },[])

    return {
        user, signUp, logIn,signOut
    }
}

export default Auth;