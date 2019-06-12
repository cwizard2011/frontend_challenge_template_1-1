import React from 'react';
import { withToastManager } from 'react-toast-notifications';
import { Emojione } from 'react-emoji-render';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Spinner from '../Spinner';
import {
  getCartItems,
  getCartPrice,
  fetchProducts,
} from '../utils/apiCalls';
import Filters from '../Filters';
import Paginate from 'react-paginate';
import './style.scss';

export class HomePage extends React.Component {
  state = {
    products: [],
    isLoading: false,
    productIncart: [],
    total_price: '0.00',
    page: 1,
    pageCount: 1,
    searchTerm: '',
    searchedProducts: [],
    hasSearched: false,
    category: 0,
    department: '',
    department_id: '',
    category_id: '',
  }

  async componentDidMount() {
    const { page } = this.state;
    const { toastManager } = this.props;
    this.setState({ isLoading: true });
    const getCartID = await localStorage.getItem('cartId');
    try {
      if (!getCartID) {
        this.setState({ productIncart: [] })
      } else {
        const cartItem = await getCartItems(getCartID);
        const totalPrice = await getCartPrice(getCartID);
        this.setState({ productIncart: cartItem.data, total_price: totalPrice.data.total_amount });
      }
      this.fetchProducts(page);
    } catch (error) {
      toastManager.add('Error occurred', { appearance: 'error', autoDismiss: true })
    }
  }

  fetchProducts = async (page) => {
    const response = await fetchProducts(page);
    this.setState({ products: response.data.rows, isLoading: false, pageCount: Math.ceil(response.data.count / 12) })
  }

  handlePageClick = data => {
    
  }

  searchProducts = async (searchTerm) => {
    
  }

  setCategory = async (category_id) => {
    
  }

  setDepartment = async (value, department_id) => {
    
  }

  setDepartmentFilter = (department_id) => {
    
  }

  fetchCategories = async(category_id, page) => {
    
  }

  fetchDepartments = async(department_id, page) => {
    
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  render() {
    const { history } = this.props;
    const {
      products,
      isLoading,
      productIncart,
      total_price,
      searchTerm,
      searchedProducts,
      hasSearched,
      department,
    } = this.state;

    return (
      <div>
        <Navbar
          productIncart={productIncart}
          cartPrice={total_price}
          searchProducts={this.searchProducts}
          searchTerm={searchTerm}
          history={history}
          department={department}
          setDepartment={this.setDepartment}
          />
        { isLoading && <Spinner /> }
        {!isLoading && <Filters hasSearched={hasSearched} searchedProducts={searchedProducts} filterCategory={this.setCategory} setDepartmentFilter={this.setDepartmentFilter} />}
        {!isLoading && <div className="products-card-wrap" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            hasSearched && searchedProducts.length > 0 ?
            searchedProducts.map((product, index) => (
              <Cards
                key={index + 100}
                {...product}
                history={history}
              />
            )):
            hasSearched && searchedProducts.length === 0 ? (
              <div style={{ marginTop: 100 }} className="no-product-found">
                <p>No products found</p>
                <Emojione size={55} text=":disappointed_relieved:" />
              </div>
              )
            : products.map((product) => (
              <Cards key={product.product_id} {...product} history={history} />
            ))
          }
        </div>}
        {!isLoading && (searchedProducts.length > 0 || products.length > 0) && <Paginate
          onPageChange={this.handlePageClick}
          previousLabel="<"
          nextLabel=">"
          breakLabel={"..."}
          pageCount={this.state.pageCount}
          containerClassName="pagination-class justify-content-center"
          pageClassName="page-item page-numbers-style"
          pageLinkClassName="page-link"
          nextClassName="page-item next-button"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          disabledClassName="disabled"
          activeClassName="active"
        />}
      </div>
    )
  }
}

const HomePageWithToast = withToastManager(HomePage);

export default HomePageWithToast;
