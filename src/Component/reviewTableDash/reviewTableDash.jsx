import React, { useState } from "react";
import { Pagination, Button, Modal } from "antd";

function ReviewTable() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            rating: "3",
            comment: "Avergae",
            product: "coffee",
        },
        {
            id: 2,
            rating: "3.5",
            comment: "Not bad",
            product: "Sugar",
        },
        {
            id: 3,
            rating: "5",
            comment: "Great",
            product: "Salt",
        },
    ]);

    const [editingReview, setEditingReview] = useState(null);
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState("Add");

    const handleAddReview = () => {
        setModalMode("Add");
        setShowModal(true);
    };

    const handleEditReview = (review) => {
        if (review) {
            setEditingReview(review);
            setModalMode("Edit");
            setShowModal(true);
        } else {
            setEditingReview(null);
            setShowModal(false);
        }
    };

    const handleSaveReview = (editedProduct) => {
        if (modalMode === "Edit") {
            // editing an existing review
            setReviews(
                reviews.map((review) =>
                    review.id === editedProduct.id ? editedProduct : review
                )
            );
        } else {
            // adding a new review
            const newReview = {
                id: reviews.length + 1,
                rating: editedProduct.rating,
                comment: editedProduct.comment,
                product: editedProduct.product,
            };
            setReviews([...reviews, newReview]);
        }
        setEditingReview(null);
        setFilter("");
        setShowModal(false);
    };

    const handleDeleteReview = (reviewId) => {
        setReviews(reviews.filter((review) => review.id !== reviewId));
    };

    const filteredReviews = reviews.filter((review) => {
        if (
            filter &&
            !(
                review.rating.toLowerCase().includes(filter.toLowerCase()) ||
                review.comment.toLowerCase().includes(filter.toLowerCase()) ||
                review.product
                    .toString()
                    .toLowerCase()
                    .includes(filter.toLowerCase())
            )
        ) {
            return false;
        }

        return true;
    });

    return (
        <>
            <div className="dash-main">
                <h2>Reviews List</h2>
                <div className="add-button">
                    <Button type="primary" onClick={handleAddReview}>
                        Add Review
                    </Button>
                    <Modal
                        title={
                            modalMode === "Add" ? "Add Review" : "Edit Review"
                        }
                        open={showModal}
                        onCancel={() => handleEditReview(null)}
                        footer={[
                            <Button
                                key="cancel"
                                onClick={() => handleEditReview(null)}
                            >
                                Cancel
                            </Button>,
                            <Button
                                key="save"
                                type="primary"
                                onClick={() => handleSaveReview(editingReview)}
                            >
                                Save
                            </Button>,
                        ]}
                    >
                        <div>
                            <label>Rating:</label>
                            <input
                                type="rating"
                                value={editingReview?.rating || ""}
                                onChange={(e) =>
                                    setEditingReview({
                                        ...editingReview,
                                        rating: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Comment:</label>
                            <input
                                type="text"
                                value={editingReview?.comment || ""}
                                onChange={(e) =>
                                    setEditingReview({
                                        ...editingReview,
                                        comment: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label>Product:</label>
                            <input
                                type="tel"
                                value={editingReview?.product || ""}
                                onChange={(e) =>
                                    setEditingReview({
                                        ...editingReview,
                                        product: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </Modal>
                    <input
                        type="text"
                        placeholder="Search by rating, comment or product"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                <div className="table-fixing">
                    <table>
                        <thead>
                            <tr>
                                <th>Rating</th>
                                <th>Comment</th>
                                <th>Product</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredReviews.map((review) => (
                                <tr key={review.id}>
                                    <td>
                                        {editingReview?.id === review.id ? (
                                            <input
                                                type="text"
                                                value={editingReview.rating}
                                                onChange={(e) =>
                                                    setEditingReview({
                                                        ...editingReview,
                                                        rating: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            review.rating
                                        )}
                                    </td>

                                    <td>
                                        {editingReview?.id === review.id ? (
                                            <input
                                                type="text"
                                                value={editingReview.comment}
                                                onChange={(e) =>
                                                    setEditingReview({
                                                        ...editingReview,
                                                        comment: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            review.comment
                                        )}
                                    </td>
                                    <td>
                                        {editingReview?.id === review.id ? (
                                            <input
                                                type="number"
                                                value={editingReview.product}
                                                onChange={(e) =>
                                                    setEditingReview({
                                                        ...editingReview,
                                                        product: e.target.value,
                                                    })
                                                }
                                            />
                                        ) : (
                                            review.product
                                        )}
                                    </td>
                                    <td>
                                        {editingReview?.id ===
                                        review.id ? null : (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        handleEditReview(review)
                                                    }
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handleDeleteReview(
                                                            review.id
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

export default ReviewTable;
