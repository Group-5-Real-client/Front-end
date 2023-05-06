import React, { useState } from "react";
import { Pagination, Modal, Button } from "antd";

function ContactTable() {
    const [contacts, setContacts] = useState([
        {
            id: 1,
            email: "example1@gmail.com",
            message: "Message 1",
            phone: 1234567890,
        },
        {
            id: 2,
            email: "example2@gmail.com",
            message: "Message 2",
            phone: 2345678901,
        },
        {
            id: 3,
            email: "example3@gmail.com",
            message: "Message 3",
            phone: 3456789012,
        },
    ]);

    const [editingContact, setEditingContact] = useState(null);
    const [filter, setFilter] = useState("");

    const handleEditContact = (contact) => {
        setEditingContact(contact);
    };

    const handleSaveContact = (editedContact) => {
        if (!editedContact.id) {
            // New contact
            const newContact = {
                id: contacts.length + 1,
                email: editedContact.email,
                message: editedContact.message,
                phone: editedContact.phone,
            };
            setContacts([...contacts, newContact]);
        } else {
            // Existing contact
            setContacts(
                contacts.map((contact) =>
                    contact.id === editedContact.id ? editedContact : contact
                )
            );
        }
        setEditingContact(null);
    };

    const handleDeleteContact = (contactId) => {
        setContacts(contacts.filter((contact) => contact.id !== contactId));
    };

    const filteredContacts = contacts.filter((contact) => {
        if (
            filter &&
            !(
                contact.email.toLowerCase().includes(filter.toLowerCase()) ||
                contact.message.toLowerCase().includes(filter.toLowerCase()) ||
                contact.phone.toString().includes(filter.toLowerCase())
            )
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="dash-main">
                <h2>Contact List</h2>
                <div className="add-button">
                    <Button
                        type="primary"
                        onClick={() =>
                            setEditingContact({
                                email: "",
                                message: "",
                                phone: null,
                            })
                        }
                    >
                        Add Contact
                    </Button>
                    <Modal
                        title={
                            editingContact
                                ? `Editing Contact ${
                                      editingContact.id || "New Contact"
                                  }`
                                : "Add Contact"
                        }
                        open={!!editingContact}
                        onCancel={() => setEditingContact(null)}
                        footer={[
                            <Button
                                key="cancel"
                                onClick={() => setEditingContact(null)}
                            >
                                Cancel
                            </Button>,
                            <Button
                                key="save"
                                type="primary"
                                onClick={() =>
                                    handleSaveContact(editingContact)
                                }
                            >
                                Save
                            </Button>,
                        ]}
                    >
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={editingContact?.email || ""}
                                onChange={(e) =>
                                    setEditingContact({
                                        ...editingContact,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Message:</label>
                            <input
                                type="text"
                                value={editingContact?.message || ""}
                                onChange={(e) =>
                                    setEditingContact({
                                        ...editingContact,
                                        message: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="tel"
                                value={editingContact?.phone || ""}
                                onChange={(e) =>
                                    setEditingContact({
                                        ...editingContact,
                                        phone: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </Modal>
                    <input
                        type="text"
                        placeholder="Search by name, email or role"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <div className="table-fixing">
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredContacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td>
                                        {editingContact?.id === contact.id ? (
                                            <input
                                                type="text"
                                                value={editingContact.email}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            contact.email
                                        )}
                                    </td>

                                    <td>
                                        {editingContact?.id === contact.id ? (
                                            <input
                                                type="text"
                                                value={editingContact.message}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        message: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            contact.message
                                        )}
                                    </td>
                                    <td>
                                        {editingContact?.id === contact.id ? (
                                            <input
                                                type="number"
                                                value={editingContact.phone}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            contact.phone
                                        )}
                                    </td>
                                    <td>
                                        {editingContact?.id ===
                                        contact.id ? null : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEditContact(
                                                            contact
                                                        )
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteContact(
                                                            contact.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
        </>
    );
}

export default ContactTable;
