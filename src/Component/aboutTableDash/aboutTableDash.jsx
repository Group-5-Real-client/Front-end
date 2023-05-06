/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { Button, Modal, Pagination } from "antd";

function AboutTable({ adminName }) {
    const [abouts, setAbouts] = useState([
        {
            id: 1,
            description: "Admin 1",
            image: "admin1@example.com",
        },
        {
            id: 2,
            description: "Admin 2",
            image: "admin2@example.com",
        },
        {
            id: 3,
            description: "Admin 3",
            image: "admin3@example.com",
        },
    ]);

    const [open, setOpen] = useState(false);
    const [editingAbout, setEditingAbout] = useState(null);
    const [newAboutDescription, setNewAboutDescription] = useState("");
    const [newAboutImage, setNewAboutImage] = useState("");
    const [filter, setFilter] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const filteredAbouts = abouts
        ? abouts.filter((about) =>
              `${about.description} ${about.image}`
                  .toLowerCase()
                  .includes(filter.toLowerCase())
          )
        : [];

    const showModal = () => {
        setOpen(true);
    };
    function getObjectUrl(file) {
        return URL.createObjectURL(file);
    }

    const handleOk = () => {
        if (editingAbout) {
            // Editing an existing about
            const updatedAbouts = abouts.map((about) =>
                about.id === editingAbout.id
                    ? {
                          ...about,
                          description: editingAbout.description,
                          image: newAboutImage
                              ? getObjectUrl(newAboutImage)
                              : editingAbout.image,
                      }
                    : about
            );
            setEditingAbout(null);
            setNewAboutDescription("");
            setNewAboutImage("");
            updateAbouts(updatedAbouts);
            setPreviewImage("");
        } else {
            // Adding a new about
            const newAbout = {
                id: abouts.length + 1,
                description: newAboutDescription,
                image: newAboutImage ? getObjectUrl(newAboutImage) : "",
            };
            updateAbouts([...abouts, newAbout]);
            setNewAboutDescription("");
            setNewAboutImage("");
        }
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
        setEditingAbout(null);
        setNewAboutDescription("");
        setNewAboutImage("");
        setPreviewImage("");
    };

    const handleEditAbout = (about) => {
        setEditingAbout(about);
        setNewAboutDescription("");
        setNewAboutImage("");
        showModal();
    };

    const handleDeleteAbout = (id) => {
        const updatedAbouts = abouts.filter((about) => about.id !== id);
        updateAbouts(updatedAbouts);
    };

    const updateAbouts = (updatedAbouts) => {
        setAbouts(updatedAbouts);
    };

    return (
        <>
            <div className="dash-main">
                <h2>AboutUs List</h2>
                <div className="add-button">
                    <Button type="primary" onClick={showModal}>
                        Add About
                    </Button>
                    <Modal
                        title={
                            editingAbout
                                ? `Editing About ${
                                      editingAbout.id || "New About"
                                  }`
                                : "Add About"
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
                            <label>Description:</label>
                            <input
                                type="text"
                                value={
                                    editingAbout
                                        ? editingAbout.description
                                        : newAboutDescription
                                }
                                onChange={(e) =>
                                    editingAbout
                                        ? setEditingAbout({
                                              ...editingAbout,
                                              description: e.target.value,
                                          })
                                        : setNewAboutDescription(e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label>Image:</label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files.length > 0) {
                                        setNewAboutImage(e.target.files[0]);
                                        setPreviewImage(
                                            URL.createObjectURL(
                                                e.target.files[0]
                                            )
                                        );
                                    }
                                }}
                            />
                            {previewImage && (
                                <img
                                    src={previewImage}
                                    alt="about image preview"
                                    width="200"
                                />
                            )}
                        </div>
                    </Modal>
                    <input
                        type="text"
                        placeholder="Search by description or image"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <div className="table-fixing">
                    <table>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAbouts.map((abouts) => (
                                <tr key={abouts.id}>
                                    <td>
                                        {editingAbout?.id === abouts.id ? (
                                            <input
                                                type="text"
                                                value={editingAbout.description}
                                                onChange={(e) =>
                                                    setEditingAbout({
                                                        ...editingAbout,
                                                        description:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            abouts.description
                                        )}
                                        {/* {editingAbout?.id !== abouts.id &&
                                            abouts.adminName !== "" && (
                                                <span className="admin-name">
                                                    (Added by {abouts.adminName}
                                                    )
                                                </span>
                                            )} */}
                                    </td>
                                    <td>
                                        {editingAbout?.id === abouts.id ? (
                                            <input
                                                type="text"
                                                value={editingAbout.image}
                                                onChange={(e) =>
                                                    setEditingAbout({
                                                        ...editingAbout,
                                                        image: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            <img
                                                src={abouts.image}
                                                alt="about image"
                                                style={{
                                                    width: "100px",
                                                    height: "100px",
                                                }}
                                            />
                                        )}
                                    </td>

                                    <td>
                                        {editingAbout?.id ===
                                        abouts.id ? null : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEditAbout(abouts)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteAbout(
                                                            abouts.id
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

export default AboutTable;
