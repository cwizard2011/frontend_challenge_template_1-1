/**
  This component is the landing page component, the component is meant to perform the following function
  - Display all products
  - Display filtered products by departments
  - Display filtered products by categories
  - Display searched product
  - Add pagination functionality
  NB: You can style this page to achieve your goal, but do not change or remove any ID, classNames or HTML Input names
*/
import React from 'react';
import { withToastManager } from 'react-toast-notifications';
import Cards from '../Cards';
import Navbar from '../Navbar';
import Spinner from '../Spinner';
import {
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
    try {
      this.fetchProducts(page);
    } catch (error) {
      toastManager.add('Error occurred', { appearance: 'error', autoDismiss: true })
    }
  }

  fetchProducts = async (page) => {
    const response = await fetchProducts(page);
    this.setState({ products: response.data.rows, isLoading: false, pageCount: Math.ceil(response.data.count / 12) })
  }

  render() {
    const { history } = this.props;
    const {
      products,
      isLoading,
    } = this.state;

    return (
      <div>
        <Navbar history={history}/>
        { isLoading && <Spinner /> }
        {!isLoading && <Filters  />}
        {!isLoading && <div className="products-card-wrap" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            products.map((product) => (
              <Cards key={product.product_id} {...product} history={history} />
            ))
          }
        </div>}
        {!isLoading && <Paginate
          onPageChange={() => console.log('Page Changed')}
          previousLabel="<"
          nextLabel=">"
          breakLabel={"..."}
          pageCount="100"
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
