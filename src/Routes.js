import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/PublicRoutes'

const Routes = () => {
    const[isLoggedin,setIsLoggedIn] = useState(false)
  return (
   <>
    {/* {
        isLoggedin ? <PrivateRoutes /> : <PublicRoutes/>
    } */}
     <PrivateRoutes/>
   </>
  )
}

export default Routes

const styles = StyleSheet.create({})