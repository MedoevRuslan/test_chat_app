import React from 'react';
import ContactContainer from './ContactContainer';
import Preloader from './Preloader';

function Contacts({ contacts, isFetching }) {

    const [searchValue, setSearchValue] = React.useState('');

    function handleChange(event) {
        setSearchValue(event.target.value)
    }

    return (
        <aside className='contacts'>
            <div className='contacts__header' >
                <div className='contacts__avatar'>
                </div>
                <div className='contacts__search'>
                    <input
                        type='text'
                        onChange={handleChange}
                        value={searchValue.toLocaleLowerCase()}
                        placeholder='&#128269;  Search or start new chat'
                    />
                </div>
            </div>
            <h3>Chats</h3>
            <div className='contacts__list'>
                {isFetching
                    ? <Preloader />
                    : contacts
                        ?.filter(contact => contact.first_name.toLocaleLowerCase().includes(searchValue))
                        .map(contact => (
                            <ContactContainer 
                            key={contact.id} 
                            user={contact} 
                            lastMessage={contact.newMessages.length > 0 
                                ? contact.newMessages.slice(-1).pop()
                                : contact.messages.slice(-1).pop()}
                            />
                        ))}
            </div>
        </aside>
    );
}

export default Contacts;