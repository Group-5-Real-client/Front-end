/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Pagination, Modal, Button } from "antd";
import Loader from "../loader/loader.jsx";

function CategoryTable() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Product 1",
            description: "Category 1",
            image: "example",
            adminName: "",
        },
        {
            id: 2,
            name: "Product 2",
            description: "Category 1",
            image: "example",
            adminName: "",
        },
        {
            id: 3,
            name: "Product 3",
            description: "Category 1",
            image: "example",
            adminName: "",
        },
    ]);

    const [open, setOpen] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [categoryName, setCategoryName] = useState("");
    const [newCategoryDescription, setNewCategoryDescription] = useState("");
    const [newCategoryImage, setNewCategoryImage] = useState("");
    const [filter, setFilter] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalCategories, setTotalCategories] = useState(0);

    const filteredCategories = categories
        ? categories.filter((category) =>
              `${category.name} `.toLowerCase().includes(filter.toLowerCase())
          )
        : [];

    const showModal = () => {
        setOpen(true);
    };
    function getObjectUrl(file) {
        return URL.createObjectURL(file);
    }

    const handleOk = () => {
        if (editingCategory) {
            // Editing an existing product
            const updatedCategories = categories.map((category) =>
                category.id === editingCategory.id
                    ? {
                          ...category,
                          name: editingCategory.name,
                          description: editingCategory.description,
                          image: newCategoryImage
                              ? getObjectUrl(newCategoryImage)
                              : editingCategory.image,
                      }
                    : category
            );
            setEditingCategory(null);
            setCategoryName("");
            setNewCategoryImage("");
            setNewCategoryDescription("");
            updateCategories(updatedCategories);
            setPreviewImage("");
        } else {
            // Adding a new product
            const newCategory = {
                id: categories.length + 1,
                name: categoryName,
                image: newCategoryImage ? getObjectUrl(newCategoryImage) : "",
                description: newCategoryDescription,
            };
            updateCategories([...categories, newCategory]);
            setCategoryName("");
            setNewCategoryImage("");
            setNewCategoryDescription("");
        }
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
        setEditingCategory(null);
        setCategoryName("");
        setNewCategoryImage("");
        setNewCategoryDescription("");
        setPreviewImage("");
    };

    const handleEditCategory = (category) => {
        setEditingCategory(category);
        setCategoryName("");
        setNewCategoryImage("");
        setNewCategoryDescription("");
        showModal();
    };

    const handleDeleteCategory = (id) => {
        const updatedCategories = categories.filter(
            (category) => category.id !== id
        );
        setCategories(updatedCategories);
    };

    const updateCategories = (updatedCategories) => {
        setCategories(updatedCategories);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="dash-main">
                    <h2>Categories List</h2>
                    <div className="add-button">
                        <Button type="primary" onClick={showModal}>
                            Add Category
                        </Button>
                        <Modal
                            title={
                                editingCategory
                                    ? `Editing Category ${
                                          editingCategory.id || "New Category"
                                      }`
                                    : "Add Category"
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
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={
                                        editingCategory
                                            ? editingCategory.name
                                            : categoryName
                                    }
                                    onChange={(e) =>
                                        editingCategory
                                            ? setEditingCategory({
                                                  ...editingCategory,
                                                  name: e.target.value,
                                              })
                                            : setCategoryName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label>Description:</label>
                                <input
                                    type="text"
                                    value={
                                        editingCategory
                                            ? editingCategory.description
                                            : newCategoryDescription
                                    }
                                    onChange={(e) =>
                                        editingCategory
                                            ? setEditingCategory({
                                                  ...editingCategory,
                                                  description: e.target.value,
                                              })
                                            : setNewCategoryDescription(
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
                                            setNewCategoryImage(
                                                e.target.files[0]
                                            );
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
                            placeholder="Search by name"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                    </div>
                    <div className="table-fixing">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCategories.map((categories) => (
                                    <tr key={categories.id}>
                                        <td>
                                            {editingCategory?.id ===
                                            categories.id ? (
                                                <input
                                                    type="text"
                                                    value={editingCategory.name}
                                                    onChange={(e) =>
                                                        setEditingCategory({
                                                            ...editingCategory,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                categories.name
                                            )}
                                        </td>
                                        <td>
                                            {editingCategory?.id ===
                                            categories.id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingCategory.description
                                                    }
                                                    onChange={(e) =>
                                                        setEditingCategory({
                                                            ...editingCategory,
                                                            description:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                categories.description
                                            )}
                                        </td>
                                        <td>
                                            {editingCategory?.id ===
                                            categories.id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingCategory.image
                                                    }
                                                    onChange={(e) =>
                                                        setEditingCategory({
                                                            ...editingCategory,
                                                            image: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                <img
                                                    src={categories.image}
                                                    alt="about image"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {editingCategory?.id ===
                                            categories.id ? null : (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleEditCategory(
                                                                categories
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteCategory(
                                                                categories.id
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
                        <Pagination
                            onChange={(page) => setCurrentPage(page)}
                            current={currentPage}
                            total={totalCategories}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default CategoryTable;
