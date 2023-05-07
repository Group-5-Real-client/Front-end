/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Button, Modal, Pagination } from "antd";
import Loader from "../loader/loader";

function AboutTable({ adminName }) {
    const [abouts, setAbouts] = useState([]);
    const [open, setOpen] = useState(false);
    const [editingAbout, setEditingAbout] = useState(null);
    const [newAboutDescription, setNewAboutDescription] = useState("");
    const [newAboutImage, setNewAboutImage] = useState("");
    const [filter, setFilter] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showFullDescriptions, setShowFullDescriptions] = useState(false);

    const fetchAbout = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/aboutUs")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setAbouts(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchAbout();
    }, []);

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
                about?._id === editingAbout?._id
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
        const updatedAbouts = abouts.filter((about) => about?._id !== id);
        updateAbouts(updatedAbouts);
    };

    const updateAbouts = (updatedAbouts) => {
        setAbouts(updatedAbouts);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
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
                                          editingAbout?._id || "New About"
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
                                            : setNewAboutDescription(
                                                  e.target.value
                                              )
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
                                {filteredAbouts.map((about) => (
                                    <tr key={about?._id}>
                                        <td>
                                            {showFullDescriptions ||
                                            about.description.length < 100
                                                ? about.description
                                                : `${about.description.substring(
                                                      0,
                                                      100
                                                  )}...`}
                                            {about.description.length > 100 && (
                                                <Button
                                                    onClick={() =>
                                                        setShowFullDescriptions(
                                                            true
                                                        )
                                                    }
                                                >
                                                    Read More
                                                </Button>
                                            )}
                                        </td>
                                        <td>
                                            <img
                                                src={about.image}
                                                alt="about image"
                                                width="100"
                                                height="100"
                                            />
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleEditAbout(about)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <Button
                                                onClick={() =>
                                                    handleDeleteAbout(about._id)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Pagination defaultCurrent={1} total={abouts.length} />
                </div>
            )}
        </>
    );
}

export default AboutTable;
