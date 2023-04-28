import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DummyItems=[{id:'p1',title:'Book1',price:20,description:'First_BOOK'},{id:'p2',title:'Book2',price:40,description:'Second_BOOK'}]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {DummyItems.map((item)=>{
        return(
        <ul><ProductItem
        id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    </ul>
      )})}
        
    </section>
  );
};

export default Products;
