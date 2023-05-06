/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Pagination, Button, Modal } from "antd";

function AdminTable() {
    const [admins, setAdmins] = useState([
        {
            id: 1,
            name: "Admin 1",
            email: "admin1@example.com",
            role: "Manager",
        },
        {
            id: 2,
            name: "Admin 2",
            email: "admin2@example.com",
            role: "Editor",
        },
        {
            id: 3,
            name: "Admin 3",
            email: "admin3@example.com",
            role: "Viewer",
        },
    ]);

    const [newAdminName, setNewAdminName] = useState("");
    const [newAdminRole, setNewAdminRole] = useState("Admin");
    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [newAdminPassword, setNewAdminPassword] = useState("");
    const [newAdminIsSuper, setNewAdminIsSuper] = useState(false);

    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [filter, setFilter] = useState("");

    const showModal = () => {
        setEditingAdmin(null);
        setIsEditing(false);
        setOpen(true);
    };

    const handleOk = () => {
        if (editingAdmin) {
            handleSaveAdmin(editingAdmin);
        } else {
            handleAddAdmin();
        }
        setOpen(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setOpen(false);
        setNewAdminName("");
        setNewAdminEmail("");
        setNewAdminPassword("");
        setNewAdminIsSuper(false);
        setNewAdminRole("Admin");
        setEditingAdmin(null);
    };

    const handleAddAdmin = () => {
        const newAdmin = {
            id: admins.length + 1,
            name: newAdminName,
            email: newAdminEmail,
            password: newAdminPassword,
            role: newAdminIsSuper ? "SuperAdmin" : "Admin",
        };
        setAdmins([...admins, newAdmin]);
        setOpen(false);
        setNewAdminName("");
        setNewAdminEmail("");
        setNewAdminPassword("");
        setNewAdminIsSuper(false);
        setNewAdminRole("Admin");
    };

    const handleEditAdmin = (admin) => {
        if (admin) {
            setEditingAdmin(admin);
            setNewAdminName(admin.name);
            setNewAdminEmail(admin.email);
            setNewAdminPassword(admin.password);
            setNewAdminIsSuper(admin.role === "SuperAdmin");
            setNewAdminRole(admin.role);
            setIsEditing(true);
            setOpen(true);
        } else {
            handleCancel();
        }
    };

    const handleSaveAdmin = (editedAdmin) => {
        const updatedAdmin = {
            ...editedAdmin,
            role: newAdminIsSuper ? "SuperAdmin" : "Admin",
        };
        setAdmins(
            admins.map((admin) =>
                admin.id === editedAdmin.id ? updatedAdmin : admin
            )
        );
        setEditingAdmin(null);
        setIsEditing(false);
        setFilter("");
    };
    const handleDeleteAdmin = (adminId) => {
        setAdmins(admins.filter((admin) => admin.id !== adminId));
    };

    const filteredAdmins = admins.filter((admin) => {
        if (
            filter &&
            !(
                admin.name.toLowerCase().includes(filter.toLowerCase()) ||
                admin.email.toLowerCase().includes(filter.toLowerCase()) ||
                admin.role.toLowerCase().includes(filter.toLowerCase())
            )
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="dash-main">
                <h2>Admins List</h2>
                <div className="add-button">
                    <Button type="primary" onClick={showModal}>
                        Add Admin
                    </Button>
                    <Modal
                        title={
                            editingAdmin
                                ? `Editing ${editingAdmin.name}`
                                : "Add Admin"
                        }
                        open={open}
                        onOk={handleOk}
                        onCancel={handleCancel}
                    >
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={
                                    editingAdmin
                                        ? editingAdmin.name
                                        : newAdminName
                                }
                                onChange={(e) =>
                                    editingAdmin
                                        ? setEditingAdmin({
                                              ...editingAdmin,
                                              name: e.target.value,
                                          })
                                        : setNewAdminName(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={
                                    editingAdmin
                                        ? editingAdmin.email
                                        : newAdminEmail
                                }
                                onChange={(e) =>
                                    editingAdmin
                                        ? setEditingAdmin({
                                              ...editingAdmin,
                                              email: e.target.value,
                                          })
                                        : setNewAdminEmail(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={
                                    editingAdmin
                                        ? editingAdmin.password
                                        : newAdminPassword
                                }
                                onChange={(e) =>
                                    editingAdmin
                                        ? setEditingAdmin({
                                              ...editingAdmin,
                                              password: e.target.value,
                                          })
                                        : setNewAdminPassword(e.target.value)
                                }
                            />
                        </div>
                        <div className="issuper-div">
                            <label>Is Super:</label>
                            <Button
                                type={newAdminIsSuper ? "primary" : "default"}
                                onClick={() =>
                                    setNewAdminIsSuper(!newAdminIsSuper)
                                }
                            >
                                {newAdminIsSuper ? "Yes" : "No"}
                            </Button>
                        </div>
                    </Modal>

                   
                </div>
                <div className="table-fixing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAdmins.map((admin) => (
                                <tr key={admin.id}>
                                    <td>
                                        {editingAdmin?.id === admin.id ? (
                                            <input
                                                type="text"
                                                value={editingAdmin.name}
                                                onChange={(e) =>
                                                    setEditingAdmin({
                                                        ...editingAdmin,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            admin.name
                                        )}
                                    </td>
                                    <td>
                                        {editingAdmin?.id === admin.id ? (
                                            <input
                                                type="email"
                                                value={editingAdmin.email}
                                                onChange={(e) =>
                                                    setEditingAdmin({
                                                        ...editingAdmin,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            admin.email
                                        )}
                                    </td>
                                    <td>
                                        {editingAdmin?.id === admin.id ? (
                                            <input
                                                type="text"
                                                value={editingAdmin.admin}
                                                onChange={(e) =>
                                                    setEditingAdmin({
                                                        ...editingAdmin,
                                                        role: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            admin.role
                                        )}
                                    </td>
                                    <td>
                                        {editingAdmin?.id ===
                                        admin.id ? null : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEditAdmin(admin)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteAdmin(
                                                            admin.id
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

export default AdminTable;
