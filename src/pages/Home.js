import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
    return (
        <div className="bg-E4E6E6">
            <Header />
            <main className='max-w-screen-2xl mx-auto'>
                <Banner />
                {/* banner */}

                {/* prods */}
                <ProductFeed products={products} />
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res) => res.json());

    return {
        props: {
            products,
        }
    }
}
