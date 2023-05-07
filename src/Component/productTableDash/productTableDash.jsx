/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import "./productTableDash.css";
import { Pagination, Modal, Button } from "antd";
import Loader from "../loader/loader.jsx";
import axios from "axios";
import Swal from "sweetalert2";

function ProductTable() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
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

    const fetchCategories = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/category")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setCategories(response.response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    const fetchProducts = () => {
        setLoading(true);
        fetch("http://localhost:5000/api/product")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                setProducts(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
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

    const handleOk = (_id) => {
        if (editingProduct) {
            // Editing an existing product
            const updatedProduct = {
                name: newProductName ? newProductName : editingProduct.name,
                Category: newProductCategory
                    ? newProductCategory
                    : editingProduct.category,
                price: newProductPrice ? newProductPrice : editingProduct.price,
                description: newProductDescription
                    ? newProductDescription
                    : editingProduct.description,
                image: newProductImage ? newProductImage : editingProduct.image,
            };
            axios
                .put(
                    `http://localhost:5000/api/product/edit/${editingProduct._id}`,
                    updatedProduct,
                    {
                        headers: { "Content-Type": "multipart/form-data" },
                    }
                )
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    fetchProducts();
                    setEditingProduct(null);
                    setNewProductName("");
                    setNewProductImage("");
                    setNewProductCategory("");
                    setNewProductPrice("");
                    setNewProductDescription("");
                    setPreviewImage("");
                });
        } else {
            const newProduct = {
                name: newProductName,
                image: newProductImage ? newProductImage : "",
                Category: newProductCategory,
                description: newProductDescription,
                price: newProductPrice,
            };
            axios
                .post("http://localhost:5000/api/product/", newProduct, {
                    headers: { "Content-Type": "multipart/form-data" },
                })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    fetchProducts();
                    setNewProductName("");
                    setNewProductCategory("");
                    setNewProductPrice("");
                    setNewProductImage("");
                    setNewProductDescription("");
                });
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
        setNewProductImage(editingProduct);
        setNewProductDescription("");
        showModal();
    };

    const handleDeleteProduct = async (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios
                    .delete(`http://localhost:5000/api/product/delete/${_id}`)
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                        const updatedProducts = products.filter(
                            (product) => product?._id !== _id
                        );
                        setProducts(updatedProducts);
                    });
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
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
                    <h2>Products List</h2>
                    <div className="add-button">
                        <Button type="primary" onClick={showModal}>
                            Add Product
                        </Button>
                        <Modal
                            title={
                                editingProduct
                                    ? `Editing Product ${
                                          editingProduct.id || "New Product"
                                      }`
                                    : "Add Product"
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
                                            : newProductDescription
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
                                <select
                                    className="select-option"
                                    name=""
                                    id=""
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        editingProduct
                                            ? setEditingProduct({
                                                  ...editingProduct,
                                                  category: e.target.value,
                                              })
                                            : setNewProductCategory(
                                                  e.target.value
                                              );
                                    }}
                                >
                                    {categories?.map((category) => (
                                        <option
                                            type="text"
                                            key={category?._id}
                                            value={category?._id}
                                        >
                                            {category?.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Image:</label>
                                <input
                                    type="file"
                                    onChange={(e) => {
                                        if (e.target.files.length > 0) {
                                            console.log(e.target.files[0]);
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
                                        width="100px"
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
                                    <th>Admin</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map((products) => (
                                    <tr key={products.id}>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
                                                <input
                                                    type="text"
                                                    value={editingProduct?.name}
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            name: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                products?.name
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct?.description
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
                                                products?.description
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
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
                                                <>
                                                    <img
                                                        src={`http://localhost:5000/${products?.image}`}
                                                        alt="product image"
                                                        style={{
                                                            width: "100px",
                                                            height: "100px",
                                                        }}
                                                    />
                                                </>
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct?.category
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
                                                products?.category.name
                                            )}
                                        </td>

                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct?.price
                                                    }
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            price: e.target
                                                                .value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                `$${products?.price}`
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? (
                                                <input
                                                    type="text"
                                                    value={
                                                        editingProduct?.adminUsername
                                                    }
                                                    onChange={(e) =>
                                                        setEditingProduct({
                                                            ...editingProduct,
                                                            adminUsername:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                products?.adminUsername
                                            )}
                                        </td>
                                        <td>
                                            {editingProduct?.id ===
                                            products._id ? null : (
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
                                                    <Button
                                                        onClick={() =>
                                                            handleDeleteProduct(
                                                                products?._id
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
