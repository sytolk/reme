import { Fonts } from '../../metrics';

export default {
    container: {
        alignItems: 'center',
    },
    optionContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        paddingBottom: 10,
    },
    activeOption: {
        backgroundColor: 'white'
    },
    minuteText: {
        alignSelf: 'center',
        fontFamily: Fonts.raleway,
        fontSize: 25,
        color: '#fff'
    },
    name: {
        fontFamily: Fonts.ralewaySmB,
        fontSize: 14,
        color: '#fff',
        alignSelf: 'center'
    },
    activeName: {
        color: '#2bae9f'
    }
}