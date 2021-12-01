import React from 'react';

class Home extends React.Component {
    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                        <div className="card-header">
                            <strong>Filter Products</strong>
                        </div>
                        <div className="card-body">
                            <label htmlFor="searchProductName">Product Name</label>
                            <input
                            onChange={this.inputHandler}
                            name="searchProductName"
                            type="text"
                            className="form-control mb-3"
                            />
                            <label htmlFor="searchCategory">Product Category</label>
                            <select
                            onChange={this.inputHandler}
                            name="searchCategory"
                            className="form-control"
                            >
                            <option value="">All Item</option>
                            <option value="shirts">Shirts</option>
                            <option value="pants">Pants</option>
                            <option value="shoes">Shoes</option>
                            </select>
                            <button
                            onClick={this.searchBtnHandler}
                            className="btn btn-primary mt-3"
                            >
                            Search
                            </button>
                        </div>
                        </div>
                        <div className="card mt-4">
                        <div className="card-header">
                            <strong>Sort Product</strong>
                        </div>
                        <div className="card-body">
                            <label htmlFor="sortBy">Sort by</label>
                            <select
                            onChange={this.inputHandler}
                            name="sortBy"
                            className="form-control"
                            >
                            <option value="">Default</option>
                            <option value="lowPrice">Lowest Price</option>
                            <option value="highPrice">Highest Price</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                            </select>
                        </div>
                        </div>
                        <div className="mt-3">
                        </div>
                    </div>
                    <div className="col-9">
                        <h1>Produk Pilihan</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;