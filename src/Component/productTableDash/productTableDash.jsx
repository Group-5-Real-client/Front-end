/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./productTableDash.css";
import { Pagination, Modal, Button } from "antd";
import Loader from "../loader/loader.jsx";

function ProductTable() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Product 1",
            description: "example2",
            image: "example",
            category: "Category 1",
            price: 10,
            adminName: "",
        },
        {
            id: 2,
            description: "example2",
            name: "Product 2",
            image: "example",
            category: "Category 2",
            price: 20,
            adminName: "",
        },
        {
            id: 3,
            description: "example2",
            name: "Product 3",
            image: "example",
            category: "Category 1",
            price: 15,
            adminName: "",
        },
    ]);

    const [open, setOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [newProductName, setNewProductName] = useState("");
    const [newProductDescription, setNewProductDescription] = useState("");
    const [newProductImage, setNewProductImage] = useState("");
    const [newProductCategory, setNewProductCategory] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [filter, setFilter] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(false);
    // const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/Product")
            .then((response) => response.json())
            .then((response) => {
                setProducts(response);
                setLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const filteredProducts = products
        ? products.filter((product) =>
              `${product.name} ${product.image}${product.category}${product.price}${product.description}`
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
        if (editingProduct) {
            // Editing an existing product
            const updatedProducts = products.map((product) =>
                product.id === editingProduct.id
                    ? {
                          ...product,
                          name: editingProduct.name,
                          category: editingProduct.category,
                          price: editingProduct.price,
                          description: editingProduct.description,
                          image: newProductImage
                              ? getObjectUrl(newProductImage)
                              : editingProduct.image,
                      }
                    : product
            );
            setEditingProduct(null);
            setNewProductName("");
            setNewProductImage("");
            setNewProductCategory("");
            setNewProductPrice("");
            setNewProductDescription("");
            updateProducts(updatedProducts);
            setPreviewImage("");
        } else {
            // Adding a new product
            const newProduct = {
                id: products.length + 1,
                name: newProductName,
                image: newProductImage ? getObjectUrl(newProductImage) : "",
                category: newProductCategory,
                description: newProductDescription,
                price: newProductPrice,
            };
            updateProducts([...products, newProduct]);
            setNewProductName("");
            setNewProductCategory("");
            setNewProductPrice("");
            setNewProductImage("");
            setNewProductDescription("");
        }
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
        setEditingProduct(null);
        setNewProductName("");
        setNewProductImage("");
        setNewProductCategory("");
        setNewProductPrice("");
        setNewProductDescription("");
        setPreviewImage("");
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setNewProductName("");
        setNewProductPrice("");
        setNewProductImage("");
        setNewProductDescription("");
        showModal();
    };

    const handleDeleteProduct = (id) => {
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
    };

    const updateProducts = (updatedProducts) => {
        setProducts(updatedProducts);
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
                            Add Product
                        </Button>
                        <Modal
                            title={
                                editingProduct
                                    ? `Editing About ${
                                          editingProduct.id || "New About"
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
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={
                                        editingProduct
                                            ? editingProduct.name
                                            : newProductName
                                    }
                                    onChange={(e) =>
                                        editingProduct
                                            ? setEditingProduct({
                                                  ...editingProduct,
                                                  name: e.target.value,
                                              })
                                            : setNewProductName(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label>Description:</label>
                                <input
                                    type="text"
                                    value={
                                        editingProduct
                                            ? editingProduct.description
                                            : newProductName
                                    }
                                    onChange={(e) =>
                                        editingProduct
                                            ? setEditingProduct({
                                                  ...editingProduct,
                                                  description: e.target.value,
                                              })
                                            : setNewProductDescription(
                                                  e.target.value
                                              )
                                    }
                                />
                            </div>
                            <div>
                                <label>Price:</label>
                                <input
                                    type="text"
                                    value={
                                        editingProduct
                                            ? editingProduct.price
                                            : newProductPrice
                                    }
                                    onChange={(e) =>
                                        editingProduct
                                            ? setEditingProduct({
                                                  ...editingProduct,
                                                  price: e.target.value,
                                              })
                                            : setNewProductPrice(e.target.value)
                                    }
                                />
                            </div>
                            <div>
                                <label>Category:</label>
                                <input
                                    type="text"
                                    value={
                                        editingProduct
                                            ? editingProduct.category
                                            : newProductCategory
                                    }
                                    onChange={(e) =>
                                        editingProduct
                                            ? setEditingProduct({
                                                  ...editingProduct,
                                                  category: e.target.value,
                                              })
                                            : setNewProductCategory(
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
                                            setNewProductImage(
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
                            placeholder="Search by name, category, or price"
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
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map((products) => (
                                    <tr key={products.id}>
                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? (
                                                <input
                                                    type="text"
                                                    value={editingProduct.name}
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                products.name
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct.description
                                                    }
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            description:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                products.description
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? (
                                                <input
                                                    type="text"
                                                    value={editingProduct.image}
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            image: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                <img
                                                    src={products.image}
                                                    alt="about image"
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                    }}
                                                />
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct.category
                                                    }
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            category:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                products.category
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? (
                                                <input
                                                    type="text"
                                                    value={editingProduct.price}
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            price: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                `$${products.price}`
                                            )}
                                        </td>

                                        <td>
                                            {editingProduct?.id ===
                                            products.id ? null : (
                                                <>
                                                    <button
                                                        onClick={() =>
                                                            handleEditProduct(
                                                                products
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteProduct(
                                                                products.id
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
                            total={totalProducts}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductTable;
