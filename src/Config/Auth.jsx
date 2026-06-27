import React, { createContext, useContext, useState, useEffect } from 'react';

// 1. Context Create Kiya
const Auth = createContext();

const AuthContext = ({ children }) => {
  // 2. State ko component ke ANDAR declare kiya (useState ke sath)
  const [isAppLoading, setIsAppLoading] = useState(true);

  // 3. Side-effect (jaise check karna ke user logged in hai ya nahi)
  useEffect(() => {
    // Fake API call ya auth check simulate karne ke liye timeout
    const checkAuth = setTimeout(() => {
      setIsAppLoading(false); 
    }, 3000);

    return () => clearTimeout(checkAuth); // Cleanup
  }, []);

  return (
    // 4. Value ko pass kiya aur functions ko bhi pass kar sakte ho agar chahiye
    <Auth.Provider value={{ isAppLoading, setIsAppLoading }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;

// 5. Custom Hook for easy access
export const useAuth = () => useContext(Auth);