import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        
    },
    scrollView: {
        
    },
    title: {
        marginTop: 100,
        textAlign: "center",
        padding: 20,
        fontSize: 40,
        color: '#7788ff',
        
    },
    formContainer: {
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    textBold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textNormal: {
        fontSize: 20,
        backgroundColor: '#eeeeee',
        padding: 5,
    },
    result: {
        alignSelf: 'center',
        fontFamily: 'BungeeSpice',
        textShadowColor: 'black',
        textShadowRadius: 8,
        fontSize: 40
    },
    button: {
        marginVertical: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width:'100%',
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    label: {
        fontSize: 16    
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#5a5',
    },
    picker: {
        backgroundColor: '#eeeeee'
    }
  });

  export default styles;