import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    // map creates a new array by calling a function for every element of the original array and storing results in a new array.
    
    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard key={contact.name} contact={contact}></ContactCard>
        );
    })
    return(
        <div className='ui celled list'>
            {renderContactList}
        </div>
    );
}

export default ContactList;