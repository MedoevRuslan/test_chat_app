import { connect } from "react-redux"
import { setSelectedContact } from "../redux/actions/setSelectedContact"
import Contact from "./Contact"

const mapStateToProps = (state) => ({
    selectedContact: state.contacts.selectedContact
})

export default connect(mapStateToProps, { setSelectedContact })(Contact)