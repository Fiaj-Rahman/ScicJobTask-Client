
import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Authentication/FirebaseProvider';

const DisplayAllProduct = () => {
    const { user } = useContext(AuthContext); // Access the user context to check login status
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('https://job-task-server-beryl.vercel.app/AllProducts', {
                params: {
                    page: currentPage,
                    limit: user ? 10 : 6 // Limit to 6 products if user is not logged in
                }
            });
            setProducts(data.data);
            setTotalPages(data.totalPages);
        };
        getData();
    }, [currentPage, user]);

    const filteredProducts = products.filter(product => {
        const matchesSearchTerm = product.ProductName.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesBrand = brand ? product.BrandName === brand : true;
        const matchesCategory = category ? product.Category === category : true;
        const matchesPrice = (!minPrice || product.Price >= minPrice) && (!maxPrice || product.Price <= maxPrice);

        return matchesSearchTerm && matchesBrand && matchesCategory && matchesPrice;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'price-low-high') {
            return a.Price - b.Price;
        } else if (sortOption === 'price-high-low') {
            return b.Price - a.Price;
        } else if (sortOption === 'date-newest') {
            return new Date(b.CreationDate) - new Date(a.CreationDate);
        }
        return 0;
    });

    const uniqueBrands = [...new Set(products.map(product => product.BrandName))];
    const uniqueCategories = [...new Set(products.map(product => product.Category))];

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div style={mainContainerStyle}>
            {user ? (
                <>
                    <div style={searchBarContainerStyle}>
                        <input
                            type="text"
                            placeholder="Search by product name"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            style={searchBarStyle}
                        />
                    </div>

                    <div style={filterContainerStyle}>
                        <select value={brand} onChange={e => setBrand(e.target.value)} style={selectStyle}>
                            <option value="">All Brands</option>
                            {uniqueBrands.map(brand => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>

                        <select value={category} onChange={e => setCategory(e.target.value)} style={selectStyle}>
                            <option value="">All Categories</option>
                            {uniqueCategories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>

                        <input
                            type="number"
                            placeholder="Min Price"
                            value={minPrice}
                            onChange={e => setMinPrice(e.target.value)}
                            style={priceInputStyle}
                        />

                        <input
                            type="number"
                            placeholder="Max Price"
                            value={maxPrice}
                            onChange={e => setMaxPrice(e.target.value)}
                            style={priceInputStyle}
                        />

                        <select value={sortOption} onChange={e => setSortOption(e.target.value)} style={selectStyle}>
                            <option value="">Sort by</option>
                            <option value="price-low-high">Price: Low to High</option>
                            <option value="price-high-low">Price: High to Low</option>
                            <option value="date-newest">Date Added: Newest First</option>
                        </select>
                    </div>

                    <div style={containerStyle}>
                        {sortedProducts.map(product => (
                            <div key={product._id} style={cardStyle}>
                                <img src={product.ProductImage.trim()} alt={product.ProductName} style={imageStyle} />
                                <h3 className='mt-5'><strong>{product.ProductName}</strong></h3>
                                <p>{product.Description}</p>
                                <p><strong>Price:</strong> ${product.Price}</p>
                                <p><strong>Category:</strong> {product.Category}</p>
                                <p><strong>Brand:</strong> {product.BrandName}</p>
                                <p><strong>Ratings:</strong> {product.Ratings} ⭐</p>
                                <p><strong>Added on:</strong> {new Date(product.CreationDate).toLocaleDateString()}</p>
                            </div>
                        ))}
                    </div>

                    <div style={paginationStyle}>
                        <button className='bg-blue-600  text-white' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                        <span> {currentPage} of {totalPages}</span>
                        <button className='bg-blue-600 text-white ' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </div>
                </>
            ) : (
                <div style={noAccessContainerStyle}>
                    <p className='text-red-600 text-2xl'><strong>Please log in to access all functionalities.</strong></p>
                    <div style={containerStyle}>
                        {products.slice(0, 6).map(product => (
                            <div key={product._id} style={cardStyle}>
                                <img src={product.ProductImage.trim()} alt={product.ProductName} style={imageStyle} />
                                <h3 className='mt-5'><strong>{product.ProductName}</strong></h3>
                                <p>{product.Description}</p>
                                <p><strong>Price:</strong> ${product.Price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const mainContainerStyle = {
    margin: '0 auto',
    maxWidth: '1200px',
    padding: '20px',
};

const searchBarContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
};

const searchBarStyle = {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
};

const filterContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
    alignItems: 'center',
};

const selectStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    maxWidth: '200px',
};

const priceInputStyle = {
    padding: '10px',
    width: '100%',
    maxWidth: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
};

const cardStyle = {
    width: '300px',
    padding: '20px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    backgroundColor: '#3f3fdf',
    color: 'white',
    margin: '10px',
    boxSizing: 'border-box',
};

const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
};

const paginationStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
};

const noAccessContainerStyle = {
    textAlign: 'center',
    padding: '20px',
};

export default DisplayAllProduct;
