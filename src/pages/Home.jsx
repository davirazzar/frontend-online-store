import React from 'react';
import * as api from '../services/api';
import Category from '../components/Category';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchValue: '',
      arrProdutos: [],
    };
  }

  componentDidMount() {
    this.categories();
  }

  pegaValorDaPesquisa = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  pesquisar = async () => {
    const { searchValue, categories } = this.state;
    const arrProdutos = await api.getProductsFromCategoryAndQuery(
      categories, searchValue,
    );
    this.setState({ arrProdutos: arrProdutos.results });
    console.log(arrProdutos);
  }

  categories = async () => {
    await api.getCategories()
      .then((cat) => this.setState({ categories: cat }));
  }

  handleChange = async ({ target }) => {
    const { results } = await api.getProductsFromCategoryAndQuery(target.id);
    this.setState({ arrProdutos: results });
    console.log(results);
  }

  render() {
    const {
      categories,
      searchValue,
      arrProdutos } = this.state;
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchBar
          searchValue={ searchValue }
          arrProdutos={ arrProdutos }
          pegaValorDaPesquisa={ this.pegaValorDaPesquisa }
          pesquisar={ this.pesquisar }
        />
        <section>
          { categories.map((obj) => (
            <Category
              key={ obj.id }
              category={ obj }
              searchFunction={ this.handleChange }
            />)) }
        </section>
      </div>
    );
  }
}

export default Home;
