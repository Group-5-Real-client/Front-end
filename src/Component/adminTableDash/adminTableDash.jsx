/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Pagination, Button, Modal } from "antd";
import Loader from "../loader/loader";

function AdminTable() {
    const [admins, setAdmins] = useState([]);

    const [newAdminName, setNewAdminName] = useState("");
    const [newAdminRole, setNewAdminRole] = useState("Admin");
    const [newAdminEmail, setNewAdminEmail] = useState("");
    const [newAdminPassword, setNewAdminPassword] = useState("");
    const [newAdminIsSuper, setNewAdminIsSuper] = useState(false);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingAdmin, setEditingAdmin] = useState(null);
    const [filter, setFilter] = useState("");

    const fetchAdmins = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/admin")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setAdmins(response.response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

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
                admin?._id === editedAdmin?._id ? updatedAdmin : admin
            )
        );
        setEditingAdmin(null);
        setIsEditing(false);
        setFilter("");
    };
    const handleDeleteAdmin = (adminId) => {
        setAdmins(admins.filter((admin) => admin?._id !== adminId));
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
            {loading ? (
                <Loader />
            ) : (
                <div className="dash-main">
                    <h2>Admins List</h2>
                    <div className="add-button">
                        <Button type="primary" onClick={() => showModal()}>
                            Add Admin
                        </Button>

                        <Modal
                            title={
                                editingAdmin
                                    ? `Editing Admin ${
                                          editingAdmin?._id || "New Admin"
                                      }`
                                    : "Add Admin"
                            }
                            open={open}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="cancel" onClick={handleCancel}>
                                    Cancel
                                </Button>,
                                <Button
                                    key="save"
                                    type="primary"
                                    onClick={handleOk}
                                >
                                    Save
                                </Button>,
                            ]}
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
                                            : setNewAdminPassword(
                                                  e.target.value
                                              )
                                    }
                                />
                            </div>
                            <div className="issuper-div">
                                <label>Is Super:</label>
                                <Button
                                    type={
                                        newAdminIsSuper ? "primary" : "default"
                                    }
                                    onClick={() =>
                                        setNewAdminIsSuper(!newAdminIsSuper)
                                    }
                                >
                                    {newAdminIsSuper ? "Yes" : "No"}
                                </Button>
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
                                    <th>Name</th>
                                    <th>Email</th>
                                    {/* <th>Role</th> */}
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAdmins.map((admin) => (
                                    <tr key={admin?._id}>
                                        <td>
                                            {editingAdmin?._id ===
                                            admin?._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingAdmin.username
                                                    }
                                                    onChange={(e) =>
                                                        setEditingAdmin({
                                                            ...editingAdmin,
                                                            username:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                admin.username
                                            )}
                                        </td>
                                        <td>
                                            {editingAdmin?._id ===
                                            admin?._id ? (
                                                <input
                                                    type="email"
                                                    value={editingAdmin.email}
                                                    onChange={(e) =>
                                                        setEditingAdmin({
                                                            ...editingAdmin,
                                                            email: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                admin.email
                                            )}
                                        </td>
                                        {/* <td>
                                    {editingAdmin?._id === admin?._id ? (
                                        <input
                                            type="text"
                                            value={editingAdmin.type}
                                            onChange={(e) =>
                                                setEditingAdmin({
                                                    ...editingAdmin,
                                                    type: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        admin.type
                                    )}
                                </td> */}
                                        <td>
                                            {editingAdmin?._id ===
                                            admin?._id ? null : (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleEditAdmin(
                                                                admin
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <Button
                                                        onClick={() =>
                                                            handleDeleteAdmin(
                                                                admin?._id
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
                        <Pagination defaultCurrent={1} />
                    </div>
                </div>
            )}
        </>
    );
}

export default AdminTable;
