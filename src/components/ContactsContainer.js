import React from "react";
import { connect } from "react-redux";
import Contacts from './Contacts';
import { getContacts } from '../redux/reducers/contactsReducer'

function ContactsContainer({ contacts, isFetching, getContacts }) {

    React.useEffect(() => {
        getContacts();
    }, [])

    return <Contacts contacts={ contacts } isFetching={ isFetching } />
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts.users.slice().sort((a, b) => b.lastUpdate - a.lastUpdate),
        isFetching: state.contacts.isFetching
    }
}

export default connect(mapStateToProps, { getContacts })(ContactsContainer)