import React, { useContext, useState } from 'react';
import '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    //signup function
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
          displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user
        });
    }



  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
