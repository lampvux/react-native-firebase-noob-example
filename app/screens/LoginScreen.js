import React, { useContext, useState } from 'react';

import { KeyboardAvoidingView, View, Text, TextInput } from 'react-native';

import { AuthContext } from "../contexts/UserContext";


function LoginScreen(props) {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const { signIn } = useContext(AuthContext);
    const emailInputChange = (val) => {
        setData({
            ...data,
            email: val
        })
    }
    const passwordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }
    const LoginHandle = () => {
        signIn(data.email, data.password)
    }
    return (
        <KeyboardAvoidingView>
            <View style={{ flex: 1 }}>
                <Text>Email: </Text>
                <View >
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        onChangeText={(val) => emailInputChange(val)}
                    />
                </View>
                <Text>Password: </Text>
                <View>
                    <TextInput
                        placeholder="Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(val) => passwordChange(val)}
                    />
                </View>

                <TouchableOpacity onPress={() => LoginHandle()} style={{ width: "100%", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                    <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>Login</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    );
}

export default LoginScreen;