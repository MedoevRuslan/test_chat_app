import { connect } from 'react-redux';
import { moveToAllMessages } from '../redux/actions/moveToAllMessages';
import { addMessage } from '../redux/actions/addMessage'
import { getMessageFromApi } from '../redux/reducers/contactsReducer'
import Messages from './Messages';

const mapStateToProps = (state) => {
    return {
        newMessages: state.contacts.selectedContact?.newMessages,
        selectedContact: state.contacts.selectedContact,
    }
}

export default connect(mapStateToProps, { getMessageFromApi, moveToAllMessages, addMessage })(Messages);