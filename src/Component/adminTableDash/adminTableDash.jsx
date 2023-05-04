import React, { useState } from "react";
import { Pagination } from "antd";

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

    const [editingAdmin, setEditingAdmin] = useState(null);
    const [filter, setFilter] = useState("");

    const handleAddAdmin = () => {
        const newAdmin = {
            id: admins.length + 1,
            name: "New Admin",
            email: "newadmin@example.com",
            role: "Viewer",
        };
        setAdmins([...admins, newAdmin]);
    };

    const handleEditAdmin = (admin) => {
        if (admin) {
            setEditingAdmin(admin);
        } else {
            setEditingAdmin(null);
        }
    };

    const handleSaveAdmin = (editedAdmin) => {
        setAdmins(
            admins.map((admin) =>
                admin.id === editedAdmin.id ? editedAdmin : admin
            )
        );
        setEditingAdmin(null);
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
                <div>
                    <button onClick={handleAddAdmin}>Add Admin</button>
                    <input
                        type="text"
                        placeholder="Search by name, email or role"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
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
                                    {editingAdmin?.id === admin.id ? (
                                        <button
                                            onClick={() =>
                                                handleSaveAdmin(editingAdmin)
                                            }
                                        >
                                            Save
                                        </button>
                                    ) : (
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
                                                    handleDeleteAdmin(admin.id)
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
        </>
    );
}

export default AdminTable;
