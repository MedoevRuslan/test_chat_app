import { connect } from 'react-redux';
import { moveToAllMessages } from '../redux/actions/moveToAllMessages';
import { addMessage } from '../redux/actions/addMessage'
import { setMessage } from '../redux/actions/setMessage';
import { getMessageFromApi } from '../redux/reducers/messageReducer'
import ChatCanvas from './ChatCanvas';

const mapStateToProps = (state) => {
    return {
        message: state.messages.message,
        // messages: state.contacts.selectedContact.messages,
        newMessages: state.contacts.selectedContact.newMessages,
        selectedContact: state.contacts.selectedContact,
    }
}

export default connect(mapStateToProps, { setMessage, getMessageFromApi, moveToAllMessages, addMessage })(ChatCanvas);