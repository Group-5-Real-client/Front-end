import React, { useState } from "react";
import "./productTableDash.css";
import { Pagination } from "antd";

function ProductTable() {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", category: "Category 1", price: 10 },
        { id: 2, name: "Product 2", category: "Category 2", price: 20 },
        { id: 3, name: "Product 3", category: "Category 1", price: 15 },
    ]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [searchFilter, setSearchFilter] = useState("");
    const [priceFilter, setPriceFilter] = useState("");

    const handleAddProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: "New Product",
            category: "New Category",
            price: 0,
        };
        setProducts([...products, newProduct]);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
    };

    const handleSaveProduct = (editedProduct) => {
        setProducts(
            products.map((product) =>
                product.id === editedProduct.id ? editedProduct : product
            )
        );
        setEditingProduct(null);
        setSearchFilter("");
        setPriceFilter("");
    };

    const handleDeleteProduct = (productId) => {
        setProducts(products.filter((product) => product.id !== productId));
    };

    const filteredProducts = products.filter((product) => {
        if (
            searchFilter &&
            !(
                product.name
                    .toLowerCase()
                    .includes(searchFilter.toLowerCase()) ||
                product.category
                    .toLowerCase()
                    .includes(searchFilter.toLowerCase())
            )
        ) {
            return false;
        }

        if (priceFilter && product.price !== parseInt(priceFilter)) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="dash-main">
                <h2>Product List</h2>
                <div>
                    <button onClick={handleAddProduct}>Add Product</button>
                    <input
                        type="text"
                        placeholder="Search by name or category"
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Search by price"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    {editingProduct?.id === product.id ? (
                                        <input
                                            type="text"
                                            value={editingProduct.name}
                                            onChange={(e) =>
                                                setEditingProduct({
                                                    ...editingProduct,
                                                    name: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        product.name
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === product.id ? (
                                        <input
                                            type="text"
                                            value={editingProduct.category}
                                            onChange={(e) =>
                                                setEditingProduct({
                                                    ...editingProduct,
                                                    category: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        product.category
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === product.id ? (
                                        <input
                                            type="number"
                                            value={editingProduct.price}
                                            onChange={(e) =>
                                                setEditingProduct({
                                                    ...editingProduct,
                                                    price: e.target.value,
                                                })
                                            }
                                        />
                                    ) : (
                                        `$${product.price}`
                                    )}
                                </td>
                                <td>
                                    {editingProduct?.id === product.id ? (
                                        <button
                                            onClick={() =>
                                                handleSaveProduct(
                                                    editingProduct
                                                )
                                            }
                                        >
                                            Save
                                        </button>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() =>
                                                    handleEditProduct(product)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteProduct(
                                                        product.id
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
        </>
    );
}

export default ProductTable;
