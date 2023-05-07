import React, { useEffect, useState } from "react";
import { Pagination, Modal, Button } from "antd";
import Loader from "../loader/loader";

function ContactTable() {
    const [contacts, setContacts] = useState([
        // {
        //     id: 1,
        //     email: "example1@gmail.com",
        //     message: "Message 1",
        //     phone: 1234567890,
        // },
        // {
        //     id: 2,
        //     email: "example2@gmail.com",
        //     message: "Message 2",
        //     phone: 2345678901,
        // },
        // {
        //     id: 3,
        //     email: "example3@gmail.com",
        //     message: "Message 3",
        //     phone: 3456789012,
        // },
    ]);

    const [editingContact, setEditingContact] = useState(null);
    const [filter, setFilter] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchForm = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/form")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setContacts(response.response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchForm();
    }, []);

    const handleEditContact = (contact) => {
        setEditingContact(contact);
    };

    const handleSaveContact = (editedContact) => {
        if (!editedContact._id) {
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
                    contact._id === editedContact._id ? editedContact : contact
                )
            );
        }
        setEditingContact(null);
    };

    const handleDeleteContact = (contactId) => {
        setContacts(contacts.filter((contact) => contact._id !== contactId));
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
            {loading ? (
                <Loader />
            ) : (
                <div className="dash-main">
                    <h2>Contact List</h2>
                    <div className="add-button">
                        {/* <Button
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
                </Button> */}
                        <Modal
                            title={
                                editingContact
                                    ? `Editing Contact ${
                                          editingContact._id || "New Contact"
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
                                    <tr key={contact._id}>
                                        <td>
                                            {editingContact?._id ===
                                            contact._id ? (
                                                <input
                                                    type="text"
                                                    value={editingContact.email}
                                                    onChange={(e) =>
                                                        setEditingContact({
                                                            ...editingContact,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                contact.email
                                            )}
                                        </td>

                                        <td>
                                            {editingContact?._id ===
                                            contact._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingContact.message
                                                    }
                                                    onChange={(e) =>
                                                        setEditingContact({
                                                            ...editingContact,
                                                            message:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                contact.message
                                            )}
                                        </td>
                                        <td>
                                            {editingContact?._id ===
                                            contact._id ? (
                                                <input
                                                    type="number"
                                                    value={editingContact.phone}
                                                    onChange={(e) =>
                                                        setEditingContact({
                                                            ...editingContact,
                                                            phone: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                contact.phone
                                            )}
                                        </td>
                                        <td>
                                            {editingContact?._id ===
                                            contact._id ? null : (
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
                                                    <Button
                                                        onClick={() =>
                                                            handleDeleteContact(
                                                                contact._id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination defaultCurrent={1} total={10} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactTable;
