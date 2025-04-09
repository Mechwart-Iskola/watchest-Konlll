import './productscard.css'



{/*Hozz létre egy típust ami alklmas a products.json adatainak tárolására */}

export type Product = {
  title: string
  price: number
  image: string
}

{/*Egészítsd ki a komponenst a megfelelő propsok használatával */}

const ProductsCard = (props: Product) => {
  return (
    <article className="products__card">
            <img src={props.image} alt="" className="products__img"/>

            <h3 className="products__title">{props.title}</h3>
            <span className="products__price">${props.price}</span>

            <button className="products__button">
                <i className='bx bx-shopping-bag'></i>
            </button>
        </article>
        )
}

export default ProductsCard